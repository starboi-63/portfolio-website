import Circle from "./sub-components/circle";
import GlowingCard from "./sub-components/glowing-card";

interface ApplicationCardProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ApplicationCard(props: ApplicationCardProps) {
  return (
    <div className={"flex flex-col shadow-xl" + props.className}>
      <GlowingCard
        className="blur fill-blue-900"
        glowRadius={250}
        glowOpacity={0.05}
      >
        <div className="flex justify-center items-center h-[30px] border bg-slate-400/5 border-slate-700 rounded-t-xl backdrop-blur-2xl">
          <div className="absolute left-2 flex space-x-2 items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <Circle key={i} radius={6} className="border border-slate-700" />
            ))}
          </div>
          <span className="text-sm text-slate-500">{props.title}</span>
        </div>
      </GlowingCard>
      <div className="rounded-b-xl overflow-hidden border-b border-l border-r border-slate-700">
        {props.children}
      </div>
    </div>
  );
}
