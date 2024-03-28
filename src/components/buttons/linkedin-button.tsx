import Link from "next/link";
import LinkedInIcon from "../icons/linkedin-icon";

export default function LinkedInButton() {
  return (
    <div className="relative group p-2.5 rounded-lg hover:bg-slate-400/15 transition-all ease-out duration-100">
      <LinkedInIcon className="w-[20px] h-[20px] fill-slate-400 group-hover:fill-slate-200 transition-all ease-out duration-100" />
      <Link
        className="absolute inset-0"
        href="https://www.linkedin.com/in/tanish-makadia/"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}
