import videoIcon from "../../assets/icons/video-icon.svg"
import howItWorksImg1 from "../../assets/images/how-it-works-img1.png"
import howItWorksImg2 from "../../assets/images/how-it-works-img2.png"
import howItWorksImg3 from "../../assets/images/how-it-works-img3.png"

export default function HowItWorks() {
  const steps = [
    { img: howItWorksImg1, step: "Step 1", title: "Get Started with website", desc: "Explore its services and mapping solutions." },
    { img: howItWorksImg2, step: "Step 2", title: "Full control dashboard", desc: "Manage data, monitor activity, and access features." },
    { img: howItWorksImg3, step: "Step 3", title: "Set goals & stay on track", desc: "Plan your budgets and stay in control." },
  ]

  return (
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
          {steps.map((item) => (
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
  )
}