import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
  title: "Portfolio | Premium Dark Theme",
  description: "A high-end futuristic portfolio project built with Next.js and Tailwind CSS.",
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
        <div className="blob-container">
          <div className="blob blob-purple" />
          <div className="blob blob-cyan" />
          <div className="blob blob-purple" style={{ bottom: '20%', right: '20%', opacity: 0.1 }} />
        </div>
        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
