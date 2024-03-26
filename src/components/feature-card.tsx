import Image from "next/image";

interface IconType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface FeatureCardProps {
  icon: IconType;
  description: string;
}

export default function FeatureCard(props: FeatureCardProps) {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={props.icon.src}
        alt={props.icon.alt}
        width={props.icon.width}
        height={props.icon.height}
      />
      <div className="w-[1px] h-12 bg-slate-700" />
      <p className="text-slate-200">{props.description}</p>
    </div>
  );
}
