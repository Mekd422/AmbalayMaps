import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProductProps {
  image: string;
  category: string;
  title: string;
  price: string | number;
  sizes: string[];
}

const ProductCard: React.FC<ProductProps> = ({ image, category, title, price, sizes }) => {
  return (
    <div className="bg-white rounded-[28px] overflow-hidden flex flex-col h-full group transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">{category}</p>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-black text-lg font-bold leading-tight">{title}</h3>
            <span className="shrink-0 bg-gray-100 px-2.5 py-1 rounded-full text-[11px] font-bold text-black border border-gray-200">
              {typeof price === 'number' ? `${price}birr` : price}
            </span>
          </div>
        </div>

        <div className="flex gap-3 mt-4 pt-4 border-t border-gray-50">
          {sizes.slice(0, 5).map((size, idx) => (
            <span key={idx} className="text-gray-400 text-[10px] font-bold uppercase">
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentTemplates: React.FC = () => {
  const products: ProductProps[] = [
    // Top Row
    {
      image: "/shop-s1-img1.jpg",
      category: "Clothing",
      title: "Pangaea T-Shirt",
      price: "350birr",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      image: "/shop-s1-img2.jpg",
      category: "Digital Asset",
      title: "Design Partner",
      price: "Free",
      sizes: ["UI", "UX", "WEB"]
    },
    {
      image: "/shop-s1-img3.jpg",
      category: "Agency",
      title: "Vinency",
      price: 1200,
      sizes: ["DEV", "SEO", "MKT"]
    },
    // Bottom Row
    {
      image: "/shop-s1-img4.jpg",
      category: "Clothing",
      title: "Amba Cap",
      price: "Free",
      sizes: ["L", "L", "L", "L", "L"]
    },
    {
      image: "/shop-s1-img5.jpg",
      category: "Accessories",
      title: "Navigation Mug",
      price: 250,
      sizes: ["One Size"]
    },
    {
      image: "/shop-s1-img6.jpg",
      category: "Digital Asset",
      title: "Solarify Dashboard",
      price: 800,
      sizes: ["React", "Tailwind"]
    }
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            Recent Templates
          </h2>
          <button className="flex items-center gap-2 bg-white hover:bg-[#8cff2e] text-black px-5 py-2 rounded-full text-sm font-bold transition-all group">
            Browse all <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        {/* Grid handles the wrapping automatically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentTemplates;