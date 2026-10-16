import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported school locales: Indonesian (default), Arabic, English
  locales: ["id", "ar", "en"],
  defaultLocale: "id",
  // 'always' ensures the default locale '/id' explicitly appears in the browser URL
  localePrefix: "always",
});
