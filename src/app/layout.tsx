import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent & Sons",
  description:
    "Agent & Sons builds the network for agentic applications—designing, validating, and deploying intelligent systems.",
  metadataBase: new URL("https://agent-and-sons.example"),
  openGraph: {
    title: "Agent & Sons",
    description:
      "Building the network for agentic applications—at scale, with rigor.",
    url: "https://agent-and-sons.example",
    siteName: "Agent & Sons",
    images: [],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent & Sons",
    description:
      "Building the network for agentic applications—at scale, with rigor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Agent & Sons
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:opacity-80" href="#features">Features</a>
              <a className="hover:opacity-80" href="#news">News</a>
              <a className="hover:opacity-80" href="#team">Team</a>
              <a className="hover:opacity-80" href="#investors">Investors</a>
              <a className="hover:opacity-80" href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Agent & Sons. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#contact" className="hover:opacity-80">Get in touch</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
