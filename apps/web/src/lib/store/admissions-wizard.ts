import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface StudentBiodata {
  fullName: string;
  nickname: string;
  gender: "L" | "P" | "";
  nik: string;
  nisn: string;
  birthPlace: string;
  birthDate: string;
  childNumber: number;
  totalSiblings: number;
}

export interface GuardianBiodata {
  fatherName: string;
  fatherOccupation: string;
  fatherWhatsapp: string;
  motherName: string;
  motherOccupation: string;
  motherWhatsapp: string;
  address: string;
  district: string; // Kecamatan
  regency: string; // Kota/Kabupaten
}

export interface SchoolReadiness {
  quranReadingLevel: "iqro" | "tahsin" | "al_quran" | "";
  currentMemorization: string; // e.g. An-Nas - Al-Ikhlas
  targetTahfidzAffirmation: boolean; // Komitmen 3 Juz
  specialHealthNotes: string;
  transportationMode: "antar_sendiri" | "jemputan" | "jalan_kaki" | "";
}

export interface DocumentChecklist {
  hasBirthCertificate: boolean;
  hasFamilyCard: boolean;
  hasPhoto: boolean;
  notes: string;
}

export interface AdmissionsWizardState {
  currentStep: number;
  totalSteps: number;
  student: StudentBiodata;
  guardian: GuardianBiodata;
  readiness: SchoolReadiness;
  documents: DocumentChecklist;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateStudent: (data: Partial<StudentBiodata>) => void;
  updateGuardian: (data: Partial<GuardianBiodata>) => void;
  updateReadiness: (data: Partial<SchoolReadiness>) => void;
  updateDocuments: (data: Partial<DocumentChecklist>) => void;
  resetWizard: () => void;
  isStepValid: (step: number) => boolean;
}

const initialStudent: StudentBiodata = {
  fullName: "",
  nickname: "",
  gender: "",
  nik: "",
  nisn: "",
  birthPlace: "",
  birthDate: "",
  childNumber: 1,
  totalSiblings: 1,
};

const initialGuardian: GuardianBiodata = {
  fatherName: "",
  fatherOccupation: "",
  fatherWhatsapp: "",
  motherName: "",
  motherOccupation: "",
  motherWhatsapp: "",
  address: "",
  district: "",
  regency: "Kabupaten Sukabumi",
};

const initialReadiness: SchoolReadiness = {
  quranReadingLevel: "",
  currentMemorization: "",
  targetTahfidzAffirmation: true,
  specialHealthNotes: "",
  transportationMode: "antar_sendiri",
};

const initialDocuments: DocumentChecklist = {
  hasBirthCertificate: false,
  hasFamilyCard: false,
  hasPhoto: false,
  notes: "",
};

const createSafeStorage = () => {
  if (typeof window !== "undefined" && window.sessionStorage) {
    return window.sessionStorage;
  }
  const memoryStore = new Map<string, string>();
  return {
    getItem: (name: string) => memoryStore.get(name) ?? null,
    setItem: (name: string, value: string) => {
      memoryStore.set(name, value);
    },
    removeItem: (name: string) => {
      memoryStore.delete(name);
    },
  };
};

export const useAdmissionsWizard = create<AdmissionsWizardState>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      totalSteps: 4,
      student: initialStudent,
      guardian: initialGuardian,
      readiness: initialReadiness,
      documents: initialDocuments,

      setStep: (step) => {
        if (step >= 1 && step <= get().totalSteps) {
          set({ currentStep: step });
        }
      },

      nextStep: () => {
        const { currentStep, totalSteps, isStepValid } = get();
        if (currentStep < totalSteps && isStepValid(currentStep)) {
          set({ currentStep: currentStep + 1 });
        }
      },

      prevStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 });
        }
      },

      updateStudent: (data) =>
        set((state) => ({
          student: { ...state.student, ...data },
        })),

      updateGuardian: (data) =>
        set((state) => ({
          guardian: { ...state.guardian, ...data },
        })),

      updateReadiness: (data) =>
        set((state) => ({
          readiness: { ...state.readiness, ...data },
        })),

      updateDocuments: (data) =>
        set((state) => ({
          documents: { ...state.documents, ...data },
        })),

      resetWizard: () =>
        set({
          currentStep: 1,
          student: initialStudent,
          guardian: initialGuardian,
          readiness: initialReadiness,
          documents: initialDocuments,
        }),

      isStepValid: (step) => {
        const state = get();
        switch (step) {
          case 1: {
            const { fullName, gender, birthPlace, birthDate } = state.student;
            return (
              fullName.trim().length >= 3 &&
              (gender === "L" || gender === "P") &&
              birthPlace.trim().length >= 2 &&
              birthDate.trim().length >= 8
            );
          }
          case 2: {
            const { fatherName, motherName, fatherWhatsapp, address } =
              state.guardian;
            return (
              (fatherName.trim().length >= 2 ||
                motherName.trim().length >= 2) &&
              (fatherWhatsapp.trim().length >= 9 ||
                state.guardian.motherWhatsapp.trim().length >= 9) &&
              address.trim().length >= 5
            );
          }
          case 3: {
            const { quranReadingLevel, targetTahfidzAffirmation } =
              state.readiness;
            return quranReadingLevel !== "" && targetTahfidzAffirmation;
          }
          case 4: {
            return true;
          }
          default:
            return false;
        }
      },
    }),
    {
      name: "albirru-admissions-draft",
      storage: createJSONStorage(() => createSafeStorage()),
    },
  ),
);
