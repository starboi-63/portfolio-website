"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FlippingCardProps {
  className?: string;
  width: string;
  height: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function FlippingCard(props: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const springTransition = {
    type: "spring",
    stiffness: 1000,
    damping: 50,
  };

  return (
    <div
      className={props.className}
      onClick={handleClick}
      style={{
        perspective: "2500px",
        transformStyle: "preserve-3d",
        width: `${props.width}`,
        height: `${props.height}`,
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={springTransition}
        style={{
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          position: "absolute",
        }}
      >
        {props.frontContent}
      </motion.div>
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={springTransition}
        style={{
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          position: "absolute",
        }}
      >
        {props.backContent}
      </motion.div>
    </div>
  );
}
