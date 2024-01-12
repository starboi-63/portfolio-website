import { motion, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface RotatingCardProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  children: React.ReactNode;
}

export default function RotatingCard(props: RotatingCardProps) {
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const element = ref.current;

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const elementWidth = elementRect.width;
      const elementHeight = elementRect.height;
      const elementCenterX = elementWidth / 2;
      const elementCenterY = elementHeight / 2;
      const mouseX = event.clientX - elementRect.left;
      const mouseY = event.clientY - elementRect.top;

      // Calculate the distance from the center in both X and Y directions
      const distanceFromCenterX = mouseX - elementCenterX;
      const distanceFromCenterY = mouseY - elementCenterY;

      // Normalize these distances to get the rotation offsets
      const _xOffset = (distanceFromCenterY / elementHeight) * 20; // choose a rotation factor (currently 20)
      const _yOffset = (-distanceFromCenterX / elementWidth) * 20;

      setXOffset(_xOffset);
      setYOffset(_yOffset);
    }
  };

  const handleMouseExit = () => {
    setXOffset(0);
    setYOffset(0);
  };

  const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 60,
  };

  const dx = useSpring(0, spring);
  const dy = useSpring(0, spring);

  useEffect(() => {
    dx.set(xOffset);
    dy.set(yOffset);
  }, [xOffset, yOffset]);

  return (
    <div
      onClick={props.onClick}
      className={props.className}
      style={{
        perspective: "2500px", // Changes how "close" the card appears to be
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseExit}
        style={{
          transformStyle: "preserve-3d",
          rotateX: dx,
          rotateY: dy,
        }}
      >
        {props.children}
      </motion.div>
    </div>
  );
}
