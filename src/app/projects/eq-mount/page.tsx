import Image from "next/image";
import Button from "@/components/button";
import DescriptionCard from "@/components/description-card";
import GlowingCard from "@/components/sub-components/glowing-card";

export default function EQMount() {
  return (
    <main>
      <div className="-z-20 fixed inset-0 min-w-screen min-h-screen bg-gradient-to-tr from-gray-950 to-gray-900" />
      <div className="flex justify-center items-center min-h-screen space-x-16">
        <div className="flex flex-col">
          <h1 className="text-slate-200 text-4xl font-bold">
            Computerized{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-100 to-sky-400">
              EQ-Mount
            </span>
          </h1>
          <h2 className="text-xl text-slate-400 w-[441px] mt-4">
            A multi-axial tracking device allowing the capture of long-exposure
            astrophotography.
          </h2>
          <div className="h-px w-full bg-slate-700 my-6" />
          <div className="flex justify-evenly">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-slate-500">
                Images taken with the mount.
              </span>
              <Button href="/astrophotography">Astrophotography</Button>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-slate-500">
                How I built the mount.
              </span>
              <Button href="/projects/eq-mount">Fabrication</Button>
            </div>
          </div>
        </div>
        <GlowingCard
          className="blur fill-blue-900"
          glowRadius={250}
          glowOpacity={0.05}
        >
          <div className="relative flex justify-center items-center w-[600px] h-[600px] border bg-slate-400/5 border-slate-700 rounded-xl shadow-xl backdrop-blur-2xl">
            <Image
              src="/mount-render.png"
              alt="EQ-Mount SolidWorks Visualize Render"
              width={500}
              height={500}
            />
            <span className="absolute -bottom-6 text-xs text-slate-500">
              SolidWorks Visualize Render
            </span>
          </div>
        </GlowingCard>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl text-slate-400 mt-10">
          See how each aspect of the mount was fabricated, step-by-step.
        </h3>
        <div className="flex space-x-12 h-[407px] mt-10">
          <DescriptionCard
            className="min-w-64 max-w-80 h-full group"
            title="GOTO Capable"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-slate-400">
                A central{" "}
                <span className="group-hover:text-slate-300 transition-all ease-out duration-200">
                  STM32 controller
                </span>{" "}
                flashed with OnStep Firmware enables{" "}
                <span className="group-hover:text-slate-300 transition-all ease-out duration-200">
                  plate-solving
                </span>{" "}
                and automatic framing of celestial objects.
              </p>
              <p className="text-slate-400">
                <span className="group-hover:text-slate-300 transition-all ease-out duration-200">
                  Autoguiding
                </span>{" "}
                minimizes periodic error by interfacing with OnStep via an ST4
                port or directly through pulse guiding.
              </p>
            </div>
            <Button
              href="https://onstep.groups.io/g/main/wiki/Home"
              className="mt-5"
            >
              OnStep Firmware
            </Button>
            <p className="text-xs text-slate-500 mt-1.5">by Howard Dutton</p>
          </DescriptionCard>
          <DescriptionCard
            className="min-w-64 max-w-80 h-[407px] group"
            title="High Resolution"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-slate-400">
                Micro-stepping with a{" "}
                <span className="group-hover:text-slate-300 transition-all ease-out duration-200">
                  360:1 worm gear ratio
                </span>{" "}
                combined with a 3:1 reduction ratio allows slow, accurate
                tracking of the night sky.
              </p>
              <p className="text-slate-400">
                The higher the gear ratio, the more continuous the mount's
                movement appears.
              </p>
            </div>
            <Button href="/blog/gear-calculations" className="mt-5">
              Machining Worm Gears
            </Button>
            <p className="text-xs text-slate-500 leading-normal mt-1.5">
              Fabricating accurate worm gears using a CNC mill and lathe.
            </p>
          </DescriptionCard>
          <DescriptionCard
            className="min-w-64 max-w-80 h-[407px] group"
            title="Stable"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-slate-400">
                A rigid 0.5”{" "}
                <span className="group-hover:text-slate-300 transition-all ease-out duration-200">
                  aluminum and alloy steel
                </span>{" "}
                design minimizes vibration, contributing to tracking accuracy.
              </p>
              <p className="text-slate-400">
                Sturdy{" "}
                <span className="group-hover:text-slate-300 transition-all ease-out duration-200">
                  twin-row angular contact bearings
                </span>{" "}
                are used to transfer rotation along the mount's RA and DEC axes.
              </p>
            </div>
            <Button href="/blog/cutting-parts" className="mt-5">
              Structure Fabrication
            </Button>
            <p className="text-xs text-slate-500 leading-normal mt-1.5">
              Machining aluminum parts and steel shafts using a CNC router,
              mill, and lathe.
            </p>
          </DescriptionCard>
        </div>
        <div className="h-24" />
        <GlowingCard
          className="blur fill-blue-900"
          glowRadius={250}
          glowOpacity={0.05}
        >
          <div className="flex flex-col items-center pt-6 pb-8 px-10 border border-transparent rounded-xl hover:bg-slate-400/[0.025] hover:border-slate-700/50  hover:shadow-xl hover:backdrop-blur-2xl transition-all ease-out duration-200 group">
            <h2 className="text-slate-300 text-2xl font-semibold w-full">
              How it works
            </h2>
            <div className="w-full h-px bg-slate-700/50 mt-3 mb-4" />
            <div className="text-slate-500 max-w-2xl flex flex-col space-y-6">
              <p>
                Gathering enough light to observe{" "}
                <span className="group-hover:text-slate-400 transition-all ease-out duration-200">
                  deep-sky objects
                </span>{" "}
                like nebulae and galaxies requires several{" "}
                <span className="group-hover:text-slate-400 transition-all ease-out duration-200">
                  long-exposure photographs
                </span>{" "}
                carefully layered on top of one another. Unfortunately, an
                observer on the ground faces a dilemma:{" "}
                <span className="group-hover:text-slate-400 transition-all ease-out duration-200">
                  the Earth rotates
                </span>
                .
              </p>
              <p>
                In order to counteract the Earth's rotation, the telescope mount
                itself has to rotate at a{" "}
                <span className="group-hover:text-slate-400 transition-all ease-out duration-200">
                  sidereal rate
                </span>
                , effectively following the night sky. This is done by first
                aligning the mount's right ascension axis with the celestial
                pole using altitude and azimuth controls. From there, the{" "}
                <span className="group-hover:text-slate-400 transition-all ease-out duration-200">
                  right ascension and declination
                </span>{" "}
                axes can be altered to point towards an object of interest.
                Declination is then locked, and right ascension slowly rotates,
                tracking the object as it makes its way across the night sky.
              </p>
              <p>
                This mount makes use of advanced capabilities like{" "}
                <span className="group-hover:text-slate-400 transition-all ease-out duration-200">
                  GOTO and autoguiding
                </span>
                . By connecting the mount's two main stepper motors to a central
                computer containing a database of celestial objects, the mount
                can automatically slew to a target. In addition, an auxiliary
                telescope and camera will provide live visual input, allowing
                the mount to automatically correct deviations in real time.
              </p>
            </div>
          </div>
        </GlowingCard>
      </div>
      <div className="h-72" />
    </main>
  );
}
