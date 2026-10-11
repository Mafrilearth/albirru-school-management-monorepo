import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = contactFormSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { fullName, phone, email, studentCandidateName, message } =
      result.data;

    // TODO: Replace with custom Drizzle ORM implementation later
    console.log("Mock saving inquiry to DB", { fullName, phone, email });

    // Build personalized WhatsApp pre-filled link
    const waPhone = "6281234567890"; // Official School WhatsApp hotline
    const greetingText = `Assalamu'alaikum Admin SD Al-Birru,
My Name: ${fullName}
WhatsApp No: ${phone}${email ? `\nEmail: ${email}` : ""}${studentCandidateName ? `\nProspective Student Name: ${studentCandidateName}` : ""}

Admissions Inquiry Message:
"${message}"

Please provide further information regarding registration and campus visit schedules. Thank you.`;

    const encodedText = encodeURIComponent(greetingText);
    const whatsappUrl = `https://wa.me/${waPhone}?text=${encodedText}`;

    return NextResponse.json({
      success: true,
      message:
        "Your message has been successfully received by the SD Al-Birru system.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "A server error occurred while processing your message.",
      },
      { status: 500 },
    );
  }
}
