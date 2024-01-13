"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import RotatingCard from "./rotating-card";
import FlippingCard from "./flipping-card";
import LinkIcon from "@/components/icons/link-icon";

interface Link {
  text: string;
  url: string;
}

interface ExperienceCardProps {
  organization: string;
  titles: string[];
  dates: string;
  accomplishments: string[];
  skills: string[];
  logoPath: string;
  links: Link[];
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
  LaTeX: "https://www.latex-project.org/",
  Overleaf: "https://www.overleaf.com/",
};

export default function ExperienceCard(props: ExperienceCardProps) {
  const frontContentRef = useRef<HTMLDivElement>(null);

  const [frontContentSize, setFrontContentSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const frontContent = frontContentRef.current;

    if (frontContent) {
      const rect = frontContent.getBoundingClientRect();
      setFrontContentSize({ width: rect.width, height: rect.height });
    }
  }, []);

  return (
    <FlippingCard
      width={"676px"}
      height={frontContentSize.height + "px"}
      frontContent={cardFront(props, frontContentRef)}
      backContent={cardBack(props, frontContentSize)}
    />
  );
}

function cardFront(
  props: ExperienceCardProps,
  ref: React.RefObject<HTMLDivElement>
) {
  // Allow nested links by searching is a skill was clicked
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Loop through the event path to find if a skill was clicked
    for (const element of event.nativeEvent.composedPath()) {
      if (element instanceof HTMLElement && element.dataset.skill) {
        const skill = element.dataset.skill;
        const url = skillToURLMap[skill];

        if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
          event.preventDefault(); // Prevent default link behavior
          event.stopPropagation(); // Prevent the event from bubbling up
          return; // Stop the loop once the skill is found and handled
        }
      }
    }
  };

  return (
    <RotatingCard onClick={handleCardClick}>
      <div
        ref={ref}
        className="flex max-w-2xl p-6 space-x-6 border bg-grey-medium/5 border-grey-border rounded-xl shadow-lg hover:bg-grey-medium/8 hover:border-grey-light/25 transition-all ease-out duration-100 group"
      >
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
                className="text-xs text-grey-light bg-grey-medium/20 rounded-full py-1 px-3 transition-all ease-out duration-100 hover:bg-grey-medium/40 cursor-pointer"
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

function cardBack(
  props: ExperienceCardProps,
  size: { width: number; height: number }
) {
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Loop through the event path to find if a link was clicked
    for (const element of event.nativeEvent.composedPath()) {
      if (element instanceof HTMLElement && element.dataset.url) {
        const url = element.dataset.url;

        window.open(url, "_blank", "noopener,noreferrer");
        event.preventDefault(); // Prevent default link behavior
        event.stopPropagation(); // Prevent the event from bubbling up
        return; // Stop the loop once the link is found and handled
      }
    }
  };

  return (
    <RotatingCard onClick={handleCardClick}>
      <div
        style={{ height: size.height + "px" }}
        className="flex flex-col justify-center items-center p-6 space-x-6 border bg-grey-medium/5 border-grey-border rounded-xl shadow-lg hover:bg-grey-medium/8 hover:border-grey-light/25 transition-all ease-out duration-100 group"
      >
        <h2 className="font-medium text-grey-light">{props.organization}</h2>
        <ul className="flex space-x-3 mt-4">
          {props.links.map((link, index) => (
            <li
              key={index}
              data-url={link.url}
              className="flex items-center bg-grey-medium/20 hover:bg-transparent border border-transparent hover:border-blue-link rounded-full px-3 py-1 cursor-pointer group/links"
            >
              <LinkIcon className="transition-all ease-out duration-100 stroke-grey-light group-hover/links:stroke-blue-link mr-1" />
              <span className="text-sm transition-all ease-out duration-100 text-grey-light group-hover/links:text-blue-link">
                {link.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </RotatingCard>
  );
}
