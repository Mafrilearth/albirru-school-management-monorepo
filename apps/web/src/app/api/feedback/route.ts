import { NextResponse } from "next/server";
import { z } from "zod";

const feedbackSchema = z.object({
  category: z.string().min(1, "Kategori harus dipilih"),
  title: z.string().optional(),
  content: z.string().min(5, "Masukan minimal 5 karakter"),
  contactName: z.string().optional(),
  contactInfo: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = feedbackSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { category, title, content, contactName, contactInfo } = result.data;

    // Log feedback for development team tracking
    console.info("[USER_FEATURE_FEEDBACK]", {
      timestamp: new Date().toISOString(),
      category,
      title: title || "Tanpa Judul",
      content,
      contactName: contactName || "Anonim",
      contactInfo: contactInfo || "-",
    });

    // Build instant WhatsApp link for direct forwarding
    const waPhone = "6281234567890";
    const waMessage = `Assalamu'alaikum Admin SD Al-Birru,
Saya ingin mengusulkan ide/masukan fitur:

Kategori: ${category}
${title ? `Judul: ${title}\n` : ""}Masukan/Ide:
"${content}"
${contactName ? `Pengusul: ${contactName}` : ""}
${contactInfo ? `Kontak: ${contactInfo}` : ""}`;

    const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(
      waMessage,
    )}`;

    return NextResponse.json({
      success: true,
      message: "Jazakumullahu khairan! Masukan Anda telah berhasil kami catat.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan sistem saat menyimpan masukan.",
      },
      { status: 500 },
    );
  }
}
