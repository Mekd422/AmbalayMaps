import { XCircle, CheckCircle2 } from "lucide-react"
import logo from "../../assets/icons/download.svg"

export default function ComparisonSection() {
  return (
    <section className="px-6 md:px-12 py-24 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-[#8cff2e] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8cff2e]" />
          <span className="text-xs font-medium uppercase tracking-[0.05em]">Why AmbaLay Maps?</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-20">
          There’s a smarter way to <br className="hidden md:block" /> handle geography
        </h2>

        <div className="relative max-w-4xl mx-auto rounded-[40px] border border-white/10 bg-[#0A0A0A] overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14 text-left border-b md:border-b-0 md:border-r border-white/5">
              <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-10">Other Tools</h3>
              <ul className="space-y-6">
                {["Messy spreadsheets, manual tracking", "Complicated pricing, hidden fees", "Limited automation, manual workflows", "No team collaboration", "Generic support, slow replies"].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-500 text-sm">
                    <XCircle size={18} className="mt-0.5 text-orange-500/60 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 md:p-14 text-left bg-gradient-to-br from-white/[0.03] to-transparent relative group">
              <div className="absolute inset-0 border-2 border-[#8cff2e]/20 rounded-[40px] pointer-events-none" />
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  <img src={logo} alt="Company Logo" className="w-5 h-5 object-contain" />
                </div>
                <h3 className="text-white text-lg font-medium">Ambalay</h3>
              </div>
              <ul className="space-y-6">
                {["Smart dashboard, real-time updates", "Simple, transparent pricing", "Automated reports & smart alerts", "Team-friendly, sync accounts easily", "Priority support, fast response"].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-white text-sm">
                    <CheckCircle2 size={18} className="mt-0.5 text-[#8cff2e] shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}