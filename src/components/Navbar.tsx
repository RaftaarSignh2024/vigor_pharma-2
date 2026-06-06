"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Announcement Bar */}
      <div className="w-full bg-[#f37021] text-white flex items-center h-10 overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between h-full">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-base shrink-0">
            <Link href="#" className="hover:text-white/80 transition-colors"><i className="ph-fill ph-facebook-logo"></i></Link>
            <Link href="#" className="hover:text-white/80 transition-colors"><i className="ph-fill ph-instagram-logo"></i></Link>
            <Link href="#" className="hover:text-white/80 transition-colors"><i className="ph-fill ph-youtube-logo"></i></Link>
            <Link href="#" className="hover:text-white/80 transition-colors"><i className="ph-fill ph-twitter-logo"></i></Link>
          </div>
          
          {/* Marquee */}
          <div className="flex-1 overflow-hidden ml-8 relative flex items-center h-full mask-linear-edges">
            <div className="custom-marquee whitespace-nowrap flex items-center text-sm font-medium w-max">
              {/* First half */}
              <span className="mx-8">🌱 Safe & Gentle for Daily Use</span>
              <span className="mx-8 opacity-50">──────</span>
              <span className="mx-8">🌿 100% Premium Quality Products</span>
              <span className="mx-8 opacity-50">──────</span>
              <span className="mx-8">🛡️ Trusted by Healthcare Professionals</span>
              <span className="mx-8 opacity-50">──────</span>
              <span className="mx-8">⭐ Experience True Wellness</span>
              <span className="mx-8 opacity-50">──────</span>
              
              {/* Second half (duplicate for smooth infinite loop) */}
              <span className="mx-8">🌱 Safe & Gentle for Daily Use</span>
              <span className="mx-8 opacity-50">──────</span>
              <span className="mx-8">🌿 100% Premium Quality Products</span>
              <span className="mx-8 opacity-50">──────</span>
              <span className="mx-8">🛡️ Trusted by Healthcare Professionals</span>
              <span className="mx-8 opacity-50">──────</span>
              <span className="mx-8">⭐ Experience True Wellness</span>
              <span className="mx-8 opacity-50">──────</span>
            </div>
          </div>
        </div>
      </div>

      <nav className={`w-full transition-all duration-300 ${isScrolled ? "py-1 bg-white/90 backdrop-blur-md shadow-sm" : "py-2 glass"}`}>
        <div className="w-full max-w-[1280px] mx-auto px-6 flex justify-between items-center relative">
        <Link href="/" className="relative h-16 md:h-20 w-48 shrink-0 flex items-center">
          <img src="/logo.png" alt="Vigor Life Care LLP Logo" className="absolute top-1/2 -translate-y-1/2 left-10 md:left-16 h-16 md:h-[90px] w-auto object-contain mix-blend-multiply max-w-none" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary transition-colors ${pathname === link.path ? "text-primary after:w-full" : "text-text-dark after:w-0"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-text-dark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={isMobileMenuOpen ? "ph ph-x" : "ph ph-list"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-72 h-screen bg-surface shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col p-8 pt-24 gap-6 transition-all duration-400 ease-in-out z-40 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            className={`font-medium text-lg ${pathname === link.path ? "text-primary" : "text-text-dark"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
    </header>
  );
}
