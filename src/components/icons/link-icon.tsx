interface LinkIconProps {
  className?: string;
}

export default function LinkIcon(props: LinkIconProps) {
  return (
    <svg
      className={props.className}
      width="16px"
      height="16px"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 19"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
      />
    </svg>
  );
}
