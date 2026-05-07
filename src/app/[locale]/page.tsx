import { notFound } from "next/navigation";
import { AboutSection } from "../components/AboutSection";
import { BackToTopButton } from "../components/BackToTopButton";
import { ContactSection } from "../components/ContactSection";
import { FeaturedWork } from "../components/FeaturedWork";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProcessSection } from "../components/ProcessSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { ScrollToHashOnNavigation } from "../components/ScrollToHashOnNavigation";
import { copyByLocale } from "../i18n";
import { isLocale, type Locale } from "../i18n/config";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const t = copyByLocale[locale];

  return (
    <main className="bg-[#f7f4ee] text-[rgb(38,38,38)]">
      <Navbar t={t} locale={locale} />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-5 sm:px-8 lg:px-10">
        <HeroSection t={t} locale={locale} />
        <FeaturedWork t={t} />
        <AboutSection t={t} />
        <ProcessSection t={t} locale={locale} />
        <ReviewsSection t={t} />
        <ContactSection t={t} />
        <Footer t={t} locale={locale} />
      </div>
      <BackToTopButton label={t.backToTop} />
      <ScrollToHashOnNavigation locale={locale} />
    </main>
  );
}
