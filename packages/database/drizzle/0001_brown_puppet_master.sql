CREATE TYPE "public"."application_status" AS ENUM('Pending Review', 'Information Required', 'Approved', 'Rejected');--> statement-breakpoint
CREATE TABLE "admission_applications" (
	"id" uuid PRIMARY KEY NOT NULL,
	"registration_tracking_code" text NOT NULL,
	"prospective_student_name" text NOT NULL,
	"prospective_student_birth_date" date NOT NULL,
	"guardian_contact_name" text NOT NULL,
	"guardian_contact_phone" text NOT NULL,
	"guardian_contact_email" text NOT NULL,
	"submitted_documents_url" text,
	"application_status" "application_status" DEFAULT 'Pending Review' NOT NULL,
	"adjudicated_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "admission_applications_registration_tracking_code_unique" UNIQUE("registration_tracking_code")
);
--> statement-breakpoint
ALTER TABLE "admission_applications" ADD CONSTRAINT "admission_applications_adjudicated_by_profiles_id_fk" FOREIGN KEY ("adjudicated_by") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;