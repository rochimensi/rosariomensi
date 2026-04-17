import Link from "next/link";
import type { Locale } from "../i18n/config";
import { localeHref } from "../i18n/config";
import type { PageCopy } from "../i18n";

export function Footer({ t, locale }: { t: PageCopy; locale: Locale }) {
  return (
    <section aria-label="Colophon" className=" bg-[#f7f4ee] py-8 text-[rgb(38,38,38)] md:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
        <Link href={localeHref(locale)} className="font-display text-2xl italic tracking-[0.09rem] transition hover:text-black sm:text-3xl">
          Rosario Mensi
        </Link>
        <p className="text-sm text-black/65">{t.colophon}</p>
      </div>
    </section>
  );
}
