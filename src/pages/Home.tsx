import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import videoIcon from "../assets/icons/video-icon.svg"
import Footer from "../Components/layout/Footer"
import Navbar from "../Components/layout/Navbar"
import dashboardImg from "../assets/images/dashboard.png"
import howItWorksImg1 from "../assets/images/how-it-works-img1.png"
import howItWorksImg2 from "../assets/images/how-it-works-img2.png"
import howItWorksImg3 from "../assets/images/how-it-works-img3.png"

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
      // Progress from when the section enters the viewport to when it's closer to center.
      const start = viewportH * 0.95
      const end = viewportH * 0.35
      const raw = (start - rect.top) / (start - end)
      const clamped = Math.min(1, Math.max(0, raw))
      // Ease-out so the motion feels smoother (less "linear" on scroll).
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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 pt-40 pb-16 md:pt-52 md:pb-16 bg-black overflow-hidden">

  {/* Background Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90 pointer-events-none" />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8cff2e]/20 blur-[120px] rounded-full pointer-events-none" />

  <div className="relative max-w-4xl mx-auto text-center">

    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-medium text-white leading-tight mb-4">
      Get more defined map
    </h1>

    {/* Subtitle */}
    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
      Integrate high-quality mapping, geocoding, routing, and location-based features into your applications with our powerful API.
    </p>

    {/* Buttons */}
    <div className="flex items-center justify-center gap-8">

      <button className="group flex items-center gap-2 text-white text-sm font-medium">
        Read Documentation
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>

      <button className="group flex items-center gap-2 px-7 py-3 rounded-full bg-[#8cff2e] text-black font-medium transition-all duration-300 hover:shadow-[0_0_35px_#8cff2e]">
        Get Started
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>

    </div>

  </div>
</section>

      {/* Hero Preview Image (tilt -> straight on scroll) */}
      <section
        ref={previewRef}
        className="px-6 md:px-12 pb-12 md:pb-16 bg-black -mt-10 md:-mt-14"
        aria-label="Product preview"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative mx-auto max-w-5xl" style={{ perspective: "2200px" }}>
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] will-change-transform"
              style={{
                transform: `
                  rotateX(${(1 - previewProgress) * 68}deg)
                  translateY(${(1 - previewProgress) * 12}px)
                  scale(${1 + (1 - previewProgress) * 0.03})
                `,
                transformOrigin: "center bottom",
              }}
            >
              <img
                src={dashboardImg}
                alt="AmbaLay Maps dashboard preview"
                className="block w-full h-auto"
                loading="eager"
              />

              {/* Bottom dark fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/70 to-transparent" />
            </div>

            {/* Ambient fade under the card */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[92%] -translate-x-1/2 bg-gradient-to-b from-transparent via-black/80 to-black blur-xl opacity-80" />
          </div>
        </div>
      </section>

{/* How it Works Section */}
<section
  id="about"
  className="px-6 md:px-12 py-24 md:py-32 bg-black"
>
  <div className="max-w-5xl mx-auto">

    {/* Header (LEFT aligned) */}
    <div className="mb-14">

      <div className="flex items-center gap-3 text-[#8cff2e] mb-4">
        <img
          src={videoIcon}
          alt="Watch video"
          className="h-5 w-5"
          style={{
            filter:
              "invert(63%) sepia(86%) saturate(400%) hue-rotate(55deg)",
          }}
        />
        <span className="text-sm font-medium text-[#8cff2e]">
          Watch video
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-sora text-white tracking-tight">
        How AmbaLay Maps works
      </h2>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          img: howItWorksImg1,
          step: "Step 1",
          title: "Get Started with website",
          desc: "Get started with the AmbaLay Maps website to explore its services and mapping solutions.",
        },
        {
          img: howItWorksImg2,
          step: "Step 2",
          title: "Get full control on dashboard",
          desc: "Manage data, monitor activity, and access all features in one powerful platform.",
        },
        {
          img: howItWorksImg3,
          step: "Step 3",
          title: "Set goals & stay on track",
          desc: "Plan your budgets and stay in control with smart tracking tools.",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="w-full max-w-xs mx-auto rounded-[26px] bg-[#161616] border border-white/5 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >

          {/* Image Box */}
          <div className="relative rounded-[20px] bg-[#161616] p-4 h-52 flex items-center justify-center overflow-hidden">

            <img
              src={item.img}
              alt={item.title}
              className="max-h-full object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
            />

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

          </div>

          {/* Content */}
          <div className="mt-5 text-left">

            <div className="inline-flex items-center gap-2 rounded-full bg-black border border-[#8cff2e] px-3 py-1 text-sm text-[#8cff2e] shadow-[0_6px_14px_-4px_rgba(140,255,46,0.8),_-6px_0_10px_-6px_rgba(140,255,46,0.6),_6px_0_10px_-6px_rgba(140,255,46,0.6)]">
  <span className="h-1.5 w-1.5 rounded-full bg-[#8cff2e]" />
  <span className="font-medium">{item.step}</span>
</div>

            <h3 className="mt-4 text-lg font-medium font-sora text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* Comprehensive Mapping Solutions */}
      <section className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
              Comprehensive Mapping Solutions.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple markers to complex routing algorithms, our API provides everything you need for location-based applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="text-2xl font-bold font-sora text-white mb-4">Geo</div>
                <p className="text-gray-300">
                  See all your accounts in one view — balances, spending, and goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-400 mb-2">Features</div>
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
              Designed for clarity, built for better money decisions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-lg font-bold font-sora text-white mb-2">Geocoding</div>
              <p className="text-gray-300">
                Convert addresses to coordinates and back with high accuracy. Our geocoding API provides precise location data with global coverage.
              </p>
            </div>
            <div>
              <div className="text-lg font-bold font-sora text-white mb-2">Routing</div>
              <p className="text-gray-300">
                Calculate optimal routes between multiple points. Get detailed turn-by-turn directions, distances, and travel times.
              </p>
            </div>
            <div>
              <div className="text-lg font-bold font-sora text-white mb-2">Static Maps</div>
              <p className="text-gray-300">
                Generate map images with custom markers and styling for embedding in emails, reports, or any application.
              </p>
            </div>
            <div>
              <div className="text-lg font-bold font-sora text-white mb-2">Places Search</div>
              <p className="text-gray-300">
                Find points of interest around specific locations. Search for restaurants, hotels, landmarks, and other points of interest.
              </p>
            </div>
            <div>
              <div className="text-lg font-bold font-sora text-white mb-2">Matrix API</div>
              <p className="text-gray-300">
                Calculate travel times between multiple origins and destinations. Optimize complex logistics operations.
              </p>
            </div>
            <div>
              <div className="text-lg font-bold font-sora text-white mb-2">Elevation API</div>
              <p className="text-gray-300">
                Get terrain elevation data for any point on Earth. Access accurate elevation data for route planning and visualization.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white text-black rounded-lg text-lg font-sora hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Why AmbaLay Maps Section */}
      <section className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
              Why AmbaLay Maps?
            </h2>
            <p className="text-xl text-gray-300">
              There's a smarter way to manage money
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-800">
                <h3 className="text-lg font-semibold font-sora text-white mb-6">Other Tools</h3>
                <ul className="space-y-4">
                  <li className="text-gray-300">Messy spreadsheets, manual tracking</li>
                  <li className="text-gray-300">Complicated pricing, hidden fees</li>
                  <li className="text-gray-300">Limited automation, manual workflows</li>
                  <li className="text-gray-300">No team collaboration</li>
                  <li className="text-gray-300">Generic support, slow replies</li>
                </ul>
              </div>
              <div className="p-8 bg-gray-800">
                <h3 className="text-lg font-semibold font-sora text-white mb-6">AmbaLay Maps</h3>
                <ul className="space-y-4">
                  <li className="text-white font-medium">Smart dashboard, real-time updates</li>
                  <li className="text-white font-medium">Simple, transparent pricing</li>
                  <li className="text-white font-medium">Automated reports & smart alerts</li>
                  <li className="text-white font-medium">Team-friendly, sync accounts easily</li>
                  <li className="text-white font-medium">Priority support, fast response</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
              Loved by individuals and small teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
              People across industries trust AmbaLay Maps to manage money, reduce stress, and make smarter decisions — all in one simple dashboard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-8">
              <p className="text-gray-200 mb-6 italic">
                "Ambalay Maps improved our logistics with accurate routing, seamless integration, and responsive support."
              </p>
              <div className="font-semibold font-sora text-white">Asnake Gizaw</div>
              <div className="text-sm text-gray-400">Ethiopian Airlines</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <p className="text-gray-200 mb-6 italic">
                "Ambalay Maps' APIs were easy to integrate and greatly improved my app's speed and accuracy."
              </p>
              <div className="font-semibold font-sora text-white">Enkumichael</div>
              <div className="text-sm text-gray-400">Independent Developer</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <p className="text-gray-200 mb-6 italic">
                "Ambalay Maps provided reliable geospatial data and training that helped our teams collect and use data effectively in crisis-affected areas."
              </p>
              <div className="font-semibold font-sora text-white">Samson Warkaye</div>
              <div className="text-sm text-gray-400">NGO program coordinator</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your needs. Everything you need to manage your money better.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-sora">Monthly</button>
              <button className="px-4 py-2 text-gray-400 rounded-lg text-sm font-sora">Yearly</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-gray-800">
              <h3 className="text-2xl font-bold font-sora text-white mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold font-sora text-white">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-6">
                Perfect for freelancers who want full control over their personal finances.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="text-gray-200">Remix Template</li>
                <li className="text-gray-200">Track income & expenses</li>
                <li className="text-gray-200">Connect up to 2 accounts</li>
                <li className="text-gray-200">Monthly reports</li>
                <li className="text-gray-200">Smart alerts</li>
              </ul>
              <button className="w-full px-6 py-3 bg-white text-black rounded-lg font-sora hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg p-8 border-2 border-white relative">
              <div className="absolute top-0 right-8 bg-blue-500 text-white px-4 py-1 rounded-b-lg text-xs font-sora">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold font-sora text-black mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold font-sora text-black">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-700 mb-6">
                Advanced tools to manage your money smarter and unlock powerful insights.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="text-gray-900">Remix Template</li>
                <li className="text-gray-900">Unlimited accounts</li>
                <li className="text-gray-900">AI spending insights</li>
                <li className="text-gray-900">Custom alerts</li>
                <li className="text-gray-900">Advanced reporting</li>
              </ul>
              <button className="w-full px-6 py-3 bg-black text-white rounded-lg font-sora hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Trusted by teams worldwide</p>
            <p className="text-gray-300 mb-6">Invite your team, sync accounts in real time, and track shared goals with ease.</p>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-sora hover:bg-gray-900 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="contact" className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
              Got questions?
            </h2>
            <p className="text-xl text-gray-300">
              We've got answers.
            </p>
            <p className="text-gray-300 mt-2">
              Here's everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What kind of businesses is this template built for?",
                a: "AmbaLay Maps is designed for SaaS tools, dashboards, fintech platforms, or any digital product that needs a modern, conversion-focused landing page. It's fully customizable to fit a wide range of web-based services."
              },
              {
                q: "Is the template mobile-friendly and responsive?",
                a: "Absolutely. The layout adapts beautifully to all screen sizes, including desktops, tablets, and smartphones. Every section is designed to deliver a seamless experience across devices."
              },
              {
                q: "Can I use this template without coding skills?",
                a: "Yes — the template is fully editable in Framer with drag-and-drop tools. No coding knowledge is required to update text, swap images, or adjust layouts."
              },
              {
                q: "Will I get access to future updates?",
                a: "Yes. Once purchased, you'll automatically receive any future improvements or optimizations we make to the template. Your version stays up-to-date with best practices."
              },
              {
                q: "Can I use this template for commercial projects?",
                a: "Definitely. AmbaLay Maps is licensed for both personal and commercial use, so you can build client websites or launch your own product without any licensing issues."
              },
              {
                q: "How can I get support if I run into issues?",
                a: "We're here to help. If you have questions, you can reach us directly at hello@ambalaymaps.com. We usually respond within 24 hours."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-800 pb-6">
                <div className="text-sm text-gray-400 mb-2">0{index + 1}</div>
                <h3 className="text-xl font-semibold font-sora text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-sora hover:bg-gray-900 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white">
              Explore the blog
            </h2>
            <button className="text-gray-300 hover:text-white font-sora">View all posts</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Basics",
                title: "How to Launch Your SaaS Product With Confidence",
                description: "Learn how to go from idea to launch — fast. We cover positioning, landing pages, early user feedback, and building trust using the AmbaLay Maps template for Framer."
              },
              {
                category: "Pro Tips",
                title: "Designing a Landing Page That Converts"
              },
              {
                category: "Updates",
                title: "Collecting Feedback From Your First Users"
              },
              {
                category: "CMS",
                title: "Building Trust as an Early-Stage SaaS Brand"
              }
            ].map((post, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6">
                  <div className="text-xs text-gray-400 mb-2">{post.category}</div>
                  <h3 className="text-lg font-semibold font-sora text-white mb-2">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-sm text-gray-300 mb-4">{post.description}</p>
                  )}
                  <a href="#" className="text-sm text-white font-sora hover:underline">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-6">
            Ready to Build with AmbaLay Maps?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of developers and businesses creating amazing location-based experiences with our powerful API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black rounded-lg text-lg font-sora hover:bg-gray-200 transition-colors">
              Remix Template
            </button>
            <button className="px-8 py-4 bg-black text-white border-2 border-white rounded-lg text-lg font-sora hover:bg-gray-900 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
