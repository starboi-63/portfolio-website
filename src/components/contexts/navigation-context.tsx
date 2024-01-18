"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

interface NavigationContextProps {
  children: React.ReactNode;
}

interface NavigationContextType {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  freezeHighlight: boolean;
  handleLinkClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  activeLink: "/#experience",
  setActiveLink: () => {},
  freezeHighlight: false,
  handleLinkClick: () => {},
});

export default function NavigationProvider(props: NavigationContextProps) {
  const [activeLink, setActiveLink] = useState<string>("/#experience");
  const [freezeHighlight, setFreezeHighlight] = useState(false);
  const router = useRouter();

  // handle all possible navigation link clicks
  const handleLinkClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const fromLinkParts = activeLink.split("#");
    const toLinkParts = href.split("#");
    const fromPath = fromLinkParts[0];
    const toPath = toLinkParts[0];

    if (fromPath === "/" && toPath === "/") {
      // if routing from homepage to homepage, scroll to the section
      event.preventDefault();
      setFreezeHighlight(true);
      const sectionElement = document.getElementById(href.split("#")[1]);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setTimeout(() => {
        setFreezeHighlight(false);
      }, 500);
    } else if (toPath === "/") {
      // if routing from another page to homepage, delay so that cards can load
      event.preventDefault();
      setFreezeHighlight(true);
      await router.push("/");

      setTimeout(() => {
        const sectionElement = document.getElementById(href.split("#")[1]);

        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);

      setTimeout(() => {
        setFreezeHighlight(false);
      }, 1000);
    }

    setActiveLink(href);
  };

  return (
    <NavigationContext.Provider
      value={{ activeLink, setActiveLink, freezeHighlight, handleLinkClick }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}
