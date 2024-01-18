import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "../contexts/navigation-context";

interface MainLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function MainLink(props: MainLinkProps) {
  const { handleLinkClick } = useContext(NavigationContext);

  return (
    <Link
      href={props.href}
      onClick={async (e) => {
        handleLinkClick(e, props.href);
      }}
    >
      <span className="relative text-sm text-slate-200 after:absolute after:left-0 after:bottom-0 after:bg-slate-200 after:h-px after:w-0 hover:after:w-full after:transition-all after:ease-out after:duration-100">
        {props.children}
      </span>
    </Link>
  );
}
