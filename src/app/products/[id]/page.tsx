import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = {
  "egg-whites-powder": {
    id: "egg-whites-powder",
    name: "Premium Egg Whites Powder",
    category: "Fitness & Recovery",
    description: "100% pure protein powerhouse in a convenient powder form. Zero fat and zero cholesterol. Perfect for athletes, smoothies, and fitness enthusiasts. Our premium egg whites powder is carefully processed to retain maximum nutritional value while offering superior mixability and a neutral taste.",
    price: "$14.99",
    unit: "500g",
    image: "/egg_whites_powder.png",
    features: [
      "100% Pure Protein",
      "Zero Fat & Cholesterol",
      "Highly Bioavailable",
      "Neutral Taste Profile"
    ]
  },
  "egg-yolks-powder": {
    id: "egg-yolks-powder",
    name: "Rich Egg Yolks Powder",
    category: "Culinary & Baking",
    description: "Dense in essential nutrients like Vitamin D and Choline. Ideal for premium baking, sauces, culinary arts, and long-term shelf stability. Our rich egg yolks powder is carefully dried to preserve its natural golden color, rich flavor, and emulsifying properties.",
    price: "$16.50",
    unit: "500g",
    image: "/egg_yolks_powder.png",
    features: [
      "Rich in Vitamin D & Choline",
      "Excellent Emulsifier",
      "Long Shelf Life",
      "Perfect for Baking & Sauces"
    ]
  },
  "sanitary-pads": {
    id: "sanitary-pads",
    name: "Sky Soft Sanitary Pads (Day/Night Pack)",
    category: "Hygiene",
    description: "Advanced absorption technology with a breathable, 100% organic cotton top layer. Designed to prevent irritation while offering maximum leak-proof protection for up to 12 hours. Dermatologically tested and safe for sensitive skin. Experience uncompromising comfort during your cycle.",
    price: "$8.99",
    unit: "pack of 20",
    image: "/sanitary_pads.png",
    features: [
      "100% Organic Cotton Top",
      "Up to 12 Hours Protection",
      "Dermatologically Tested",
      "Ultra-Thin & Breathable"
    ]
  },
  "baby-diapers": {
    id: "baby-diapers",
    name: "Sky Soft Baby Diapers (Ultra Soft)",
    category: "Baby Care",
    description: "Provide unparalleled comfort for your little one. Features a super-absorbent core, wetness indicator, and hypoallergenic materials free from harsh chemicals. Guaranteed to keep delicate skin dry and rash-free all night long.",
    price: "$12.50",
    unit: "pack of 30",
    image: "/baby_diapers.png",
    features: [
      "Super-Absorbent Core",
      "Wetness Indicator",
      "Hypoallergenic & Chemical-Free",
      "All-Night Dryness Guarantee"
    ]
  }
};

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products[id as keyof typeof products];
  
  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <Link href="/products" className="inline-flex items-center font-medium text-text-muted hover:text-primary transition-colors mb-12 animate-in fade-in slide-in-from-left-8 duration-700">
          <i className="ph-bold ph-arrow-left mr-2"></i> Back to Products
        </Link>
        
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-black/5 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Product Image */}
            <div className="relative h-[400px] lg:h-auto lg:min-h-[600px] bg-gray-50 flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200/50"></div>
              <div className="relative w-full h-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-xs font-bold uppercase tracking-wider text-primary mb-6 w-max">
                {product.category}
              </span>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-text-dark leading-tight pb-8 border-b border-black/5">
                {product.name.includes("Sky Soft") ? (
                  <>
                    <mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark>
                    {product.name.split("Sky Soft")[1]}
                  </>
                ) : (
                  product.name
                )}
              </h1>
              
              <p className="text-lg text-text-muted leading-relaxed mb-10">
                {product.description}
              </p>
              
              <div className="mb-12">
                <h3 className="font-bold text-xl mb-6 text-text-dark">Key Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-text-muted">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="ph-bold ph-check text-sm"></i>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-8 flex gap-4">
                <button className="flex-1 py-4 rounded-xl font-heading font-semibold text-lg text-white bg-primary shadow-[0_10px_20px_var(--primary-glow)] hover:bg-primary-dark hover:-translate-y-1 hover:shadow-[0_15px_25px_var(--primary-glow)] transition-all duration-300">
                  Add to Cart
                </button>
                <button className="w-16 flex items-center justify-center rounded-xl border-2 border-black/10 text-text-muted hover:border-primary hover:text-primary transition-colors">
                  <i className="ph-bold ph-heart text-2xl"></i>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
