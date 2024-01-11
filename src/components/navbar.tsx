"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import TMLogo from "./tanish-makadia-logo";
import Link from "next/link";
import LinkedIn from "./linkedin";
import GitHub from "./github";
import Instagram from "./instagram";

const navItems = [
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Astrophotography",
    href: "/astrophotography",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const [activeLink, setActiveLink] = useState<string>(pathname);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const updateHighlight = (itemHref: string) => {
    const nav = navRef.current;

    if (nav) {
      const activeItem = nav.querySelector(`[href="${itemHref}"]`);
      const rect = activeItem?.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();

      setHighlightStyle({
        width: (rect?.width ?? 0) + "px",
        left: (rect?.left ?? 0) - navRect.left + "px",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 z-10 flex min-w-full h-14 items-center border-b transition-all ease-out duration-100 ${
        isScrolled
          ? "bg-grey-light/5  border-grey-border"
          : "bg-transparent border-transparent"
      }`}
      ref={navRef}
    >
      <Link
        href="/"
        className="flex flex-grow max-w-36 justify-center items-center group"
      >
        <TMLogo
          color="#8B949E"
          hoverColor="#C9D1D9"
          width={45}
          height={45}
          className="ml-1.5 transition-colors duration-100 ease-out group-hover:fill-[var(--svg-hover-color)]"
        />
        <text className="font-bold text-grey-medium group-hover:text-grey-light transition-colors duration-100 ease-out pr-3">
          TM
        </text>
      </Link>
      <div className="w-px h-25px border-r border-grey-border" />
      <div className="flex justify-between flex-grow">
        <div className="hidden lg:flex justify-between pl-5 flex-shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex space-x-1.5 group px-3"
              onMouseOver={() => {
                setHoveredLink(item.href);
                updateHighlight(item.href);
              }}
              onMouseLeave={() => {
                setHoveredLink(null);
                updateHighlight(activeLink);
              }}
            >
              <span
                className={`text-sm group-hover:text-grey-light transition-all ease-out duration-100 ${
                  item.href === hoveredLink ||
                  (!hoveredLink && item.href === activeLink)
                    ? "text-grey-light"
                    : "text-grey-medium"
                }`}
              >
                {item.name}
              </span>
              <Image
                className="group-hover:translate-y-0.5 transition-all ease-out duration-100"
                src="/down-arrow.svg"
                width={8}
                height={8}
                alt="down arrow"
              />
            </Link>
          ))}
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

      <motion.div
        className="absolute inset-y-3.5 rounded-full bg-grey-light/20 -z-10"
        layoutId="nav-item-highlight"
        style={highlightStyle}
      />
    </nav>
  );
}
