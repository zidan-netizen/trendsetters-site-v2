export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="border-b border-[#2a2a2a] px-6 py-4">
        <a href="/" className="inline-block">
          <img src="/logo.png" alt="TrendSetters" className="h-10 w-auto" />
        </a>
      </nav>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-8">PRIVACY POLICY</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 2026</p>
        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">1. Information We Collect</h2>
            <p>When you contact TrendSetters via Instagram DM or our website enquiry form, we collect the information you provide, including your name, contact details, and the items you are enquiring about. We use this information solely to process your enquiry and fulfil your order.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">2. How We Use Your Information</h2>
            <p>We use your personal data to communicate with you about your order, arrange delivery, and provide customer support. We do not sell or share your data with third parties for marketing purposes.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">3. Data Storage</h2>
            <p>Your personal information is stored securely and retained only as long as necessary to fulfil your order and comply with legal obligations. You may request deletion of your data at any time by contacting us via Instagram DM.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">4. Cookies</h2>
            <p>Our website uses minimal cookies to ensure core functionality. We do not use advertising or tracking cookies. By continuing to use our site, you consent to our use of essential cookies.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, contact us via Instagram at @trend5etters.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">6. Contact</h2>
            <p>For any privacy-related queries, message us directly on Instagram: <a href="https://www.instagram.com/trend5etters/" target="_blank" rel="noopener noreferrer" className="text-[#C5A55A] hover:underline">@trend5etters</a></p>
          </div>
        </div>
      </div>
      <footer className="border-t border-[#2a2a2a] py-6 text-center text-gray-600 text-xs">
        &copy; 2026 TrendSetters. All rights reserved.
      </footer>
    </div>
  );
}
