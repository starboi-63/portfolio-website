"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

interface NavigationContextProps {
  children: React.ReactNode;
}

interface NavigationContextType {
  path: string;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  freezeHighlight: boolean;
  handleLinkClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  path: "/",
  activeLink: "/#experience",
  setActiveLink: () => {},
  freezeHighlight: false,
  handleLinkClick: () => {},
});

export default function NavigationProvider(props: NavigationContextProps) {
  const [path, setPath] = useState<string>("/");
  const [activeLink, setActiveLink] = useState<string>("/#experience");
  const [freezeHighlight, setFreezeHighlight] = useState(false);
  const router = useRouter();

  // map hrefs to their corresponding active links in the navbar
  interface HrefToActiveLinkMap {
    [href: string]: string;
  }

  const hrefToActiveLinkMap: HrefToActiveLinkMap = {
    "/": "/#experience",
    "/#experience": "/#experience",
    "/#projects": "/#projects",
    "/blog": "/blog",
    "/astrophotography": "/astrophotography",
    "/uses": "/uses",
    "/projects/stock-screener": "/#projects",
    "/projects/eq-mount": "/#projects",
  };

  // handle all possible navigation link clicks
  const handleLinkClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const fromPath = path;
    const toLinkParts = href.split("#");
    const toPath = toLinkParts[0];
    const toSection = toLinkParts[1];

    if (fromPath === "/" && toPath === "/") {
      // if routing from homepage to homepage, scroll to the section
      event.preventDefault();
      setFreezeHighlight(true);
      const sectionElement = document.getElementById(toSection);

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
        const sectionElement = document.getElementById(toSection);

        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);

      setTimeout(() => {
        setFreezeHighlight(false);
      }, 1000);
    }

    setPath(toPath);
    setActiveLink(hrefToActiveLinkMap[href]);
  };

  return (
    <NavigationContext.Provider
      value={{
        path,
        activeLink,
        setActiveLink,
        freezeHighlight,
        handleLinkClick,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}
