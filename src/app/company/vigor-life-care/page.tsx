import Image from "next/image";

export default function VigorLifeCareDetails() {
  const timelineEvents = [
    {
      year: "2024",
      title: "Company Registration",
      description: "Vigor Life Care LLP was officially registered in 2024 with a vision to redefine modern health and wellness.",
      icon: "ph-buildings"
    },
    {
      year: "2024",
      title: "First Major Product Line",
      description: "Successfully launched our flagship range of nutritional staples, gaining significant traction in the domestic market.",
      icon: "ph-package"
    },
    {
      year: "2025",
      title: "Expansion into Personal Care",
      description: "Diversified our portfolio to include state-of-the-art personal hygiene solutions, completing our holistic wellness approach.",
      icon: "ph-sparkle"
    },
    {
      year: "Present",
      title: "Global Reach & Continuous Innovation",
      description: "Today, we stand as a unified group, empowering communities worldwide with premium wellness, agriculture, and lifestyle products.",
      icon: "ph-rocket-launch"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <header className="pt-48 pb-10 bg-gradient-to-br from-[#FFF6F0] to-white border-b border-black/5 text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Vigor Life Care <span className="text-primary">LLP</span></h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Discover the full story of our flagship entity and the milestones that have defined our path to excellence.
          </p>
        </div>
      </header>

      {/* Full Company Content */}
      <section className="pt-16 pb-24 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className="w-full lg:w-5/12 h-80 lg:h-[450px] relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/banner_vigor_life_care.png" alt="Vigor Life Care LLP" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <i className="ph-fill ph-heartbeat text-xl"></i>
                <span className="font-semibold tracking-wide uppercase text-sm">Flagship Entity</span>
              </div>
              <h3 className="font-heading text-4xl font-bold mb-6">Vigor Life Care LLP</h3>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                As the flagship entity of our group, Vigor Life Care LLP is steadfastly committed to redefining modern health and wellness. We seamlessly integrate cutting-edge nutritional science with advanced personal hygiene solutions to empower individuals to live their best lives.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Our comprehensive portfolio is crafted with an uncompromising focus on quality, purity, and efficacy. From meticulously sourced nutritional staples to state-of-the-art personal care products, every offering is designed to foster a holistic, healthier, and more vibrant lifestyle for communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey Profile */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-heading text-4xl font-bold mb-4">Our <span className="text-primary">Journey</span></h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Founded in 2024 by visionary leaders Mr. Gajendra Kumar and Mr. Sudheer, Vigor Life Care began with a commitment to revolutionize the pharmaceutical and wellness industry. Explore the milestones that have defined our path to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-[28px] md:left-1/2 top-0 w-14 h-14 bg-white border-4 border-primary/20 group-hover:border-primary rounded-full transform -translate-x-1/2 items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-all duration-500 shadow-lg z-10">
                    <i className={`ph-fill ${event.icon} text-2xl`}></i>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${index * 100}`}>
                    <div className="glass p-8 rounded-3xl shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative">
                      {/* Mobile Icon (Visible only on small screens) */}
                      <div className="sm:hidden w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl mb-4">
                        <i className={`ph-fill ${event.icon}`}></i>
                      </div>

                      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wider">
                        {event.year}
                      </span>
                      <h4 className="font-heading text-2xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors">{event.title}</h4>
                      <p className="text-text-muted leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
