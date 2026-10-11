"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { provisionMasterIdentityAction } from "@/modules/identity/actions";
import { IdentityProvisioningSchema, type IdentityProvisioningPayload } from "@/lib/validations/identity";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel, FieldError, FieldContent } from "@/components/ui/field";

export default function MasterIdentityProvisioningPage() {
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IdentityProvisioningPayload>({
    resolver: zodResolver(IdentityProvisioningSchema),
    defaultValues: {
      email: "",
      role: "System Administrator",
      fullLegalName: "",
      nationalIdentityNumber: "",
      gender: "Male",
      birthDate: "",
    },
  });

  async function onSubmit(data: IdentityProvisioningPayload) {
    setIsPending(true);
    setErrorMessage(null);
    try {
      const response = await provisionMasterIdentityAction(data);
      if (response.is_success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage(response.error_descriptor?.message || "Gagal menyimpan identitas.");
      }
    } catch (err) {
      setErrorMessage("Terjadi kesalahan sistem.");
    } finally {
      setIsPending(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 border border-emerald-200 dark:border-emerald-900 shadow-none text-center relative">
          <div className="flex flex-col items-center justify-center space-y-4 relative z-10">
            <div className="size-16 rounded-none bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="size-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
              Identitas Master Berhasil Ditambahkan
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Akun pengguna baru telah berhasil dimasukkan ke dalam sistem dengan profil lengkap.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              className="mt-4 rounded-none h-11 shadow-none"
            >
              Tambah Identitas Lainnya
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-slate-50">
          Master Identity Provisioning
        </h1>
        <p className="text-slate-500 mt-2">
          Tambahkan identitas baru untuk Siswa, Instruktur, atau Administrator sistem ke dalam basis data utama.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-none">
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Email */}
              <Field orientation="vertical" data-invalid={!!errors.email}>
                <FieldLabel htmlFor="email">Email Akun <span className="text-rose-500">*</span></FieldLabel>
                <FieldContent>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="email@contoh.com" 
                    className="h-11 rounded-none shadow-none focus-visible:ring-1 focus-visible:ring-offset-0"
                    disabled={isPending}
                    {...register("email")} 
                  />
                </FieldContent>
                {errors.email && <FieldError>{errors.email.message}</FieldError>}
              </Field>

              {/* Role */}
              <Field orientation="vertical" data-invalid={!!errors.role}>
                <FieldLabel htmlFor="role">Peran Pengguna <span className="text-rose-500">*</span></FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="role"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                        <SelectTrigger className="h-11 rounded-none shadow-none focus-visible:ring-1 focus-visible:ring-offset-0">
                          <SelectValue placeholder="Pilih Peran" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none shadow-sm">
                          <SelectItem value="System Administrator">System Administrator</SelectItem>
                          <SelectItem value="Instructor">Instruktur (Guru)</SelectItem>
                          <SelectItem value="Guardian">Wali Murid</SelectItem>
                          <SelectItem value="Public Guest">Public Guest</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FieldContent>
                {errors.role && <FieldError>{errors.role.message}</FieldError>}
              </Field>

              {/* Full Legal Name */}
              <div className="md:col-span-2">
                <Field orientation="vertical" data-invalid={!!errors.fullLegalName}>
                  <FieldLabel htmlFor="fullLegalName">Nama Lengkap Resmi <span className="text-rose-500">*</span></FieldLabel>
                  <FieldContent>
                    <Input 
                      id="fullLegalName" 
                      placeholder="Sesuai KTP / Akta Kelahiran" 
                      className="h-11 rounded-none shadow-none focus-visible:ring-1 focus-visible:ring-offset-0"
                      disabled={isPending}
                      {...register("fullLegalName")} 
                    />
                  </FieldContent>
                  {errors.fullLegalName && <FieldError>{errors.fullLegalName.message}</FieldError>}
                </Field>
              </div>

              {/* NIK */}
              <Field orientation="vertical" data-invalid={!!errors.nationalIdentityNumber}>
                <FieldLabel htmlFor="nationalIdentityNumber">Nomor Induk Kependudukan (NIK) <span className="text-rose-500">*</span></FieldLabel>
                <FieldContent>
                  <Input 
                    id="nationalIdentityNumber" 
                    placeholder="16 Digit NIK" 
                    maxLength={16} 
                    className="h-11 rounded-none shadow-none focus-visible:ring-1 focus-visible:ring-offset-0"
                    disabled={isPending}
                    {...register("nationalIdentityNumber")} 
                  />
                </FieldContent>
                {errors.nationalIdentityNumber && <FieldError>{errors.nationalIdentityNumber.message}</FieldError>}
              </Field>

              {/* Gender */}
              <Field orientation="vertical" data-invalid={!!errors.gender}>
                <FieldLabel htmlFor="gender">Jenis Kelamin <span className="text-rose-500">*</span></FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                        <SelectTrigger className="h-11 rounded-none shadow-none focus-visible:ring-1 focus-visible:ring-offset-0">
                          <SelectValue placeholder="Pilih Jenis Kelamin" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none shadow-sm">
                          <SelectItem value="Male">Laki-Laki</SelectItem>
                          <SelectItem value="Female">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FieldContent>
                {errors.gender && <FieldError>{errors.gender.message}</FieldError>}
              </Field>

              {/* Birth Date */}
              <div className="md:col-span-2">
                <Field orientation="vertical" data-invalid={!!errors.birthDate}>
                  <FieldLabel htmlFor="birthDate">Tanggal Lahir <span className="text-rose-500">*</span></FieldLabel>
                  <FieldContent>
                    <Input 
                      type="date"
                      id="birthDate" 
                      className="h-11 rounded-none shadow-none focus-visible:ring-1 focus-visible:ring-offset-0"
                      disabled={isPending}
                      {...register("birthDate")} 
                    />
                  </FieldContent>
                  {errors.birthDate && <FieldError>{errors.birthDate.message}</FieldError>}
                </Field>
              </div>

            </div>

            {errorMessage && (
              <div className="p-4 bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-sm rounded-none">
                {errorMessage}
              </div>
            )}

            <div className="pt-6">
              <Button 
                type="submit" 
                disabled={isPending} 
                className="w-full md:w-auto min-w-[200px] h-[52px] bg-slate-900 hover:bg-slate-800 text-white rounded-none shadow-none font-bold text-base"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  "Simpan Identitas Master"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
