"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sessionStorage.setItem('showLoading', 'true');
    window.location.href = '/';
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    sessionStorage.setItem('skipLoading', 'true');
  };

    const navLinks = [
      { href: "/#crafted", label: "Work", onClick: handleWorkClick },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ];
  
    return (
      <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-black/60 backdrop-blur-md border-b border-white/[0.05] transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 smooth-transition hover:opacity-80">
            <Image
              src="/previews/logo.png"
              alt="ZYXEN Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain filter invert"
            />
            <span className="text-logo text-white font-bold tracking-tighter">
              <span className="text-[1.5rem]">Z</span>YXEN
            </span>
          </a>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white smooth-transition font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
  
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-white hover:text-purple-400 transition-colors bg-white/5 rounded-full border border-white/10 shadow-lg">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 border-white/10 backdrop-blur-2xl w-full sm:w-[350px] p-8">
                <SheetHeader className="mb-12">
                  <SheetTitle className="text-white font-bold tracking-tighter text-left">
                    <span className="text-2xl">Z</span>YXEN
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={link.onClick}
                      className="text-3xl font-bold tracking-tighter text-white/40 hover:text-white transition-all hover:pl-4 border-l border-white/0 hover:border-purple-500"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-8 mt-8 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/20 mb-6">Let's build together</p>
                    <a
                      href="/contact"
                      className="w-full inline-block px-8 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-full text-center hover:bg-purple-500 hover:text-white transition-all transform active:scale-95"
                    >
                      Start Project
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        {/* Desktop CTA */}
        <a 
          href="/contact" 
          className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-white border border-white/20 px-6 py-2.5 rounded-full backdrop-blur-md bg-white/5 hover:bg-white hover:text-black transition-all duration-300 font-bold"
        >
          Start
        </a>
      </div>
    </header>
  );
};

export default Header;