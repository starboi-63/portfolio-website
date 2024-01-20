import { useState } from "react";

interface GlowingCardProps {
  glowRadius: number;
  className?: string;
  children: React.ReactNode;
}

export default function GlowingCard(props: GlowingCardProps) {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseMove = (event: React.MouseEvent) => {
    setIsHidden(false);
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setGlowPosition({ x, y });
  };

  return (
    <div
      className="relative overflow-clip rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHidden(true)}
    >
      <div
        className={"absolute " + props.className}
        style={{
          visibility: isHidden ? "hidden" : "visible",
          top: glowPosition.y - props.glowRadius,
          left: glowPosition.x - props.glowRadius,
        }}
      >
        <svg
          width={props.glowRadius * 2}
          height={props.glowRadius * 2}
          viewBox={`0 0 ${props.glowRadius * 2} ${props.glowRadius * 2}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={props.glowRadius}
            cy={props.glowRadius}
            r={props.glowRadius}
          />
        </svg>
      </div>
      {props.children}
    </div>
  );
}
