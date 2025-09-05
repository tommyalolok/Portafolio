import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tommy",
  description: "Portfolio personal de Tommy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-black text-white min-h-screen overflow-x-hidden`}
      >
      
        <Header />

        
        <div className="relative z-10">{children}</div>

       
        <Navbar />
      </body>
    </html>
  );
}
