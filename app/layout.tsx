import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikash — Full Stack Developer",
  description: "MERN Stack Developer building modern web apps and AI-powered projects.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-bg text-text-primary selection:bg-neon-cyan/30 selection:text-neon-cyan`}
      >
        <ScrollProgress />

        <div className="blob-container">
          <div className="blob blob-purple" />
          <div className="blob blob-cyan" />
          <div className="blob blob-purple" style={{ bottom: '20%', right: '20%', opacity: 0.1 }} />
        </div>
        
        <main className="relative z-10 flex flex-col items-center w-full">
          {children}
        </main>

      </body>
    </html>
  );
}
