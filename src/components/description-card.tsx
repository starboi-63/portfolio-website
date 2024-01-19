interface DescriptionCardProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function DescriptionCard(props: DescriptionCardProps) {
  return (
    <div
      className={
        props.className +
        " pt-5 pb-6 px-8 border bg-slate-400/5 border-slate-700 rounded-xl shadow-lg backdrop-blur-2xl"
      }
    >
      <h1 className="text-xl font-semibold text-slate-200">{props.title}</h1>
      <div className="w-full h-px bg-slate-700 mt-2 mb-3" />
      {props.children}
    </div>
  );
}
