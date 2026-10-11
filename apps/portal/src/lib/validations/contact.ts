import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nama lengkap minimal 3 karakter." })
    .max(100, { message: "Nama lengkap maksimal 100 karakter." }),
  phone: z
    .string()
    .min(9, { message: "Nomor WhatsApp minimal 9 digit angka." })
    .max(16, { message: "Nomor WhatsApp maksimal 16 digit angka." })
    .regex(/^[0-9+\s\-]+$/, {
      message: "Format nomor WhatsApp hanya boleh angka, spasi, atau tanda hubung.",
    }),
  email: z
    .string()
    .email({ message: "Format alamat email tidak valid." })
    .optional()
    .or(z.literal("")),
  studentCandidateName: z
    .string()
    .max(100, { message: "Nama calon siswa maksimal 100 karakter." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Pesan pertanyaan minimal 10 karakter." })
    .max(1000, { message: "Pesan pertanyaan maksimal 1000 karakter." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
