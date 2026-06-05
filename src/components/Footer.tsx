import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-slate-300 font-sans text-sm overflow-hidden border-t-4 border-orange-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Company Info */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="relative h-20 w-32 md:h-24 md:w-40">
                <Image src="/logo.png" alt="Vigor Life Care LLP Logo" fill className="object-contain scale-[1.4] md:scale-[1.5] origin-center" />
              </div>
            </Link>
            <p className="leading-relaxed text-slate-400 text-base mb-8 max-w-md">
              Elevating your lifestyle with top-tier nutritional staples and premium personal care items. We believe in true wellness from the inside out.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300"><i className="ph-fill ph-facebook-logo text-xl"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300"><i className="ph-fill ph-instagram-logo text-xl"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300"><i className="ph-fill ph-youtube-logo text-xl"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300"><i className="ph-fill ph-twitter-logo text-xl"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-4 font-medium text-slate-400 text-base">
              <li><Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-2 group"><i className="ph-bold ph-caret-right text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></i> Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition-colors flex items-center gap-2 group"><i className="ph-bold ph-caret-right text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></i> About Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors flex items-center gap-2 group"><i className="ph-bold ph-caret-right text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></i> Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-4 font-medium text-slate-400 text-base">
              <li><Link href="/terms" className="hover:text-orange-400 transition-colors flex items-center gap-2 group"><i className="ph-bold ph-caret-right text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></i> Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-400 transition-colors flex items-center gap-2 group"><i className="ph-bold ph-caret-right text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></i> Privacy</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact & Newsletter */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Get in Touch</h4>
            <ul className="flex flex-col gap-4 font-medium text-slate-400 mb-8 text-base">
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-map-pin text-orange-500 text-xl mt-1 shrink-0"></i>
                <span className="leading-relaxed"><strong className="text-white font-semibold block mb-1">Vigor Life Care LLP</strong>Near Raushan Pharma, Selaqui,<br/>Dehradun, Uttarakhand, 248011</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ph-fill ph-phone-call text-orange-500 text-xl shrink-0"></i>
                <a href="tel:+919012365676" className="hover:text-orange-400 transition-colors">+91 9012365676</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ph-fill ph-envelope-simple text-orange-500 text-xl shrink-0"></i>
                <a href="mailto:vigorlifecare@gmail.com" className="hover:text-orange-400 transition-colors">vigorlifecare@gmail.com</a>
              </li>
            </ul>

            <div className="relative mt-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-800/80 border border-slate-700 text-white px-4 py-3.5 rounded-lg outline-none focus:border-orange-500 focus:bg-slate-800 transition-all placeholder:text-slate-500"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-orange-500 text-white px-5 rounded-md font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center">
                <i className="ph-bold ph-paper-plane-right text-lg"></i>
              </button>
            </div>
          </div>
          
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-800 bg-[#0b1121]">
        <div className="w-full max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 font-medium text-sm">© {new Date().getFullYear()} Vigor Life Care LLP. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Premium Health & Wellness Solutions</span>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919012365676" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 hover:-translate-y-1 transition-transform duration-300 z-50 drop-shadow-[0_4px_14px_rgba(37,211,102,0.39)] hover:drop-shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-105">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M16.0068 2.38672C8.50853 2.38672 2.41797 8.47728 2.41797 15.9755C2.41797 18.966 3.38555 21.728 5.01186 24.0041L3.30823 29.1171L8.5393 27.4134C10.7483 28.8722 13.2844 29.5644 16.0068 29.5644C23.505 29.5644 29.5956 23.4738 29.5956 15.9755C29.5956 8.47728 23.505 2.38672 16.0068 2.38672Z" fill="#25D366"/>
          <path d="M22.8687 20.3175C22.5841 21.1197 21.4316 21.7583 20.5596 21.9213C19.9678 22.0298 19.1167 22.1066 16.1436 20.8715C12.338 19.2941 9.87326 15.4219 9.6833 15.1746C9.50153 14.9272 8.11816 13.1118 8.11816 11.2319C8.11816 9.35191 9.07167 8.42898 9.46747 8.02534C9.7825 7.70889 10.2858 7.5583 10.7601 7.5583C10.9126 7.5583 11.0494 7.56461 11.1681 7.57077C11.5955 7.58988 11.8093 7.61515 12.086 8.27318C12.4338 9.10648 13.2825 11.1686 13.3852 11.3831C13.488 11.5976 13.5828 11.8841 13.4326 12.1812C13.2825 12.4783 13.1638 12.597 12.966 12.8247C12.7682 13.0523 12.5546 13.3039 12.3728 13.482C12.175 13.6896 11.9614 13.9073 12.1988 14.3129C12.4361 14.7185 13.2745 16.0741 14.5085 17.1724C16.0963 18.5861 17.3859 19.0315 17.8288 19.2195C18.2718 19.4075 18.5724 19.3778 18.8415 19.0909C19.1105 18.804 19.9016 17.8837 20.2101 17.4682C20.5186 17.0527 20.8113 17.112 21.2148 17.2604C21.6183 17.4088 23.1134 18.1408 23.414 18.2892C23.7146 18.4376 23.9124 18.5118 23.9835 18.6404C24.0547 18.769 24.0547 19.4024 23.7701 20.2046C23.4542 21.0505 22.8687 20.3175 22.8687 20.3175Z" fill="white"/>
        </svg>
      </a>
    </footer>
  );
}
