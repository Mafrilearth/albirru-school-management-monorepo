import { NextResponse } from "next/server";
import { z } from "zod";

const feedbackSchema = z.object({
  category: z.string().min(1, "Category is required"),
  title: z.string().optional(),
  content: z.string().min(5, "Feedback must be at least 5 characters"),
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
      title: title || "Untitled",
      content,
      contactName: contactName || "Anonymous",
      contactInfo: contactInfo || "-",
    });

    // Build instant WhatsApp link for direct forwarding
    const waPhone = "6281234567890";
    const waMessage = `Feedback submission for Al-Birru Primary School:

Category: ${category}
${title ? `Title: ${title}\n` : ""}Content:
"${content}"
${contactName ? `Contributor: ${contactName}\n` : ""}${contactInfo ? `Contact: ${contactInfo}` : ""}`;

    const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(
      waMessage,
    )}`;

    return NextResponse.json({
      success: true,
      message: "Feedback submitted successfully.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error while recording feedback.",
      },
      { status: 500 },
    );
  }
}
