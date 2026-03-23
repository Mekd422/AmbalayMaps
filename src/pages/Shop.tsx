import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import RecentTemplates from "../Components/ui/shop/RecentTemplates";
import SubscribeSection from "../Components/ui/shop/SubscribeSection";
import { useEffect } from "react";
import { Search } from "lucide-react";



const row1Images = [
  "/shop-s1-img1.jpg", "/shop-s1-img2.jpg", "/shop-s1-img3.jpg", "/shop-s1-img4.jpg", "/shop-s1-img5.jpg", "/shop-s1-img6.jpg"
];
const row2Images = [
  "/shop-s1-img7.jpg", "/shop-s1-img8.jpg", "/shop-s1-img9.jpg"
];

const ShopHero: React.FC = () => {
  return (
    <section className="relative w-full pt-24 pb-8 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Decorative Gradient Glow (Optional, for that premium dark look) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8cff2e]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pill Badge */}
        

        {/* Main Heading */}
        <h1 className="text-4xl md:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-10">
          Ambalay Maps Store makes navigation and <br className="hidden md:block" />
          location insights <span className="text-[#8cff2e]">simple and powerful.</span>
        </h1>

        <div className="relative max-w-xl mx-auto w-full group">
  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
    <Search className="h-4 w-4 text-gray-500 group-focus-within:text-black transition-colors" />
  </div>
  <input
    type="text"
    placeholder="Search"
    className="w-full py-3 pl-10 pr-6 bg-white text-black rounded-full text-base font-medium 
               placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#8cff2e]/40 
               transition-all border-none shadow-xl"
  />
</div>
      </div>
    </section>
  );
};


const ScrollingRow: React.FC<{ images: string[], direction: 'left' | 'right' }> = ({ images, direction }) => {
  const scrollClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  return (
    <div className="flex overflow-hidden select-none gap-6 py-4">
      <div className={`flex flex-nowrap gap-6 min-w-full ${scrollClass}`}>
        {/* Render images twice for seamless loop */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[250px] md:w-[350px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-[#8cff2e]/50 transition-colors">
            <img src={src} alt="Product" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};


export default function Shop(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen font-sora selection:bg-[#8cff2e] selection:text-black transition-colors duration-300">
      <Navbar />

      <main className="pt-20"> 
        {/* Render the Hero Section */}
        <ShopHero />

        {/* Future Product Grid Section:
            <section className="max-w-7xl mx-auto px-6 py-16">
               ... 
            </section> 
        */}

        {/* Marquee Section */}
        <section className="bg-black py-10 overflow-hidden">
          <ScrollingRow images={row1Images} direction="left" />
          <ScrollingRow images={row2Images} direction="right" />
        </section>

        {/* CSS for the animations - Put this in your globals.css if preferred */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 15s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 15s linear infinite;
          }
          .animate-scroll-left:hover, .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}} />

        <RecentTemplates/>
        <SubscribeSection/>


      </main>

      <Footer />
    </div>
  );
}