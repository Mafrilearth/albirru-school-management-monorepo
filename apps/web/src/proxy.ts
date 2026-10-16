import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleRouting = createMiddleware(routing);

export default handleRouting;
export const proxy = handleRouting;

export const config = {
  // Match all request paths except:
  // 1. /api/* (API routes)
  // 2. /_next/* (Next.js internals)
  // 3. /_vercel/* (Vercel internals)
  // 4. /go/* (Shortlinks)
  // 5. /.well-known/* (Security & verification)
  // 6. Static files with extensions (e.g. favicon.ico, images)
  matcher: ["/((?!api|_next|_vercel|go|\\.well-known|.*\\..*).*)"],
};
