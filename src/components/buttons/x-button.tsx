import Link from "next/link";
import XIcon from "../icons/x-icon";

export default function XButton() {
  return (
    <div className="relative group rounded-lg hover:bg-slate-400/15 transition-all ease-out duration-100">
      <XIcon className="m-2.5 w-[20px] h-[20px] fill-slate-400 group-hover:fill-slate-200 transition-all ease-out duration-100" />
      <Link
        className="absolute inset-0"
        href="https://twitter.com/tanishmakadia"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}
