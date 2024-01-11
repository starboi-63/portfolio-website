import Image from "next/image";

interface ExperienceBlockProps {
  organization: string;
  titles: string[];
  dates: string;
  accomplishments: string[];
  skills: string[];
  logoPath: string;
}

export default function ExperienceBlock(props: ExperienceBlockProps) {
  return (
    <div className="flex max-w-2xl p-6 space-x-6 border bg-grey-medium/5 border-grey-border rounded-xl shadow-lg">
      <div className="flex flex-col items-center space-y-6 flex-shrink-0">
        <span className="text-xs font-medium text-grey-dark">
          {props.dates}
        </span>
        <Image
          className="object-center"
          src={props.logoPath}
          width={36}
          height={36}
          alt={props.logoPath}
        />
      </div>
      <div className="flex flex-col -translate-y-1">
        <h2 className="font-medium text-grey-light">
          {props.titles[0]} · {props.organization}
        </h2>
        {props.titles.slice(1).map((title, index) => (
          <h2 key={index} className="font-medium text-grey-dark">
            {title}
          </h2>
        ))}
        <ul className="list-disc space-y-4 mt-3">
          {props.accomplishments.map((accomplishment, index) => (
            <li key={index} className="text-sm font-normal text-grey-medium">
              {accomplishment}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap justify-start items-center mt-4 gap-2">
          {props.skills.map((skill, index) => (
            <li
              key={index}
              className="text-xs text-nowrap text-grey-light font-normal bg-grey-medium/20 rounded-full py-1 px-3"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
