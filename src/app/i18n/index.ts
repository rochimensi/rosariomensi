import type { Locale } from "./config";
import { en } from "./en";
import { es } from "./es";
import type { PageCopy } from "./types";

export const copyByLocale: Record<Locale, PageCopy> = {
  en,
  es,
};

export type { Locale, PageCopy };
