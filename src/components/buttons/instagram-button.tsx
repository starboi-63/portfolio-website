import Link from "next/link";
import InstagramIcon from "../icons/instagram-icon";

export default function InstagramButton() {
  return (
    <div className="relative group rounded-lg hover:bg-slate-400/15 transition-all ease-out duration-100">
      <InstagramIcon className="m-2.5 w-[20px] h-[20px] fill-slate-400 group-hover:fill-slate-200 transition-all ease-out duration-100" />
      <Link
        className="absolute inset-0"
        href="https://www.instagram.com/tanishmakadia.astro/"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}
