CREATE TYPE "public"."attendance_status" AS ENUM('Present', 'Absent', 'Sick', 'Excused');--> statement-breakpoint
CREATE TYPE "public"."enrollment_status" AS ENUM('Active', 'Transferred', 'Withdrawn', 'Completed');--> statement-breakpoint
CREATE TYPE "public"."guardian_relationship_type" AS ENUM('Father', 'Mother', 'Legal Guardian');--> statement-breakpoint
CREATE TYPE "public"."publication_status" AS ENUM('Draft', 'Pending Verification', 'Published');--> statement-breakpoint
CREATE TABLE "academic_terms" (
	"id" uuid PRIMARY KEY NOT NULL,
	"term_code" varchar(32) NOT NULL,
	"title" varchar(128) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"is_active" boolean DEFAULT false NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "academic_terms_term_code_unique" UNIQUE("term_code")
);
--> statement-breakpoint
CREATE TABLE "assessment_configurations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"subject_id" uuid NOT NULL,
	"academic_term_id" uuid NOT NULL,
	"category_name" varchar(64) NOT NULL,
	"weight_percentage" integer NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "attendance_records" (
	"id" uuid PRIMARY KEY NOT NULL,
	"attendance_session_id" uuid NOT NULL,
	"student_profile_id" uuid NOT NULL,
	"status" "attendance_status" NOT NULL,
	"remarks" text,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "attendance_sessions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"classroom_cohort_id" uuid NOT NULL,
	"session_date" date NOT NULL,
	"recording_instructor_id" uuid NOT NULL,
	"is_verified" boolean DEFAULT false NOT NULL,
	"is_locked" boolean DEFAULT false NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "classroom_cohorts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"academic_term_id" uuid NOT NULL,
	"grade_level" integer NOT NULL,
	"section_name" varchar(32) NOT NULL,
	"lead_instructor_profile_id" uuid,
	"maximum_capacity" integer DEFAULT 30 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cohort_enrollments" (
	"id" uuid PRIMARY KEY NOT NULL,
	"student_profile_id" uuid NOT NULL,
	"classroom_cohort_id" uuid NOT NULL,
	"enrollment_status" "enrollment_status" NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "guardian_student_relations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"guardian_profile_id" uuid NOT NULL,
	"student_profile_id" uuid NOT NULL,
	"relationship_type" "guardian_relationship_type" NOT NULL,
	"is_verified" boolean DEFAULT false NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "report_cards" (
	"id" uuid PRIMARY KEY NOT NULL,
	"student_profile_id" uuid NOT NULL,
	"academic_term_id" uuid NOT NULL,
	"classroom_cohort_id" uuid NOT NULL,
	"calculated_grade_point" numeric(4, 2),
	"publication_status" "publication_status" DEFAULT 'Draft' NOT NULL,
	"published_at" timestamp with time zone,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "student_grades" (
	"id" uuid PRIMARY KEY NOT NULL,
	"assessment_config_id" uuid NOT NULL,
	"student_profile_id" uuid NOT NULL,
	"evaluator_profile_id" uuid NOT NULL,
	"raw_score" numeric(5, 2) NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subjects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"code" varchar(32) NOT NULL,
	"name" varchar(128) NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "subjects_code_unique" UNIQUE("code")
);
--> statement-breakpoint
ALTER TABLE "admission_applications" ALTER COLUMN "registration_tracking_code" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "admission_applications" ALTER COLUMN "prospective_student_name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "admission_applications" ALTER COLUMN "guardian_contact_name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "admission_applications" ALTER COLUMN "guardian_contact_phone" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "admission_applications" ALTER COLUMN "guardian_contact_email" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "full_legal_name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "national_identity_number" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "phone_number" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "admission_applications" ADD COLUMN "created_by" uuid;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "created_by" uuid;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_by" uuid;--> statement-breakpoint
ALTER TABLE "academic_terms" ADD CONSTRAINT "academic_terms_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessment_configurations" ADD CONSTRAINT "assessment_configurations_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessment_configurations" ADD CONSTRAINT "assessment_configurations_academic_term_id_academic_terms_id_fk" FOREIGN KEY ("academic_term_id") REFERENCES "public"."academic_terms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessment_configurations" ADD CONSTRAINT "assessment_configurations_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance_records" ADD CONSTRAINT "attendance_records_attendance_session_id_attendance_sessions_id_fk" FOREIGN KEY ("attendance_session_id") REFERENCES "public"."attendance_sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance_records" ADD CONSTRAINT "attendance_records_student_profile_id_profiles_id_fk" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance_records" ADD CONSTRAINT "attendance_records_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance_sessions" ADD CONSTRAINT "attendance_sessions_classroom_cohort_id_classroom_cohorts_id_fk" FOREIGN KEY ("classroom_cohort_id") REFERENCES "public"."classroom_cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance_sessions" ADD CONSTRAINT "attendance_sessions_recording_instructor_id_profiles_id_fk" FOREIGN KEY ("recording_instructor_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance_sessions" ADD CONSTRAINT "attendance_sessions_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classroom_cohorts" ADD CONSTRAINT "classroom_cohorts_academic_term_id_academic_terms_id_fk" FOREIGN KEY ("academic_term_id") REFERENCES "public"."academic_terms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classroom_cohorts" ADD CONSTRAINT "classroom_cohorts_lead_instructor_profile_id_profiles_id_fk" FOREIGN KEY ("lead_instructor_profile_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classroom_cohorts" ADD CONSTRAINT "classroom_cohorts_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohort_enrollments" ADD CONSTRAINT "cohort_enrollments_student_profile_id_profiles_id_fk" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohort_enrollments" ADD CONSTRAINT "cohort_enrollments_classroom_cohort_id_classroom_cohorts_id_fk" FOREIGN KEY ("classroom_cohort_id") REFERENCES "public"."classroom_cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohort_enrollments" ADD CONSTRAINT "cohort_enrollments_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_student_relations" ADD CONSTRAINT "guardian_student_relations_guardian_profile_id_profiles_id_fk" FOREIGN KEY ("guardian_profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_student_relations" ADD CONSTRAINT "guardian_student_relations_student_profile_id_profiles_id_fk" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_student_relations" ADD CONSTRAINT "guardian_student_relations_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_cards" ADD CONSTRAINT "report_cards_student_profile_id_profiles_id_fk" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_cards" ADD CONSTRAINT "report_cards_academic_term_id_academic_terms_id_fk" FOREIGN KEY ("academic_term_id") REFERENCES "public"."academic_terms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_cards" ADD CONSTRAINT "report_cards_classroom_cohort_id_classroom_cohorts_id_fk" FOREIGN KEY ("classroom_cohort_id") REFERENCES "public"."classroom_cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_cards" ADD CONSTRAINT "report_cards_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_grades" ADD CONSTRAINT "student_grades_assessment_config_id_assessment_configurations_id_fk" FOREIGN KEY ("assessment_config_id") REFERENCES "public"."assessment_configurations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_grades" ADD CONSTRAINT "student_grades_student_profile_id_profiles_id_fk" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_grades" ADD CONSTRAINT "student_grades_evaluator_profile_id_profiles_id_fk" FOREIGN KEY ("evaluator_profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_grades" ADD CONSTRAINT "student_grades_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subjects" ADD CONSTRAINT "subjects_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "subject_term_category_idx" ON "assessment_configurations" USING btree ("subject_id","academic_term_id","category_name");--> statement-breakpoint
CREATE UNIQUE INDEX "session_student_idx" ON "attendance_records" USING btree ("attendance_session_id","student_profile_id");--> statement-breakpoint
CREATE UNIQUE INDEX "cohort_session_date_idx" ON "attendance_sessions" USING btree ("classroom_cohort_id","session_date");--> statement-breakpoint
CREATE UNIQUE INDEX "student_cohort_idx" ON "cohort_enrollments" USING btree ("student_profile_id","classroom_cohort_id");--> statement-breakpoint
CREATE UNIQUE INDEX "guardian_student_idx" ON "guardian_student_relations" USING btree ("guardian_profile_id","student_profile_id");--> statement-breakpoint
CREATE UNIQUE INDEX "student_term_idx" ON "report_cards" USING btree ("student_profile_id","academic_term_id");--> statement-breakpoint
CREATE UNIQUE INDEX "assessment_student_idx" ON "student_grades" USING btree ("assessment_config_id","student_profile_id");--> statement-breakpoint
ALTER TABLE "admission_applications" ADD CONSTRAINT "admission_applications_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;