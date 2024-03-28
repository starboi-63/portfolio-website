"use client";

import TMButton from "./buttons/tanish-makadia-button";
import GitHubButton from "./buttons/github-button";
import InstagramButton from "./buttons/instagram-button";
import LinkedInButton from "./buttons/linkedin-button";
import ToolLink from "./sub-components/footer-tool-link";
import MainLink from "./sub-components/footer-main-link";
import SubLink from "./sub-components/footer-sublink";
import XButton from "./buttons/x-button";

const projectLinks = [
  {
    href: "/projects/eq-mount",
    text: "Computerized EQ-Mount",
  },
  {
    href: "/projects/stock-screener",
    text: "Growth Stock Screener",
  },
  {
    href: "https://github.com/starboi-63/portfolio-website",
    text: "Portfolio Website",
    external: true,
  },
];

const blogLinks = [
  {
    href: "/blog/separating-hyperplanes",
    text: "Separating Hyperplanes",
  },
  {
    href: "/blog/gear-calculations",
    text: "Worm Gear Calculations",
  },
  {
    href: "/blog/turning-worm-gears",
    text: "Turning Worm Gears",
  },
  {
    href: "/blog/machining-worm-wheels",
    text: "Machining Worm Wheels",
  },
  {
    href: "/blog/cutting-parts",
    text: "Cutting Structural Parts",
  },
  {
    href: "/blog/fitting-bearings",
    text: "Friction Fitting Bearings",
  },
];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-screen flex bg-slate-400/5 border-t border-slate-700 shadow-xl backdrop-blur-2xl z-30">
      <div className="flex flex-col mt-3 mb-6">
        <div className="flex items-center ml-6">
          <TMButton className="mr-1" />
          <div className="relative">
            <span className="text-sm text-slate-400">
              © {new Date().getFullYear()} Tanish Makadia. All Rights Reserved.
            </span>
            <span className="absolute inset-x-0 top-[40px] text-xs text-slate-600">
              Website prototyped in{" "}
              <ToolLink href="https://www.figma.com/">Figma</ToolLink> and
              developed in{" "}
              <ToolLink href="https://code.visualstudio.com/">
                Visual Studio Code
              </ToolLink>{" "}
              using <ToolLink href="https://nextjs.org/">Next.js</ToolLink>,{" "}
              <ToolLink href="https://www.typescriptlang.org/">
                TypeScript
              </ToolLink>
              , and{" "}
              <ToolLink href="https://tailwindcss.com/">Tailwind CSS</ToolLink>.
              Deployed with{" "}
              <ToolLink href="https://vercel.com/">Vercel</ToolLink>.
            </span>
          </div>
        </div>
        <div className="flex items-center max-h-[22px] mt-20 ml-[36px]">
          <div className="flex items-center space-x-0">
            <GitHubButton />
            <LinkedInButton />
            <InstagramButton />
            <XButton />
          </div>
          <div className="static w-px h-7 bg-slate-700 ml-4 mr-6" />
          <span className="text-sm text-slate-400">Thanks for visiting!</span>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center space-x-20 mx-20">
        <div className="flex flex-col space-y-2">
          <MainLink href="/#experience">Experience</MainLink>
          <MainLink href="/astrophotography">Astrophotography</MainLink>
          <MainLink href="/uses">What I Use</MainLink>
        </div>
        <div className="flex flex-col space-y-2">
          <MainLink href="/#projects">Projects</MainLink>
          {projectLinks.map((link, index) => (
            <SubLink key={index} href={link.href}>
              {link.text}
            </SubLink>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <MainLink href="/blog">Blog</MainLink>
          <div className="grid grid-cols-2 gap-y-2 gap-x-20">
            {blogLinks.map((link, index) => (
              <SubLink key={index} href={link.href}>
                {link.text}
              </SubLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
