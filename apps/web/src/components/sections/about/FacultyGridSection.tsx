"use client";

import { Award, GraduationCap, UserCheck } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface FacultyMember {
  name: string;
  role: string;
  degree: string;
  specialty: string;
  bio: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Ustadz H. Ahmad Fauzi, M.Pd.",
    role: "School Principal",
    degree: "Master of Islamic Education Management (UIN)",
    specialty: "Educational Leadership & Character",
    bio: "Over 15 years of leadership in integrated Islamic primary education with a focus on child fitrah.",
  },
  {
    name: "Ustadzah Siti Fatimah, Lc., M.Ag.",
    role: "Tahfidz & Qur'an Coordinator",
    degree: "Al-Azhar University Cairo & Qur'anic Studies",
    specialty: "Certified Sanad Tahfidz & Makharijul Huruf",
    bio: "Holder of Hafs 'an 'Ashim recitation sanad with extensive experience in early childhood talaqqi methods.",
  },
  {
    name: "Ustadz Rahmat Hidayat, S.Pd.",
    role: "Curriculum & Science Coordinator",
    degree: "B.Ed in Science & Technology Education (UPI)",
    specialty: "National Curriculum & Scientific Inquiry",
    bio: "Developer of applied science experiment modules and computational thinking for primary education.",
  },
  {
    name: "Ustadzah Nurul Aini, S.Psi.",
    role: "Guidance & Character Coordinator",
    degree: "B.A. in Child Developmental Psychology",
    specialty: "Positive Parenting & Student Counseling",
    bio: "Directs learning style mapping, developmental support, and parent consultation sessions.",
  },
  {
    name: "Ustadz Muhammad Ilham, S.Pd.I.",
    role: "Arabic & Hadith Instructor",
    degree: "B.A. in Arabic Language Education (LIPIA)",
    specialty: "Daily Conversational Arabic & Sunnah Ethics",
    bio: "Developed interactive storytelling and role-play methods to introduce Prophetic ethics with joy and engagement.",
  },
  {
    name: "Ustadzah Dewi Anggraeni, S.Pd.",
    role: "Homeroom Teacher & English Literacy",
    degree: "B.Ed in English Language Education",
    specialty: "Phonics & Reading Literacy",
    bio: "Applies active communicative pedagogy and builds a daily culture of reading illustrated books.",
  },
];

export function FacultyGridSection() {
  return (
    <section
      aria-labelledby="faculty-heading"
      className="py-20 md:py-28 lg:py-36 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="gap-2 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
          >
            <span>FACULTY COUNCIL</span>
          </Badge>
          <h2
            id="faculty-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
          >
            Faculty Council &amp; Dedicated Instructors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Teachers at SD Al-Birru are living role models (qudwah hasanah)
            guiding students with scholarship, patience, and sincere devotion.
          </p>
        </ScrollReveal>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((teacher, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Photo Placeholder Area */}
                <div className="aspect-[4/3] w-full rounded-lg bg-muted border border-border mb-6 flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                  <div className="size-16 rounded-full bg-background border border-border flex items-center justify-center text-primary mb-2 shadow-xs">
                    <UserCheck className="size-8" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    Faculty Photo
                  </span>
                </div>

                <Badge variant="secondary" className="mb-2">
                  {teacher.role}
                </Badge>

                <h3
                  id={`teacher-name-${idx}`}
                  className="text-lg font-bold text-foreground leading-snug"
                >
                  {teacher.name}
                </h3>

                <div className="space-y-1.5 my-3 text-xs text-muted-foreground border-y border-border py-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="size-4 shrink-0 text-primary" />
                    <span>{teacher.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="size-4 shrink-0 text-primary" />
                    <span>Focus: {teacher.specialty}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {teacher.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
