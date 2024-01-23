"use client";

import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "@/components/contexts/navigation-context";
import Button from "./sub-components/button";

interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NavButton(props: ButtonProps) {
  const { handleLinkClick } = useContext(NavigationContext);

  return (
    <Link
      href={props.href}
      onClick={async (e) => {
        handleLinkClick(e, props.href);
      }}
    >
      <Button className={props.className}>{props.children}</Button>
    </Link>
  );
}
