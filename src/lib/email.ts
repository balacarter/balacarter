import { Resend } from 'resend';
import { ContactFormData } from '@/types/contact';

/**
 * Email service for sending contact form submissions
 * Uses Resend API for reliable email delivery
 */

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, subject, message } = data;

  try {
    const result = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@example.com',
      to: process.env.CONTACT_EMAIL_TO || 'your-email@example.com',
      subject: subject || `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
            ${subject ? `<p style="margin: 0 0 10px;"><strong>Subject:</strong> ${subject}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
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
