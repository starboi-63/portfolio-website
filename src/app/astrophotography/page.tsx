"use client";

import { navbarHeight } from "@/components/navbar";
import Image from "next/image";

interface imageDataType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const imageData: imageDataType[] = [
  {
    src: "/pinwheel-galaxy.png",
    alt: "M101 — Pinwheel Galaxy",
    width: 4646,
    height: 3045,
  },
  {
    src: "/andromeda-galaxy.png",
    alt: "M31 — Andromeda Galaxy",
    width: 10016,
    height: 6745,
  },
  {
    src: "/hercules-cluster.png",
    alt: "M13 — Hercules Cluster",
    width: 6040,
    height: 4138,
  },
  {
    src: "/mount-1.png",
    alt: "Computerized EQ-Mount Image 1",
    width: 3024,
    height: 4032,
  },
  {
    src: "/mount-2.png",
    alt: "Computerized EQ-Mount Image 2",
    width: 3024,
    height: 4032,
  },
  {
    src: "/mount-3.png",
    alt: "Computerized EQ-Mount Image 3",
    width: 4032,
    height: 3024,
  },
  {
    src: "/mount-4.png",
    alt: "Computerized EQ-Mount Image 4",
    width: 3024,
    height: 4032,
  },
  {
    src: "/mount-5.png",
    alt: "Computerized EQ-Mount Image 5",
    width: 4032,
    height: 3024,
  },
];

const galleryLayout = require("justified-layout")(imageData, {
  containerWidth: window.innerWidth,
  containerPadding: {
    top: 0,
    bottom: 0,
    right: 56,
    left: 56,
  },
  boxSpacing: 16,
  targetRowHeight: 380,
});

console.log(galleryLayout);

export default function Astrophotography() {
  return (
    <main>
      <div className="-z-20 fixed inset-0 min-w-screen min-h-screen bg-gradient-to-tr from-neutral-950 to-neutral-900" />
      <div className="flex flex-col items-center mt-24">
        <div className="relative w-screen">
          {imageData.map((data, index) => {
            const layout = galleryLayout.boxes[index];

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  top: layout.top,
                  left: layout.left,
                  width: layout.width,
                  height: layout.height,
                }}
              >
                <Image
                  src={data.src}
                  alt={data.alt}
                  width={data.width}
                  height={data.height}
                />
              </div>
            );
          })}
        </div>
        <div style={{ height: galleryLayout.containerHeight + 250 }} />
      </div>
    </main>
  );
}
