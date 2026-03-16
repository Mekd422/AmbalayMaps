export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white px-6 md:px-12 pt-16 pb-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold font-sora mb-4">AmbaLay Maps</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Powerful and scalable geospatial services designed to integrate high-quality mapping, geocoding, routing, and location-based features into your applications.
            </p>
          </div>
          <div>
            <h4 className="font-semibold font-sora mb-4">Quick Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waitlist</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-sora mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-sora mb-4">Remix Template</h4>
            <p className="text-gray-400 text-sm">
              AmbaLay Maps – powerful and scalable geospatial services designed for modern, location‑aware applications.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-gray-400">
          <p>Designed by Hawi Girma ©2026</p>
          <p>Remix Template</p>
        </div>
      </div>
    </footer>
  )
}