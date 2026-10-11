import { z } from "zod";

export const AdmissionsSubmissionSchema = z.object({
  prospectiveStudentName: z.string().min(3, "Nama siswa terlalu pendek").max(255, "Nama siswa terlalu panjang"),
  prospectiveStudentBirthDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Format tanggal tidak valid",
  }),
  guardianContactName: z.string().min(3, "Nama wali terlalu pendek").max(255, "Nama wali terlalu panjang"),
  guardianContactPhone: z
    .string()
    .min(10, "Nomor telepon tidak valid (minimal 10 digit)")
    .max(32, "Nomor telepon terlalu panjang")
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka"),
  guardianContactEmail: z.string().email("Format email tidak valid").max(255),
  submittedDocumentsUrl: z.string().url().optional(),
});

export type AdmissionsSubmissionPayload = z.infer<typeof AdmissionsSubmissionSchema>;
