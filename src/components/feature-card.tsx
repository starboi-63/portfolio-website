import Image from "next/image";

interface IconType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface FeatureCardProps {
  icon: IconType;
  children?: React.ReactNode;
}

export default function FeatureCard(props: FeatureCardProps) {
  return (
    <div className="flex items-center w-80 p-6 space-x-6 border bg-slate-400/5 border-slate-700 rounded-xl shadow-xl backdrop-blur-2xl">
      <Image
        src={props.icon.src}
        alt={props.icon.alt}
        width={props.icon.width}
        height={props.icon.height}
      />
      <div className="w-[1px] h-12 bg-slate-700" />
      {props.children}
    </div>
  );
}
