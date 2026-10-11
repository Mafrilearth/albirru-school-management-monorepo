"use client";

import { ArrowRight, Compass, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Tagline Badge */}
            <Badge
              variant="outline"
              className="gap-2 px-3.5 py-1 mb-6 text-xs font-medium rounded-full"
            >
              <Sparkles aria-hidden="true" className="size-3.5 text-primary" />
              <span>New Student Admissions AY 2026/2027 Open</span>
            </Badge>

            {/* High-Impact Headline */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
            >
              Nurturing Character, <br className="hidden sm:block" />{" "}
              Cultivating Knowledge, Building Integrity.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              SD Al-Birru delivers an integrated primary curriculum grounded in
              Islamic values in Bandung, fostering disciplined adab, analytical
              reasoning, and noble moral excellence.
            </p>

            {/* Call to Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                render={<Link href="/admissions" />}
                nativeButton={false}
                size="lg"
                className="gap-2 font-medium"
              >
                <span>Register Student Now</span>
                <ArrowRight className="size-4" />
              </Button>

              <Button
                render={<Link href="/programs" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="gap-2 font-medium"
              >
                <FileText className="size-4" />
                <span>Download Information Brochure</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Information Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <Card className="overflow-hidden shadow-sm">
              <CardContent className="aspect-[4/3] p-8 flex flex-col justify-between relative">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    School Operational Metrics
                  </span>
                  <Badge variant="secondary" className="gap-1.5 font-medium">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-primary"
                    />
                    Grade A (Superior)
                  </Badge>
                </div>

                <div className="relative z-10 my-auto text-center py-6">
                  <div className="size-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4 text-primary">
                    <Compass aria-hidden="true" className="size-8" />
                  </div>
                  <p className="text-lg font-bold text-foreground tracking-tight">
                    SD Al-Birru Primary School
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Institutional Accreditation Status
                  </p>
                </div>
              </CardContent>

              <CardFooter className="bg-muted/40 border-t border-border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground font-medium">
                <span>Daily Student Attendance Compliance</span>
                <span className="text-foreground font-semibold">
                  98.4% On-Time Attendance
                </span>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 sm:p-8">
            <dd className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              15 : 1
            </dd>
            <dt className="text-xs font-medium text-muted-foreground mt-2">
              Maximum Student-Teacher Ratio
            </dt>
          </Card>

          <Card className="p-6 sm:p-8">
            <dd className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              A
            </dd>
            <dt className="text-xs font-medium text-muted-foreground mt-2">
              BAN-S/M Accreditation Grade
            </dt>
          </Card>

          <Card className="p-6 sm:p-8">
            <dd className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              98.4%
            </dd>
            <dt className="text-xs font-medium text-muted-foreground mt-2">
              On-Time Attendance Rate
            </dt>
          </Card>
        </div>
      </div>
    </section>
  );
}
