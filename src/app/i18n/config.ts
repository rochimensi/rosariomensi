export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** `/[locale]` prefix for links, e.g. `/en`, `/es` */
export function localeHref(locale: Locale, hash?: string): string {
  const base = `/${locale}`;
  return hash ? `${base}#${hash.replace(/^#/, "")}` : base;
}

/** Current path with a different locale segment (use with `usePathname()`). */
export function replaceLocaleInPathname(pathname: string, next: Locale): string {
  const stripped = pathname.replace(/^\/(en|es)/, "") || "";
  return `/${next}${stripped}`;
}
