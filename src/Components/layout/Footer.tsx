import logo from "../../assets/icons/download.svg";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white px-6 py-16">
      {/* Container aligned with Navbar (max-w-7xl) */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Logo & Brand Description (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
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
            
            {/* Attribution with the neon green accent from the design */}
            <div className="pt-4 flex items-center gap-2 text-sm text-gray-400">
              <span className="text-[#8cff2e]">♥</span> 
              <span>Designed by <span className="text-[#8cff2e]">Hawi Girma ©2026</span></span>
            </div>
          </div>

          {/* Spacer Column for large screens (Span 2) */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick Menu Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6">Quick Menu</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waitlist</a></li>
            </ul>
          </div>

          {/* Information Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6">Information</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Remix Template</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}