import { pgTable, text, timestamp, uuid, boolean, pgEnum, date, integer, varchar, decimal, uniqueIndex, AnyPgColumn } from 'drizzle-orm/pg-core';
import { uuidv7 } from 'uuidv7';

// Enums
export const roleEnum = pgEnum('role', ['System Administrator', 'Instructor', 'Guardian', 'Public Guest']);
export const genderEnum = pgEnum('gender', ['Male', 'Female']);
export const enrollmentStatusEnum = pgEnum('enrollment_status', ['Active', 'Transferred', 'Withdrawn', 'Completed']);
export const attendanceStatusEnum = pgEnum('attendance_status', ['Present', 'Absent', 'Sick', 'Excused']);
export const publicationStatusEnum = pgEnum('publication_status', ['Draft', 'Pending Verification', 'Published']);
export const guardianRelationshipEnum = pgEnum('guardian_relationship_type', ['Father', 'Mother', 'Legal Guardian']);
export const applicationStatusEnum = pgEnum('application_status', ['Pending Review', 'Information Required', 'Approved', 'Rejected']);

// 3.1.1 Table: users
export const users = pgTable('users', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  email: varchar('email', { length: 255 }).unique().notNull(),
  role: roleEnum('role').notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdBy: uuid('created_by'), 
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// 3.1.2 Table: profiles
export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }).unique(),
  fullLegalName: varchar('full_legal_name', { length: 255 }).notNull(),
  nationalIdentityNumber: varchar('national_identity_number', { length: 32 }).unique().notNull(),
  gender: genderEnum('gender').notNull(),
  birthDate: date('birth_date').notNull(),
  phoneNumber: varchar('phone_number', { length: 32 }),
  addressStreet: text('address_street'),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// 3.1.3 Table: academic_terms
export const academicTerms = pgTable('academic_terms', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  termCode: varchar('term_code', { length: 32 }).unique().notNull(),
  title: varchar('title', { length: 128 }).notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  isActive: boolean('is_active').default(false).notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// 3.1.4 Table: classroom_cohorts
export const classroomCohorts = pgTable('classroom_cohorts', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  academicTermId: uuid('academic_term_id').references(() => academicTerms.id, { onDelete: 'cascade' }).notNull(),
  gradeLevel: integer('grade_level').notNull(),
  sectionName: varchar('section_name', { length: 32 }).notNull(),
  leadInstructorProfileId: uuid('lead_instructor_profile_id').references(() => profiles.id, { onDelete: 'set null' }),
  maximumCapacity: integer('maximum_capacity').default(30).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// 3.1.5 Table: cohort_enrollments
export const cohortEnrollments = pgTable('cohort_enrollments', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  studentProfileId: uuid('student_profile_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  classroomCohortId: uuid('classroom_cohort_id').references(() => classroomCohorts.id, { onDelete: 'cascade' }).notNull(),
  enrollmentStatus: enrollmentStatusEnum('enrollment_status').notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex('student_cohort_idx').on(table.studentProfileId, table.classroomCohortId)
]);

// 3.2.1 Table: attendance_sessions
export const attendanceSessions = pgTable('attendance_sessions', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  classroomCohortId: uuid('classroom_cohort_id').references(() => classroomCohorts.id, { onDelete: 'cascade' }).notNull(),
  sessionDate: date('session_date').notNull(),
  recordingInstructorId: uuid('recording_instructor_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  isVerified: boolean('is_verified').default(false).notNull(),
  isLocked: boolean('is_locked').default(false).notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex('cohort_session_date_idx').on(table.classroomCohortId, table.sessionDate)
]);

// 3.2.2 Table: attendance_records
export const attendanceRecords = pgTable('attendance_records', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  attendanceSessionId: uuid('attendance_session_id').references(() => attendanceSessions.id, { onDelete: 'cascade' }).notNull(),
  studentProfileId: uuid('student_profile_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  status: attendanceStatusEnum('status').notNull(),
  remarks: text('remarks'),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex('session_student_idx').on(table.attendanceSessionId, table.studentProfileId)
]);

// 3.3.1 Table: subjects
export const subjects = pgTable('subjects', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  code: varchar('code', { length: 32 }).unique().notNull(),
  name: varchar('name', { length: 128 }).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// 3.3.2 Table: assessment_configurations
export const assessmentConfigurations = pgTable('assessment_configurations', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  subjectId: uuid('subject_id').references(() => subjects.id, { onDelete: 'cascade' }).notNull(),
  academicTermId: uuid('academic_term_id').references(() => academicTerms.id, { onDelete: 'cascade' }).notNull(),
  categoryName: varchar('category_name', { length: 64 }).notNull(),
  weightPercentage: integer('weight_percentage').notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex('subject_term_category_idx').on(table.subjectId, table.academicTermId, table.categoryName)
]);

// 3.3.3 Table: student_grades
export const studentGrades = pgTable('student_grades', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  assessmentConfigId: uuid('assessment_config_id').references(() => assessmentConfigurations.id, { onDelete: 'cascade' }).notNull(),
  studentProfileId: uuid('student_profile_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  evaluatorProfileId: uuid('evaluator_profile_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  rawScore: decimal('raw_score', { precision: 5, scale: 2 }).notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex('assessment_student_idx').on(table.assessmentConfigId, table.studentProfileId)
]);

// 3.3.4 Table: report_cards
export const reportCards = pgTable('report_cards', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  studentProfileId: uuid('student_profile_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  academicTermId: uuid('academic_term_id').references(() => academicTerms.id, { onDelete: 'cascade' }).notNull(),
  classroomCohortId: uuid('classroom_cohort_id').references(() => classroomCohorts.id, { onDelete: 'cascade' }).notNull(),
  calculatedGradePoint: decimal('calculated_grade_point', { precision: 4, scale: 2 }),
  publicationStatus: publicationStatusEnum('publication_status').default('Draft').notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex('student_term_idx').on(table.studentProfileId, table.academicTermId)
]);

// 3.4.1 Table: guardian_student_relations
export const guardianStudentRelations = pgTable('guardian_student_relations', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  guardianProfileId: uuid('guardian_profile_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  studentProfileId: uuid('student_profile_id').references(() => profiles.id, { onDelete: 'cascade' }).notNull(),
  relationshipType: guardianRelationshipEnum('relationship_type').notNull(),
  isVerified: boolean('is_verified').default(false).notNull(),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex('guardian_student_idx').on(table.guardianProfileId, table.studentProfileId)
]);

// 3.5.1 Table: admission_applications
export const admissionApplications = pgTable('admission_applications', {
  id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
  registrationTrackingCode: varchar('registration_tracking_code', { length: 32 }).unique().notNull(),
  prospectiveStudentName: varchar('prospective_student_name', { length: 255 }).notNull(),
  prospectiveStudentBirthDate: date('prospective_student_birth_date').notNull(),
  guardianContactName: varchar('guardian_contact_name', { length: 255 }).notNull(),
  guardianContactPhone: varchar('guardian_contact_phone', { length: 32 }).notNull(),
  guardianContactEmail: varchar('guardian_contact_email', { length: 255 }).notNull(),
  submittedDocumentsUrl: text('submitted_documents_url'),
  applicationStatus: applicationStatusEnum('application_status').default('Pending Review').notNull(),
  adjudicatedBy: uuid('adjudicated_by').references(() => profiles.id, { onDelete: 'set null' }),
  createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
