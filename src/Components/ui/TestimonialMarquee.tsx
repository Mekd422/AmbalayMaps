import { Quote } from "lucide-react"
import person1 from "../../assets/images/person1.png"
import person2 from "../../assets/images/person2.png"
import person3 from "../../assets/images/person3.png"

export default function TestimonialMarquee() {
  const row1 = [
    { name: "Enkumichael", role: "Developer", text: "APIs were easy to integrate and improved speed.", img: person1 },
    { name: "Samson Warkaye", role: "GIS", text: "Reliable geospatial data and training.", img: person2 },
    { name: "Marco G.", role: "Founder", text: "The only mapping tool I open daily.", img: person3 },
  ]
  
  const row2 = [
    { name: "Sara L.", role: "PM", text: "Routing precision is unmatched.", img: person2 },
    { name: "Jonas W.", role: "CEO", text: "Transparent pricing and top-tier support.", img: person1 },
    { name: "Alex K.", role: "Lead Engineer", text: "Static maps API is so easy to customize.", img: person3 },
  ]

  return (
    <section className="px-6 md:px-12 py-24 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight max-w-md">Loved by individuals and small teams</h2>
          <p className="text-lg text-zinc-400 max-w-sm">People across industries trust Clario to manage money, reduce stress, and make smarter decisions — all in one simple dashboard.</p>
        </div>
        <div className="flex flex-col gap-8">
          {[row1, row2].map((row, idx) => (
            <div key={idx} className="relative overflow-hidden">
              <div className={`flex gap-6 ${idx === 0 ? 'animate-marquee-left' : 'animate-marquee-right'} whitespace-nowrap`}>
                {[...row, ...row].map((t, i) => (
                  <div key={i} className="inline-block w-[300px] md:w-[400px] bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 whitespace-normal">
                    <Quote className="text-[#8cff2e]/10 mb-4" size={24} />
                    <p className="text-white text-sm mb-6 leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <img src={t.img} className="h-9 w-9 rounded-full object-cover grayscale" />
                      <div>
                        <h5 className="text-white text-sm font-medium">{t.name}</h5>
                        <p className="text-gray-500 text-[10px]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}