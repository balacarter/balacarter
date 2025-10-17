import { NextRequest } from 'next/server';
import { ZodError } from 'zod';
import { contactFormSchema } from '@/types/contact';
import { sendContactEmail } from '@/lib/email';
import {
  createSuccessResponse,
  createErrorResponse,
  createValidationErrorResponse,
  checkRateLimit,
} from '@/lib/api-utils';

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting (5 requests per minute per IP)
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip, 5, 60000)) {
      return createErrorResponse('Too many requests. Please try again later.', 429);
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Send email
    const result = await sendContactEmail(validatedData);

    if (!result.success) {
      return createErrorResponse(
        'Failed to send message. Please try again later.',
        500
      );
    }

    return createSuccessResponse({ message: 'Message sent successfully!' });
  } catch (error) {
    // Handle validation errors
    if (error instanceof ZodError) {
      return createValidationErrorResponse(error);
    }

    // Handle other errors
    console.error('Contact API error:', error);
    return createErrorResponse('An unexpected error occurred.', 500);
  }
}
