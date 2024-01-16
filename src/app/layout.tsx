import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="page-container" className="relative min-h-screen">
          <NavBar />
          {props.children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
