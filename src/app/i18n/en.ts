import { PageCopy } from "./types";

const ashleyParagraphs = [
  "Rosario and I had the opportunity to work closely together over the past four years during her tenure as a Senior Software Engineer at 2U. She is a talented engineer who brings a wealth of knowledge to any team. Rosario consistently demonstrates technical excellence, a deep understanding of backend architectures, and a relentless commitment to quality.",
  "She has played a pivotal role in designing and implementing scalable systems that support some of our most critical business functions. Her ability to quickly understand complex problems and deliver elegant, maintainable solutions consistently impressed both our engineering team and stakeholders.",
  "Beyond her technical skills, Rosario was a reliable mentor for other engineers and a collaborative partner across teams. She always took the initiative to drive improvements in our development process and foster a culture of code quality and continuous learning.",
  "I can wholeheartedly recommend Rosario without reservation.",
];

const johnParagraphs = [
  "I worked with Rosario for nearly 3 years and I think any software development team would be extremely lucky to have her. She is incredibly talented and experienced while bringing the curiosity and patience required to be successful building high-quality software. As our product moved through development and release, Rosario moved seamlessly across our different workstreams. Her code reviews were always thorough and thoughtful, and she did a great job keeping the high level system architecture in mind while maintaining clean and readable codebases. Rosario was a key part in the success of our project, which after release processes over 5 million records each month, helping students and faculty enroll in courses across the world.",
];

const nitaiParagraphs = [
  "I had the pleasure of working alongside Rosario, and I can confidently say she is one of the most dedicated and talented software engineers I've ever worked with. Rosario consistently went above and beyond—whether that meant diving deep into complex technical challenges, mentoring team members, or stepping up in high-stakes situations without hesitation.",
  "She brings not just technical excellence, but also a calm, solution-focused mindset that raises the bar for everyone around her. Her code is elegant, her attention to detail is unmatched, and she has an incredible ability to think both strategically and pragmatically.",
  "Any team would be lucky to have her. Rosario is the kind of engineer who makes everyone better—through her work ethic, her collaboration, and her integrity.",
];

export const en: PageCopy = {
  languageLabel: "Language",
  nav: {
    work: "Work",
    about: "About me",
    process: "Process",
    reviews: "Reviews",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
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
    clientsMarqueeLabel: "Companies and teams I have worked with",
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
          "A magazine feature crafted for a professional golf player, marking my first marketing-focused project in a magazine format. The work included an interview process and documentation to align the story, tone, and visuals.",
        image: "/omar-peralta.png",
      },
      {
        title: "SpendWise - Personal Finance Management Application",
        tag: "Product Design & Development",
        description:
          "A mobile-friendly web application designed to help users track expenses, analyze spending patterns, and receive AI-powered financial advice, built as a code challenge completed in just 1 week.",
        image: "/spendwise.png",
        codeUrl: "https://github.com/rochimensi/spendwise",
        codeCta: "Here's the code",
      },
      {
        title: "AllSeas - Viagens by Liana Lied",
        tag: "Development",
        description:
          "A landing page for a travel company. The challenge was giving the client a simple way to manage and update the website content independently.",
        image: "/allseas.png",
      },
    ],
  },
  about: {
    eyebrow: "About me",
    title: "The Bridge Between Tech and People",
    years: "14+ Years of Experience",
    p1: "I started as a Systems Engineer, focused on how things work. Over time, I became passionate about how things feel when people use them.",
    p2: "That curiosity pulled me into UX Design. I connect logic with empathy and design with a deep understanding of technical systems, while advocating for the human side of every decision.",
    p3: "I am especially excited about AI-first product development, using GenAI and automation not just as tools, but as accelerators for better thinking, faster iteration, and more impactful outcomes.",
    p4: "I also create social media content, translating ideas into clear stories and visuals that connect with the right audience.",
    skillsTitle: "Skills",
    lifestyleTitle: "Lifestyle",
    lifestyleP1:
      "Outside of work, you'll probably find me on a golf course (9.6 HCP), exploring new wines and music, or planning my next trip somewhere new.",
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
    centerLabel: "Iterate\ndevelopment",
    steps: [
      {
        number: "01",
        title: "Discover",
        text: "I map the context with stakeholder interviews, competitive scans, and user research, because strong products start with listening closely and asking the questions that matter.",
      },
      {
        number: "02",
        title: "Define",
        text: "I turn research into plain-language problem statements, simple profiles of who we're helping, and maps of how people move through a task. Tools like UX Pilot help me spot confusing steps or unclear wording early, so everyone agrees on the plan before we design screens.",
      },
      {
        number: "03",
        title: "Design",
        text: "I start with rough sketches of screens and flows, then shape them into polished layouts people can click through. I try a few directions, compare them with the team, and keep refining details like spacing, typography, and clarity.",
      },
      {
        number: "04",
        title: "Test",
        text: "I watch real people use what we built (or a clickable preview) and note where they hesitate or get stuck. I also use simple behavior metrics when available, so improvements are based on real evidence, not assumptions.",
      },
    ],
  },
  reviews: {
    eyebrow: "Client feedback",
    title: "Reviews",
    items: [
      {
        name: "Ashley Beam",
        role: "Senior Director of Engineering, AI Enablement and Strategy at 2U",
        relationship: "Ashley managed Rosario directly",
        avatar: "/avatars/ashley.jpeg",
        paragraphs: ashleyParagraphs,
      },
      {
        name: "John Mathena",
        role: "Director of Software Engineering at 2U",
        relationship: "John worked with Rosario on the same team",
        avatar: "/avatars/john.jpeg",
        paragraphs: johnParagraphs,
      },
      {
        name: "Nitai Farmer",
        role: "Senior Software Engineer",
        relationship: "Nitai worked with Rosario on the same team",
        avatar: "/avatars/Tai.jpeg",
        paragraphs: nitaiParagraphs,
      },
    ],
    carouselPrev: "Previous review",
    carouselNext: "Next review",
    carouselDots: "Choose a review",
    carouselGoTo: "Go to review",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's create something beautiful together",
    descriptionLine1: "I'm always open to discussing new projects, creative ideas,",
    descriptionLine2: "or opportunities to be part of your vision.",
    linkedin: "LINKEDIN",
  },
  colophon: "© 2026 — Designed and developed by me.",
  backToTop: "Back to top",
};
