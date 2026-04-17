import type { PageCopy } from "../i18n";

export function Footer({ t }: { t: PageCopy }) {
  return (
    <section aria-label="Colophon" className=" bg-[#f7f4ee] py-8 text-[rgb(38,38,38)] md:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
        <a href="#" className="font-display text-2xl italic tracking-[0.09rem] transition hover:text-black sm:text-3xl">
          Rosario Mensi
        </a>
        <p className="text-sm text-black/65">{t.colophon}</p>
      </div>
    </section>
  );
}
