import { NextResponse } from "next/server";
import { resolveShortlink } from "@/lib/shortlink";

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const shortlink = resolveShortlink(slug);

  if (!shortlink) {
    // If slug is not recognized, redirect to homepage with 307
    const url = new URL("/", request.url);
    return NextResponse.redirect(url, 307);
  }

  // If destination is external, redirect directly
  if (shortlink.isExternal) {
    return NextResponse.redirect(shortlink.destination, 307);
  }

  // Internal relative redirect
  const targetUrl = new URL(shortlink.destination, request.url);
  return NextResponse.redirect(targetUrl, 307);
}
