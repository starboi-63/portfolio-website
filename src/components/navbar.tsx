"use client";

import { useEffect, useState } from "react";
import TMLogo from "./tanish-makadia-logo";
import NavLink from "./navlink";
import Link from "next/link";
import LinkedIn from "./linkedin";
import GitHub from "./github";
import Instagram from "./instagram";

export default function NavBar() {
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
      <Link
        href="/"
        className="flex min-w-36 justify-center items-center group"
      >
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
      </Link>
      <div className="w-px h-25px border-r border-grey-border" />
      <div className="flex justify-between flex-grow">
        <div className="flex justify-between space-x-10 pl-10">
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/astrophotography">Astrophotography</NavLink>
        </div>
        <div className="flex justify-between space-x-10 px-10">
          <GitHub
            color="#8B949E"
            hoverColor="#C9D1D9"
            width={22}
            height={22}
            className="transition-colors duration-100 ease-out hover:fill-[var(--svg-hover-color)]"
          />
          <Instagram
            color="#8B949E"
            hoverColor="#C9D1D9"
            width={22}
            height={22}
            className="transition-colors duration-100 ease-out hover:fill-[var(--svg-hover-color)]"
          />
          <LinkedIn
            color="#8B949E"
            hoverColor="#C9D1D9"
            width={22}
            height={22}
            className="transition-colors duration-100 ease-out hover:fill-[var(--svg-hover-color)]"
          />
        </div>
      </div>
    </nav>
  );
}
