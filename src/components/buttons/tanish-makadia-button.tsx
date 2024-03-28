"use client";

import { useContext } from "react";
import { NavigationContext } from "../contexts/navigation-context";
import Link from "next/link";
import TMIcon from "../icons/tanish-makadia-icon";

interface TMButtonProps {
  className?: string;
}

export default function TMButton(props: TMButtonProps) {
  const { handleLinkClick } = useContext(NavigationContext);

  return (
    <div className={"relative group " + props.className}>
      <TMIcon className="fill-slate-400 group-hover:fill-slate-200 transition-all ease-out duration-100" />
      <Link
        className="absolute inset-0"
        href="/"
        onClick={async (e) => handleLinkClick(e, "/#experience")}
      />
    </div>
  );
}
