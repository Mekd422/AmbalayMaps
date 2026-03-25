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
          <Link to="/#how-it-works"
            onClick={() => {
              setTimeout(() => {
                const el = document.querySelector("#how-it-works");
                el?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }} 
            className="text-sm hover:text-[#8cff2e] transition-colors">
            About Us
          </Link>
          <Link to="/price" 
            onClick={() => {
              setTimeout(() => {
                const el = document.querySelector("#pricing");
                el?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }} 
            className="text-sm hover:text-[#8cff2e] transition-colors">
            Pricing
          </Link>
          <Link to="/documentation" className="text-sm hover:text-[#8cff2e] transition-colors">
            Documentation
          </Link>
          <Link to="/blog" 
          onClick={() => {
              setTimeout(() => {
                const el = document.querySelector("#pricing");
                el?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }} 
          className="text-sm hover:text-[#8cff2e] transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <Link 
            to="/shop"
            className="group bg-gray-100 dark:bg-[#1a1a1a] flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#2f2f2f] transition-colors">
            Shop <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[#8cff2e] text-black hover:brightness-110 transition-all"
          >
            Contact <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 z-50 lg:hidden">
          <div className="flex flex-col p-6 space-y-4 text-black dark:text-white">
            <Link to="/#how-it-works" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/#pricing" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/documentation" onClick={() => setIsMenuOpen(false)}>
              Documentation
            </Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}