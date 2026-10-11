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
        { status: 400 }
      );
    }

    const { fullName, phone, email, studentCandidateName, message } = result.data;

    // TODO: Replace with custom Drizzle ORM implementation later
    console.log("Mock saving inquiry to DB", { fullName, phone, email });

    // Build personalized WhatsApp pre-filled link
    const waPhone = "6281234567890"; // Official School WhatsApp hotline
    const greetingText = `Assalamu'alaikum Admin SD Al-Birru,
Nama saya: ${fullName}
No. WhatsApp: ${phone}${email ? `\nEmail: ${email}` : ""}${studentCandidateName ? `\nNama Calon Ananda: ${studentCandidateName}` : ""}

Pesan Pertanyaan Admissions:
"${message}"

Mohon informasi lebih lanjut mengenai registration dan jadwal survei school. Terima kasih.`;

    const encodedText = encodeURIComponent(greetingText);
    const whatsappUrl = `https://wa.me/${waPhone}?text=${encodedText}`;

    return NextResponse.json({
      success: true,
      message: "Pesan Anda berhasil diterima oleh sistem SD Al-Birru.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server saat memproses pesan Anda.",
      },
      { status: 500 }
    );
  }
}
