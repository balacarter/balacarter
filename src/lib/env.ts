import { z } from 'zod';

/**
 * Environment variable validation
 * Ensures all required environment variables are set at build time
 */

const envSchema = z.object({
  // Required for email functionality
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  CONTACT_EMAIL_TO: z.string().email('CONTACT_EMAIL_TO must be a valid email'),
  CONTACT_EMAIL_FROM: z.string().email('CONTACT_EMAIL_FROM must be a valid email'),
  
  // Node environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Validate and parse environment variables
 * Throws an error if validation fails
 */
function validateEnv(): Env {
  try {
    return envSchema.parse({
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
      CONTACT_EMAIL_FROM: process.env.CONTACT_EMAIL_FROM,
      NODE_ENV: process.env.NODE_ENV,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map((err) => `${err.path.join('.')}: ${err.message}`);
      throw new Error(
        `❌ Invalid environment variables:\n${missingVars.join('\n')}\n\nPlease check your .env.local file.`
      );
    }
    throw error;
  }
}

// Validate on module load (build time)
export const env = validateEnv();
