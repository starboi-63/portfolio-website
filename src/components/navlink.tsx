import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink(props: NavLinkProps) {
  return (
    <div className="flex space-x-1.5 group">
      <Link
        href={props.href}
        className="text-sm text-grey-medium group-hover:text-grey-light transition-all ease-out duration-100"
      >
        {props.children}
      </Link>
      <Image
        className="group-hover:translate-y-0.5 transition-all ease-out duration-100"
        src="/down-arrow.svg"
        width={8}
        height={8}
        alt="down arrow"
      />
    </div>
  );
}
