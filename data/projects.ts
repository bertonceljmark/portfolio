const projects = [
  {
    id: 1,
    name: "Lawaai",
    description:
      "Project I built for my bachelor thesis. It's a website for a group I was a part of, that organizes events. Added some cool animations, blog system and image gallery. Group fell apart so the website is not live anymore :(",
    technologies: ["NextJS", "TypeScript", "Tailwind", "Strapi"],
    links: {
      github: "https://github.com/bertonceljmark/lawaai",
      website: "https://lawaai.vercel.app/",
    },
    image: "/img/website-lawaai.png",
    iframe: "",
  },
  {
    id: 2,
    name: "Holidays plan",
    description:
      "Web platform that helps you find various holidays destinations, based on provided paramaters. I built most of the frontend, most of the backed was built by my friend. Biggest challanges were implamenting admin panel, integrating mapbox and openai APIs.",
    technologies: ["NextJS", "TypeScript", "Tailwind", "Supabase"],
    links: {
      github: "",
      website: "https://holidaysplan.com/",
    },
    image: "/img/website-holidaysplan.png",
    iframe: "",
  },
  {
    id: 3,
    name: "Masha",
    description:
      "A fun little game I build for my girlfried. She loves it! (she also forgets that it exists, so virtual Masha dies A LOT)",
    technologies: ["NextJS", "TypeScript", "Tailwind", "MongoDB"],
    links: {
      github: "https://github.com/bertonceljmark/masha",
      website: "https://www.pikolino.si",
    },
    image: "",
    iframe: "https://www.pikolino.si",
  },
  {
    id: 4,
    name: "Horoscope",
    description:
      "Project built as a fun gag. It's a horoscope website, but instead of a real person writing them, it's a ChatGPT (don't tell anyone, it's a secret).",
    technologies: ["NextJS", "TypeScript", "Tailwind", "PostgreSQL"],
    links: {
      github: "https://github.com/bertonceljmark/horoskop",
      website: "https://horoskop-beta.vercel.app/",
    },
    image: "/img/website-horoskop.png",
    iframe: "",
  },
  {
    id: 5,
    name: "Berti",
    description:
      "Website built as a part of my bachelor thesis. It's a personal website, where I showcase my (dead) DJ career. It was built before I realized how cool React is, so it's just plain HTML, CSS and JS.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/bertonceljmark/berti",
      website: "http://berti.vip/",
    },
    image: "/img/website-berti.png",
    iframe: "",
  },
] as const;

export default projects;
