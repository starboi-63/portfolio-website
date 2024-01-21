"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GlowingCardProps {
  glowRadius: number;
  glowOpacity: number;
  className?: string;
  children: React.ReactNode;
}

export default function GlowingCard(props: GlowingCardProps) {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setIsVisible(true);
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setGlowPosition({ x, y });
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="absolute inset-0 rounded-xl overflow-clip -z-10">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className={"absolute " + props.className}
              style={{
                top: glowPosition.y - props.glowRadius,
                left: glowPosition.x - props.glowRadius,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: props.glowOpacity }}
              exit={{ opacity: 0 }}
              transition={{ type: "easeOut", duration: 0.25 }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {props.children}
    </div>
  );
}
