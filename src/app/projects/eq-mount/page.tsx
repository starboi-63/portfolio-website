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
      <div className="flex flex-col items-center min-h-screen space-y-10">
        <h3 className="text-xl text-slate-400 mt-10">
          See how each aspect of the mount was fabricated, step-by-step.
        </h3>
        <div className="flex space-x-12 h-[407px]">
          <DescriptionCard
            className="min-w-64 max-w-80 h-full"
            title="GOTO Capable"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-slate-400">
                A central{" "}
                <span className="text-slate-300">STM32 controller</span> flashed
                with OnStep Firmware enables plate-solving and automatic framing
                of celestial objects.
              </p>
              <p className="text-slate-400">
                Autoguiding minimizes periodic error by interfacing with OnStep
                via an ST4 port or directly through pulse guiding.
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
            className="min-w-64 max-w-80 h-[407px]"
            title="High Resolution"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-slate-400">
                Micro-stepping with a{" "}
                <span className="text-slate-300">360:1 worm gear</span> ratio
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
            className="min-w-64 max-w-80 h-[407px]"
            title="Stable"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-slate-400">
                A rigid 0.5”{" "}
                <span className="text-slate-300">aluminum and alloy steel</span>{" "}
                design minimizes vibration, contributing to tracking accuracy.
              </p>
              <p className="text-slate-400">
                Sturdy twin-row angular contact bearings are used to transfer
                rotation along the mount's RA and DEC axes.
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
      </div>
    </main>
  );
}
