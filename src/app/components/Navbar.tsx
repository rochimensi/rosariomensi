"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type MouseEvent,
  type RefObject,
  type SetStateAction,
} from "react";
import { localeHref, replaceLocaleInPathname, type Locale } from "../i18n/config";
import type { PageCopy } from "../i18n";

export type NavbarProps = {
  t: PageCopy;
  locale: Locale;
  mobileNavOpen: boolean;
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
  langMenuOpen: boolean;
  setLangMenuOpen: Dispatch<SetStateAction<boolean>>;
  langMenuRef: RefObject<HTMLDivElement | null>;
  langMenuDesktopRef: RefObject<HTMLDivElement | null>;
};

export function Navbar({
  t,
  locale,
  mobileNavOpen,
  setMobileNavOpen,
  langMenuOpen,
  setLangMenuOpen,
  langMenuRef,
  langMenuDesktopRef,
}: NavbarProps) {
  const pathname = usePathname();
  const base = localeHref(locale);
  const [isScrolled, setIsScrolled] = useState(false);

  /** Next.js `<Link>` often does not scroll to `#hash` on the same route; mobile links also use `scroll={false}`. */
  const goToSection = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      const homePath = `/${locale}`;
      const onHome = pathname === homePath || pathname === `${homePath}/`;
      if (!onHome) return;
      e.preventDefault();
      setMobileNavOpen(false);
      const url = `${homePath}#${sectionId}`;
      window.history.replaceState(null, "", url);
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    [locale, pathname, setMobileNavOpen],
  );

  const goToTop = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      const homePath = `/${locale}`;
      const onHome = pathname === homePath || pathname === `${homePath}/`;
      if (!onHome) return;
      e.preventDefault();
      setMobileNavOpen(false);
      window.history.replaceState(null, "", homePath);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    [locale, pathname, setMobileNavOpen],
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const langDropdownClasses =
    "absolute right-0 top-full z-30 mt-1 min-w-28 rounded-lg border border-black/10 bg-white py-1 shadow-md";

  return (
    <header
      className={`sticky top-0 z-20 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-black/8 bg-white/70 shadow-[0_6px_24px_rgba(0,0,0,0.05)] backdrop-blur-md supports-backdrop-filter:bg-white/55"
          : "bg-white"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative">
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 py-2 sm:gap-4 md:gap-6">
          {/* Left: section links (desktop) / menu (mobile) */}
          <div className="flex min-h-10 min-w-0 items-center justify-start">
            <nav
              className="hidden flex-wrap gap-x-5 gap-y-1 text-xs font-medium uppercase tracking-[0.17rem] text-black/70 md:flex lg:gap-x-7 lg:text-xs lg:tracking-[0.19rem]"
              aria-label="Primary"
            >
              <Link
                className="transition hover:text-black"
                href={localeHref(locale, "work")}
                onClick={(e) => goToSection(e, "work")}
              >
                {t.nav.work}
              </Link>
              <Link
                className="transition hover:text-black"
                href={localeHref(locale, "about")}
                onClick={(e) => goToSection(e, "about")}
              >
                {t.nav.about}
              </Link>
              <Link
                className="transition hover:text-black"
                href={localeHref(locale, "process")}
                onClick={(e) => goToSection(e, "process")}
              >
                {t.nav.process}
              </Link>
              <Link
                className="transition hover:text-black"
                href={localeHref(locale, "reviews")}
                onClick={(e) => goToSection(e, "reviews")}
              >
                {t.nav.reviews}
              </Link>
            </nav>
            <button
              type="button"
              id="mobile-nav-toggle"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-black/75 transition hover:border-black/30 hover:text-black md:hidden"
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
          </div>

          <div className="flex min-w-0 justify-center px-1">
            <Link
              href={base}
              className="font-display text-center text-xl italic leading-tight tracking-[0.07rem] text-[rgb(38,38,38)] sm:text-2xl sm:tracking-[0.09rem] md:text-3xl"
              onClick={(e) => goToTop(e)}
            >
              Rosario Mensi
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3 sm:gap-4">
            <Link
              href={localeHref(locale, "contact")}
              className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.17rem] text-black/70 transition hover:text-black md:inline-block lg:text-sm lg:tracking-[0.19rem]"
              onClick={(e) => goToSection(e, "contact")}
            >
              {t.nav.contact}
            </Link>
            <div ref={langMenuDesktopRef} className="relative hidden md:block">
              <button
                type="button"
                className="inline-flex h-10 min-w-13 items-center justify-center gap-1 rounded-full border border-black/15 px-2.5 text-[11px] font-medium uppercase tracking-[0.18rem] text-black/75 transition hover:border-black/30 hover:text-black"
                aria-expanded={langMenuOpen}
                aria-haspopup="listbox"
                aria-label={`${t.languageLabel}: ${locale === "en" ? "EN" : "ES"}`}
                onClick={() => setLangMenuOpen((o) => !o)}
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
                <ul role="listbox" aria-label={t.languageLabel} className={langDropdownClasses}>
                  <li role="presentation">
                    <Link
                      href={replaceLocaleInPathname(pathname, "en")}
                      role="option"
                      aria-selected={locale === "en"}
                      scroll={false}
                      className={`flex w-full items-center px-3 py-2 text-left text-[11px] uppercase tracking-[0.18rem] transition ${
                        locale === "en"
                          ? "bg-black text-white"
                          : "text-black/70 hover:bg-black/5 hover:text-black"
                      }`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      English
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link
                      href={replaceLocaleInPathname(pathname, "es")}
                      role="option"
                      aria-selected={locale === "es"}
                      scroll={false}
                      className={`flex w-full items-center px-3 py-2 text-left text-[11px] uppercase tracking-[0.18rem] transition ${
                        locale === "es"
                          ? "bg-black text-white"
                          : "text-black/70 hover:bg-black/5 hover:text-black"
                      }`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      Español
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>

            <div ref={langMenuRef} className="relative md:hidden">
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
                <ul role="listbox" aria-label={t.languageLabel} className={langDropdownClasses}>
                  <li role="presentation">
                    <Link
                      href={replaceLocaleInPathname(pathname, "en")}
                      role="option"
                      aria-selected={locale === "en"}
                      scroll={false}
                      className={`flex w-full items-center px-3 py-2 text-left text-[11px] uppercase tracking-[0.18rem] transition ${
                        locale === "en"
                          ? "bg-black text-white"
                          : "text-black/70 hover:bg-black/5 hover:text-black"
                      }`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      English
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link
                      href={replaceLocaleInPathname(pathname, "es")}
                      role="option"
                      aria-selected={locale === "es"}
                      scroll={false}
                      className={`flex w-full items-center px-3 py-2 text-left text-[11px] uppercase tracking-[0.18rem] transition ${
                        locale === "es"
                          ? "bg-black text-white"
                          : "text-black/70 hover:bg-black/5 hover:text-black"
                      }`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      Español
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <nav
          id="mobile-nav"
          className={mobileNavOpen ? "border-t border-black/10 pb-3 md:hidden" : "hidden md:hidden"}
          aria-label="Primary"
        >
          <div className="flex flex-col gap-1 pt-2 text-sm uppercase tracking-[0.19rem] text-black/70">
            <Link
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href={localeHref(locale, "work")}
              onClick={(e) => goToSection(e, "work")}
              scroll={false}
            >
              {t.nav.work}
            </Link>
            <Link
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href={localeHref(locale, "about")}
              onClick={(e) => goToSection(e, "about")}
              scroll={false}
            >
              {t.nav.about}
            </Link>
            <Link
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href={localeHref(locale, "process")}
              onClick={(e) => goToSection(e, "process")}
              scroll={false}
            >
              {t.nav.process}
            </Link>
            <Link
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href={localeHref(locale, "reviews")}
              onClick={(e) => goToSection(e, "reviews")}
              scroll={false}
            >
              {t.nav.reviews}
            </Link>
            <Link
              className="rounded-md px-2 py-2.5 transition hover:bg-black/4 hover:text-black"
              href={localeHref(locale, "contact")}
              onClick={(e) => goToSection(e, "contact")}
              scroll={false}
            >
              {t.nav.contact}
            </Link>
          </div>
        </nav>
        </div>
      </div>
    </header>
  );
}
