import Link from "next/link";
import GitHubIcon from "../icons/github-icon";

export default function GitHubButton() {
  return (
    <div className="relative group p-2.5 rounded-lg hover:bg-slate-400/15 transition-all ease-out duration-100">
      <GitHubIcon className="w-[20px] h-[20px] fill-slate-400 group-hover:fill-slate-200 transition-all ease-out duration-100" />
      <Link
        className="absolute inset-0"
        href="https://github.com/starboi-63"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}
