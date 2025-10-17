import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { ApiResponse } from '@/types/contact';

/**
 * Utility functions for API route handlers
 */

/**
 * Creates a standardized success response
 */
export function createSuccessResponse<T>(data?: T, status = 200): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status }
  );
}

/**
 * Creates a standardized error response
 */
export function createErrorResponse(
  error: string,
  status = 400
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status }
  );
}

/**
 * Creates a validation error response from Zod errors
 */
export function createValidationErrorResponse(
  zodError: ZodError
): NextResponse<ApiResponse> {
  const errors: Record<string, string[]> = {};
  
  zodError.issues.forEach((error) => {
    const path = error.path.join('.');
    if (!errors[path]) {
      errors[path] = [];
    }
    errors[path].push(error.message);
  });

  return NextResponse.json(
    {
      success: false,
      error: 'Validation failed',
      errors,
    },
    { status: 400 }
  );
}

/**
 * Rate limiting helper (in-memory, for production use a proper solution like Upstash)
 * Note: This implementation has limitations:
 * - Resets on server restart
 * - Not suitable for serverless/edge functions
 * - Memory grows unbounded without cleanup
 */
const rateLimitMap = new Map<string, number[]>();

// Cleanup old entries every 5 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    const fiveMinutesAgo = now - 300000;
    
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const validTimestamps = timestamps.filter((ts) => ts > fiveMinutesAgo);
      if (validTimestamps.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, validTimestamps);
      }
    }
  }, 300000); // Run every 5 minutes
}

export function checkRateLimit(identifier: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(identifier) || [];
  
  // Filter out timestamps outside the window
  const validTimestamps = timestamps.filter((timestamp) => now - timestamp < windowMs);
  
  if (validTimestamps.length >= limit) {
    return false;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(identifier, validTimestamps);
  
  return true;
}
