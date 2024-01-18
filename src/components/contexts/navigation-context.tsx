"use client";

import { createContext, useState, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationContextProps {
  children: React.ReactNode;
}

interface NavigationContextType {
  pathname: string;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  freezeHighlight: boolean;
  handleLinkClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  pathname: "/",
  activeLink: "/#experience",
  setActiveLink: () => {},
  freezeHighlight: false,
  handleLinkClick: () => {},
});

export default function NavigationProvider(props: NavigationContextProps) {
  const [activeLink, setActiveLink] = useState<string>("");
  const [freezeHighlight, setFreezeHighlight] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // map hrefs to their corresponding active links in the navbar
  interface HrefToActiveLinkMap {
    [href: string]: string;
  }

  const hrefToActiveLinkMap: HrefToActiveLinkMap = useMemo(
    () => ({
      "/": "/#experience",
      "/#experience": "/#experience",
      "/#projects": "/#projects",
      "/blog": "/blog",
      "/astrophotography": "/astrophotography",
      "/uses": "/uses",
      "/projects/stock-screener": "/#projects",
      "/projects/eq-mount": "/#projects",
    }),
    []
  );

  // set active link based on current pathname
  useEffect(() => {
    if (pathname !== "/") {
      setActiveLink(hrefToActiveLinkMap[pathname]);
    }
  }, [pathname, hrefToActiveLinkMap]);

  // handle all possible navigation link clicks
  const handleLinkClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const fromPath = pathname;
    const toLinkParts = href.split("#");
    const toPath = toLinkParts[0];
    const toSection = toLinkParts[1];

    // if scrolling is in progress, prevent navigation to avoid bugs
    if (freezeHighlight) {
      event.preventDefault();
      return;
    }

    if (fromPath === "/" && toPath === "/") {
      // if routing from homepage to homepage, scroll to the section
      setActiveLink(hrefToActiveLinkMap[href]);
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
      setActiveLink(hrefToActiveLinkMap[href]);
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
  };

  return (
    <NavigationContext.Provider
      value={{
        pathname,
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
