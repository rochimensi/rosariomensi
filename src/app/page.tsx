"use client";

import { useEffect, useRef, useState } from "react";
import { copyByLocale, Locale } from "./i18n";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FeaturedWork } from "./components/FeaturedWork";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProcessSection } from "./components/ProcessSection";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = copyByLocale[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "es" ? "es" : "en";
  }, [locale]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileNavOpen && !langMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileNavOpen(false);
        setLangMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileNavOpen, langMenuOpen]);

  useEffect(() => {
    if (!langMenuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [langMenuOpen]);

  return (
    <main className="bg-[#f7f4ee] text-[rgb(38,38,38)]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <Navbar
          t={t}
          locale={locale}
          setLocale={setLocale}
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
          langMenuOpen={langMenuOpen}
          setLangMenuOpen={setLangMenuOpen}
          langMenuRef={langMenuRef}
        />
        <HeroSection t={t} />
        <FeaturedWork t={t} />
        <AboutSection t={t} />
        <ProcessSection t={t} locale={locale} />
        <ContactSection t={t} />
        <Footer t={t} />
      </div>
      <a
        href="#top"
        aria-label={t.backToTop}
        title={t.backToTop}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={`fixed right-4 bottom-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-[#f7f4ee]/95 text-lg text-black/75 shadow-sm backdrop-blur-sm transition-all duration-300 sm:right-6 sm:bottom-6 ${
          showBackToTop
            ? "translate-y-0 opacity-100 hover:border-black/40 hover:text-black"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <span aria-hidden="true">↑</span>
      </a>
    </main>
  );
}
