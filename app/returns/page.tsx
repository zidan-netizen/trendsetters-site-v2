export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="border-b border-[#2a2a2a] px-6 py-4">
        <a href="/" className="inline-block">
          <img src="/logo.png" alt="TrendSetters" className="h-10 w-auto" />
        </a>
      </nav>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-8">RETURNS POLICY</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 2026</p>
        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">14-Day Return Window</h2>
            <p>We accept returns within 14 days of the delivery date. To be eligible for a return, items must be unworn, in their original condition, and with all original tags attached where applicable.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">How to Initiate a Return</h2>
            <p>To request a return, message us on Instagram at @trend5etters within the 14-day window. Provide your order details and the reason for return. We will confirm acceptance and provide return instructions.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Refunds</h2>
            <p>Once we receive and inspect the returned item, we will process your refund within 5 to 7 business days. Refunds are issued back to your original payment method. Original shipping costs are non-refundable unless the item was faulty or incorrectly sent.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Non-Returnable Items</h2>
            <p>Items that have been worn, washed, or had tags removed are not eligible for return. Personally sourced items ordered to your specification may be subject to a restocking fee if returned without fault.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Faulty Items</h2>
            <p>If you receive a faulty or incorrectly described item, please contact us immediately with photos. We will arrange a free return and full refund or replacement.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Contact</h2>
            <p>For all return requests, contact us on Instagram at <a href="https://www.instagram.com/trend5etters/" target="_blank" rel="noopener noreferrer" className="text-[#C5A55A] hover:underline">@trend5etters</a></p>
          </div>
        </div>
      </div>
      <footer className="border-t border-[#2a2a2a] py-6 text-center text-gray-600 text-xs">
        &copy; 2026 TrendSetters. All rights reserved.
      </footer>
    </div>
  );
}
