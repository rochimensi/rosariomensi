import type { PageCopy } from "../i18n";

export function ContactSection({ t }: { t: PageCopy }) {
  return (
    <footer id="contact" className="relative isolate py-16 text-center text-white md:py-20">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 bottom-0 -z-10 w-screen -translate-x-1/2 bg-[rgb(31,31,31)]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-0">
        <p className="mx-auto max-w-fit text-xs uppercase tracking-[0.26rem] text-white/55">{t.contact.eyebrow}</p>
        <div className="mx-auto mt-3 w-full max-w-4xl">
          <h2 className="font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-12 text-sm leading-7 text-white/65 sm:mt-14 sm:text-base md:mt-16">
            {t.contact.descriptionLine1}
            <br />
            {t.contact.descriptionLine2}
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col items-center gap-8 pt-10">
          <a
            href="mailto:rosario@example.com"
            className="inline-flex border-b border-white/30 pb-1 text-lg transition hover:border-white"
          >
            rochibass@gmail.com
          </a>
        </div>
        <div className="mt-4 flex w-full flex-col items-center gap-8 pt-4 text-white/65">
          <a
            href="https://www.linkedin.com/in/rosario-mensi-a5334640/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex pb-1 text-sm transition hover:border-white"
          >
            {t.contact.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
