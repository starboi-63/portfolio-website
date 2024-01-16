import Link from "next/link";

interface LinkedInProps {
  className?: string;
}

export default function LinkedIn(props: LinkedInProps) {
  return (
    <Link href="https://www.linkedin.com/in/tanish-makadia/">
      <svg
        className={props.className}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Linkedin" clipPath="url(#clip0_552_131)">
          <path
            id="Vector"
            d="M17.4167 0H4.58333C2.05242 0 0 2.05242 0 4.58333V17.4167C0 19.9476 2.05242 22 4.58333 22H17.4167C19.9485 22 22 19.9476 22 17.4167V4.58333C22 2.05242 19.9485 0 17.4167 0ZM7.33333 17.4167H4.58333V7.33333H7.33333V17.4167ZM5.95833 6.171C5.07283 6.171 4.35417 5.44683 4.35417 4.554C4.35417 3.66117 5.07283 2.937 5.95833 2.937C6.84383 2.937 7.5625 3.66117 7.5625 4.554C7.5625 5.44683 6.84475 6.171 5.95833 6.171ZM18.3333 17.4167H15.5833V12.2797C15.5833 9.19233 11.9167 9.42608 11.9167 12.2797V17.4167H9.16667V7.33333H11.9167V8.95125C13.1963 6.58075 18.3333 6.40567 18.3333 11.2209V17.4167Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_552_131">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}
