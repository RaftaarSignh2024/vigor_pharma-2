import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = {
  "egg-whites-powder": {
    id: "egg-whites-powder",
    name: "Eggy Nutritior™ Egg Whites Powder",
    category: "Fitness & Recovery",
    description: "100% pure protein powerhouse in a convenient powder form. Zero fat and zero cholesterol. Perfect for athletes, smoothies, and fitness enthusiasts. Our premium egg whites powder is carefully processed to retain maximum nutritional value while offering superior mixability and a neutral taste.",
    price: "$14.99",
    unit: "500g",
    image: "/slider_egg_white_new.png",
    features: [
      "100% Pure Protein",
      "Zero Fat & Cholesterol",
      "Highly Bioavailable",
      "Neutral Taste Profile"
    ],
    variations: [
      { name: "200gm Pouch", image: "/slider_egg_white_new.png" },
      { name: "500gm Pouch", image: "/slider_egg_white_new.png" }
    ],
    sizes: ["200gm", "500gm"]
  },
  "egg-yolks-powder": {
    id: "egg-yolks-powder",
    name: "Eggy Nutritior™ Egg Yolks Powder",
    category: "Culinary & Baking",
    description: "Dense in essential nutrients like Vitamin D and Choline. Ideal for premium baking, sauces, culinary arts, and long-term shelf stability. Our rich egg yolks powder is carefully dried to preserve its natural golden color, rich flavor, and emulsifying properties.",
    price: "$16.50",
    unit: "500g",
    image: "/slider_egg_yolk_new.png",
    features: [
      "Rich in Vitamin D & Choline",
      "Excellent Emulsifier",
      "Long Shelf Life",
      "Perfect for Baking & Sauces"
    ],
    variations: [
      { name: "200gm Pouch", image: "/slider_egg_yolk_new.png" },
      { name: "500gm Pouch", image: "/slider_egg_yolk_new.png" }
    ],
    sizes: ["200gm", "500gm"]
  },
  "sanitary-pads": {
    id: "sanitary-pads",
    name: "Sky Soft™ Sanitary Pads (Day/Night Pack)",
    category: "Hygiene",
    description: "Advanced absorption technology with a breathable, 100% organic cotton top layer by Vigor Life Care LLP. Designed to prevent irritation while offering maximum leak-proof protection for up to 12 hours. Dermatologically tested and safe for sensitive skin. Experience uncompromising comfort during your cycle.",
    price: "$8.99",
    unit: "pack of 20",
    image: "/slider_sanitary_pads_new.png",
    features: [
      "100% Organic Cotton Top",
      "Up to 12 Hours Protection",
      "Dermatologically Tested",
      "Ultra-Thin & Breathable"
    ],
    variations: [
      { name: "Size S", image: "/slider_sanitary_pads_new.png" },
      { name: "Size M", image: "/slider_sanitary_pads_new.png" },
      { name: "Size L", image: "/slider_sanitary_pads_new.png" }
    ],
    sizes: ["Pack of 9", "Pack of 18", "Pack of 36"]
  },
  "baby-diapers": {
    id: "baby-diapers",
    name: "Sky Soft™ Baby Diapers (Ultra Soft)",
    category: "Baby Care",
    description: "Provide unparalleled comfort for your little one by Vigor Life Care LLP. Features a super-absorbent core, wetness indicator, and hypoallergenic materials free from harsh chemicals. Guaranteed to keep delicate skin dry and rash-free all night long.",
    price: "$12.50",
    unit: "pack of 30",
    image: "/slider_baby_diapers_new.png",
    features: [
      "Super-Absorbent Core",
      "Wetness Indicator",
      "Hypoallergenic & Chemical-Free",
      "All-Night Dryness Guarantee"
    ],
    variations: [
      { name: "Size NB", image: "/diaper_nb.jpg" },
      { name: "Size S", image: "/diaper_s.jpg" },
      { name: "Size M", image: "/diaper_m.jpg" },
      { name: "Size L", image: "/diaper_l.jpg" }
    ],
    sizes: ["Pack of 9", "Pack of 12"]
  },
  "baby-wipes": {
    id: "baby-wipes",
    name: "Sky Soft™ Baby Wipes (Pure Water & Gentle)",
    category: "Baby Care",
    description: "Ultra-soft and extra-thick baby wipes made with 99% pure water and natural Aloe Vera & Chamomile extracts by Vigor Life Care LLP. Formulated to be 100% hypoallergenic, pH-balanced, and free from alcohol, parabens, and artificial fragrances to keep your baby's delicate skin soft, clean, and protected.",
    price: "$6.99",
    unit: "pack of 72",
    image: "/slider_baby_wipes_new.png",
    features: [
      "99% Pure Water",
      "Alcohol & Paraben Free",
      "pH Balanced & Hypoallergenic",
      "Aloe Vera & Chamomile Infused"
    ],
    variations: [
      { name: "Single Pack (72 Wipes)", image: "/slider_baby_wipes_new.png" },
      { name: "Value Pack (3 x 80 Wipes)", image: "/slider_baby_wipes_new.png" }
    ],
    sizes: ["Pack of 72", "Pack of 3x80"]
  },
  "eggy-nutritior": {
    id: "eggy-nutritior",
    name: "Eggy Nutritior™",
    category: "Nutrition & Wellness",
    description: "Premium liquid egg products in convenient bottle packaging. Choose from our range of variations to suit your dietary and culinary needs.",
    price: "Varies by size",
    unit: "200ml / 500ml",
    image: "/slider_liquid_white_v4.png",
    features: [
      "100% Pure Liquid Eggs",
      "Pasteurized for Safety",
      "Convenient Bottle Packaging",
      "High Quality Protein Source"
    ],
    variations: [
      { name: "Liquid Egg Whites", image: "/slider_liquid_white_v4.png" },
      { name: "Liquid Egg Whites + Whole Eggs Combo", image: "/slider_liquid_combined_v4.png" },
      { name: "Liquid Egg Yolks", image: "/slider_liquid_yellow_v5.png" },
      { name: "Liquid Whole Eggs", image: "/slider_liquid_combined_v4.png" }
    ],
    sizes: ["200ml", "500ml"]
  },
  "egg-combined-powder": {
    id: "egg-combined-powder",
    name: "Eggy Nutritior™ Egg Combined Powder",
    category: "Balanced Nutrition",
    description: "The perfect balance of egg whites and yolks in a convenient powder. Ideal for a full amino acid profile, baking, and everyday nutrition. It retains the natural flavor and nutritional benefits of whole eggs.",
    price: "$15.50",
    unit: "500g",
    image: "/slider_egg_combined_new.png",
    features: [
      "Full Amino Acid Profile",
      "Perfect White/Yolk Ratio",
      "Long Shelf Life",
      "Great for Baking & Smoothies"
    ],
    variations: [
      { name: "200gm Pouch", image: "/slider_egg_combined_new.png" },
      { name: "500gm Pouch", image: "/slider_egg_combined_new.png" }
    ],
    sizes: ["200gm", "500gm"]
  },
  "liquid-egg-whites": {
    id: "liquid-egg-whites",
    name: "Eggy Nutritior™ Liquid Egg Whites",
    category: "Fitness",
    description: "Premium pasteurized liquid egg whites. Ready to use straight from the bottle for cooking, baking, or blending into smoothies. 100% pure protein with zero fat or cholesterol.",
    price: "$8.99",
    unit: "500ml",
    image: "/slider_liquid_white_v4.png",
    features: [
      "100% Pure Protein",
      "Zero Fat & Cholesterol",
      "Ready to Use",
      "Pasteurized for Safety"
    ],
    sizes: ["200ml", "500ml", "1 Liter"]
  },
  "liquid-egg-yolks": {
    id: "liquid-egg-yolks",
    name: "Eggy Nutritior™ Liquid Egg Yolks",
    category: "Culinary Excellence",
    description: "Rich, golden pasteurized liquid egg yolks for all your culinary needs. Perfect for hollandaise, custards, ice cream, and premium baking. Conveniently packaged for easy measuring.",
    price: "$10.99",
    unit: "500ml",
    image: "/slider_liquid_yellow_v5.png",
    features: [
      "Rich Golden Yolks",
      "Perfect for Custards & Baking",
      "Convenient & Ready to Pour",
      "Pasteurized for Safety"
    ],
    sizes: ["200ml", "500ml"]
  },
  "liquid-combined-eggs": {
    id: "liquid-combined-eggs",
    name: "Eggy Nutritior™ Liquid Whole Eggs",
    category: "Daily Nutrition",
    description: "Convenient pasteurized whole liquid eggs. The perfect mix of whites and yolks, ready to scramble, bake, or cook with. Experience farm-fresh taste without the hassle of cracking shells.",
    price: "$9.50",
    unit: "500ml",
    image: "/slider_liquid_combined_v4.png",
    features: [
      "Perfect White/Yolk Blend",
      "No Shell Cracking Required",
      "Great for Scrambling",
      "Pasteurized for Safety"
    ],
    sizes: ["200ml", "500ml", "1 Liter"]
  },
  "premium-farm-eggs": {
    id: "premium-farm-eggs",
    name: "Eggy Nutritior™ Premium Farm Eggs",
    category: "Nutrition & Wellness",
    description: "High-quality, farm-fresh eggs in premium protective packaging. Rich in protein, Omega-3, and essential vitamins for your daily nutritional needs.",
    price: "Varies by size",
    unit: "Pack of 6 / 12",
    image: "/premium_egg_carton.png",
    features: [
      "High Quality Protein",
      "Rich in Omega-3",
      "Farm Fresh Daily",
      "Premium Protective Packaging"
    ],
    sizes: ["Pack of 6", "Pack of 12"]
  }
};

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products[id as keyof typeof products];
  
  if (!product) {
    notFound();
  }

  return (
    <div className="relative pt-28 md:pt-36 pb-24 min-h-screen bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute top-0 -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10 opacity-50"></div>
      <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none -z-10 opacity-60"></div>
      
      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        <Link href="/products" className="inline-flex items-center font-bold text-sm text-text-muted hover:text-primary transition-all group hover:-translate-x-1 duration-300">
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-2 border border-black/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
            <i className="ph-bold ph-arrow-left group-hover:-translate-x-1 transition-transform"></i> 
          </div>
          <span className="border-b-2 border-transparent group-hover:border-primary">Back to Products</span>
        </Link>
        
        {/* @ts-ignore */}
        {product.variations ? (
          <div className="flex flex-col items-center justify-center pb-4 lg:pb-8">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 text-center max-w-3xl mx-auto mb-8 md:mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-4 shadow-sm">
                {product.category}
              </span>
              
              <h1 className="font-heading text-3xl md:text-5xl font-black mb-4 text-text-dark leading-[1.1] tracking-tight">
                {product.name}
              </h1>
            </div>
            
            {/* Variations Grid Only */}
            <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* @ts-ignore */}
                {product.variations.map((variation, idx) => {
                  const vName = typeof variation === 'string' ? variation : variation.name;
                  const vImage = typeof variation === 'string' ? null : variation.image;
                  
                  return (
                    <div key={idx} className="group flex flex-col bg-white rounded-3xl border border-black/5 shadow-sm hover:border-primary hover:ring-4 hover:ring-primary/10 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-pointer">
                      
                      {/* Image Area - Full Bleed Top */}
                      <div className="w-full relative bg-[#F8F9FA] aspect-[4/3] flex items-center justify-center p-2 overflow-hidden">
                        {vImage ? (
                          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            <Image src={vImage} alt={vName} fill className="object-contain mix-blend-multiply" />
                          </div>
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-inner border border-primary/10 group-hover:scale-110 transition-transform duration-500">
                            <i className="ph-fill ph-package text-primary text-4xl"></i>
                          </div>
                        )}
                        
                        {/* Quick View Button overlay on hover */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 z-20">
                          <span className="px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] font-bold text-xs uppercase tracking-wider text-text-dark whitespace-nowrap border border-black/5 hover:text-primary transition-colors">
                            Select Options
                          </span>
                        </div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-5 flex flex-col flex-grow relative z-10 bg-white">
                        <h4 className="font-heading font-bold text-text-dark text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{vName}</h4>
                        
                        {/* Fake Ratings to make it look authentic */}
                        <div className="flex items-center gap-1 mb-4 text-[#FFB800] text-xs">
                           <i className="ph-fill ph-star"></i>
                           <i className="ph-fill ph-star"></i>
                           <i className="ph-fill ph-star"></i>
                           <i className="ph-fill ph-star"></i>
                           <i className="ph-fill ph-star-half"></i>
                           <span className="text-text-muted text-[10px] font-bold ml-1">(4.8)</span>
                        </div>
                        
                        {/* @ts-ignore */}
                        {product.sizes && (
                          <div className="mt-auto border-t border-black/5 pt-4">
                            <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest mb-2">Available Options</p>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {/* @ts-ignore */}
                              {product.sizes.map((size, sIdx) => (
                                <span key={sIdx} className="px-2 py-1 bg-gray-50 border border-black/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors duration-300 rounded text-[10px] font-bold text-text-dark whitespace-nowrap">
                                  {size}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Content After Products */}
            <div className="w-full max-w-5xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
              <div className="bg-surface rounded-[2.5rem] p-8 md:p-14 border border-black/5 shadow-sm relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-text-dark">About This <span className="text-primary">Product</span></h3>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h4 className="font-heading text-2xl font-bold mb-6 text-text-dark flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <i className="ph-fill ph-sparkle text-primary text-xl"></i>
                      </div>
                      Key Benefits
                    </h4>
                    <div className="flex flex-col gap-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center p-4 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center mr-4 flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                            <i className="ph-bold ph-check text-lg"></i>
                          </div>
                          <span className="font-bold text-text-dark/90 text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Sticky Image */}
            <div className="lg:col-span-5 xl:col-span-6 relative">
              <div className="sticky top-32 rounded-[3rem] bg-white/40 backdrop-blur-2xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden group p-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/80 to-primary/5 opacity-50 rounded-[3rem]"></div>
                
                <div className="relative bg-white/50 rounded-[2.5rem] h-[400px] lg:h-[500px] w-full flex items-center justify-center p-8 lg:p-12 border border-black/[0.02] shadow-inner">
                  {/* Floating animation for the image */}
                  <div className="relative w-full h-full max-w-lg mx-auto transition-transform duration-700 ease-out group-hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
                    <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-2xl" priority />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Product Info */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-start py-6 lg:py-8">
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary mb-6 shadow-sm">
                  {product.category}
                </span>
                
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-text-dark leading-[1.1] tracking-tight">
                  {product.name.includes("Sky Soft") ? (
                    <>
                      <mark className="bg-yellow-300 text-black px-3 py-1 rounded-md font-black shadow-sm mr-1">Sky Soft</mark>™
                      {product.name.split("Sky Soft™")[1] || product.name.split("Sky Soft")[1]}
                    </>
                  ) : (
                    product.name
                  )}
                </h1>
                
                <p className="text-lg text-text-muted leading-relaxed mb-8 font-medium">
                  {product.description}
                </p>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-black/10 via-black/5 to-transparent mb-12"></div>
              
              {/* Key Benefits */}
              <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center p-5 rounded-2xl bg-white border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner border border-primary/10">
                        <i className="ph-bold ph-check text-xl"></i>
                      </div>
                      <span className="font-bold text-text-dark/90 group-hover:text-text-dark transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sizes (if no variations but has sizes) */}
              {/* @ts-ignore */}
              {!product.variations && product.sizes ? (
                <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                  <h3 className="font-heading text-2xl font-bold mb-6 text-text-dark flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <i className="ph-fill ph-arrows-out text-primary text-xl"></i>
                    </div>
                    Available Options
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {/* @ts-ignore */}
                    {product.sizes.map((size, idx) => (
                      <div key={idx} className="px-6 py-4 bg-white border border-black/5 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-primary/5 hover:text-primary transition-all rounded-2xl font-black text-lg text-text-dark shadow-sm cursor-pointer hover:-translate-y-1">
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              
            </div>
          </div>
        )}
      </div>
      
      {/* CSS for float animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </div>
  );
}
