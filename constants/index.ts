export const NAV_LINKS = [
  {
    href: "/#experience",
    key: "experience",
    label: "Experience",
    active: false,
  },
  { href: "/#skills", key: "skills", label: "Skills", active: false },
  { href: "/#projects", key: "projects", label: "Projects", active: false },
  { href: "/#about", key: "about", label: "About", active: false },
  { href: "/#contact", key: "contact", label: "Contact", active: false },
];

export const TYPEWRITER = {
  staticForeward: "Hello ",
  dynamicWords: ["world,", "recruiters,", "friends,", "peers,", "drifters,"],
  staticAfterward: "I am ",
  name: "Tariq Hirji",
};

export const HERO_CONTENT = {
  title: "hero_content",
  subtitle:
    "I am a software developer mainly focused on frontend design and development.",
  location: "Based in Toronto, Canada",
};

export const SOCIALS = [
  { key: "email", href: "mailto:tariqhirji@gmail.com" },
  { key: "github", href: "https://github.com/tariqhirji" },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/tariq-hirji-272295189/",
  },
];

export const SKILLS = {
  title: "skills",
  subtitle: "My 2K23 player statline for the world of software development.",
  skillbars: {
    frontend: {
      title: "frontend",
      skills: [
        {
          skill: "HTML",
          level: 92,
        },
        {
          skill: "CSS",
          level: 88,
        },
        {
          skill: "JavaScript",
          level: 86,
        },
      ],
      colors: {
        bar: "#3498db",
        title: {
          text: "#fff",
          background: "#2980b9",
        },
      },
    },
  },
};
