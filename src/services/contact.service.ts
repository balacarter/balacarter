import { apiClient } from '@/lib/api-client';
import { ContactFormData, ApiResponse } from '@/types/contact';

/**
 * Contact form service
 * Handles all contact-related API requests
 */

export interface ContactSubmissionResponse {
  message: string;
}

/**
 * Submit contact form data to the backend
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResponse<ContactSubmissionResponse>> {
  return apiClient.post<ApiResponse<ContactSubmissionResponse>>(
    '/api/contact',
    data
  );
}

/**
 * Validate contact form data client-side (optional)
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
} {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.subject && data.subject.length > 200) {
    errors.subject = 'Subject must be less than 200 characters';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
