import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import logo from "../../assets/icons/download.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="AmbaLay Maps Logo"
            className="h-11 w-11"
          />
          <h4 className="text-lg font-medium font-sora tracking-tight text-white">
            AmbaLay Maps
          </h4>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-white">
          <a href="#about" className="text-sm hover:text-[#8cff2e] transition-colors">
            About Us
          </a>
          <a href="#pricing" className="text-sm hover:text-[#8cff2e] transition-colors">
            Pricing
          </a>
          <a href="#features" className="text-sm hover:text-[#8cff2e] transition-colors">
            Documentation
          </a>
          <a href="#blog" className="text-sm hover:text-[#8cff2e] transition-colors">
            Blog
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="group bg-[#1a1a1a] flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white hover:bg-[#2f2f2f] transition-colors border border-white/5">
            Shop
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <button className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[#8cff2e] text-black hover:brightness-110 transition-all">
            Contact
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 z-50 lg:hidden">
          <div className="flex flex-col p-6 space-y-4 text-white">
            <a href="#about" className="px-5 py-2 rounded-full hover:bg-white/10 text-center transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#pricing" className="px-5 py-2 rounded-full hover:bg-white/10 text-center transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#features" className="px-5 py-2 rounded-full hover:bg-white/10 text-center transition-colors" onClick={() => setIsMenuOpen(false)}>Documentation</a>
            <a href="#blog" className="px-5 py-2 rounded-full hover:bg-white/10 text-center transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
            
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button className="px-5 py-2 rounded-full bg-white/10 text-white transition-colors">Shop</button>
              <button className="px-5 py-2 rounded-full bg-[#8cff2e] text-black font-medium transition-colors">Contact</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}