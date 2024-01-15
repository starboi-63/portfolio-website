"use client";

import ExperienceCard from "@/components/experience-card";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";

const experienceData = [
  {
    organization: "Full-Stack at Brown",
    titles: ["Software Engineer"],
    dates: "SEP 2023 — PRESENT",
    accomplishments: [
      "Developed full-stack web applications for the Conversational AI Lab and Rangel Research Team at Brown University.",
      "Designed elegant, responsive UI for websites in close collaboration with clients.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
    ],
    logo: {
      src: "/fsab-logo.svg",
      alt: "Full-Stack at Brown Logo",
      width: 42,
      height: 42,
    },
    links: [
      {
        text: "FSAB Website",
        url: "https://fullstackatbrown.github.io/website/",
      },
      {
        text: "GitHub",
        url: "https://github.com/fullstackatbrown",
      },
      {
        text: "LinkedIn",
        url: "https://www.linkedin.com/company/full-stack-at-brown/",
      },
      {
        text: "Facebook",
        url: "https://www.facebook.com/FullStackBrown",
      },
    ],
  },
  {
    organization: "Brown Space Engineering",
    titles: ["Flight Software Lead", "Flight Software Developer"],
    dates: "SEP 2022 — PRESENT",
    accomplishments: [
      "Overseeing a team of 10+ members in the development of the operating system for Perovskite Visuals and Degradation eXperiment (PVDX), a 3U-CubeSat approved by NASA's CubeSat Launch Initiative (CSLI) to test the resilience of next-gen perovskite solar cells (PSCs) in harsh orbital environments.",
      "Collaborating with the executive board in weekly meetings to align project goals and milestones, ensuring successful integration with the launch vehicle and compliance with NASA's CubeSat standard.",
      "Designed a watchdog system to monitor the health of tasks within the satellite's OS and a sensor-locking system to enable concurrent data retrieval from multiple satellite sensors across I2C serial communication buses.",
    ],
    skills: ["C", "I2C", "FreeRTOS"],
    logo: {
      src: "/bse-logo.svg",
      alt: "Brown Space Engineering Logo",
      width: 42,
      height: 42,
    },
    links: [
      { text: "BSE Website", url: "https://brownspace.org" },
      { text: "GitHub", url: "https://github.com/BrownSpaceEngineering" },
      { text: "LinkedIn", url: "https://www.linkedin.com/company/brownspace" },
      { text: "Facebook", url: "https://www.facebook.com/browncubesat/" },
    ],
  },
  {
    organization: "Linear Algebra with Theory",
    titles: ["Teaching Assistant"],
    dates: "SEP — DEC 2023",
    accomplishments: [
      "Collaborated with Professor Madeline Brandt to teach students in MATH 0540 (Linear Algebra with Theory).",
      "Held regular TA office-hours and facilitated weekly recitations to help students with linear algebra concepts, mathematical proof-writing, and LaTeX typesetting.",
    ],
    skills: ["LaTeX", "Overleaf", "Visual Studio Code", "LaTeX Workshop"],
    logo: {
      src: "/brown-university-logo.svg",
      alt: "Brown University Logo",
      width: 42,
      height: 42,
    },
    links: [
      {
        text: "Brown Mathematics Department",
        url: "https://www.brown.edu/academics/math/",
      },
      {
        text: "Professor Brandt's Website",
        url: "https://sites.google.com/view/madelinebrandt",
      },
    ],
  },
  {
    organization: "Brown-RISD Game Developers",
    titles: ["Game Developer"],
    dates: "JAN — MAY 2023",
    accomplishments: [
      "Coordinated with an inter-university team of programmers and artists to conceptualize, produce, and launch Rift-Rush, a 2D-platformer game inspired by Portal and Celeste.",
      "Developed core logic including player movement and collision physics using C# and Unity Game Engine.",
    ],
    skills: ["C#", "Unity"],
    logo: {
      src: "/brgd-logo.svg",
      alt: "Brown-RISD Game Developers Logo",
      width: 66,
      height: 42,
    },
    links: [
      { text: "BRGD Website", url: "https://brownrisdgames.itch.io" },
      { text: "Rift Rush", url: "https://brownrisdgames.itch.io/rift-rush" },
      { text: "X", url: "https://twitter.com/BrownRISDGames" },
      { text: "Instagram", url: "https://www.instagram.com/brownrisdgamedev/" },
      {
        text: "LinkedIn",
        url: "https://www.linkedin.com/company/brown-risd-game-developers/",
      },
    ],
  },
];

const projectData = [
  {
    title: "Astronomical Data Acquisition & Image Processing",
    subtitle: "Computerized GOTO Equatorial Telescope Mount",
    dates: "AUG 2020 — PRESENT",
    description:
      "A fully computerized telescope mount capable of imaging deep-sky celestial objects using long-exposure astrophotography. I’ve been using the mount to gather and process astronomical data when I’m home for holidays.",
    skills: [
      "AutoCAD",
      "SolidWorks",
      "ASCOM",
      "NINA",
      "PHD2",
      "PixInsight",
      "OnStep",
      "Photoshop",
    ],
    thumbnail: {
      src: "/placeholder.png",
      alt: "Computerized EQ-Mount Thumbnail",
      width: 125,
      height: 42,
    },
    href: "/eq-mount",
  },
  {
    title: "Portfolio Website",
    dates: "DEC 2023 — JAN 2024",
    description:
      "The personal portfolio website you're currently visiting — designed and developed by myself using Next.js.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
      "Vercel",
      "Illustrator",
    ],
    thumbnail: {
      src: "/placeholder.png",
      alt: "Portfolio Website Thumbnail",
      width: 125,
      height: 42,
    },
    href: "https://github.com/starboi-63/portfolio-website",
    external: true,
  },
  {
    title: "Growth Stock Screener",
    dates: "MAY 2023 — JAN 2024",
    description:
      "An automated stock screening system with 5 stages based on time-tested criteria for predicting growth stock super-performance.",
    skills: ["Python", "Selenium", "pandas", "aiohttp", "asyncio", "yfinance"],
    thumbnail: {
      src: "/placeholder.png",
      alt: "Growth Stock Screener Thumbnail",
      width: 125,
      height: 42,
    },
    href: "/stock-screener",
  },
  {
    title: "Plasmodial Slime Simulation",
    dates: "NOV — DEC 2023",
    description:
      "An aesthetic computer-graphics based simulation of plasmodial slime growth using Unity compute shaders.",
    skills: ["C#", "HLSL", "Unity"],
    thumbnail: {
      src: "/placeholder.png",
      alt: "Plasmodial Slime Simulation Thumbnail",
      width: 125,
      height: 42,
    },
    href: "https://github.com/starboi-63/plasmodial-slime",
    external: true,
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms gap between each card
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // Adjust the duration as needed
    },
  },
};

export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 min-w-screen min-h-screen bg-gradient-to-tr from-slate-950 to-slate-900" />
      <div className="flex justify-center space-x-20">
        <div className="sticky top-0 pt-28 h-screen flex flex-col items-start">
          <h1 className="text-5xl font-bold text-slate-200">Tanish Makadia</h1>
          <div className="flex space-x-4 items-center pt-2">
            <h2 className="text-xl font-medium text-slate-400">CS + Math</h2>
            <div className="w-px h-6 bg-slate-700" />
            <h2 className="text-xl font-medium text-slate-400">
              Brown University
            </h2>
          </div>
          <div className="h-px w-367px bg-slate-700 my-4" />
          <p className="w-96 text-base font-normal text-slate-500">
            Hey! I'm an undergraduate student who's fascinated by the
            intersection of <span className="text-slate-200">programming</span>,{" "}
            <span className="text-slate-200">proof-writing</span>, and{" "}
            <span className="text-slate-200">astronomy</span>. When I'm not
            grinding coursework, you'll find me [dynamic content].
          </p>
        </div>
        <motion.div
          id="experience"
          className="section-anchor pt-24 flex flex-col items-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experienceData.map((data, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceCard {...data} />
            </motion.div>
          ))}

          <div />
          <motion.div
            className="relative h-px w-2/3 bg-slate-700"
            variants={itemVariants}
          >
            <div
              id="projects"
              className="section-anchor absolute -translate-y-[55px]"
            />
          </motion.div>
          <div />

          {projectData.map((data, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
