import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-black dark:text-white">
          <Link to="/#how-it-works" className="text-sm hover:text-[#8cff2e] transition-colors">
            About Us
          </Link>
          <Link to="/#pricing" className="text-sm hover:text-[#8cff2e] transition-colors">
            Pricing
          </Link>
          <Link to="/documentation" className="text-sm hover:text-[#8cff2e] transition-colors">
            Documentation
          </Link>
          <Link to="/blog" className="text-sm hover:text-[#8cff2e] transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          
          {/* <button
            onClick={toggleTheme}
            className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>  */}

          <button className="group bg-gray-100 dark:bg-[#1a1a1a] flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#2f2f2f] transition-colors border border-gray-200 dark:border-white/5">
            Shop
            <ArrowUpRight size={16} />
          </button>

          <Link to="/contact" className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[#8cff2e] text-black hover:brightness-110 transition-all">
            Contact
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 z-50 lg:hidden">
          <div className="flex flex-col p-6 space-y-4 text-black dark:text-white">
            <Link to="/#how-it-works">About Us</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/documentation" onClick={() => setIsMenuOpen(false)}>Documentation</Link>
            <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>

            {/* Toggle in mobile
            <button onClick={toggleTheme} className="mt-4">
              Toggle Theme
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}