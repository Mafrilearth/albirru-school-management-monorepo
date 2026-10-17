import arMessages from "../../../messages/ar.json";
import enMessages from "../../../messages/en.json";
import idMessages from "../../../messages/id.json";

export type Locale = "id" | "ar" | "en";
export type Translations = typeof idMessages;

export const DICTIONARY: Record<Locale, Translations> = {
  id: idMessages,
  ar: arMessages,
  en: enMessages,
};
