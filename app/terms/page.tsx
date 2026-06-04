export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="border-b border-[#2a2a2a] px-6 py-4">
        <a href="/" className="inline-block">
          <img src="/logo.png" alt="TrendSetters" className="h-10 w-auto" />
        </a>
      </nav>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-8">TERMS AND CONDITIONS</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 2026</p>
        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">1. Agreement</h2>
            <p>By using the TrendSetters website or purchasing from us, you agree to these terms. TrendSetters reserves the right to update these terms at any time. Continued use of the site constitutes acceptance of any changes.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">2. Products and Authenticity</h2>
            <p>All items sourced and sold by TrendSetters are 100% authentic. We specialise in personal shopping and sourcing of clothing, footwear, and accessories. Product descriptions and images are provided in good faith based on the best available information at the time of listing.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">3. Pricing</h2>
            <p>All prices are quoted in British Pounds (GBP). Prices are subject to change. Final pricing for personally sourced items will be confirmed via Instagram DM before payment is taken.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">4. Payments</h2>
            <p>Payment is required in full before dispatch. We accept bank transfer and other payment methods as agreed directly. All transactions are final unless a return is agreed under our returns policy.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">5. Liability</h2>
            <p>TrendSetters is not liable for delays caused by third-party couriers. We will provide tracking information and assist with any delivery issues on your behalf.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">6. Contact</h2>
            <p>For any queries regarding these terms, contact us on Instagram at <a href="https://www.instagram.com/trend5etters/" target="_blank" rel="noopener noreferrer" className="text-[#C5A55A] hover:underline">@trend5etters</a></p>
          </div>
        </div>
      </div>
      <footer className="border-t border-[#2a2a2a] py-6 text-center text-gray-600 text-xs">
        &copy; 2026 TrendSetters. All rights reserved.
      </footer>
    </div>
  );
}
