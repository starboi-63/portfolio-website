"use client";

import Link from "next/link";
import Button from "./sub-components/button";

interface ScrollButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollButton(props: ScrollButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = props.href.split("#")[1];
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Link href={props.href} onClick={handleClick}>
      <Button className={props.className}>{props.children}</Button>
    </Link>
  );
}
