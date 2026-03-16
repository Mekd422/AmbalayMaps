import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import videoIcon from "../assets/icons/video-icon.svg"
import Footer from "../Components/layout/Footer"
import Navbar from "../Components/layout/Navbar"
import dashboardImg from "../assets/images/dashboard.png"
import howItWorksImg1 from "../assets/images/how-it-works-img1.png"
import howItWorksImg2 from "../assets/images/how-it-works-img2.png"
import howItWorksImg3 from "../assets/images/how-it-works-img3.png"

import geoImg from "../assets/images/mapping-solutions-img1.png" 
import cashflowImg from "../assets/images/mapping-solutions-img2.png"
import spendingImg from "../assets/images/mapping-solutions-img3.png" 
import savingsImg from "../assets/images/mapping-solutions-img4.png"

import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import person3 from "../assets/images/person3.png"

import geocodingIcon from "../assets/icons/geocoding.svg"
import routingIcon from "../assets/icons/routing.svg"
import staticMapsIcon from "../assets/icons/static-maps.svg"
import placesIcon from "../assets/icons/search.svg"
import matrixIcon from "../assets/icons/matrix-api.svg"
import elevationIcon from "../assets/icons/elevation-api.svg"

export default function Home() {
  const previewRef = useRef<HTMLElement | null>(null)
  const [previewProgress, setPreviewProgress] = useState(0)

  useEffect(() => {
    const el = previewRef.current
    if (!el) return
    let rafId = 0
    const update = () => {
      rafId = 0
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      const start = viewportH * 0.95
      const end = viewportH * 0.35
      const raw = (start - rect.top) / (start - end)
      const clamped = Math.min(1, Math.max(0, raw))
      const eased = 1 - Math.pow(1 - clamped, 3)
      setPreviewProgress(eased)
    }
    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  const detailedFeatures = [
    {
      title: "Geocoding",
      desc: "Convert addresses to coordinates and back with high accuracy. Our geocoding API provides precise location data with global coverage.",
      icon: geocodingIcon,
    },
    {
      title: "Routing",
      desc: "Calculate optimal routes between multiple points. Get detailed turn-by-turn directions, distances, and travel times.",
      icon: routingIcon,
    },
    {
      title: "Static Maps",
      desc: "Generate map images with custom markers and styling for embedding in emails, reports, or any application.",
      icon: staticMapsIcon,
    },
    {
      title: "Places Search",
      desc: "Find points of interest around specific locations. Search for restaurants, hotels, landmarks, and other points of interest.",
      icon: placesIcon,
    },
    {
      title: "Matrix API",
      desc: "Calculate travel times between multiple origins and destinations. Optimize complex logistics operations.",
      icon: matrixIcon,
    },
    {
      title: "Elevation API",
      desc: "Get terrain elevation data for any point on Earth. Access accurate elevation data for route planning and visualization.",
      icon: elevationIcon,
    },
  ]

  return (
    <div className="bg-black min-h-screen font-sora selection:bg-[#8cff2e] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 pt-40 pb-16 md:pt-52 md:pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8cff2e]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight mb-4">
            Get more defined map
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Integrate high-quality mapping, geocoding, routing, and location-based features into your applications with our powerful API.
          </p>
          <div className="flex items-center justify-center gap-8">
            <button className="group flex items-center gap-2 text-white text-sm font-medium transition-colors hover:text-[#8cff2e]">
              Read Documentation
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="group flex items-center gap-2 px-7 py-3 rounded-full bg-[#8cff2e] text-black font-medium transition-all duration-300 hover:shadow-[0_0_35px_#8cff2e]">
              Get Started
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Hero Preview Image Section */}
      <section ref={previewRef} className="px-6 md:px-12 pb-12 md:pb-16 bg-black -mt-10 md:-mt-14">
        <div className="max-w-5xl mx-auto">
          <div className="relative" style={{ perspective: "2200px" }}>
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              style={{
                transform: `rotateX(${(1 - previewProgress) * 68}deg) translateY(${(1 - previewProgress) * 12}px) scale(${1 + (1 - previewProgress) * 0.03})`,
                transformOrigin: "center bottom",
              }}
            >
              <img src={dashboardImg} alt="Preview" className="block w-full h-auto" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="about" className="px-6 md:px-12 py-24 md:py-32 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 text-[#8cff2e] mb-4">
              <img src={videoIcon} alt="Video" className="h-5 w-5" style={{ filter: "invert(63%) sepia(86%) saturate(400%) hue-rotate(55deg)" }} />
              <span className="text-sm font-medium">Watch video</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">How AmbaLay Maps works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: howItWorksImg1, step: "Step 1", title: "Get Started with website", desc: "Explore its services and mapping solutions." },
              { img: howItWorksImg2, step: "Step 2", title: "Full control dashboard", desc: "Manage data, monitor activity, and access features." },
              { img: howItWorksImg3, step: "Step 3", title: "Set goals & stay on track", desc: "Plan your budgets and stay in control." },
            ].map((item) => (
              <div key={item.step} className="rounded-[32px] bg-[#0A0A0A] border border-white/5 p-6 transition-all hover:border-white/10">
                <div className="relative rounded-[24px] bg-[#111] h-52 flex items-center justify-center overflow-hidden mb-6">
                  <img src={item.img} alt={item.title} className="max-h-full object-contain p-4" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-black border border-[#8cff2e] px-3 py-1 text-[10px] text-[#8cff2e] uppercase tracking-wider mb-4">
                  <span className="h-1 w-1 rounded-full bg-[#8cff2e]" /> {item.step}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Mapping Solutions */}
      <section className="px-6 md:px-12 py-24 bg-black">
        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight max-w-md">
              Comprehensive Mapping Solutions.
            </h2>
            <p className="text-lg text-gray-400 max-w-sm">
              From simple markers to complex routing algorithms, our API provides everything you need for location-based applications.
            </p>
          </div>

          {/* Top Row: Two Large Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="group rounded-[32px] bg-[#0A0A0A] border border-white/5 p-4 flex flex-col h-full">
              <div className="relative rounded-[24px] bg-[#111] flex items-center justify-center overflow-hidden aspect-[4/3] mb-6">
                <img src={geoImg} alt="Geo" className="w-[90%] h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none" />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-medium text-white mb-3">Geo</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                  See all your accounts in one view — balances, spending, and goals.
                </p>
              </div>
            </div>

            <div className="group rounded-[32px] bg-[#0A0A0A] border border-white/5 p-4 flex flex-col h-full">
              <div className="relative rounded-[24px] bg-[#111] flex items-center justify-center overflow-hidden aspect-[4/3] mb-6">
                <img src={cashflowImg} alt="Cashflow" className="w-[90%] h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none" />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-medium text-white mb-3">Cashflow Overview</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                  Track your daily income and expenses to understand your financial flow.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Grid: The Tweak to build your specific design */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Spending Breakdown Card */}
            <div className="rounded-[32px] bg-[#0A0A0A] border border-white/5 p-4 flex flex-col">
              <div className="relative rounded-[24px] bg-[#111] aspect-square flex items-center justify-center overflow-hidden mb-8">
                <img src={spendingImg} alt="Spending" className="w-[85%] h-auto object-contain" />
              </div>
              <div className="px-4 pb-6">
                <h3 className="text-xl font-medium text-white mb-2">Spending Breakdown</h3>
                <p className="text-gray-400 text-sm leading-relaxed">See exactly how your money is split across categories.</p>
              </div>
            </div>

            {/* Savings Goal Card */}
            <div className="rounded-[32px] bg-[#0A0A0A] border border-white/5 p-4 flex flex-col">
              <div className="relative rounded-[24px] bg-[#111] aspect-square flex items-center justify-center overflow-hidden mb-8">
                <img src={savingsImg} alt="Savings" className="w-[85%] h-auto object-contain" />
              </div>
              <div className="px-4 pb-6">
                <h3 className="text-xl font-medium text-white mb-2">Savings Goal</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Stay focused on your savings targets and follow your progress.</p>
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-6">
              {/* Trusted By Card */}
              <div className="bg-[#0A0A0A] rounded-[32px] border border-white/5 p-8 flex-1 flex flex-col justify-center">
                <div className="flex items-center -space-x-3 mb-6">
                  <img src={person1} className="h-12 w-12 rounded-full border-4 border-[#0A0A0A] object-cover" />
                  <img src={person2} className="h-12 w-12 rounded-full border-4 border-[#0A0A0A] object-cover" />
                  <img src={person3} className="h-12 w-12 rounded-full border-4 border-[#0A0A0A] object-cover" />
                </div>
                <h4 className="text-2xl font-medium text-white leading-tight">
                  Trusted by 3k+ <br /> Freelancers
                </h4>
              </div>

              {/* Saved Card */}
              <div className="bg-[#0A0A0A] rounded-[32px] border border-white/5 p-8 flex-1 flex flex-col justify-center">
                <h4 className="text-3xl font-medium text-white mb-3">$1.2M+ Saved</h4>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-[200px]">
                  Clario helps users save more — and spend smarter.
                </p>
                <button className="flex items-center gap-2 text-[#8cff2e] font-medium text-sm group">
                  Get Started 
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Detailed Features Section (Clarity & Money Decisions) */}
      <section className="px-6 md:px-12 py-24 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#8cff2e] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8cff2e]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em]">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
              Designed for clarity, built for <br className="hidden md:block" /> better money decisions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {detailedFeatures.map((feature, idx) => (
              <div key={idx} className="group bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 transition-all hover:border-[#8cff2e]/20">
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(140,255,46,0.05)] transition-all group-hover:shadow-[0_0_30px_rgba(140,255,46,0.15)]">
                  <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-medium text-white mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="flex items-center gap-2 text-white font-medium text-sm group transition-colors hover:text-[#8cff2e]">
              Get Started 
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="px-6 md:px-12 py-20 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Why AmbaLay Maps?</h2>
            <p className="text-gray-400">There's a smarter way to manage money</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-[32px] border border-white/5 overflow-hidden grid md:grid-cols-2">
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/5">
              <h3 className="text-gray-500 font-medium mb-8 uppercase tracking-wider text-xs">Other Tools</h3>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li>✕ Messy spreadsheets, manual tracking</li>
                <li>✕ Complicated pricing, hidden fees</li>
                <li>✕ Limited automation</li>
                <li>✕ No team collaboration</li>
              </ul>
            </div>
            <div className="p-10 bg-white/[0.02]">
              <h3 className="text-[#8cff2e] font-medium mb-8 uppercase tracking-wider text-xs">AmbaLay Maps</h3>
              <ul className="space-y-4 text-white text-sm">
                <li>✓ Smart dashboard, real-time updates</li>
                <li>✓ Simple, transparent pricing</li>
                <li>✓ Automated reports & smart alerts</li>
                <li>✓ Team-friendly, sync accounts easily</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}