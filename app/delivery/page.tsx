export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="border-b border-[#2a2a2a] px-6 py-4">
        <a href="/" className="inline-block">
          <img src="/logo.png" alt="TrendSetters" className="h-10 w-auto" />
        </a>
      </nav>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-8">DELIVERY INFORMATION</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 2026</p>
        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Free UK Delivery</h2>
            <p>All orders within the United Kingdom are dispatched with free standard delivery. There are no minimum order requirements and no hidden fees.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Delivery Timeframes</h2>
            <p>Standard UK delivery takes 2 to 4 working days from dispatch. Express next-day delivery is available on request for an additional charge. Please message us before placing your order to arrange express shipping.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Dispatch</h2>
            <p>Orders are typically dispatched within 1 to 2 business days of confirmed payment. You will receive tracking information via your preferred contact method (Instagram DM) as soon as your order is dispatched.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">International Delivery</h2>
            <p>We ship worldwide. International delivery costs and timeframes vary depending on destination. Please message us via Instagram DM for an international shipping quote before ordering.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Packaging</h2>
            <p>All items are carefully packaged to ensure they arrive in perfect condition. Premium items are packed with protective materials and discreet outer packaging.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Delivery Issues</h2>
            <p>If your order has not arrived within the expected timeframe, please contact us immediately. We will liaise with the courier on your behalf and resolve the issue as quickly as possible.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Contact</h2>
            <p>For delivery queries, contact us on Instagram at <a href="https://www.instagram.com/trend5etters/" target="_blank" rel="noopener noreferrer" className="text-[#C5A55A] hover:underline">@trend5etters</a></p>
          </div>
        </div>
      </div>
      <footer className="border-t border-[#2a2a2a] py-6 text-center text-gray-600 text-xs">
        &copy; 2026 TrendSetters. All rights reserved.
      </footer>
    </div>
  );
}
