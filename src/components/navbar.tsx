import TMLogo from "./tanish-makadia-logo";

export default function NavBar() {
  return (
    <nav className="flex min-w-full h-50px bg-grey-light/5 border-b border-grey-border">
      <div className="flex min-w-40 justify-center items-center">
        <TMLogo color="#8B949E" hoverColor="#C9D1D9" width={45} height={45} />
        <text className="font-bold text-grey-medium">TM</text>
      </div>
    </nav>
  );
}
