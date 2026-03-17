import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What kind of businesses is this template built for?", a: "Clario is designed for SaaS tools, dashboards, fintech platforms, or any digital product that needs a modern, conversion-focused landing page. It's fully customizable to fit a wide range of web-based services." },
    { q: "Is the template mobile-friendly and responsive?", a: "Yes, every component is built with a mobile-first approach using Tailwind CSS responsive utilities." },
    { q: "Can I use this template without coding skills?", a: "While it is a React/Tailwind template, the structure is modular enough that someone with basic HTML/CSS knowledge can easily swap content." },
    { q: "Will I get access to future updates?", a: "Absolutely. All purchasers receive lifetime updates as we add new sections and improve performance." },
    { q: "Can I use this template for commercial projects?", a: "Definitely. Clario is licensed for both personal and commercial use, so you can build client websites or launch your own product without any licensing issues." },
    { q: "How can I get support if I run into issues?", a: "We’re here to help. If you have questions, you can reach us directly at hello@kadirov.design. We usually respond within 24 hours." }

  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-md leading-tight">
            Got questions? <br /> We've got answers.
          </h2>
          <div className="space-y-2">
            <p className="text-gray-400">Here's everything you need to know before getting started.</p>
            <a href="#contact" className="flex items-center gap-2 text-[#8cff2e] hover:underline">
              Contact us <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border transition-all ${openIndex === idx ? 'bg-[#8cff2e] text-black border-[#8cff2e]' : 'text-[#8cff2e] border-[#8cff2e]/20'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-lg md:text-xl font-medium text-white">{faq.q}</span>
                </div>
                {openIndex === idx ? <Minus className="text-[#8cff2e]" /> : <Plus className="text-[#8cff2e]" />}
              </button>
              
              {openIndex === idx && (
                <div className="px-8 pb-8 md:pl-20 md:pr-12">
                  <p className="text-gray-400 leading-relaxed max-w-3xl border-t border-white/5 pt-6">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}