import { describe, expect, it } from "vitest";
import {
  academicTerms,
  admissionApplications,
  assessmentConfigurations,
  attendanceRecords,
  attendanceSessions,
  classroomCohorts,
  cohortEnrollments,
  guardianStudentRelations,
  profiles,
  reportCards,
  studentGrades,
  subjects,
  users,
} from "./schema";

describe("Database Schema Invariants", () => {
  const allTables = [
    { name: "users", table: users },
    { name: "profiles", table: profiles },
    { name: "academicTerms", table: academicTerms },
    { name: "classroomCohorts", table: classroomCohorts },
    { name: "cohortEnrollments", table: cohortEnrollments },
    { name: "attendanceSessions", table: attendanceSessions },
    { name: "attendanceRecords", table: attendanceRecords },
    { name: "subjects", table: subjects },
    { name: "assessmentConfigurations", table: assessmentConfigurations },
    { name: "studentGrades", table: studentGrades },
    { name: "reportCards", table: reportCards },
    { name: "guardianStudentRelations", table: guardianStudentRelations },
    { name: "admissionApplications", table: admissionApplications },
  ];

  it("verifies all operational tables define an id primary key column", () => {
    for (const { name, table } of allTables) {
      expect(table.id, `Table ${name} must define an id column`).toBeDefined();
    }
  });

  it("verifies mandatory audit columns (createdAt, updatedAt) exist on every table", () => {
    for (const { name, table } of allTables) {
      expect(
        table.createdAt,
        `Table ${name} must maintain createdAt column`,
      ).toBeDefined();
      expect(
        table.updatedAt,
        `Table ${name} must maintain updatedAt column`,
      ).toBeDefined();
    }
  });

  it("verifies operational master entities maintain logical status or isActive flag (Zero Physical Deletion)", () => {
    expect(users.isActive).toBeDefined();
    expect(academicTerms.isActive).toBeDefined();
    expect(classroomCohorts.isActive).toBeDefined();
    expect(subjects.isActive).toBeDefined();
    expect(admissionApplications.applicationStatus).toBeDefined();
  });
});
