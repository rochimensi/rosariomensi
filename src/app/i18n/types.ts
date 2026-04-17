export type { Locale } from "./config";

export type Project = {
  title: string;
  tag: string;
  description: string;
  image: string;
  codeUrl?: string;
  codeCta?: string;
};

export type Step = {
  number: string;
  title: string;
  text: string;
};

export type PageCopy = {
  languageLabel: string;
  nav: {
    work: string;
    about: string;
    process: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: { eyebrow: string; title: string; description: string; cta: string };
  work: {
    eyebrow: string;
    title: string;
    clientsMarqueeLabel: string;
    projectImageLabel: string;
    defaultCodeCta: string;
    featuredWork: Project[];
  };
  about: {
    eyebrow: string;
    title: string;
    years: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    skillsTitle: string;
    lifestyleTitle: string;
    lifestyleP1: string;
    hometownLinkLabel: string;
    hometownSuffix: string;
    skills: string[];
  };
  process: { eyebrow: string; title: string; centerLabel: string; steps: Step[] };
  contact: {
    eyebrow: string;
    title: string;
    descriptionLine1: string;
    descriptionLine2: string;
    linkedin: string;
  };
  colophon: string;
  backToTop: string;
};
