import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "../contexts/navigation-context";

interface SubLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SubLink(props: SubLinkProps) {
  const { handleLinkClick } = useContext(NavigationContext);

  return (
    <Link
      href={props.href}
      onClick={async (e) => {
        handleLinkClick(e, props.href);
      }}
    >
      <span className="text-sm text-slate-400 hover:text-slate-200 transition-all ease-out duration-100">
        {props.children}
      </span>
    </Link>
  );
}
