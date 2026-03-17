import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What kind of businesses is this template built for?", a: "AmbaLay is designed for SaaS tools, dashboards, fintech platforms, or any digital product that needs a modern, conversion-focused landing page. It's fully customizable to fit a wide range of web-based services." },
    { q: "Is the template mobile-friendly and responsive?", a: "Yes, every component is built with a mobile-first approach using Tailwind CSS responsive utilities." },
    { q: "Can I use this template without coding skills?", a: "While it is a React/Tailwind template, the structure is modular enough that someone with basic HTML/CSS knowledge can easily swap content." },
    { q: "Will I get access to future updates?", a: "Absolutely. All purchasers receive lifetime updates as we add new sections and improve performance." },
    { q: "Can I use this template for commercial projects?", a: "Definitely. AmbaLay is licensed for both personal and commercial use, so you can build client websites or launch your own product without any licensing issues." },
    { q: "How can I get support if I run into issues?", a: "We’re here to help. If you have questions, you can reach us directly at hello@ambalay.com. We usually respond within 24 hours." }
  ];

  return (
    <section id="faq" className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-[#8cff2e] font-mono text-xs tracking-[0.3em] uppercase">// FAQ</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Got questions? <br /> We've got answers.
            </h2>
          </div>
          <div className="space-y-3 md:text-right">
            <p className="text-gray-500 text-sm max-w-xs">Here's everything you need to know before getting started.</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[#8cff2e] hover:underline text-sm font-bold">
              Contact us <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-[32px] border transition-all duration-300 ${
                openIndex === idx ? 'bg-[#0d0d0d] border-white/10' : 'bg-[#080808] border-white/5 hover:border-white/10'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-5 md:gap-8">
                  <span className={`font-mono text-sm transition-colors ${openIndex === idx ? 'text-[#8cff2e]' : 'text-gray-600'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-base md:text-lg font-medium text-white tracking-tight">{faq.q}</span>
                </div>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === idx ? 'bg-[#8cff2e] border-[#8cff2e] text-black' : 'border-white/10 text-gray-400'}`}>
                  {openIndex === idx ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-8 md:pl-20 md:pr-16">
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}