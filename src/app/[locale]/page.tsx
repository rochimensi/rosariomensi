import { notFound } from "next/navigation";
import { HomePageClient } from "../components/HomePageClient";
import { isLocale } from "../i18n/config";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <HomePageClient locale={locale} />;
}
