"use client";

import Image from "next/image";
import RotatingCard from "./rotating-card";

interface ExperienceCardProps {
  organization: string;
  titles: string[];
  dates: string;
  accomplishments: string[];
  skills: string[];
  logoPath: string;
  url: string;
}

interface SkillToUrlMap {
  [skill: string]: string;
}

const skillToURLMap: SkillToUrlMap = {
  "Next.js": "https://nextjs.org/",
  React: "https://reactjs.org/",
  TypeScript: "https://www.typescriptlang.org/",
  "Node.js": "https://nodejs.org/en/",
  Firebase: "https://firebase.google.com/",
  "Tailwind CSS": "https://tailwindcss.com/",
  Figma: "https://www.figma.com/",
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  I2C: "https://en.wikipedia.org/wiki/I%C2%B2C",
  FreeRTOS: "https://www.freertos.org/",
  "Framer Motion": "https://www.framer.com/motion/",
};

export default function ExperienceCard(props: ExperienceCardProps) {
  // Allow nested links by handling the click event on the block
  const handleBlockClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Loop through the event path to find if a skill was clicked
    for (const element of event.nativeEvent.composedPath()) {
      if (element instanceof HTMLElement && element.dataset.skill) {
        const skill = element.dataset.skill;
        const url = skillToURLMap[skill];

        if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
          event.preventDefault(); // Prevent default link behavior
          return; // Stop the loop once the skill is found and handled
        }
      }
    }
  };

  return (
    <RotatingCard onClick={handleBlockClick}>
      <div className="flex max-w-2xl p-6 space-x-6 border bg-grey-medium/5 border-grey-border rounded-xl shadow-lg hover:bg-grey-medium/8 hover:border-grey-light/25 transition-all ease-out duration-100 group">
        <div className="flex flex-col items-center space-y-6 flex-shrink-0">
          <span className="text-xs font-medium text-grey-dark">
            {props.dates}
          </span>
          <Image
            className="object-center"
            src={props.logoPath}
            width={42}
            height={42}
            alt={props.logoPath}
          />
        </div>
        <div className="flex flex-col -translate-y-1">
          <div className="flex space-x-4">
            <h2 className="font-medium text-grey-light">
              {props.titles[0]} <span className="font-semibold">·</span>{" "}
              {props.organization}
            </h2>
            <Image
              src="/side-arrow.svg"
              width={8}
              height={8}
              alt="side arrow"
              className="transition-all ease-out duration-100 group-hover:translate-x-3"
            />
          </div>
          {props.titles.slice(1).map((title, index) => (
            <h2 key={index} className="font-medium text-grey-medium/50">
              {title}
            </h2>
          ))}
          <ul className="list-disc space-y-4 mt-3">
            {props.accomplishments.map((accomplishment, index) => (
              <li key={index} className="text-sm text-grey-medium">
                {accomplishment}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap justify-start items-center mt-6 gap-2">
            {props.skills.map((skill, index) => (
              <li
                key={index}
                data-skill={skill}
                className="text-xs text-grey-light bg-grey-medium/20 rounded-full py-1 px-3 transition-all ease-out duration-100 hover:bg-grey-medium/40"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RotatingCard>
  );
}
