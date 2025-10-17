'use client';

import { useState, FormEvent } from 'react';
import { ContactFormData } from '@/types/contact';
import { submitContactForm, validateContactForm } from '@/services/contact.service';
import { ApiError } from '@/lib/api-client';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setFieldErrors({});

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setStatus('error');
      setFieldErrors(validation.errors);
      setErrorMessage('Please fix the errors below');
      return;
    }

    try {
      await submitContactForm(formData);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      
      if (error instanceof ApiError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unable to send message. Please try again.');
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error on change
    if (fieldErrors[name as keyof ContactFormData]) {
      setFieldErrors((prev: Partial<Record<keyof ContactFormData, string>>) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-2xl space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
            fieldErrors.name
              ? 'border-red-500 dark:border-red-500 focus:ring-red-400'
              : 'border-gray-300 dark:border-gray-700 focus:ring-gray-400 dark:focus:ring-gray-600'
          }`}
          placeholder="Your name"
          disabled={status === 'submitting'}
        />
        {fieldErrors.name && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
            fieldErrors.email
              ? 'border-red-500 dark:border-red-500 focus:ring-red-400'
              : 'border-gray-300 dark:border-gray-700 focus:ring-gray-400 dark:focus:ring-gray-600'
          }`}
          placeholder="your.email@example.com"
          disabled={status === 'submitting'}
        />
        {fieldErrors.email && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
            fieldErrors.subject
              ? 'border-red-500 dark:border-red-500 focus:ring-red-400'
              : 'border-gray-300 dark:border-gray-700 focus:ring-gray-400 dark:focus:ring-gray-600'
          }`}
          placeholder="What's this about?"
          disabled={status === 'submitting'}
        />
        {fieldErrors.subject && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {fieldErrors.subject}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all resize-none ${
            fieldErrors.message
              ? 'border-red-500 dark:border-red-500 focus:ring-red-400'
              : 'border-gray-300 dark:border-gray-700 focus:ring-gray-400 dark:focus:ring-gray-600'
          }`}
          placeholder="Your message..."
          disabled={status === 'submitting'}
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Success Message */}
      {status === 'success' && (
        <div className="px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-800 rounded">
          <p className="text-sm text-green-800 dark:text-green-200">
            Message sent successfully
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && errorMessage && (
        <div className="px-3 py-2 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded">
          <p className="text-sm text-red-800 dark:text-red-200">
            {errorMessage}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
