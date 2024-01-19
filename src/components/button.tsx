"use client";

import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "./contexts/navigation-context";
import Image from "next/image";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { handleLinkClick } = useContext(NavigationContext);

  return (
    <Link
      href={props.href}
      onClick={async (e) => {
        handleLinkClick(e, props.href);
      }}
    >
      <button className="flex items-center text-slate-300 text-sm pl-4 pr-5 py-2 border bg-slate-400/5 border-slate-700 rounded-lg shadow-lg hover:bg-slate-400/15 hover:border-slate-200/50 backdrop-blur-2xl transition-all ease-out duration-100 group">
        {props.children}
        <Image
          src="/side-arrow.svg"
          width={6}
          height={6}
          alt="side arrow"
          className="transition-all ease-out duration-100 group-hover:translate-x-1 ml-2"
        />
      </button>
    </Link>
  );
}
