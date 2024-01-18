import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import NavigationProvider from "@/components/contexts/navigation-context";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="-z-20 fixed inset-0 min-w-screen min-h-screen bg-gradient-to-tr from-slate-950 to-slate-900" />
        <div className="relative min-h-screen">
          <NavigationProvider>
            <NavBar />
            {props.children}
            <Footer />
          </NavigationProvider>
        </div>
      </body>
    </html>
  );
}
