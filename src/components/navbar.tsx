"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { throttle } from "lodash";
import Image from "next/image";
import TMLogo from "./icons/tanish-makadia-logo";
import Link from "next/link";
import LinkedIn from "./icons/linkedin";
import GitHub from "./icons/github";
import Instagram from "./icons/instagram";

const navbarHeight = 60; // pixels

const navItems = [
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Projects",
    href: "/#projects",
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
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // track active link to determine where highlight should return to on mouse leave
  const [activeLink, setActiveLink] = useState<string>("/#experience");
  const [freezeHighlight, setFreezeHighlight] = useState(false);

  const getActiveSection = () => {
    const threshold = window.innerHeight / 2 - navbarHeight;
    const sections = document.querySelectorAll(".section-anchor");

    for (let i = sections.length - 1; i >= 0; i--) {
      const rect = sections[i].getBoundingClientRect();

      if (rect.top <= threshold) {
        return sections[i].id;
      }
    }
  };

  const handleLinkClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (activeLink.split("#")[0] === "/" && href.split("#")[0] === "/") {
      // if routing from homepage to homepage, scroll to the section
      event.preventDefault();
      setFreezeHighlight(true);
      const sectionElement = document.getElementById(href.split("#")[1]);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setTimeout(() => {
        setFreezeHighlight(false);
      }, 500);
    } else if (href.split("#")[0] === "/") {
      // if routing from another page to homepage, delay so that cards can load
      event.preventDefault();
      setFreezeHighlight(true);
      await router.push("/");

      setTimeout(() => {
        const sectionElement = document.getElementById(href.split("#")[1]);

        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);

      setTimeout(() => {
        setFreezeHighlight(false);
      }, 1000);
    }

    setActiveLink(href);
  };

  // track scroll position to change navbar style and update active link
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const threshold = 0;
      console.log("scrolling: " + window.scrollY);
      setIsScrolled(window.scrollY > threshold);

      if (activeLink.includes("/#") && !freezeHighlight) {
        setActiveLink("/#" + getActiveSection());
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink, freezeHighlight]);

  // highlight style changes state based on active link and hovered link
  const [highlightStyle, setHighlightStyle] = useState({
    width: "0px",
    left: "0px",
  });

  const updateHighlight = (itemHref: string) => {
    console.log("updating highlight: " + itemHref);
    const nav = navRef.current;

    if (nav) {
      const activeItem = nav.querySelector(`[href="${itemHref}"]`);
      if (activeItem) {
        const rect = activeItem.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        setHighlightStyle({
          width: rect.width + "px",
          left: rect.left - navRect.left + "px",
        });
      }
    }
  };

  useEffect(() => {
    updateHighlight(activeLink);
  }, [activeLink]);

  // track hovered link to determine where highlight should move to on mouse enter
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav
      style={{ height: navbarHeight }}
      className={`fixed top-0 z-10 flex min-w-full items-center border-b transition-all ease-out duration-250 ${
        isScrolled
          ? "bg-slate-400/5 border-slate-700 shadow-lg backdrop-blur-2xl"
          : "bg-transparent border-transparent"
      }`}
      ref={navRef}
    >
      <Link
        href="/"
        className="flex flex-grow max-w-36 justify-center items-center group"
        onClick={() => {
          setActiveLink("/#experience");
        }}
      >
        <TMLogo className="ml-1.5 fill-slate-200" />
        <span className="font-bold text-slate-200 pr-3">TM</span>
      </Link>
      <div className="w-px h-6 border-r border-slate-700" />
      <div className="flex justify-between flex-grow">
        <div className="hidden lg:flex justify-between pl-5 flex-shrink-0">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex space-x-1.5 group px-3"
              onClick={async (e) => handleLinkClick(e, item.href)}
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
                className={`text-sm align-bottom leading-normal transition-all ease-out duration-100 ${
                  item.href === hoveredLink ||
                  (!hoveredLink && item.href === activeLink)
                    ? "text-slate-200"
                    : "text-slate-400"
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
          <GitHub className="fill-slate-400 hover:fill-slate-200 transition-all ease-out duration-100" />
          <Instagram className="fill-slate-400 hover:fill-slate-200 transition-all ease-out duration-100" />
          <LinkedIn className="fill-slate-400 hover:fill-slate-200 transition-all ease-out duration-100" />
        </div>
      </div>

      <div className="absolute inset-x-0 inset-y-4 overflow-hidden -z-20">
        <motion.div
          className="absolute inset-y-0 rounded-full bg-slate-200/15 -z-10"
          layoutId="nav-item-highlight"
          style={highlightStyle}
          transition={{ type: "easeOut", duration: 0.1 }}
        />
      </div>
    </nav>
  );
}
