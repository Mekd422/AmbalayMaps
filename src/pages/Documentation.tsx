import React, { useState } from 'react';
import { 
  Search, Moon, FileText, MapPin, HelpCircle, Compass, 
  Pencil, Database, Layout, Sparkles, Gauge,
  Menu, X 
} from 'lucide-react';

// --- TypeScript Interfaces ---

interface SidebarGroup {
  group: string;
  items: string[];
}

interface SidebarContentProps {
  sidebarLinks: SidebarGroup[];
}

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// --- Main Component ---

const Documentation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const sidebarLinks: SidebarGroup[] = [
    { group: "Quick Start Guide", items: ["Introduction", "Syntax and Structure", "Control Flow", "Functions", "Objects and Arrays", "ES6+ Features"] },
    { group: "Geocoding", items: ["Asynchronous JavaScript", "Modules and Imports"] },
    { group: "Get to know", items: ["DOM Manipulation", "Event Handling", "Forms and Input Handling"] },
    { group: "Routing API", items: ["Web API", "Compatibility and Performance"] }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sora selection:bg-[#8cff2e] selection:text-black">
      
      {/* Navigation */}
      <nav className="h-16 border-b border-white/5 bg-[#050505]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="w-full h-full flex items-center justify-between px-6 lg:pl-24 lg:pr-12">
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#8cff2e] rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(140,255,46,0.3)]">
                <div className="w-3 h-3 border-2 border-black rounded-sm"></div>
              </div>
              <span className="font-semibold text-sm tracking-tight">AmbaLay Maps</span>
            </div>
            <div className="hidden sm:flex gap-6 text-sm">
              <a href="#" className="bg-white/10 px-3 py-1 rounded-md text-white transition-all">Documentation</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className={`absolute left-0 top-0 h-full w-72 bg-[#050505] border-r border-white/10 p-6 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="mt-12">
              <SidebarContent sidebarLinks={sidebarLinks} />
            </div>
          </aside>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-white/10 pt-12 pr-8 lg:ml-24 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto no-scrollbar">
          <SidebarContent sidebarLinks={sidebarLinks} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-16 pb-24 px-6 md:px-12 relative flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/10 blur-[140px] -z-10 pointer-events-none" />
          
          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            
            {/* New Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5 self-center">
              <span className="bg-[#8cff2e] text-black text-xs font-black px-2 py-0.5 rounded-full uppercase leading-none">New</span>
              <span className="text-sm text-gray-300 font-medium">Better async handling</span>
            </div>

            {/* Hero Section */}
            <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
              AmbaLay Maps Documentation
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              Explore AmbaLay Maps API's features, integrations, and ways of implementation.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all shadow-lg shadow-white/5">
                Introduction
              </button>
              <span className="text-gray-500 text-sm font-medium italic">or</span>
              <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
                Start a new project
              </button>
            </div>

            {/* Categories Section */}
            <div className="w-full text-left">
              <h2 className="text-2xl md:text-3xl font-medium mb-10 tracking-tight">Explore by categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CategoryCard icon={<FileText className="text-blue-400" size={24} />} title="Quick Start Guide" desc="Learn how to use the API and follow best practices for the software" />
                <CategoryCard icon={<MapPin className="text-blue-400" size={24} />} title="Geocoding" desc="Learn how to use the API to convert addresses to coordinates and vice versa" />
                <CategoryCard icon={<HelpCircle className="text-blue-400" size={24} />} title="Get to know" desc="Learn how to use the API and follow best practices for software building" />
                <CategoryCard icon={<Compass className="text-blue-400" size={24} />} title="Routing API" desc="Learn how to calculate routes between locations with turn by turn directions" />
              </div>
            </div>

            {/* Popular Articles */}
            <div className="w-full mt-20 text-left">
              <h2 className="text-2xl md:text-3xl font-medium mb-8 tracking-tight">Popular articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { cat: "Quick Start Guide", title: "Introduction" },
                  { cat: "Geocoding", title: "Asynchronous JavaScript" },
                  { cat: "Routing API", title: "Web API" }
                ].map((art, i) => (
                  <div key={i} className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:bg-white/10 transition-all cursor-pointer">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{art.cat}</p>
                      <h3 className="text-sm font-semibold text-white">{art.title}</h3>
                    </div>
                    <span className="text-gray-500 group-hover:text-white transition">→</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="w-full mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
              <FeatureItem 
                icon={<Pencil className="text-indigo-500" size={20} />}
                title="Easily editable"
                desc="Thanks to premade assets, you can modify all colors and text, such as the Action Color"
              />
              <FeatureItem 
                icon={<Database className="text-indigo-500" size={20} />}
                title="CMS"
                desc="Edit and manage all pages exclusively within the CMS mode"
              />
              <FeatureItem 
                icon={<Layout className="text-indigo-500" size={20} />}
                title="Components"
                desc="Finely crafted components with multiple states and Variables"
              />
              <FeatureItem 
                icon={<Sparkles className="text-indigo-500" size={20} />}
                title="Automatically generated"
                desc="All pages and navigation will be generated automatically from the CMS"
              />
              <FeatureItem 
                icon={<Moon className="text-indigo-500" size={20} />}
                title="Dark and Light Mode"
                desc="Beautiful modes deliver a magnificent experience for users"
              />
              <FeatureItem 
                icon={<Gauge className="text-indigo-500" size={20} />}
                title="Optimized SEO"
                desc="Generate og:image for each of Docs page. Designed to improve the discoverability of your documentation."
              />
            </div>

          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full relative bg-[#050505] py-16 border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5"></div>
        <div className="w-full px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            SquareDocs · © 2026 All rights reserved
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors underline decoration-gray-800 underline-offset-4">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors underline decoration-gray-800 underline-offset-4">Terms of service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Sub-Components with Explicit Typing ---

const SidebarContent = ({ sidebarLinks }: SidebarContentProps) => (
  <>
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-10 text-xs focus:outline-none focus:border-[#8cff2e]/50 transition-all"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 border border-white/10 rounded px-1.5 py-0.5 text-[10px] text-gray-500 font-sans hidden sm:block">
        &nbsp;⌘K&nbsp;
      </div>
    </div>

    <div className="space-y-8">
      {sidebarLinks.map((group: SidebarGroup, idx: number) => (
        <div key={idx}>
          <h4 className="text-[11px] font-sora font-bold uppercase tracking-[0.15em] text-white mb-4">
            {group.group}
          </h4>
          <ul className="space-y-3 pl-4 border-l border-white/5">
            {group.items.map((item: string, i: number) => (
              <li key={i}>
                <a 
                  href="#" 
                  className={`text-xs transition-colors ${i === 0 && idx === 0 ? 'text-white font-medium' : 'text-gray-500 hover:text-[#8cff2e]'}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

const CategoryCard = ({ icon, title, desc }: CategoryCardProps) => (
  <div className="bg-[#0A0A0A] border border-white/5 rounded-[24px] p-8 hover:bg-[#111111] hover:border-white/10 transition-all cursor-pointer group text-left">
    <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FeatureItem = ({ icon, title, desc }: FeatureItemProps) => (
  <div className="flex gap-4 group">
    <div className="mt-1 shrink-0">{icon}</div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-bold text-white tracking-tight">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Documentation;