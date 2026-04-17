import type { PageCopy } from "../i18n";

export function HeroSection({ t }: { t: PageCopy }) {
  return (
    <section className="px-0 py-14 text-center md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mx-auto mb-5 max-w-fit text-center text-xs uppercase tracking-[0.26rem] text-black/55">{t.hero.eyebrow}</p>
        <h1
          className="mx-auto max-w-6xl font-display italic text-5xl leading-[1.05] tracking-[-0.12rem] sm:text-7xl lg:text-[7.2rem]"
          style={{ fontVariationSettings: "normal" }}
        >
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-black/70 sm:mt-12 sm:text-xl">{t.hero.description}</p>
        <div className="mx-auto mt-10 hidden max-w-2xl grid-cols-12 gap-6 pt-5 text-center text-sm leading-6 text-black/65 md:grid md:justify-items-center">
          <a
            href="#work"
            className="col-span-12 inline-flex items-center gap-3 border-b border-black/30 pb-1 text-black uppercase tracking-[3.6px] transition hover:border-black"
          >
            {t.hero.cta}
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
}
