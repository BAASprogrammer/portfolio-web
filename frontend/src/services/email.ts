/**
 * API Services and External Communication
 * Functions for API calls and backend services
 */

// Email service
export const emailService = {
  sendEmail: async (data: { name: string; email: string; message: string }) => {
    // Implement email sending logic
    console.log('Sending email:', data);
  },
} as const;
