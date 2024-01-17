import RotatingCard from "./sub-components/rotating-card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import skillToURLMap from "@/lib/skill-to-url-map";

interface ThumbnailData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  dates: string;
  description: string;
  skills: string[];
  thumbnail: ThumbnailData;
  href: string;
  external?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  const router = useRouter();

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

    event.preventDefault();

    if (props.external) {
      window.open(props.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(props.href);
    }
  };

  return (
    <RotatingCard onClick={handleCardClick}>
      <div className="flex max-w-[676px] p-6 space-x-6 border bg-slate-400/5 border-slate-700 rounded-xl shadow-lg hover:bg-slate-400/8 hover:border-slate-200/30 transition-all ease-out duration-100 backdrop-blur-2xl group">
        <div className="w-[136px] flex flex-col items-center space-y-6 flex-shrink-0">
          <span className="text-xs font-medium text-slate-500">
            {props.dates}
          </span>
          <Image
            className="object-center border border-slate-700"
            src={props.thumbnail.src}
            width={props.thumbnail.width}
            height={props.thumbnail.height}
            alt={props.thumbnail.alt}
          />
        </div>
        <div className="flex flex-col -translate-y-1">
          <div className="flex space-x-4">
            <h2 className="font-medium text-slate-200">{props.title}</h2>
            <Image
              src="/side-arrow.svg"
              width={8}
              height={8}
              alt="side arrow"
              className="transition-all ease-out duration-100 group-hover:translate-x-3"
            />
          </div>
          {props.subtitle && (
            <h2 className="font-medium text-slate-400/50">{props.subtitle}</h2>
          )}
          <span className="mt-3 text-sm text-slate-400">
            {props.description}
          </span>
          <ul className="flex flex-wrap justify-start items-center mt-6 gap-2">
            {props.skills.map((skill, index) => (
              <li
                key={index}
                data-skill={skill}
                className="text-xs text-slate-200 bg-slate-400/20 rounded-full py-1 px-3 transition-all ease-out duration-100 hover:bg-slate-400/40 cursor-pointer"
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
