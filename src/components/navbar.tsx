import TMLogo from "./tanish-makadia-logo";

export default function NavBar() {
  return (
    <nav className="flex min-w-full h-50px bg-grey-light/5 border-b border-grey-border">
      <div className="flex min-w-40 justify-center items-center group">
        <TMLogo
          color="#8B949E"
          hoverColor="#C9D1D9"
          width={45}
          height={45}
          className="transition-colors duration-100 ease-out group-hover:fill-[var(--svg-hover-color)]"
        />
        <text className="font-bold text-grey-medium group-hover:text-grey-light transition-colors duration-100 ease-out">
          TM
        </text>
      </div>
    </nav>
  );
}
