"use client";

import Image from "next/image";
import RotatingCard from "../sub-components/rotating-card";
import GlowingCard from "../sub-components/glowing-card";

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
    <RotatingCard>
      <GlowingCard
        className="blur opacity-15 fill-blue-900"
        glowRadius={125}
        glowOpacity={0.15}
      >
        <div className="flex items-center h-36 w-[332px] p-6 space-x-6 border bg-slate-400/5 border-slate-700 rounded-xl shadow-xl backdrop-blur-2xl">
          <Image
            src={props.icon.src}
            alt={props.icon.alt}
            width={props.icon.width}
            height={props.icon.height}
          />
          <div className="w-[1px] h-12 bg-slate-700" />
          {props.children}
        </div>
      </GlowingCard>
    </RotatingCard>
  );
}
