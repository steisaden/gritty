import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { ShoppingBag, ChevronLeft, ChevronRight, Share2, Globe, Architecture } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: "italic" });

export const metadata: Metadata = {
  title: "GRIT & GLORY | Architectural Authority",
  description: "Refined industrial aesthetics and architectural fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${newsreader.variable} antialiased bg-background text-on-surface`}>
        {/* Navigation */}
        <header className="fixed top-0 w-full z-[100] h-24 flex justify-between items-center px-6 md:px-[8.5rem] bg-background/80 backdrop-blur-xl border-b border-outline-variant/10 transition-all duration-500">
          <div className="flex items-center">
            <span className="font-serif italic text-2xl tracking-tighter text-primary">GRIT & GLORY</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            {[
              { name: "Runway", href: "/runway" },
              { name: "Editorial", href: "/editorial" },
              { name: "Archive", href: "/archive" },
              { name: "Collections", href: "/" }
            ].map((item) => (
              <a 
                key={item.name} 
                className="font-label text-[0.6875rem] transition-all duration-300 hover:text-primary text-primary/60"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button className="text-primary hover:opacity-70 transition-opacity">
              <ShoppingBag className="w-5 h-5" strokeWidth={1} />
            </button>
            <button className="md:hidden text-primary">
              <span className="text-xs font-label">Menu</span>
            </button>
          </div>
        </header>

        {children}

        {/* Footer Section */}
        <footer className="relative w-full py-[8.5rem] bg-[#0e0e0e] flex flex-col items-start px-6 md:px-[8.5rem] overflow-hidden border-t border-outline-variant/10">
          <span className="font-serif text-primary/10 text-[6rem] md:text-[12rem] absolute -top-10 md:-top-20 left-0 pointer-events-none whitespace-nowrap select-none">
            GRIT & GLORY
          </span>
          
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-xs">
              <h4 className="font-serif italic text-3xl text-primary mb-6">GRIT & GLORY</h4>
              <p className="font-label text-[0.6875rem] leading-relaxed tracking-widest text-primary/40">
                A multi-disciplinary design house dedicated to the refinement of industrial aesthetics.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-24 gap-y-4">
              <div className="flex flex-col gap-4">
                <span className="font-label text-primary uppercase tracking-[0.2rem] mb-2">Internal</span>
                {["Legal", "Privacy"].map(link => (
                  <a key={link} className="font-label text-primary/40 hover:text-primary transition-colors tracking-widest" href="#">{link}</a>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-label text-primary uppercase tracking-[0.2rem] mb-2">Connect</span>
                {["Contact", "Stockists"].map(link => (
                  <a key={link} className="font-label text-primary/40 hover:text-primary transition-colors tracking-widest" href="#">{link}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center border-t border-outline-variant/10 pt-8">
            <p className="font-label text-primary/40 tracking-widest">
              © 2024 GRIT & GLORY. ARCHITECTURAL AUTHORITY.
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Globe className="w-5 h-5 text-primary/40 hover:text-primary transition-colors cursor-pointer" />
              <Share2 className="w-5 h-5 text-primary/40 hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
