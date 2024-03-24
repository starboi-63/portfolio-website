interface CircleProps {
  radius: number;
  className?: string;
}

export default function Circle(props: CircleProps) {
  return (
    <div
      className={"rounded-full " + props.className}
      style={{ width: props.radius * 2, height: props.radius * 2 }}
    />
  );
}
