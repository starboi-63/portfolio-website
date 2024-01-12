import ExperienceCard from "@/components/experience-card";

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
    url: "https://fullstackatbrown.github.io/website/",
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
    url: "https://brownspace.org",
  },
];

export default function Home() {
  return (
    <main className="flex justify-center space-x-20 min-h-screen bg-gradient-to-tr from-blue-bg-dark to-red-bg-dark">
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
      <div className="flex flex-col mt-32 space-y-6">
        {experienceData.map((data, index) => (
          <ExperienceCard key={index} {...data} />
        ))}
      </div>
    </main>
  );
}
