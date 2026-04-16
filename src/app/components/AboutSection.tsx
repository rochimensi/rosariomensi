import Image from "next/image";
import type { PageCopy } from "../i18n";

export function AboutSection({ t }: { t: PageCopy }) {
  return (
    <section id="about" className="relative isolate py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 bottom-0 -z-10 w-screen -translate-x-1/2 bg-[rgb(237,235,233)]"
      />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="aspect-4/5 overflow-hidden md:col-span-5">
          <Image
            src="/rosario.jpg"
            alt="Rosario Mensi portrait"
            width={800}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-between gap-10 md:col-span-7">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.26rem] text-black/55">{t.about.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">{t.about.title}</h2>
            <div className="mt-5 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.21rem] text-black/60">
              {t.about.years}
            </div>
            <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p1}</p>
            <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p2}</p>
            <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p3}</p>
            <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p4}</p>
          </div>
          <div className="grid grid-cols-1 gap-10 border-t border-black/10 pt-6 md:grid-cols-12 md:gap-4">
            <div className="md:col-span-6">
              <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">{t.about.skillsTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-black/65">
                {t.about.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">{t.about.lifestyleTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-black/65">{t.about.lifestyleP1}</p>
              <p className="mt-4 text-sm leading-7 text-black/65">
                <a
                  href="https://maps.app.goo.gl/5QTfR747WKNkPf9h6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-black/30 underline"
                >
                  {t.about.hometownLinkLabel}
                </a>
                {", "}
                {t.about.hometownSuffix}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
