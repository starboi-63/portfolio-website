"use client";

import ExperienceCard from "@/components/experience-card";
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
    logoPath: "/fsab-logo.svg",
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
    logoPath: "/bse-logo.svg",
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
    skills: ["LaTeX", "Overleaf"],
    logoPath: "/brown-university-logo.svg",
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
    <main className="flex justify-center space-x-20 min-h-screen bg-gradient-to-tr from-blue-bg-dark to-red-bg-light">
      <div className="sticky top-32 flex flex-col mt-32 items-start">
        <h1 className="text-5xl font-bold text-grey-light">Tanish Makadia</h1>
        <div className="flex space-x-4 items-center pt-2">
          <h2 className="text-xl font-medium text-grey-medium">CS + Math</h2>
          <div className="w-px h-6 border-r border-grey-border" />
          <h2 className="text-xl font-medium text-grey-medium">
            Brown University
          </h2>
        </div>
        <div className="h-px w-367px border-b border-grey-border pt-4 mb-4" />
        <p className="w-96 text-base font-normal text-grey-dark">
          Hey! I'm an undergraduate student who's fascinated by the intersection
          of <span className="text-grey-light">programming</span>,{" "}
          <span className="text-grey-light">proof-writing</span>, and{" "}
          <span className="text-grey-light">astronomy</span>. When I'm not
          grinding coursework, you'll find me [dynamic content].
        </p>
      </div>
      <motion.div
        className="flex flex-col mt-32 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experienceData.map((data, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ExperienceCard {...data} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
