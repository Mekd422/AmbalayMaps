import logo from "../../assets/icons/download.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="AmbaLay Maps Logo"
                className="h-10 w-10"
              />
              <h4 className="text-xl font-medium font-sora tracking-tight">
                AmbaLay Maps
              </h4>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Powerful and scalable geospatial services designed to integrate high-quality mapping, geocoding, routing, and location-based features into your applications.
            </p>
            
            <div className="pt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="text-[#8cff2e]">♥</span> 
              <span>Designed by <span className="text-white hover:text-[#8cff2e] transition-colors cursor-pointer">Hawi Girma ©2026</span></span>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <div className="lg:col-span-2">
            <h4 className="font-medium text-white mb-6 uppercase text-xs tracking-widest">Quick Menu</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#8cff2e] transition-colors">How it works</a></li>
              <li><a href="#features" className="hover:text-[#8cff2e] transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-[#8cff2e] transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-[#8cff2e] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#8cff2e] transition-colors">Waitlist</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-medium text-white mb-6 uppercase text-xs tracking-widest">Information</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-[#8cff2e] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#8cff2e] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#8cff2e] transition-colors">Terms</a></li>
              <li><a href="#blog" className="hover:text-[#8cff2e] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#8cff2e] transition-colors">Remix Template</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}