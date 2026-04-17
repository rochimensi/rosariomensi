"use client";

import type { Dispatch, RefObject, SetStateAction } from "react";
import type { Locale, PageCopy } from "../i18n";

export type NavbarProps = {
  t: PageCopy;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
  langMenuOpen: boolean;
  setLangMenuOpen: Dispatch<SetStateAction<boolean>>;
  langMenuRef: RefObject<HTMLDivElement | null>;
};

export function Navbar({
  t,
  locale,
  setLocale,
  mobileNavOpen,
  setMobileNavOpen,
  langMenuOpen,
  setLangMenuOpen,
  langMenuRef,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 isolate">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 bottom-0 -z-10 w-screen -translate-x-1/2 bg-[#f7f4ee]/90 backdrop-blur-sm"
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 py-4 sm:gap-6">
          <a href="#" className="font-display text-2xl italic tracking-[0.09rem] sm:text-3xl">
            Rosario Mensi
          </a>
          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            <nav className="hidden gap-7 text-sm uppercase tracking-[0.19rem] text-black/70 md:flex" aria-label="Primary">
              <a className="transition hover:text-black" href="#work">
                {t.nav.work}
              </a>
              <a className="transition hover:text-black" href="#about">
                {t.nav.about}
              </a>
              <a className="transition hover:text-black" href="#process">
                {t.nav.process}
              </a>
              <a className="transition hover:text-black" href="#contact">
                {t.nav.contact}
              </a>
            </nav>
            <button
              type="button"
              id="mobile-nav-toggle"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/75 transition hover:border-black/30 hover:text-black md:hidden"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              onClick={() => {
                setLangMenuOpen(false);
                setMobileNavOpen((o) => !o);
              }}
            >
              <span className="sr-only">{mobileNavOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
              {mobileNavOpen ? (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
            <div ref={langMenuRef} className="relative md:static">
              <div className="hidden items-center gap-2 rounded-full border border-black/15 px-2 py-1 text-[11px] uppercase tracking-[0.2rem] text-black/65 md:inline-flex">
                <span className="sr-only">{t.languageLabel}</span>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`rounded-full px-2 py-1 transition ${
                    locale === "en" ? "bg-black text-white" : "hover:text-black"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("es")}
                  className={`rounded-full px-2 py-1 transition ${
                    locale === "es" ? "bg-black text-white" : "hover:text-black"
                  }`}
                >
                  ES
                </button>
              </div>
              <div className="md:hidden">
                <button
                  type="button"
                  className="inline-flex h-10 min-w-13 items-center justify-center gap-1 rounded-full border border-black/15 px-2.5 text-[11px] font-medium uppercase tracking-[0.18rem] text-black/75 transition hover:border-black/30 hover:text-black"
                  aria-expanded={langMenuOpen}
                  aria-haspopup="listbox"
                  aria-label={`${t.languageLabel}: ${locale === "en" ? "EN" : "ES"}`}
                  onClick={() => {
                    setMobileNavOpen(false);
                    setLangMenuOpen((o) => !o);
                  }}
                >
                  <span aria-hidden="true">{locale === "en" ? "EN" : "ES"}</span>
                  <svg
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 shrink-0 text-black/55 transition ${langMenuOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {langMenuOpen ? (
                  <ul
                    role="listbox"
                    aria-label={t.languageLabel}
                    className="absolute right-0 top-full z-30 mt-1 min-w-28 rounded-lg border border-black/10 bg-[#f7f4ee] py-1 shadow-md"
                  >
                    <li role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={locale === "en"}
                        className={`flex w-full items-center px-3 py-2 text-left text-[11px] uppercase tracking-[0.18rem] transition ${
                          locale === "en"
                            ? "bg-black text-white"
                            : "text-black/70 hover:bg-black/5 hover:text-black"
                        }`}
                        onClick={() => {
                          setLocale("en");
                          setLangMenuOpen(false);
                        }}
                      >
                        English
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={locale === "es"}
                        className={`flex w-full items-center px-3 py-2 text-left text-[11px] uppercase tracking-[0.18rem] transition ${
                          locale === "es"
                            ? "bg-black text-white"
                            : "text-black/70 hover:bg-black/5 hover:text-black"
                        }`}
                        onClick={() => {
                          setLocale("es");
                          setLangMenuOpen(false);
                        }}
                      >
                        Español
                      </button>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <nav
          id="mobile-nav"
          className={mobileNavOpen ? "border-t border-black/10 pb-3 md:hidden" : "hidden md:hidden"}
          aria-label="Primary"
        >
          <div className="flex flex-col gap-1 pt-2 text-sm uppercase tracking-[0.19rem] text-black/70">
            <a
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href="#work"
              onClick={() => setMobileNavOpen(false)}
            >
              {t.nav.work}
            </a>
            <a
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href="#about"
              onClick={() => setMobileNavOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href="#process"
              onClick={() => setMobileNavOpen(false)}
            >
              {t.nav.process}
            </a>
            <a
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
