import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-20 overflow-hidden font-sans text-sm text-[#4a4a4a]">
      <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10 pb-32">
        <div className="mb-12">
          <Link href="/" className="font-heading text-5xl font-extrabold text-black uppercase tracking-tight">
            VIGOR
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 lg:gap-12">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-black text-base">Vigor Life Care LLP</h4>
            <p className="font-semibold">CIN Number: U74999HR2026VIGOR01</p>
            <p className="leading-relaxed">
              <span className="font-bold text-black">Registered</span> Office: 123 Wellness Ave, 
              Suite 400, New York, NY 10001
            </p>
          </div>
          
          {/* Column 2: Main Menu */}
          <div>
            <h4 className="font-bold text-black text-xl mb-6">Main Menu</h4>
            <ul className="flex flex-col gap-4 font-semibold text-[#5a5a5a]">
              <li><Link href="/products" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Why Choose Vigor?</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Lab Reports</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Know Your Products</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Career</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h4 className="font-bold text-black text-xl mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 font-semibold text-[#5a5a5a]">
              <li><Link href="/terms" className="underline hover:text-primary transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/shipping" className="underline hover:text-primary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-black text-xl mb-6 uppercase tracking-wide">Contact Us :</h4>
            <ul className="flex flex-col gap-3 font-semibold text-[#5a5a5a] mb-8">
              <li>Phone no: <a href="tel:01141193222" className="underline hover:text-primary transition-colors">+1 (800) 123-4567</a></li>
              <li>Email: <a href="mailto:contact@vigor.com" className="underline hover:text-primary transition-colors">contact@vigor.com</a></li>
            </ul>
            
            <div className="flex gap-4 text-2xl text-black">
              <a href="#" className="hover:text-primary transition-colors"><i className="ph-fill ph-facebook-logo"></i></a>
              <a href="#" className="hover:text-primary transition-colors"><i className="ph-fill ph-instagram-logo"></i></a>
              <a href="#" className="hover:text-primary transition-colors"><i className="ph-fill ph-youtube-logo"></i></a>
              <a href="#" className="hover:text-primary transition-colors"><i className="ph-fill ph-twitter-logo"></i></a>
            </div>
          </div>
          
        </div>
      </div>

      {/* Decorative Landscape Graphic (Replacing Image) */}
      <div className="absolute bottom-12 left-0 w-full h-[300px] pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full object-cover origin-bottom scale-x-110" preserveAspectRatio="none">
          <path fill="#FFB74D" fillOpacity="0.4" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#FF9800" fillOpacity="0.7" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,149.3C672,128,768,128,864,144C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#F57C00" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
        {/* Simple geometric trees/sun to simulate the landscape */}
        <div className="absolute bottom-[80px] left-[5%] w-16 h-16 bg-orange-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-[40px] left-[10%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[80px] border-l-transparent border-r-transparent border-b-orange-600"></div>
        <div className="absolute bottom-[100px] right-[15%] w-24 h-24 bg-yellow-400 rounded-full opacity-90"></div>
      </div>

      {/* Floating Email Input */}
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-lg px-6 z-20">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex items-center p-2">
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-grow px-4 py-2 outline-none text-black bg-transparent"
          />
          <button className="p-2 text-gray-500 hover:text-primary transition-colors">
            <i className="ph-bold ph-arrow-right text-xl"></i>
          </button>
        </div>
      </div>

      {/* Bottom Orange Strip */}
      <div className="relative z-20 bg-[#F57C00] text-white py-3 text-center text-sm font-semibold flex items-center justify-center gap-2">
        <span>Vigor Loyalty Club</span>
        <span className="opacity-60">|</span>
        <span className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white text-[#F57C00] rounded-full flex items-center justify-center font-bold text-xs">P</div> 
          Get upto 10% Off using POPCoins <i className="ph-bold ph-arrow-right"></i>
        </span>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/18001234567" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:-translate-y-1 transition-transform z-50">
        <i className="ph-fill ph-whatsapp-logo"></i>
      </a>

    </footer>
  );
}
