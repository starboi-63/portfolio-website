import { createContext, useState } from "react";

interface NavigationContextProps {
  children: React.ReactNode;
}

interface NavigationContextType {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

export const NavigationContext = createContext<NavigationContextType>({
  activeLink: "/#experience",
  setActiveLink: () => {},
});

export default function NavigationProvider(props: NavigationContextProps) {
  const [activeLink, setActiveLink] = useState<string>("/#experience");

  return (
    <NavigationContext.Provider value={{ activeLink, setActiveLink }}>
      {props.children}
    </NavigationContext.Provider>
  );
}
