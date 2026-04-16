"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { copyByLocale, Locale } from "./i18n";

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden border border-black/10 bg-[linear-gradient(135deg,rgba(17,17,17,0.08),rgba(17,17,17,0.02)_35%,rgba(255,255,255,0.7)_70%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(17,17,17,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(17,17,17,0.1),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(17,17,17,0.08),transparent_20%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#f7f4ee] to-transparent" />
      <span className="relative z-10 inline-flex h-full min-h-[inherit] items-end p-6 text-xs uppercase tracking-[0.21rem] text-black/55">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const t = copyByLocale[locale];
  const backToTopLabel = locale === "es" ? "Volver arriba" : "Back to top";

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

  return (
    <main className="bg-[#f7f4ee] text-[rgb(38,38,38)]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 isolate">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 bottom-0 -z-10 w-screen -translate-x-1/2 bg-[#f7f4ee]/90 backdrop-blur-sm"
          />
          <div className="flex items-center justify-between gap-6 py-4">
            <a href="#top" className="font-display text-2xl italic tracking-[0.09rem] sm:text-3xl">
              Rosario Mensi
            </a>
            <div className="flex items-center gap-5">
              <nav className="hidden gap-7 text-sm uppercase tracking-[0.19rem] text-black/70 md:flex">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-black/15 px-2 py-1 text-[11px] uppercase tracking-[0.2rem] text-black/65">
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
            </div>
          </div>
        </header>

        <section id="top" className="px-0 py-14 text-center md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <p className="mx-auto mb-5 max-w-fit text-center text-xs uppercase tracking-[0.26rem] text-black/55">
              {t.hero.eyebrow}
            </p>
            <h1
              className="mx-auto max-w-6xl font-display italic text-5xl leading-[1.05] tracking-[-0.12rem] sm:text-7xl lg:text-[7.2rem]"
              style={{ fontVariationSettings: "normal" }}
            >
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-black/70 sm:mt-12 sm:text-xl">
              {t.hero.description}
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-12 gap-6 pt-5 text-center text-sm leading-6 text-black/65 md:justify-items-center">
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

        <section id="work" className="py-16 md:py-24">
          <div className="mb-10 flex justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26rem] text-black/55">{t.work.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                {t.work.title}
              </h2>
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
                    <h3 className="font-display text-3xl italic leading-tight tracking-[-0.06rem] sm:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-6">
                    <p className="text-sm leading-7 text-black/65 sm:text-base">{project.description}</p>
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
              </article>
            ))}
          </div>
        </section>

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
                <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                  {t.about.title}
                </h2>
                <div className="mt-5 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.21rem] text-black/60">
                  {t.about.years}
                </div>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p1}</p>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p2}</p>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p3}</p>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p4}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 border-t border-black/10 pt-6 md:grid-cols-12">
                <div className="md:col-span-6">
                  <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">
                    {t.about.skillsTitle}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-black/65">
                    {t.about.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">
                    {t.about.lifestyleTitle}
                  </h3>
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

        <section id="process" className="border-b border-black/10 py-20 md:py-28 lg:py-32">
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="text-xs uppercase tracking-[0.26rem] text-black/55">{t.process.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
              {t.process.title}
            </h2>
          </div>
          <div className="border-t border-black/10">
            {t.process.steps.map((step, index) => (
              <article
                key={step.title}
                aria-labelledby={`process-step-${index}-title`}
                className="grid grid-cols-1 gap-4 border-b border-black/10 py-12 last:border-b-0 md:grid-cols-12 md:items-start md:gap-x-8 md:gap-y-0 md:py-16 lg:gap-x-10 lg:py-20"
              >
                <div className="whitespace-nowrap font-sans text-sm font-normal tracking-[0.2rem] text-black/45 tabular-nums md:col-span-1 md:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3
                  id={`process-step-${index}-title`}
                  className="font-display text-3xl italic tracking-[-0.04rem] sm:text-[1.65rem] md:col-span-3"
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-black/65 sm:text-base sm:leading-7 md:col-span-8 md:pt-1">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer id="contact" className="relative isolate py-16 text-center text-white md:py-20">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 bottom-0 -z-10 w-screen -translate-x-1/2 bg-[rgb(31,31,31)]"
          />
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-0">
            <p className="mx-auto max-w-fit text-xs uppercase tracking-[0.26rem] text-white/55">
              {t.contact.eyebrow}
            </p>
            <div className="mx-auto mt-3 w-full max-w-4xl">
              <h2 className="font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                {t.contact.title}
              </h2>
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

        <section aria-label="Colophon" className=" bg-[#f7f4ee] py-8 text-[rgb(38,38,38)] md:py-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <a
              href="#top"
              className="font-display text-2xl italic tracking-[0.09rem] transition hover:text-black sm:text-3xl"
            >
              Rosario Mensi
            </a>
            <p className="text-sm text-black/65">{t.colophon}</p>
          </div>
        </section>
      </div>
      <a
        href="#top"
        aria-label={backToTopLabel}
        title={backToTopLabel}
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
/*
"use client";

import { useState } from "react";
import Image from "next/image";

type Locale = "en" | "es";

const copyByLocale = {
  en: {
    languageLabel: "Language",
    nav: { work: "Work", about: "About", process: "Process", contact: "Contact" },
    hero: {
      eyebrow: "DIGITAL SOLUTIONS",
      title: "Digital products, done right, with intention.",
      description:
        "I am a Systems Engineer who dove into Design to craft holistic, user-centered experiences with empathy for each teammate's role, moving faster through GenAI, AI-first product development, and workflow automation.",
      cta: "View selected work",
    },
    work: {
      eyebrow: "Selected Projects",
      title: "Featured Work",
      projectImageLabel: "PROJECT IMAGE",
      defaultCodeCta: "Here's the code",
      featuredWork: [
        {
          title: "Senior Software Engineer",
          tag: "Software Engineering",
          description:
            "Working remotely for US and Canada clients (Contract), with multicultural teams, using modern technologies to deliver high-quality software solutions. I have contributed across travel, e-commerce, health, education, and a leading online payment platform. Due to NDA agreements, I cannot share additional details about these client engagements.",
          image: "/engineering.png",
        },
        {
          title: "Ansel - Health Insurance Digital Ecosystem",
          tag: "Principal UX / UI Design",
          description:
            "I lead the design process for a health insurance digital ecosystem, which includes web portals and mobile apps for brokers, employers, and employees. The challenge was to design a white-label solution that could be customized for each strategic partner. The goal: deliver a better claims experience and easier enrollments.",
          image: "/ansel-health.png",
        },
        {
          title: "R&O Golf Range - Driving Range Management System",
          tag: "Design & Development",
          description:
            "A driving range management system with a responsive experience for users of all ages and skill levels, plus admin dashboards to support a full digital transformation. I also create social media content to connect customers with the range.",
          image: "/ro-golf-range.png",
          codeUrl: "https://www.instagram.com/ro.golfrange/",
          codeCta: "Visit the range",
        },
        {
          title: "Omar Peralta - Magazine Article",
          tag: "Marketing / Design",
          description:
            "A magazine feature crafted for a professional golf player, marking my first marketing-focused project in a magazine format.",
          image: "/omar-peralta.png",
        },
        {
          title: "SpendWise - Personal Finance Management Application",
          tag: "Product Design & Development",
          description:
            "A mobile-friendly web application designed to help users track expenses, analyze spending patterns, and receive AI-powered financial advice.",
          image: "/spendwise.png",
          codeUrl: "https://github.com/rochimensi/spendwise",
          codeCta: "Here's the code",
        },
        {
          title: "AllSeas - Viagens by Liana Lied",
          tag: "Design & Development",
          description:
            "A landing page for a travel company. The challenge was giving the client a simple way to manage and update the website content independently.",
          image: "/allseas.png",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "The Bridge Between Tech and People",
      years: "14+ Years of Experience",
      p1: "I started as a Systems Engineer, focused on how things work. Over time, I became passionate about how things feel when people use them.",
      p2: "That curiosity pulled me into UX Design. I connect logic with empathy and design with a deep understanding of technical systems, while advocating for the human side of every decision.",
      p3: "I am especially excited about AI-first product development, using GenAI and automation not just as tools, but as accelerators for better thinking, faster iteration, and more impactful outcomes.",
      p4: "I also create social media content, translating ideas into clear stories and visuals that connect with the right audience.",
      skillsTitle: "Skills",
      lifestyleTitle: "Lifestyle",
      lifestyleP1:
        "Outside of work, you'll probably find me on a golf course, exploring new wines and music, or planning my next trip somewhere new.",
      hometownLinkLabel: "Mar del Plata, Argentina",
      hometownSuffix: "is my hometown. The perfect place to have a great work-life balance.",
      skills: [
        "Product Architecture & Development",
        "UX Research & Design",
        "Information architecture",
        "Interaction Design",
        "Design Systems",
        "GenAI & Automation",
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "My Process",
      steps: [
        {
          title: "Discover",
          text: "I map the context with stakeholder interviews, competitive scans, and user research, because strong products start with listening closely and asking the questions that matter.",
        },
        {
          title: "Define",
          text: "I turn research into plain-language problem statements, simple profiles of who we're helping, and maps of how people move through a task. Tools like UX Pilot help me spot confusing steps or unclear wording early, so everyone agrees on the plan before we design screens.",
        },
        {
          title: "Design",
          text: "I start with rough sketches of screens and flows, then shape them into polished layouts people can click through. I try a few directions, compare them with the team, and keep refining details like spacing, typography, and clarity.",
        },
        {
          title: "Test",
          text: "I watch real people use what we built (or a clickable preview) and note where they hesitate or get stuck. I also use simple behavior metrics when available, so improvements are based on real evidence, not assumptions.",
        },
        {
          title: "Iterate",
          text: "After launch, I keep improving the product with small releases, steady tweaks, and follow-up checks with users and data. Good design is ongoing care as needs and products evolve.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's create something beautiful together",
      descriptionLine1: "I'm always open to discussing new projects, creative ideas,",
      descriptionLine2: "or opportunities to be part of your vision.",
      linkedin: "LINKEDIN",
    },
    colophon: "© 2026 — Designed and developed by me.",
  },
  es: {
    languageLabel: "Idioma",
    nav: { work: "Proyectos", about: "Sobre mí", process: "Proceso", contact: "Contacto" },
    hero: {
      eyebrow: "SOLUCIONES DIGITALES",
      title: "Productos digitales bien hechos, con intención.",
      description:
        "Soy Ingeniera en Sistemas y me sumergí en el Diseño para crear experiencias integrales y centradas en las personas, con empatía por el rol de cada integrante del equipo, acelerando resultados con GenAI, desarrollo de productos AI-first y automatización de flujos de trabajo.",
      cta: "Ver proyectos seleccionados",
    },
    work: {
      eyebrow: "Proyectos Seleccionados",
      title: "Trabajo Destacado",
      projectImageLabel: "IMAGEN DEL PROYECTO",
      defaultCodeCta: "Ver código",
      featuredWork: [
        {
          title: "Senior Software Engineer",
          tag: "Ingeniería de Software",
          description:
            "Trabajé de forma remota para clientes de EE. UU. y Canadá (contract), en equipos multiculturales y con tecnologías modernas para entregar soluciones de alta calidad. Participé en proyectos de travel, e-commerce, salud, educación y una plataforma líder de pagos online. Por acuerdos de NDA, no puedo compartir más detalles sobre estos clientes.",
          image: "/engineering.png",
        },
        {
          title: "Ansel - Ecosistema Digital de Seguro de Salud",
          tag: "Principal UX / UI Design",
          description:
            "Lideré el proceso de diseño de un ecosistema digital de salud, con portales web y apps móviles para brokers, empleadores y empleados. El desafío fue crear una solución white-label personalizable para cada partner estratégico. El objetivo: mejorar la experiencia de claims y simplificar enrollments.",
          image: "/ansel-health.png",
        },
        {
          title: "R&O Golf Range - Sistema de Gestión",
          tag: "Diseño y Desarrollo",
          description:
            "Un sistema de gestión para driving range, con una experiencia responsive para usuarios de todas las edades y niveles, además de paneles de administración para impulsar una transformación digital completa. También creo contenido para redes sociales para conectar clientes con la marca.",
          image: "/ro-golf-range.png",
          codeUrl: "https://www.instagram.com/ro.golfrange/",
          codeCta: "Visitar la cancha",
        },
        {
          title: "Omar Peralta - Artículo de Revista",
          tag: "Marketing / Diseño",
          description:
            "Un artículo de revista realizado para un golfista profesional, marcando mi primer proyecto de marketing en formato editorial.",
          image: "/omar-peralta.png",
        },
        {
          title: "SpendWise - App de Finanzas Personales",
          tag: "Diseño y Desarrollo de Producto",
          description:
            "Una aplicación web mobile-friendly diseñada para ayudar a las personas a registrar gastos, analizar hábitos de consumo y recibir recomendaciones financieras impulsadas por IA.",
          image: "/spendwise.png",
          codeUrl: "https://github.com/rochimensi/spendwise",
          codeCta: "Ver código",
        },
        {
          title: "AllSeas - Viagens by Liana Lied",
          tag: "Diseño y Desarrollo",
          description:
            "Una landing page para una empresa de viajes. El desafío fue darle al cliente una forma simple de administrar y actualizar el contenido del sitio de forma autónoma.",
          image: "/allseas.png",
        },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "El Puente Entre Tecnología y Personas",
      years: "14+ Años de Experiencia",
      p1: "Comencé como Ingeniera en Sistemas, enfocada en cómo funcionan las cosas. Con el tiempo, me apasionó cómo se sienten las experiencias cuando las personas las usan.",
      p2: "Esa curiosidad me llevó al UX Design. Conecto lógica y empatía, y diseño con un entendimiento profundo de los sistemas técnicos, sin perder de vista el lado humano en cada decisión.",
      p3: "Me entusiasma especialmente el desarrollo de productos AI-first, usando GenAI y automatización no solo como herramientas, sino como aceleradores para pensar mejor, iterar más rápido y generar mayor impacto.",
      p4: "También creo contenido para redes sociales, transformando ideas en historias y piezas visuales claras que conectan con la audiencia correcta.",
      skillsTitle: "Habilidades",
      lifestyleTitle: "Estilo de vida",
      lifestyleP1:
        "Fuera del trabajo, probablemente me encuentres en una cancha de golf, explorando nuevos vinos y música, o planeando mi próximo viaje.",
      hometownLinkLabel: "Mar del Plata, Argentina",
      hometownSuffix: "es mi ciudad natal. El lugar perfecto para un gran equilibrio entre vida y trabajo.",
      skills: [
        "Arquitectura y Desarrollo de Producto",
        "Investigación y Diseño UX",
        "Arquitectura de información",
        "Diseño de interacción",
        "Design Systems",
        "GenAI y Automatización",
      ],
    },
    process: {
      eyebrow: "Cómo trabajo",
      title: "Mi Proceso",
      steps: [
        {
          title: "Descubrir",
          text: "Mapeo el contexto con entrevistas a stakeholders, análisis competitivos e investigación con usuarios, porque los buenos productos comienzan escuchando y haciendo las preguntas correctas.",
        },
        {
          title: "Definir",
          text: "Transformo la investigación en problemas claros, perfiles de usuarios y mapas de recorrido. Herramientas como UX Pilot me ayudan a detectar confusiones temprano para alinear al equipo antes de diseñar pantallas.",
        },
        {
          title: "Diseñar",
          text: "Comienzo con bocetos de flujos y pantallas, y luego los convierto en propuestas visuales pulidas y navegables. Exploro distintas direcciones y ajusto detalles como espaciado, tipografía y claridad.",
        },
        {
          title: "Testear",
          text: "Observo cómo las personas usan lo que construimos (o un prototipo clickable) para detectar fricciones. También reviso métricas simples cuando están disponibles, para decidir mejoras con evidencia real.",
        },
        {
          title: "Iterar",
          text: "Después del lanzamiento, continúo mejorando el producto con releases pequeños, ajustes constantes y validaciones posteriores con usuarios y datos. El buen diseño evoluciona junto al producto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Creemos algo hermoso juntos",
      descriptionLine1: "Siempre estoy abierta a conversar sobre nuevos proyectos, ideas creativas,",
      descriptionLine2: "u oportunidades para ser parte de tu visión.",
      linkedin: "LINKEDIN",
    },
    colophon: "© 2026 — Diseñado y desarrollado por mí.",
  },
} as const;

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden border border-black/10 bg-[linear-gradient(135deg,rgba(17,17,17,0.08),rgba(17,17,17,0.02)_35%,rgba(255,255,255,0.7)_70%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(17,17,17,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(17,17,17,0.1),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(17,17,17,0.08),transparent_20%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#f7f4ee] to-transparent" />
      <span className="relative z-10 inline-flex h-full min-h-[inherit] items-end p-6 text-xs uppercase tracking-[0.21rem] text-black/55">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = copyByLocale[locale];

  return (
    <main className="bg-[#f7f4ee] text-[rgb(38,38,38)]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 bg-[#f7f4ee]/90 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-6 py-4">
            <a href="#top" className="font-display text-2xl italic tracking-[0.09rem] sm:text-3xl">
              Rosario Mensi
            </a>
            <div className="flex items-center gap-5">
              <nav className="hidden gap-7 text-sm uppercase tracking-[0.19rem] text-black/70 md:flex">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-black/15 px-2 py-1 text-[11px] uppercase tracking-[0.2rem] text-black/65">
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
            </div>
          </div>
        </header>

        <section id="top" className="px-0 py-14 text-center md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <p className="mx-auto mb-5 max-w-fit text-center text-xs uppercase tracking-[0.26rem] text-black/55">
              {t.hero.eyebrow}
            </p>
            <h1
              className="mx-auto max-w-6xl font-display italic text-5xl leading-[1.05] tracking-[-0.12rem] sm:text-7xl lg:text-[7.2rem]"
              style={{ fontVariationSettings: "normal" }}
            >
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-black/70 sm:mt-12 sm:text-xl">
              {t.hero.description}
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-12 gap-6 pt-5 text-center text-sm leading-6 text-black/65 md:justify-items-center">
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

        <section id="work" className="py-16 md:py-24">
          <div className="mb-10 flex justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26rem] text-black/55">{t.work.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                {t.work.title}
              </h2>
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
                      <ImagePlaceholder
                        label={`0${index + 1} / ${t.work.projectImageLabel}`}
                      />
                    </div>
                  )}
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-12 md:items-start">
                  <div className="flex flex-col gap-5 md:col-span-6">
                    <span className="inline-flex w-fit rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.21rem] text-black/55">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-3xl italic leading-tight tracking-[-0.06rem] sm:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-6">
                    <p className="text-sm leading-7 text-black/65 sm:text-base">{project.description}</p>
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
              </article>
            ))}
          </div>
        </section>

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
                <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                  {t.about.title}
                </h2>
                <div className="mt-5 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.21rem] text-black/60">
                  {t.about.years}
                </div>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p1}</p>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p2}</p>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p3}</p>
                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">{t.about.p4}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 border-t border-black/10 pt-6 md:grid-cols-12">
                <div className="md:col-span-6">
                  <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">
                    {t.about.skillsTitle}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-black/65">
                    {t.about.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">
                    {t.about.lifestyleTitle}
                  </h3>
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

        <section id="process" className="border-b border-black/10 py-20 md:py-28 lg:py-32">
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="text-xs uppercase tracking-[0.26rem] text-black/55">{t.process.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
              {t.process.title}
            </h2>
          </div>
          <div className="border-t border-black/10">
            {t.process.steps.map((step, index) => (
              <article
                key={step.title}
                aria-labelledby={`process-step-${index}-title`}
                className="grid grid-cols-1 gap-4 border-b border-black/10 py-12 last:border-b-0 md:grid-cols-12 md:items-start md:gap-x-8 md:gap-y-0 md:py-16 lg:gap-x-10 lg:py-20"
              >
                <div className="whitespace-nowrap font-sans text-sm font-normal tracking-[0.2rem] text-black/45 tabular-nums md:col-span-1 md:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3
                  id={`process-step-${index}-title`}
                  className="font-display text-3xl italic tracking-[-0.04rem] sm:text-[1.65rem] md:col-span-3"
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-black/65 sm:text-base sm:leading-7 md:col-span-8 md:pt-1">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer id="contact" className="relative isolate py-16 text-center text-white md:py-20">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 bottom-0 -z-10 w-screen -translate-x-1/2 bg-[rgb(31,31,31)]"
          />
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-0">
            <p className="mx-auto max-w-fit text-xs uppercase tracking-[0.26rem] text-white/55">
              {t.contact.eyebrow}
            </p>
            <div className="mx-auto mt-3 w-full max-w-4xl">
              <h2 className="font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                {t.contact.title}
              </h2>
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

        <section aria-label="Colophon" className=" bg-[#f7f4ee] py-8 text-[rgb(38,38,38)] md:py-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <a
              href="#top"
              className="font-display text-2xl italic tracking-[0.09rem] transition hover:text-black sm:text-3xl"
            >
              Rosario Mensi
            </a>
            <p className="text-sm text-black/65">{t.colophon}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
import Image from "next/image";

const featuredWork = [
  {
    title: "Senior Software Engineer",
    tag: "Software Engineering",
    description:
    "Working remotely for US and Canada clients (Contract), with multicultural teams, using modern technologies to deliver high-quality software solutions. I have contributed across travel, e-commerce, health, education, and a leading online payment platform. Due to NDA agreements, I cannot share additional details about these client engagements.",
    image: "/engineering.png",
  },
  {
    title: "Ansel - Health Insurance Digital Ecosystem",
    tag: "Principal UX / UI Design",
    description:
    "I lead the design process for a health insurance digital ecosystem, which includes web portals and mobile app for Brokers, Employers, and Employees. The challenge was to design a white-label solution that could be customized for each Strategic Partner. The goal: give a better Claims experience, and easier Enrollments.",
    image: "/ansel-health.png",
  },
  {
    title: "R&O Golf Range - Driving Range Management System",
    tag: "Design & Development",
    description:
    "A Driving Range management system. A responsive experience for users of all ages and skill levels, plus Admin dashboards to support a full digital transformation. I'm also responsible for creating social media content to connect customers with the range.",
    image: "/ro-golf-range.png",
    codeUrl: "https://www.instagram.com/ro.golfrange/",
    codeCta: "Visit the range",
  },
  {
    title: "Omar Peralta - Magazine Article",
    tag: "Marketing / Design",
    description:
    "A magazine feature crafted for a professional golf player, marking my first marketing-focused project in a magazine format.",
    image: "/omar-peralta.png",
  },
  {
    title: "SpendWise - Personal Finance Management Application",
    tag: "Product Design & Development",
    description:
    "A mobile-friendly web application designed to help users track their expenses, analyze spending patterns, and receive AI-powered financial advice.",
    image: "/spendwise.png",
    codeUrl: "https://github.com/rochimensi/spendwise",
    codeCta: "Here's the code",
  },
  {
    title: "AllSeas - Viagens by Liana Lied",
    tag: "Design & Development",
    description:
    "A Landing Page for a Travel Company. The challenge was that the client itself wanted to manage and update the web page.",
    image: "/allseas.png",
  },
];

const processSteps = [
  {
    title: "Discover",
    text: "I map the context with stakeholder interviews, competitive scans, and user research — because strong products start with listening closely and asking the questions that matter.",
  },
  {
    title: "Define",
    text: "I turn research into plain-language problem statements, simple profiles of who we're helping, and maps of how people move through a task — often on shared FigJam boards. Tools like UX Pilot help me spot confusing steps or unclear wording early, so everyone agrees on the plan before we design screens.",
  },
  {
    title: "Design",
    text: "I start with rough sketches of screens and flows, then shape them into polished layouts people can click through. I try a few directions, compare them with the team, and keep tuning the small things — spacing, type, and clarity — so the experience feels intentional.",
  },
  {
    title: "Test",
    text: "I watch real people use what we built (or a clickable preview) and note where they hesitate or get stuck. I also look at simple numbers when we have them — what people use, where they drop off — so fixes are grounded in what actually happens, not guesses.",
  },
  {
    title: "Iterate",
    text: "After launch, I keep improving the product: small releases, steady tweaks, and follow-up checks with users and data. Good design isn't a one-time handoff — it's ongoing care as needs and the product change.",
  },
];

const skills = [
  "Product Architecture & Development",
  "UX Research & Design",
  "Information architecture",
  "Interaction Design",
  "Design Systems",
  "GenAI & Automation",
];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden border border-black/10 bg-[linear-gradient(135deg,rgba(17,17,17,0.08),rgba(17,17,17,0.02)_35%,rgba(255,255,255,0.7)_70%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(17,17,17,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(17,17,17,0.1),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(17,17,17,0.08),transparent_20%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#f7f4ee] to-transparent" />
      <span className="relative z-10 inline-flex h-full min-h-[inherit] items-end p-6 text-xs uppercase tracking-[0.21rem] text-black/55">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f7f4ee] text-[rgb(38,38,38)]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 bg-[#f7f4ee]/90 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-6 py-4">
            <a href="#top" className="font-display text-2xl italic tracking-[0.09rem] sm:text-3xl">
              Rosario Mensi
            </a>
            <nav className="hidden gap-7 text-sm uppercase tracking-[0.19rem] text-black/70 md:flex">
              <a className="transition hover:text-black" href="#work">
                Work
              </a>
              <a className="transition hover:text-black" href="#about">
                About
              </a>
              <a className="transition hover:text-black" href="#process">
                Process
              </a>
              <a className="transition hover:text-black" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section
          id="top"
          className="px-0 py-14 text-center md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl">
            <p className="mx-auto mb-5 max-w-fit text-xs uppercase tracking-[0.26rem] text-center text-black/55">
              DIGITAL SOLUTIONS
            </p>
            <h1
              className="mx-auto max-w-6xl font-display italic text-5xl leading-[1.05] tracking-[-0.12rem] sm:text-7xl lg:text-[7.2rem]"
              style={{ fontVariationSettings: "normal" }}
            >
              Digital products, done right, with intention.
            </h1>
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-black/70 sm:mt-12 sm:text-xl">
              I am a Systems Engineer who dove into Design to craft holistic, user-centered
              experiences with empathy for each teammate's role, moving faster through GenAI,
              AI-first product development, and workflow automation.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-12 gap-6 pt-5 text-center text-sm leading-6 text-black/65 md:justify-items-center">
              <a
                href="#work"
                className="col-span-12 inline-flex items-center gap-3 border-b border-black/30 pb-1 text-black uppercase tracking-[3.6px] transition hover:border-black"
              >
                View selected work
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mb-10 flex justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26rem] text-black/55">Selected Projects</p>
              <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                Featured Work
              </h2>
            </div>
          </div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {featuredWork.map((project, index) => (
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
                      <ImagePlaceholder label={`0${index + 1} / PROJECT IMAGE`} />
                    </div>
                  )}
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:mt-12">
                  <div className="flex flex-col gap-5 md:col-span-6">
                    <span className="inline-flex w-fit rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.21rem] text-black/55">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-3xl italic leading-tight tracking-[-0.06rem] sm:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-6">
                    <p className="text-sm leading-7 text-black/65 sm:text-base">
                      {project.description}
                    </p>
                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-3 border-b border-black/30 pb-1 text-black uppercase tracking-[3.6px] transition hover:border-black"
                      >
                        {project.codeCta ?? "Here's the code"}
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
              </article>
            ))}
          </div>
        </section>

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
              <p className="text-xs uppercase tracking-[0.26rem] text-black/55">About</p>
              <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                The Bridge Between Tech and People
              </h2>
              <div className="mt-5 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.21rem] text-black/60">
                14+ Years of Experience
              </div>
              <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
              I started as a Systems Engineer, focused on <i>how things work</i>. But over time, I became passionate about <i>how things feel</i> when using them.
              </p>
              <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
              That curiosity pulled me into UX Design. I connect logic with empathy and design with a deep understanding of technical systems while advocating for the human side of every decision.
              </p>
              <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
              I am especially excited about AI-first product development — using GenAI and automation not just as tools, but as accelerators for better thinking, faster iteration, and more impactful outcomes.
              </p>
              <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
              I also create content for social media, translating ideas into clear stories and visuals that connect with the right audience.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 border-t border-black/10 pt-6 md:grid-cols-12">
              <div className="md:col-span-6">
                <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">Skills</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-black/65">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-xs uppercase tracking-[0.26rem] text-black/55">
                  Lifestyle
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/65">
                Outside of work, you'll probably find me on a golf course, exploring new wines and music, or planning my next trip somewhere new.
                </p>
                <p className="mt-4 text-sm leading-7 text-black/65">
                <a href="https://maps.app.goo.gl/5QTfR747WKNkPf9h6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline border-b border-black/30">
                  Mar del Plata, Argentina</a>
                  , is my hometown. The perfect place to have a great work-life balance.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section id="process" className="border-b border-black/10 py-20 md:py-28 lg:py-32">
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="text-xs uppercase tracking-[0.26rem] text-black/55">How I work</p>
            <h2 className="mt-3 font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
            My Process
            </h2>
          </div>
          <div className="border-t border-black/10">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                aria-labelledby={`process-step-${index}-title`}
                className="grid grid-cols-1 gap-4 border-b border-black/10 py-12 last:border-b-0 md:grid-cols-12 md:items-start md:gap-x-8 md:gap-y-0 md:py-16 lg:gap-x-10 lg:py-20"
              >
                <div className="whitespace-nowrap font-sans text-sm font-normal tracking-[0.2rem] text-black/45 tabular-nums md:col-span-1 md:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3
                  id={`process-step-${index}-title`}
                  className="font-display text-3xl italic tracking-[-0.04rem] sm:text-[1.65rem] md:col-span-3"
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-black/65 sm:text-base sm:leading-7 md:col-span-8 md:pt-1">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer id="contact" className="relative isolate py-16 text-center text-white md:py-20">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 bottom-0 -z-10 w-screen -translate-x-1/2 bg-[rgb(31,31,31)]"
          />
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-0">
            <p className="mx-auto max-w-fit text-xs uppercase tracking-[0.26rem] text-white/55">
              Contact
            </p>
            <div className="mx-auto mt-3 w-full max-w-4xl">
              <h2 className="font-display text-4xl italic tracking-[-0.06rem] sm:text-5xl">
                {"Let's create something beautiful together"}
              </h2>
              <p className="mt-12 text-sm leading-7 text-white/65 sm:mt-14 sm:text-base md:mt-16">
                I&apos;m always open to discussing new projects, creative ideas,
                <br />
                or opportunities to be part of your vision.
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
                className="inline-flex pb-1 text-sm transition hover:border-white"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </footer>

        <section
          aria-label="Colophon"
          className=" bg-[#f7f4ee] py-8 text-[rgb(38,38,38)] md:py-8"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <a
              href="#top"
              className="font-display text-2xl italic tracking-[0.09rem] transition hover:text-black sm:text-3xl"
            >
              Rosario Mensi
            </a>
            <p className="text-sm text-black/65">© 2026 — Designed and Developed all by myself.. don't wanna be :)</p>
          </div>
        </section>
      </div>
    </main>
  );
}
*/
