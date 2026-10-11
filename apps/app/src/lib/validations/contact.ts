import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters." })
    .max(100, { message: "Full name must not exceed 100 characters." }),
  phone: z
    .string()
    .min(9, { message: "WhatsApp number must be at least 9 digits." })
    .max(16, { message: "WhatsApp number must not exceed 16 digits." })
    .regex(/^[0-9+\s-]+$/, {
      message:
        "WhatsApp number format may only contain digits, spaces, or hyphens.",
    }),
  email: z
    .string()
    .email({ message: "Invalid email address format." })
    .optional()
    .or(z.literal("")),
  studentCandidateName: z
    .string()
    .max(100, {
      message: "Prospective student name must not exceed 100 characters.",
    })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message inquiry must be at least 10 characters." })
    .max(1000, { message: "Message inquiry must not exceed 1000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
