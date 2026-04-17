import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetDocumentLang } from "../components/SetDocumentLang";
import { isLocale, locales, type Locale } from "../i18n/config";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  return {
    alternates: {
      canonical: `/${l}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <SetDocumentLang locale={locale} />
      {children}
    </>
  );
}
