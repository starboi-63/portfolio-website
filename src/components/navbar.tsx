"use client";

import { useEffect, useState } from "react";
import TMLogo from "./tanish-makadia-logo";

export default function NavBar() {
  // Add a state variable to keep track of whether the user has scrolled or not
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10 flex min-w-full h-14 items-center border-b transition-all ease-out duration-100 ${
        isScrolled
          ? "bg-grey-light/5  border-grey-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex min-w-36 justify-center items-center group">
        <TMLogo
          color="#8B949E"
          hoverColor="#C9D1D9"
          width={45}
          height={45}
          className="transition-colors duration-100 ease-out group-hover:fill-[var(--svg-hover-color)]"
        />
        <text className="font-bold text-grey-medium group-hover:text-grey-light transition-colors duration-100 ease-out pr-3">
          TM
        </text>
      </div>
      <div className="w-px h-25px border-r border-grey-border" />
    </nav>
  );
}
