"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdmissionsSubmissionSchema, type AdmissionsSubmissionPayload } from "@/lib/validations/admissions";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Field, FieldLabel, FieldError, FieldContent } from "@/components/ui/field";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { ConfettiCelebration } from "@/components/common/ConfettiCelebration";

// NOTE: Ensure this action exists and accepts AdmissionsFormValues
import { submitAdmissionAction } from "@/modules/admissions/actions";

export function AdmissionsForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AdmissionsSubmissionPayload>({
    resolver: zodResolver(AdmissionsSubmissionSchema),
    defaultValues: {
      prospectiveStudentName: "",
      prospectiveStudentBirthDate: "",
      guardianContactName: "",
      guardianContactPhone: "",
      guardianContactEmail: "",
      submittedDocumentsUrl: "",
    },
  });

  const onSubmit = async (data: AdmissionsSubmissionPayload) => {
    setErrorMessage(null);
    try {
      const response = await submitAdmissionAction(data);
      if (response.is_success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage(response.error_descriptor?.message || "Gagal memproses pendaftaran.");
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan sistem. Silakan coba lagi.");
    }
  };

  if (isSuccess) {
    return (
      <SpotlightCard
        spotlightColor="rgba(16, 185, 129, 0.1)"
        className="rounded-none bg-white dark:bg-slate-900 p-8 sm:p-12 border border-emerald-200 dark:border-emerald-900 shadow-none text-center relative overflow-hidden"
      >
        <ConfettiCelebration />
        <div className="flex flex-col items-center justify-center space-y-4 relative z-10">
          <div className="size-16 rounded-none bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
            <CheckCircle2 className="size-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
            Pendaftaran Diterima!
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Alhamdulillah, data pendaftaran ananda telah masuk ke sistem kami. 
            Panitia PPDB akan menghubungi Anda via Email/WhatsApp dalam 1x24 jam untuk tahapan selanjutnya.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="mt-4 rounded-none h-11"
          >
            Daftarkan Calon Siswa Lainnya
          </Button>
        </div>
      </SpotlightCard>
    );
  }

  return (
    <SpotlightCard
      spotlightColor="rgba(150, 150, 150, 0.05)"
      className="rounded-none bg-white dark:bg-slate-900 p-8 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-none"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
          Form Registration Admissions 2026
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Mohon lengkapi data calon students dengan valid. Bidang bertanda <span className="text-rose-500">*</span> wajib diisi.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col gap-4">
          <Field orientation="vertical" data-invalid={!!errors.prospectiveStudentName}>
            <FieldLabel htmlFor="prospectiveStudentName">Nama Lengkap Calon Siswa <span className="text-rose-500">*</span></FieldLabel>
            <FieldContent>
              <Input
                id="prospectiveStudentName"
                placeholder="Sesuai Akta Kelahiran"
                className="h-11 rounded-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-1"
                disabled={isSubmitting}
                {...register("prospectiveStudentName")}
              />
            </FieldContent>
            {errors.prospectiveStudentName && <FieldError>{errors.prospectiveStudentName.message}</FieldError>}
          </Field>

          <Field orientation="vertical" data-invalid={!!errors.prospectiveStudentBirthDate}>
            <FieldLabel htmlFor="prospectiveStudentBirthDate">Tanggal Lahir Calon Siswa <span className="text-rose-500">*</span></FieldLabel>
            <FieldContent>
              <Input
                type="date"
                id="prospectiveStudentBirthDate"
                className="h-11 rounded-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-1"
                disabled={isSubmitting}
                {...register("prospectiveStudentBirthDate")}
              />
            </FieldContent>
            {errors.prospectiveStudentBirthDate && <FieldError>{errors.prospectiveStudentBirthDate.message}</FieldError>}
          </Field>

          <Field orientation="vertical" data-invalid={!!errors.guardianContactName}>
            <FieldLabel htmlFor="guardianContactName">Nama Lengkap Wali <span className="text-rose-500">*</span></FieldLabel>
            <FieldContent>
              <Input
                id="guardianContactName"
                placeholder="Nama Orang Tua / Wali"
                className="h-11 rounded-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-1"
                disabled={isSubmitting}
                {...register("guardianContactName")}
              />
            </FieldContent>
            {errors.guardianContactName && <FieldError>{errors.guardianContactName.message}</FieldError>}
          </Field>

          <Field orientation="vertical" data-invalid={!!errors.guardianContactPhone}>
            <FieldLabel htmlFor="guardianContactPhone">Nomor Telepon Aktif <span className="text-rose-500">*</span></FieldLabel>
            <FieldContent>
              <Input
                type="tel"
                id="guardianContactPhone"
                placeholder="Contoh: 081234567890"
                className="h-11 rounded-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-1"
                disabled={isSubmitting}
                {...register("guardianContactPhone")}
              />
            </FieldContent>
            {errors.guardianContactPhone && <FieldError>{errors.guardianContactPhone.message}</FieldError>}
          </Field>
          
          <Field orientation="vertical" data-invalid={!!errors.guardianContactEmail}>
            <FieldLabel htmlFor="guardianContactEmail">Email Aktif <span className="text-rose-500">*</span></FieldLabel>
            <FieldContent>
              <Input
                type="email"
                id="guardianContactEmail"
                placeholder="Contoh: nama@gmail.com"
                className="h-11 rounded-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-1"
                disabled={isSubmitting}
                {...register("guardianContactEmail")}
              />
            </FieldContent>
            {errors.guardianContactEmail && <FieldError>{errors.guardianContactEmail.message}</FieldError>}
          </Field>

          <Field orientation="vertical" data-invalid={!!errors.submittedDocumentsUrl}>
            <FieldLabel htmlFor="submittedDocumentsUrl">Tautan Dokumen (Google Drive, dll)</FieldLabel>
            <FieldContent>
              <Input
                type="url"
                id="submittedDocumentsUrl"
                placeholder="Tautan folder berisi KK dan Akta (Opsional)"
                className="h-11 rounded-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-1"
                disabled={isSubmitting}
                {...register("submittedDocumentsUrl")}
              />
            </FieldContent>
            {errors.submittedDocumentsUrl && <FieldError>{errors.submittedDocumentsUrl.message}</FieldError>}
          </Field>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox id="terms" required className="mt-1 rounded-none shadow-none" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed cursor-pointer"
              >
                Saya menyetujui syarat &amp; ketentuan pendaftaran
              </Label>
              <p className="text-xs text-slate-500">
                Dengan ini saya menyatakan bahwa data kontak yang diisi adalah benar agar panitia dapat menghubungi saya.
              </p>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="mt-6 p-3 bg-rose-50 border border-rose-200 text-rose-600 text-sm rounded-none">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 w-full h-[52px] text-base font-bold bg-amber-500 hover:bg-amber-600 text-white rounded-none shadow-none transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Memproses Pendaftaran...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Kirim Pendaftaran
            </>
          )}
        </Button>
      </form>
    </SpotlightCard>
  );
}
