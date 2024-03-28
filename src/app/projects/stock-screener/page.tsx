import GitHubIcon from "@/components/icons/github-icon";
import NavButton from "@/components/buttons/nav-button";
import ScrollButton from "@/components/buttons/scroll-button";
import ApplicationCard from "@/components/cards/application-card";
import Image from "next/image";
import FeatureCard from "@/components/cards/feature-card";
import Link from "next/link";

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
            <ScrollButton href="/projects/stock-screener#docs">
              <span className="h-6 flex items-center">Get Started</span>
            </ScrollButton>
            <NavButton href="https://github.com/starboi-63/growth-stock-screener">
              <GitHubIcon className="h-6 w-6 fill-slate-200 mr-2.5" />
              Source Code
            </NavButton>
          </div>
        </div>
        <ApplicationCard title="Terminal">
          <Image
            src="/hero/screener-terminal.png"
            alt="Stock Screener Terminal Window"
            width={600}
            height={533.38}
          />
        </ApplicationCard>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold text-slate-200 mt-10">Features</h3>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-8">
          <FeatureCard
            icon={{
              src: "/icons/iterations-icon.svg",
              alt: "Iterations Icon",
              width: 36,
              height: 36,
            }}
          >
            <span className="text-slate-400">
              <span className="text-slate-200">Five</span> distinct screen
              iterations based on criteria for predicting super performance.
            </span>
          </FeatureCard>
          <FeatureCard
            icon={{
              src: "/icons/ratings-icon.svg",
              alt: "RS Ratings Icon",
              width: 36,
              height: 36,
            }}
          >
            <span className="text-slate-400">
              <span className="text-slate-200">RS Ratings</span> calculated
              using methodology from{" "}
              <Link
                className="underline"
                href="https://www.williamoneil.com/proprietary-ratings-and-rankings/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`William O\'Neil Securities`}
              </Link>
              .
            </span>
          </FeatureCard>
          <FeatureCard
            icon={{
              src: "/icons/trend-icon.svg",
              alt: "Stage 2 Trend Icon",
              width: 36,
              height: 36,
            }}
          >
            <span className="text-slate-400">
              <span className="text-slate-200">Stage-2 Trend</span> derived from
              strategies of U.S. investing champions Mark Minervini and Oliver
              Kell.
            </span>
          </FeatureCard>
          <FeatureCard
            icon={{
              src: "/icons/revenue-icon.svg",
              alt: "Revenue Growth Icon",
              width: 36,
              height: 36,
            }}
          >
            <span className="text-slate-400">
              <span className="text-slate-200">Revenue growth</span>{" "}
              {`sourced directly from the SEC\'s EDGAR`}{" "}
              <Link
                className="underline"
                href="https://www.sec.gov/edgar/sec-api-documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                XBRL data APIs
              </Link>
              .
            </span>
          </FeatureCard>
          <FeatureCard
            icon={{
              src: "/icons/settings-icon.svg",
              alt: "User Settings Icon",
              width: 36,
              height: 36,
            }}
          >
            <span className="text-slate-400">
              <span className="text-slate-200">Customizable</span> screen
              settings for fine-tuning and experimenting.
            </span>
          </FeatureCard>
          <FeatureCard
            icon={{
              src: "/icons/outfile-icon.svg",
              alt: "Output File Icon",
              width: 36,
              height: 36,
            }}
          >
            <span className="text-slate-400">
              <span className="text-slate-200">Easy-to-access</span> .csv
              outfiles storing screen results. Parsable .json outfiles for
              evaluation.
            </span>
          </FeatureCard>
        </div>
      </div>
      <div className="min-h-screen" />
    </main>
  );
}
