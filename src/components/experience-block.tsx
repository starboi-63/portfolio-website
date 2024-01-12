import Image from "next/image";
import Link from "next/link";

interface ExperienceBlockProps {
  organization: string;
  titles: string[];
  dates: string;
  accomplishments: string[];
  skills: string[];
  logoPath: string;
  url: string;
}

export default function ExperienceBlock(props: ExperienceBlockProps) {
  return (
    <Link
      href={props.url}
      rel="noopener noreferrer"
      target="_blank"
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
        <ul className="flex flex-wrap justify-start items-center mt-4 gap-2">
          {props.skills.map((skill, index) => (
            <li
              key={index}
              className="text-xs text-grey-light bg-grey-medium/20 rounded-full py-1 px-3"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
