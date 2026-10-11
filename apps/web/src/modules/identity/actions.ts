"use server";

import { db } from "@/db";
import { users, profiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ActionResponse } from "@/types/action";
import { IdentityProvisioningSchema, type IdentityProvisioningPayload } from "@/lib/validations/identity";

export async function provisionMasterIdentityAction(data: IdentityProvisioningPayload): Promise<ActionResponse<{ profile_id: string }>> {
  try {
    const input = IdentityProvisioningSchema.parse(data);

    // 1. Verify NIK Uniqueness first (since it's a critical constraint)
    const existingProfile = await db.query.profiles.findFirst({
      where: eq(profiles.nationalIdentityNumber, input.nationalIdentityNumber),
    });

    if (existingProfile) {
      return {
        is_success: false,
        status_code: 409,
        response_payload: null,
        error_descriptor: {
          code: "CONFLICT",
          message: "Nomor Induk Kependudukan sudah terdaftar."
        }
      };
    }

    // 2. Transaction to insert User and Profile
    let newProfileId: string = "";
    await db.transaction(async (tx) => {
      // Insert user
      const [newUser] = await tx.insert(users).values({
        email: input.email,
        role: input.role,
      }).returning();

      // Insert profile
      const [newProfile] = await tx.insert(profiles).values({
        userId: newUser.id,
        fullLegalName: input.fullLegalName,
        nationalIdentityNumber: input.nationalIdentityNumber,
        gender: input.gender,
        birthDate: input.birthDate,
      }).returning();

      newProfileId = newProfile.id;
    });

    return { 
      is_success: true, 
      status_code: 201, 
      response_payload: { profile_id: newProfileId }, 
      error_descriptor: null 
    };
  } catch (error: unknown) {
    console.error("[Identity Provisioning Error]", error);
    
    // Check if duplicate email from DB constraint
    if (error instanceof Error && error.message.includes("users_email_unique")) {
      return {
        is_success: false,
        status_code: 409,
        response_payload: null,
        error_descriptor: {
          code: "CONFLICT",
          message: "Alamat email sudah terdaftar di sistem."
        }
      };
    }

    return {
      is_success: false,
      status_code: 500,
      response_payload: null,
      error_descriptor: {
        code: "INTERNAL_SERVER_ERROR",
        message: error instanceof Error ? error.message : "Terjadi kesalahan internal",
      }
    };
  }
}
