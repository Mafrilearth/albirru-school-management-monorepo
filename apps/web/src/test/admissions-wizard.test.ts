import { beforeEach, describe, expect, it } from "vitest";
import { useAdmissionsWizard } from "../lib/store/admissions-wizard";

describe("Admissions Wizard Zustand Store", () => {
  beforeEach(() => {
    useAdmissionsWizard.getState().resetWizard();
  });

  it("initializes with step 1 and default values", () => {
    const state = useAdmissionsWizard.getState();
    expect(state.currentStep).toBe(1);
    expect(state.student.fullName).toBe("");
    expect(state.readiness.targetTahfidzAffirmation).toBe(true);
  });

  it("updates student biodata and validates step 1", () => {
    const { updateStudent, isStepValid } = useAdmissionsWizard.getState();

    expect(isStepValid(1)).toBe(false);

    updateStudent({
      fullName: "Muhammad Fatih",
      gender: "L",
      birthPlace: "Sukabumi",
      birthDate: "2020-05-15",
    });

    expect(useAdmissionsWizard.getState().isStepValid(1)).toBe(true);
  });

  it("progresses to next step when current step is valid", () => {
    const { updateStudent, nextStep } = useAdmissionsWizard.getState();

    // Incomplete, should not advance
    nextStep();
    expect(useAdmissionsWizard.getState().currentStep).toBe(1);

    // Make valid
    updateStudent({
      fullName: "Aisyah Humaira",
      gender: "P",
      birthPlace: "Sukabumi",
      birthDate: "2020-08-10",
    });

    nextStep();
    expect(useAdmissionsWizard.getState().currentStep).toBe(2);
  });

  it("navigates backward using prevStep", () => {
    const { updateStudent, nextStep, prevStep } =
      useAdmissionsWizard.getState();

    updateStudent({
      fullName: "Aisyah Humaira",
      gender: "P",
      birthPlace: "Sukabumi",
      birthDate: "2020-08-10",
    });
    nextStep();
    expect(useAdmissionsWizard.getState().currentStep).toBe(2);

    prevStep();
    expect(useAdmissionsWizard.getState().currentStep).toBe(1);
  });

  it("resets wizard properly", () => {
    const { updateStudent, resetWizard } = useAdmissionsWizard.getState();

    updateStudent({ fullName: "Ahmad" });
    resetWizard();

    const state = useAdmissionsWizard.getState();
    expect(state.currentStep).toBe(1);
    expect(state.student.fullName).toBe("");
  });
});
