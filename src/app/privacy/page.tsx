export default function PrivacyPolicy() {
  return (
    <>
      <header className="pt-40 pb-12 bg-gradient-to-br from-[#FFF6F0] to-white border-b border-black/5 text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Privacy <span className="text-primary">Policy</span></h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            How we handle and protect your personal information.
          </p>
        </div>
      </header>

      <section className="py-16 bg-surface">
        <div className="w-full max-w-[800px] mx-auto px-6 prose prose-lg prose-orange text-text-muted">
          <p>Last updated: May 30, 2026</p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us when you create an account, make a purchase, or contact our support team.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, or unauthorized disclosure.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Sharing of Information</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except to trusted third parties who assist us in operating our website.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@vigor.com.
          </p>
        </div>
      </section>
    </>
  );
}
