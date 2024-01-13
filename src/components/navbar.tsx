"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import TMLogo from "./icons/tanish-makadia-logo";
import Link from "next/link";
import LinkedIn from "./icons/linkedin";
import GitHub from "./icons/github";
import Instagram from "./icons/instagram";

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
  {
    name: "What I Use",
    href: "/uses",
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
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    updateHighlight(activeLink);
  }, [activeLink]);

  return (
    <nav
      className={`fixed top-0 z-10 flex min-w-full h-14 items-center border-b transition-all ease-out duration-100 ${
        isScrolled
          ? "bg-grey-medium/5  border-grey-border shadow-lg"
          : "bg-transparent border-transparent"
      }`}
      ref={navRef}
    >
      <Link
        href="/"
        className="flex flex-grow max-w-36 justify-center items-center group"
      >
        <TMLogo className="ml-1.5 transition-colors duration-100 ease-out fill-grey-medium group-hover:fill-grey-light" />
        <text className="font-bold text-grey-medium group-hover:text-grey-light transition-colors duration-100 ease-out pr-3">
          TM
        </text>
      </Link>
      <div className="w-px h-6 border-r border-grey-border" />
      <div className="flex justify-between flex-grow">
        <div className="hidden lg:flex justify-between pl-5 flex-shrink-0">
          {navItems.map((item, index) => (
            <Link
              key={index}
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
          <GitHub className="fill-grey-medium hover:fill-grey-light transition-all ease-out duration-100" />
          <Instagram className="fill-grey-medium hover:fill-grey-light transition-all ease-out duration-100" />
          <LinkedIn className="fill-grey-medium hover:fill-grey-light transition-all ease-out duration-100" />
        </div>
      </div>

      <motion.div
        className="absolute top-3.5 h-25px rounded-full bg-grey-light/15 -z-10"
        layoutId="nav-item-highlight"
        style={highlightStyle}
        transition={{ duration: 0.1 }}
      />
    </nav>
  );
}
