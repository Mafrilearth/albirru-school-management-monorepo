import { z } from "zod";

export const IdentityProvisioningSchema = z.object({
  role: z.enum(["System Administrator", "Instructor", "Guardian", "Public Guest"]),
  email: z.string().email("Format email tidak valid").max(255),
  fullLegalName: z.string().min(3, "Nama terlalu pendek").max(255, "Nama terlalu panjang"),
  nationalIdentityNumber: z.string().regex(/^[0-9]{16}$/, "NIK harus tepat 16 digit angka"),
  gender: z.enum(["Male", "Female"]),
  birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Format tanggal tidak valid",
  }),
});

export type IdentityProvisioningPayload = z.infer<typeof IdentityProvisioningSchema>;
