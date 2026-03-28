import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react"; 
import logo from "../../assets/icons/download.svg";
import { Link } from "react-router-dom";

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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 dark:bg-black/20 backdrop-blur-xl border-gray-200 dark:border-white/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="AmbaLay Maps Logo" className="h-11 w-11" />
          <Link to="/">
            <h4 className="text-lg font-medium font-sora tracking-tight text-black dark:text-white">
              AmbaLay Maps
            </h4>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-black dark:text-white">
          <Link to="/#how-it-works" className="text-sm hover:text-[#8cff2e] transition-colors">About Us</Link>
          <Link to="/price" className="text-sm hover:text-[#8cff2e] transition-colors">Pricing</Link>
          <Link to="/documentation" className="text-sm hover:text-[#8cff2e] transition-colors">Documentation</Link>
          <Link to="/blog" className="text-sm hover:text-[#8cff2e] transition-colors">Blog</Link>
        </div>

        {/* Desktop Buttons Group */}
        <div className="hidden lg:flex items-center gap-3">
          {/* 1. Shop Button */}
          <Link 
            to="/shop"
            className="group bg-gray-100 dark:bg-[#1a1a1a] flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#2f2f2f] transition-colors"
          >
            Shop <ArrowUpRight size={15} />
          </Link>

          {/* 2. Contact Button */}
          <Link
            to="/contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#8cff2e] text-black hover:brightness-110 transition-all"
          >
            Contact <ArrowUpRight size={15} />
          </Link>

          {/* Spacer/Divider (Optional) */}
          <div className="w-[1px] h-6 bg-gray-300 dark:bg-white/10 mx-1" />

          {/* 3. Login (Simple Link) */}
          <Link to="/login" className="text-sm font-medium text-black dark:text-white hover:text-[#8cff2e] px-2 transition-colors">
            Login
          </Link>

          {/* 4. Register (Colored Button) */}
          <Link
            to="/register"
            className="px-6 py-2.5 rounded-full text-sm font-medium bg-[#8cff2e] text-black shadow-[0_0_15px_rgba(140,255,46,0.2)] hover:brightness-110 transition-all"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 z-50 lg:hidden shadow-xl">
          <div className="flex flex-col p-6 space-y-4 text-black dark:text-white">
            <Link to="/#how-it-works" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/price" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link to="/documentation" onClick={() => setIsMenuOpen(false)}>Documentation</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            
            <hr className="border-gray-100 dark:border-white/10" />
            
            <div className="flex flex-col gap-3">
                <Link to="/shop" className="text-center py-3 rounded-xl bg-gray-100 dark:bg-[#1a1a1a]" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                <Link to="/contact" className="text-center py-3 rounded-xl border border-[#8cff2e] text-black dark:text-[#8cff2e]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <div className="grid grid-cols-2 gap-3">
                    <Link to="/login" className="text-center py-3 rounded-xl bg-gray-100 dark:bg-[#1a1a1a]" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    <Link to="/register" className="text-center py-3 rounded-xl bg-[#8cff2e] text-black font-semibold" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}