interface ToolLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function ToolLink(props: ToolLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-slate-200 transition-all ease-out duration-100"
    >
      {props.children}
    </a>
  );
}
