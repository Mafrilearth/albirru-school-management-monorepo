import { describe, expect, it } from "vitest";
import { AdmissionsWorkflowManager } from "../lib/workflows/admissions-workflow";

describe("Vercel Workflows Pattern - Admissions Lifecycle", () => {
  it("orchestrates student registration through multi-step durable stages", () => {
    const manager = new AdmissionsWorkflowManager();

    // 1. Start Workflow
    const instance = manager.startWorkflow({
      registrationNumber: "REG-2026-001",
      studentName: "Fatih Al-Ayyubi",
      guardianPhone: "081234567890",
    });

    expect(instance.id).toBeDefined();
    expect(instance.stage).toBe("submitted");
    expect(instance.isReminderSent).toBe(false);

    // 2. Trigger Automated 3-Day Reminder
    const reminderSuccess = manager.triggerReminder(instance.id);
    expect(reminderSuccess).toBe(true);
    expect(manager.getInstance(instance.id)?.isReminderSent).toBe(true);

    // 3. Document Approval
    const docSuccess = manager.approveDocuments(instance.id, "Ust. Ahmad");
    expect(docSuccess).toBe(true);
    expect(manager.getInstance(instance.id)?.stage).toBe("documents_approved");

    // 4. Schedule Observation
    const obsSuccess = manager.scheduleObservation(
      instance.id,
      "2026-06-15 08:30 WIB",
    );
    expect(obsSuccess).toBe(true);
    expect(manager.getInstance(instance.id)?.stage).toBe(
      "observation_scheduled",
    );

    // 5. Final Adjudication
    const finalSuccess = manager.finalizeAdjudication(instance.id, "admitted");
    expect(finalSuccess).toBe(true);
    expect(manager.getInstance(instance.id)?.stage).toBe("admitted");
    expect(manager.getInstance(instance.id)?.history).toHaveLength(5);
  });
});
