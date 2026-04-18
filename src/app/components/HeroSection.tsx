import type { Locale } from "../i18n/config";
import { localeHref } from "../i18n/config";
import type { PageCopy } from "../i18n";
import { HeroEyebrowTypewriter } from "./HeroEyebrowTypewriter";

export function HeroSection({ t, locale }: { t: PageCopy; locale: Locale }) {
  return (
    <section className="px-0 py-14 text-center md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <HeroEyebrowTypewriter
          text={t.hero.eyebrow}
          className="mx-auto mb-5 max-w-fit text-center text-xs uppercase tracking-[0.26rem] text-black/55"
        />
        <h1
          className="hero-fade-in hero-fade-in-delay-1 mx-auto max-w-6xl font-display italic text-5xl leading-[1.05] tracking-[-0.12rem] sm:text-7xl lg:text-[7.2rem]"
          style={{ fontVariationSettings: "normal" }}
        >
          {t.hero.title}
        </h1>
        <p className="hero-fade-in hero-fade-in-delay-2 mx-auto mt-10 max-w-3xl text-lg leading-8 text-black/70 sm:mt-12 sm:text-xl">
          {t.hero.description}
        </p>
        <div className="hero-fade-in hero-fade-in-delay-3 mx-auto mt-10 hidden max-w-2xl grid-cols-12 gap-6 pt-5 text-center text-sm leading-6 text-black/65 md:grid md:justify-items-center">
          <a
            href={localeHref(locale, "work")}
            className="hero-work-link col-span-12 inline-flex items-center gap-3 text-black uppercase tracking-[3.6px]"
          >
            {t.hero.cta}
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
}
