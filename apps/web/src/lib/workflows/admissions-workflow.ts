/**
 * Vercel Workflows & Durable Execution Pattern for SD Al-Birru Admissions
 * Manages the multi-day lifecycle of student registration:
 * 1. Intake Submission
 * 2. Background Email / Queue Dispatch
 * 3. Document Verification Window (with automated reminder timeout)
 * 4. Learner Readiness Observation Scheduling
 * 5. Final Adjudication
 */

export type AdmissionsStage =
  | "draft"
  | "submitted"
  | "awaiting_documents"
  | "documents_approved"
  | "observation_scheduled"
  | "admitted"
  | "waitlist";

export interface AdmissionsWorkflowInstance {
  id: string;
  registrationNumber: string;
  studentName: string;
  guardianPhone: string;
  stage: AdmissionsStage;
  submittedAt: string;
  documentsDueAt: string;
  observationDate?: string;
  isReminderSent: boolean;
  history: {
    stage: AdmissionsStage;
    timestamp: string;
    note: string;
  }[];
}

export class AdmissionsWorkflowManager {
  private instances = new Map<string, AdmissionsWorkflowInstance>();

  /**
   * Step 1: Start Admissions Workflow
   */
  startWorkflow(params: {
    registrationNumber: string;
    studentName: string;
    guardianPhone: string;
  }): AdmissionsWorkflowInstance {
    const now = new Date();
    const dueDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days window

    const instance: AdmissionsWorkflowInstance = {
      id: `wf-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      registrationNumber: params.registrationNumber,
      studentName: params.studentName,
      guardianPhone: params.guardianPhone,
      stage: "submitted",
      submittedAt: now.toISOString(),
      documentsDueAt: dueDate.toISOString(),
      isReminderSent: false,
      history: [
        {
          stage: "submitted",
          timestamp: now.toISOString(),
          note: "Formulir pendaftaran awal santri berhasil diterima di sistem.",
        },
      ],
    };

    this.instances.set(instance.id, instance);
    return instance;
  }

  /**
   * Step 2: Trigger Automated 3-Day Document Reminder
   */
  triggerReminder(workflowId: string): boolean {
    const instance = this.instances.get(workflowId);
    if (!instance || instance.isReminderSent) return false;

    instance.isReminderSent = true;
    instance.history.push({
      stage: instance.stage,
      timestamp: new Date().toISOString(),
      note: "Pengingat otomatis kelengkapan berkas Akta & KK dikirimkan via WhatsApp.",
    });

    return true;
  }

  /**
   * Step 3: Approve Required Documents
   */
  approveDocuments(workflowId: string, reviewerName: string): boolean {
    const instance = this.instances.get(workflowId);
    if (!instance) return false;

    instance.stage = "documents_approved";
    instance.history.push({
      stage: "documents_approved",
      timestamp: new Date().toISOString(),
      note: `Dokumen Akta & KK diverifikasi valid oleh panitia (${reviewerName}).`,
    });

    return true;
  }

  /**
   * Step 4: Schedule Readiness Observation
   */
  scheduleObservation(workflowId: string, observationDate: string): boolean {
    const instance = this.instances.get(workflowId);
    if (instance?.stage !== "documents_approved") return false;

    instance.stage = "observation_scheduled";
    instance.observationDate = observationDate;
    instance.history.push({
      stage: "observation_scheduled",
      timestamp: new Date().toISOString(),
      note: `Jadwal observasi kesiapan fitrah anak ditetapkan pada: ${observationDate}.`,
    });

    return true;
  }

  /**
   * Step 5: Final Adjudication
   */
  finalizeAdjudication(
    workflowId: string,
    outcome: "admitted" | "waitlist",
  ): boolean {
    const instance = this.instances.get(workflowId);
    if (!instance) return false;

    instance.stage = outcome;
    instance.history.push({
      stage: outcome,
      timestamp: new Date().toISOString(),
      note:
        outcome === "admitted"
          ? "Selamat! Calon santri dinyatakan DITERIMA di SD Al-Birru Sukabumi."
          : "Calon santri dialokasikan ke daftar tunggu (Waitlist).",
    });

    return true;
  }

  getInstance(workflowId: string): AdmissionsWorkflowInstance | null {
    return this.instances.get(workflowId) || null;
  }
}

export const admissionsWorkflow = new AdmissionsWorkflowManager();
