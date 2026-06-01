export default function ShippingPolicy() {
  return (
    <>
      <header className="pt-40 pb-12 bg-gradient-to-br from-[#FFF6F0] to-white border-b border-black/5 text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Shipping <span className="text-primary">Policy</span></h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to know about our shipping processes and timelines.
          </p>
        </div>
      </header>

      <section className="py-16 bg-surface">
        <div className="w-full max-w-[800px] mx-auto px-6 prose prose-lg prose-orange text-text-muted">
          <p>Last updated: May 30, 2026</p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Order Processing Time</h2>
          <p className="mb-4">
            All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Shipping Rates & Delivery Estimates</h2>
          <p className="mb-4">
            Shipping charges for your order will be calculated and displayed at checkout. We offer standard and expedited shipping options. Standard shipping usually takes 3-5 business days.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Shipment Confirmation & Order Tracking</h2>
          <p className="mb-4">
            You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Damages</h2>
          <p className="mb-4">
            Vigor Life Care LLP is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. International Shipping</h2>
          <p className="mb-4">
            We currently do not ship outside the US. We apologize for any inconvenience this may cause.
          </p>
        </div>
      </section>
    </>
  );
}
