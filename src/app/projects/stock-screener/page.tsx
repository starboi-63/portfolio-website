import GitHub from "@/components/icons/github";
import NavButton from "@/components/nav-button";
import ScrollButton from "@/components/scroll-button";

export default function StockScreener() {
  return (
    <main>
      <div className="-z-20 fixed inset-0 min-w-screen min-h-screen bg-gradient-to-tr from-gray-950 to-gray-900" />
      <div className="flex justify-center items-center min-h-screen space-x-16">
        <div className="flex flex-col">
          <h1 className="text-slate-200 text-4xl font-bold">
            Growth Stock{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-100 to-sky-400">
              Screener
            </span>
          </h1>
          <h2 className="text-xl text-slate-400 w-[461px] mt-4">
            An automated stock screen which isolates top companies based on
            time-tested growth criteria.
          </h2>
          <div className="h-px w-full bg-slate-700 my-6" />
          <div className="flex justify-evenly">
            <NavButton href="/astrophotography">
              <span className="h-6 flex items-center">Get Started</span>
            </NavButton>
            <NavButton href="/projects/eq-mount#fabrication">
              <GitHub className="h-6 w-6 fill-slate-200 mr-2.5" />
              Source Code
            </NavButton>
          </div>
        </div>
      </div>
    </main>
  );
}
