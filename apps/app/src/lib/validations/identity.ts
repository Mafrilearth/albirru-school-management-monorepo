import { z } from "zod";

export const IdentityProvisioningSchema = z.object({
  role: z.enum([
    "System Administrator",
    "Instructor",
    "Guardian",
    "Public Guest",
  ]),
  email: z.string().email("Invalid email format").max(255),
  fullLegalName: z
    .string()
    .min(3, "Full legal name is too short")
    .max(255, "Full legal name is too long"),
  nationalIdentityNumber: z
    .string()
    .regex(/^[0-9]{16}$/, "National identity number must be exactly 16 digits"),
  gender: z.enum(["Male", "Female"]),
  birthDate: z.string().refine((date) => !Number.isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});

export type IdentityProvisioningPayload = z.infer<
  typeof IdentityProvisioningSchema
>;
