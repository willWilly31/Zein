import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Image */}
          <img 
            src="https://pqf3k4ltkkhtm2vl.public.blob.vercel-storage.com/z.png" 
            alt="Zein Training Center" 
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col leading-none ml-2">
            <span className="text-primary font-bold tracking-wider text-lg">ZEIN</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Training Center</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full px-6 shadow-md shadow-orange-500/20">
            Daftar Sekarang
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="bg-secondary text-white w-full">
                  Daftar Sekarang
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
