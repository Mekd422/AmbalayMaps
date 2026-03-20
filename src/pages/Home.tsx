import { useEffect, useRef, useState } from "react"
import Navbar from "../Components/layout/Navbar"
import Footer from "../Components/layout/Footer"

import HeroSection from "../Components/ui/HeroSection"
import HowItWorks from "../Components/ui/HowItWorks"
import MappingSolutions from "../Components/ui/MappingSolutions"
import FeaturesSection from "../Components/ui/FeaturesSection"
import ComparisonSection from "../Components/ui/ComparisonSection"
import TestimonialMarquee from "../Components/ui/TestimonialMarquee"
import PricingSection from "../Components/ui/PricingSection"
import IndustriesSection from "../Components/ui/IndustriesSection"
import FAQSection from "../Components/ui/FAQSection"
import CTASection from "../Components/ui/CTASection"

import dashboardImg from "../assets/images/dashboard.png"

export default function Home() {
  const previewRef = useRef<HTMLElement | null>(null)
  const [previewProgress, setPreviewProgress] = useState(0)

  useEffect(() => {
    const el = previewRef.current
    if (!el) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      const start = viewportH * 0.95
      const end = viewportH * 0.35
      const raw = (start - rect.top) / (start - end)
      const clamped = Math.min(1, Math.max(0, raw))
      const eased = 1 - Math.pow(1 - clamped, 3)
      setPreviewProgress(eased)
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen font-sora selection:bg-[#8cff2e] selection:text-black">
      <Navbar />
      <HeroSection />

      <section ref={previewRef} className="px-6 md:px-12 pb-12 md:pb-16 bg-white dark:bg-black -mt-10 md:-mt-14">
        <div className="max-w-5xl mx-auto">
          <div className="relative" style={{ perspective: "1500px" }}>
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out"
              style={{
                transform: `rotateX(${(1 - previewProgress) * 200}deg) translateY(${(1 - previewProgress) * 20}px) scale(${1 + (1 - previewProgress) * 0.05})`,
                transformOrigin: "center top",
              }}
            >
              <img src={dashboardImg} alt="Preview" className="block w-full h-auto" />
              
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent" />      </div>
            </div>
        </div>
      </section>

      <HowItWorks />
      <MappingSolutions />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialMarquee />
      <PricingSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee-left { animation: marqueeLeft 40s linear infinite; width: max-content; }
        .animate-marquee-right { animation: marqueeRight 40s linear infinite; width: max-content; }
        .animate-marquee-left:hover, .animate-marquee-right:hover { animation-play-state: paused; }
      `}} />
    </div>
  )
}