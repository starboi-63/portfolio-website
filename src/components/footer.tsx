import Link from "next/link";
import TMLogo from "./icons/tanish-makadia-logo";
import GitHub from "./icons/github";
import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";
import ToolLink from "./sub-components/tool-link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-screen pt-3 pb-6 bg-slate-400/5 border-t border-slate-700 shadow-lg backdrop-blur-2xl z-10">
      <div className="flex flex-col">
        <div className="flex items-center">
          <Link href="/">
            <TMLogo className="fill-slate-400 hover:fill-slate-200 ml-6" />
          </Link>
          <div className="relative">
            <span className="text-sm text-slate-400">
              © 2024 Tanish Makadia. All Rights Reserved.
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
        <div className="flex mt-20 ml-[34px] space-x-8">
          <GitHub className="fill-slate-400 hover:fill-slate-200 transition-all ease-out duration-100" />
          <Instagram className="fill-slate-400 hover:fill-slate-200 transition-all ease-out duration-100" />
          <LinkedIn className="fill-slate-400 hover:fill-slate-200 transition-all ease-out duration-100" />
        </div>
      </div>
    </footer>
  );
}
