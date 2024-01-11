import SVGHover from "@/components/svg-hover";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-gradient-to-tr from-blue-bg-dark to-red-bg-dark">
      <div className="flex flex-col mt-32 items-start">
        <h1 className="text-5xl font-bold text-grey-light">Tanish Makadia</h1>
        <div className="flex space-x-4 items-center pt-2">
          <h2 className="text-xl font-medium text-grey-medium">CS + Math</h2>
          <div className="w-px h-6 border-r border-grey-border" />
          <h2 className="text-xl font-medium text-grey-medium">
            Brown University
          </h2>
        </div>
        <div className="h-px w-367px border-b border-grey-border pt-4 mb-4" />
        <p className="w-96 text-base font-normal text-grey-dark">
          Hey! I'm an undergraduate student who's fascinated by the intersection
          of programming, proof-writing, and astronomy. When I'm not grinding
          coursework, you'll find me [dynamic content].
        </p>
      </div>
    </main>
  );
}
