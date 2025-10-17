import { Resend } from 'resend';
import { ContactFormData } from '@/types/contact';

/**
 * Email service for sending contact form submissions
 * Uses Resend API for reliable email delivery
 */

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sanitize HTML to prevent XSS attacks
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, subject, message } = data;

  // Sanitize all user inputs to prevent XSS
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = subject ? escapeHtml(subject) : '';
  const safeMessage = escapeHtml(message);

  try {
    const result = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@example.com',
      to: process.env.CONTACT_EMAIL_TO || 'your-email@example.com',
      subject: safeSubject || `Portfolio Contact: Message from ${safeName}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${safeEmail}</p>
            ${safeSubject ? `<p style="margin: 0 0 10px;"><strong>Subject:</strong> ${safeSubject}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          <p style="color: #666; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
