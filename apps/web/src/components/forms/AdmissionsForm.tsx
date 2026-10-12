"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ConfettiCelebration } from "@/components/common/ConfettiCelebration";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  type AdmissionsSubmissionPayload,
  AdmissionsSubmissionSchema,
} from "@/lib/validations/admissions";

// NOTE: Ensure this action exists and accepts AdmissionsFormValues
import { submitAdmissionAction } from "@/modules/admissions/actions";

export function AdmissionsForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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
        setErrorMessage(
          response.error_descriptor?.message ||
            "Failed to process registration.",
        );
      }
    } catch (_error) {
      setErrorMessage("A system error occurred. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <Card className="p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
        <ConfettiCelebration />
        <div className="flex flex-col items-center justify-center gap-4 relative z-10">
          <div className="size-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-primary">
            <CheckCircle2 className="size-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground tracking-tight">
            Registration Received!
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Alhamdulillah, your student registration data has been received. Our
            admissions committee will contact you via Email/WhatsApp within 24
            hours for next steps.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="mt-4"
          >
            Register Another Student
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 sm:p-10 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground tracking-tight">
          Admissions Registration Form 2026
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Please complete the prospective student details accurately. Fields
          marked with <span className="text-destructive">*</span> are required.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col gap-4">
          <Field
            orientation="vertical"
            data-invalid={!!errors.prospectiveStudentName}
          >
            <FieldLabel htmlFor="prospectiveStudentName">
              Student&apos;s Full Legal Name{" "}
              <span className="text-destructive">*</span>
            </FieldLabel>
            <FieldContent>
              <Input
                id="prospectiveStudentName"
                placeholder="As shown on Birth Certificate"
                disabled={isSubmitting}
                {...register("prospectiveStudentName")}
              />
            </FieldContent>
            {errors.prospectiveStudentName && (
              <FieldError>{errors.prospectiveStudentName.message}</FieldError>
            )}
          </Field>

          <Field
            orientation="vertical"
            data-invalid={!!errors.prospectiveStudentBirthDate}
          >
            <FieldLabel htmlFor="prospectiveStudentBirthDate">
              Student&apos;s Date of Birth{" "}
              <span className="text-destructive">*</span>
            </FieldLabel>
            <FieldContent>
              <Input
                type="date"
                id="prospectiveStudentBirthDate"
                disabled={isSubmitting}
                {...register("prospectiveStudentBirthDate")}
              />
            </FieldContent>
            {errors.prospectiveStudentBirthDate && (
              <FieldError>
                {errors.prospectiveStudentBirthDate.message}
              </FieldError>
            )}
          </Field>

          <Field
            orientation="vertical"
            data-invalid={!!errors.guardianContactName}
          >
            <FieldLabel htmlFor="guardianContactName">
              Guardian&apos;s Full Legal Name{" "}
              <span className="text-destructive">*</span>
            </FieldLabel>
            <FieldContent>
              <Input
                id="guardianContactName"
                placeholder="Guardian Full Name"
                disabled={isSubmitting}
                {...register("guardianContactName")}
              />
            </FieldContent>
            {errors.guardianContactName && (
              <FieldError>{errors.guardianContactName.message}</FieldError>
            )}
          </Field>

          <Field
            orientation="vertical"
            data-invalid={!!errors.guardianContactPhone}
          >
            <FieldLabel htmlFor="guardianContactPhone">
              Active Phone Number <span className="text-destructive">*</span>
            </FieldLabel>
            <FieldContent>
              <Input
                type="tel"
                id="guardianContactPhone"
                placeholder="Example: 081234567890"
                disabled={isSubmitting}
                {...register("guardianContactPhone")}
              />
            </FieldContent>
            {errors.guardianContactPhone && (
              <FieldError>{errors.guardianContactPhone.message}</FieldError>
            )}
          </Field>

          <Field
            orientation="vertical"
            data-invalid={!!errors.guardianContactEmail}
          >
            <FieldLabel htmlFor="guardianContactEmail">
              Active Email Address <span className="text-destructive">*</span>
            </FieldLabel>
            <FieldContent>
              <Input
                type="email"
                id="guardianContactEmail"
                placeholder="Example: name@example.com"
                disabled={isSubmitting}
                {...register("guardianContactEmail")}
              />
            </FieldContent>
            {errors.guardianContactEmail && (
              <FieldError>{errors.guardianContactEmail.message}</FieldError>
            )}
          </Field>

          <Field
            orientation="vertical"
            data-invalid={!!errors.submittedDocumentsUrl}
          >
            <FieldLabel htmlFor="submittedDocumentsUrl">
              Document Storage Link
            </FieldLabel>
            <FieldContent>
              <Input
                type="url"
                id="submittedDocumentsUrl"
                placeholder="Folder link containing Family Card and Birth Certificate (Optional)"
                disabled={isSubmitting}
                {...register("submittedDocumentsUrl")}
              />
            </FieldContent>
            {errors.submittedDocumentsUrl && (
              <FieldError>{errors.submittedDocumentsUrl.message}</FieldError>
            )}
          </Field>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox id="terms" required className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-relaxed cursor-pointer"
              >
                I agree to the admissions terms &amp; conditions
              </Label>
              <p className="text-xs text-muted-foreground">
                I hereby certify that the contact details provided are accurate
                so the admissions committee can reach me.
              </p>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="mt-6 p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-md">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="mt-8 w-full font-medium"
        >
          {isSubmitting ? (
            <>
              <Loader2
                className="size-4 animate-spin"
                data-icon="inline-start"
              />
              <span>Processing Registration...</span>
            </>
          ) : (
            <>
              <Send className="size-4" data-icon="inline-start" />
              <span>Submit Registration</span>
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
