import Image from "next/image";
import type { PageCopy } from "../i18n";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { LogoMarquee } from "./LogoMarquee";

export function FeaturedWork({ t }: { t: PageCopy }) {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mb-10 flex justify-between">
        <div>
          <p className="relative z-10 text-xs uppercase tracking-[0.26rem] text-black/55 md:before:absolute md:before:top-1/2 md:before:right-full md:before:mr-6 md:before:block md:before:h-px md:before:w-[200px] md:before:-translate-y-1/2 md:before:bg-black/25 md:before:content-['']">
            {t.work.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">{t.work.title}</h2>
        </div>
      </div>

      <div className="space-y-10 sm:space-y-12 md:space-y-16">
        {t.work.featuredWork.map((project, index) => (
          <article
            key={project.title}
            className="group border-b border-black/10 pt-10 pb-10 transition duration-300 md:pt-12 md:pb-12"
          >
            <div className="overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  priority={index === 0}
                />
              ) : (
                <div className="min-h-64">
                  <ImagePlaceholder label={`0${index + 1} / ${t.work.projectImageLabel}`} />
                </div>
              )}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-12 md:items-start">
              <div className="flex flex-col gap-5 md:col-span-6">
                <span className="inline-flex w-fit rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.21rem] text-black/55">
                  {project.tag}
                </span>
                <h3 className="font-display text-3xl italic leading-tight tracking-[-0.06rem] sm:text-4xl">{project.title}</h3>
              </div>
              <div className="flex flex-col gap-5 md:col-span-6">
                <p className="text-base leading-8 text-black/65 sm:leading-7">{project.description}</p>
                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-3 border-b border-black/30 pb-1 text-black uppercase tracking-[3.6px] transition hover:border-black"
                  >
                    {project.codeCta ?? t.work.defaultCodeCta}
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14L21 3" />
                      <path d="M21 14v7H3V3h7" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </div>
            {index === 0 ? (
              <div className="mt-10 md:mt-12">
                <LogoMarquee t={t} className="pb-0 md:pb-0" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
