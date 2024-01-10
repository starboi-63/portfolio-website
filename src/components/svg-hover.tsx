import Link from "next/link";

interface SVGHoverProps {
  color: string;
  hoverColor: string;
  width: number;
  height: number;
  className: string;
  children: React.ReactNode;
}

export default function SVGHover(props: SVGHoverProps) {
  const style = {
    "--svg-color": props.color,
    "--svg-hover-color": props.hoverColor,
    width: props.width,
    height: props.height,
  };

  return (
    <svg
      style={style}
      viewBox="0 0 {width} {height}"
      fill="var(--svg-color)"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      {props.children}
    </svg>
  );
}
