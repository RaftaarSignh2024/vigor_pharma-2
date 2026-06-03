"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <>
      {/* Page Header */}
      <header className="pt-40 pb-20 bg-gradient-to-br from-[#FFF6F0] to-white border-b border-black/5 text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            We're here to answer any questions you have about our products or your order.
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-24 bg-surface">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h2 className="font-heading text-4xl font-bold mb-8">We'd love to hear from you.</h2>
              <p className="text-lg text-text-muted mb-10">
                Get in touch with any of our group companies. Our dedicated teams are ready to assist you with your specific needs.
              </p>
              
              {/* Vigor Life Care LLP */}
              <div className="glass p-8 rounded-2xl mb-6">
                <h3 className="font-heading text-2xl font-bold mb-4 text-primary border-b border-black/5 pb-4">Vigor Life Care LLP</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                      <i className="ph-fill ph-map-pin"></i>
                    </div>
                    <p className="text-text-muted pt-1">Building - Vigor Life Care LLP, Near Raushan Pharma<br />Selaqui, Dehradun, Uttarakhand, 248011</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                      <i className="ph-fill ph-envelope-simple"></i>
                    </div>
                    <p className="text-text-muted pt-1">contact@vigorlifecare.com</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                      <i className="ph-fill ph-phone"></i>
                    </div>
                    <p className="text-text-muted pt-1">+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>
              
              {/* GS Enterprises */}
              <div className="glass p-8 rounded-2xl mb-6">
                <h3 className="font-heading text-2xl font-bold mb-4 text-primary border-b border-black/5 pb-4">GS Enterprises</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                      <i className="ph-fill ph-map-pin"></i>
                    </div>
                    <p className="text-text-muted pt-1">G.S Enterprises, Khasra no. 177/1, Shop No.2, P.O. Karuna Chakkan<br />Tehsil - Baddi, Solan, Himachal Pradesh, 173205</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                      <i className="ph-fill ph-envelope-simple"></i>
                    </div>
                    <p className="text-text-muted pt-1">contact_gs_enterprises@vigorlifecare.com</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                      <i className="ph-fill ph-phone"></i>
                    </div>
                    <p className="text-text-muted pt-1">+1 (888) 987-6543</p>
                  </div>
                </div>
              </div>
              
              {/* CF Natural Lay Farms LLP */}
              <div className="glass p-8 rounded-2xl flex items-start gap-5">
                <div className="w-full">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-primary border-b border-black/5 pb-4">CF Natural Lay Farms LLP</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                        <i className="ph-fill ph-map-pin"></i>
                      </div>
                      <p className="text-text-muted pt-1">789 Country Road, Valley Farm<br />Austin, TX 78701</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                        <i className="ph-fill ph-envelope-simple"></i>
                      </div>
                      <p className="text-text-muted pt-1">contact_cf_natural_farms@vigorlifecare.com</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                        <i className="ph-fill ph-phone"></i>
                      </div>
                      <p className="text-text-muted pt-1">+1 (800) 555-0199</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl">
                <h3 className="font-heading text-3xl font-bold mb-8">Send us a message</h3>
                
                <div className="mb-6">
                  <label htmlFor="name" className="block font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-4 border border-black/5 rounded-xl bg-bg-color focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" 
                    placeholder="e.g. Jane Smith" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-4 border border-black/5 rounded-xl bg-bg-color focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" 
                    placeholder="e.g. jane.smith@company.com" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full p-4 border border-black/5 rounded-xl bg-bg-color focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" 
                    required
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Support">Product Support</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Wholesale">Wholesale & Partnerships</option>
                  </select>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-4 border border-black/5 rounded-xl bg-bg-color focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all min-h-[150px] resize-y" 
                    placeholder="How can we help you today?" 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 rounded-xl font-heading font-semibold text-white bg-primary shadow-[0_10px_20px_var(--primary-glow)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_15px_25px_var(--primary-glow)] transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
