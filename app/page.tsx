import Sidebar from "./components/Sidebar";
import NavBrowseButton from "./components/NavBrowseButton";
import InquiryForm from "./components/InquiryForm";
import HeroRotator from "./components/HeroRotator";
import TopBarRotator from "./components/TopBarRotator";

import { products } from "../lib/products";

const testimonials = [
  {
    name: "Verified Customer",
    text: "Ordered an item and it arrived within 2 days perfectly packaged. Quality was spot on. Will definitely be ordering again.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    text: "TrendSetters always delivers. Got the item that was sold out everywhere else. Exactly as described and in amazing condition.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    text: "Every item I have received has been exactly as pictured. Communication was smooth and packaging was premium. Highly recommend.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    text: "Best personal shopper around. Shipped next day, items were immaculate. 10 out of 10.",
    rating: 5,
  },
];

const footwear = products.filter(p => p.category === "FOOTWEAR");
const clothing = products.filter(p => p.category === "CLOTHING");

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Top Bar */}
      <TopBarRotator />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          {/* Left: Hamburger */}
          <div className="flex items-center gap-4">
            <NavBrowseButton />
          </div>
          {/* Center: Logo */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2">
            <img src="/logo.png" alt="TrendSetters" className="h-10 sm:h-12 w-auto" />
          </a>
          {/* Right: Search + Enquire */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-[#C5A55A] transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
            <a href="#inquiry" className="text-gray-400 hover:text-[#C5A55A] transition-colors relative" aria-label="Enquire">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C5A55A] text-black text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Category Bubbles */}
      <section className="bg-[#0A0A0A] py-4 overflow-hidden border-b border-[#2a2a2a]">
        <div className="flex items-center gap-5 sm:gap-8 px-4 sm:px-8 justify-center overflow-x-auto scrollbar-hide">
          {[
            { label: "New Arrivals", img: "/cat-new-arrivals-custom.jpg" },
            { label: "Clothing", img: "/cat-clothing-custom.jpg" },
            { label: "Footwear", img: "/cat-footwear-custom.jpg" },
            { label: "Accessories", img: "/cat-accessories-custom.jpg" },
          ].map((cat, i) => (
            <a key={i} href="#products" className="flex flex-col items-center gap-2 group flex-shrink-0">
              <div className="ig-highlight-ring w-[68px] h-[68px] sm:w-[84px] sm:h-[84px] rounded-full p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#111] p-[2px]">
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wider uppercase">{cat.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Hero Banner — image only */}
      <section className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden bg-[#0A0A0A]">
        <HeroRotator />
      </section>

      {/* Category Grid */}
      <section className="py-12 sm:py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">BROWSE BY CATEGORY</h2>
            <a href="#products" className="text-[#C5A55A] text-xs font-semibold tracking-wider uppercase hover:underline mt-2 inline-flex items-center gap-1">SHOP ALL <span>&rsaquo;</span></a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: "GOYARD", img: "/cat-new-arrivals-custom.jpg", pos: "center" },
              { label: "CLOTHING", img: "/cat-clothing-custom.jpg", pos: "center" },
              { label: "FOOTWEAR", img: "/cat-footwear-custom.jpg", pos: "center" },
              { label: "HERMES", img: "/cat-hermes.png", pos: "center" },
            ].map((cat, i) => (
              <a key={i} href="#products" className="group relative aspect-square overflow-hidden block rounded-lg">
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: cat.pos }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">{cat.label}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section with Sidebar */}
      <section id="products" className="border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
          <Sidebar />

          <div className="flex-1 py-10 sm:py-14">
            <div className="mb-8 text-center">
              <p className="text-[#C5A55A] text-[10px] font-bold tracking-[0.25em] uppercase mb-2 font-display">Collection</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">LATEST ARRIVALS</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {products.map((product) => (
                <a
                  key={product.slug}
                  href="https://www.instagram.com/trend5etters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[4/5] bg-[#111] border border-[#2a2a2a] overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <span className="bg-[#C5A55A] text-[#0A0A0A] px-6 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Enquire Now
                      </span>
                    </div>
                  </div>
                  <p className="text-[9px] text-[#C5A55A] uppercase tracking-[0.2em] mb-1">{product.brand}</p>
                  <p className="text-sm font-medium text-white mb-1">{product.name}</p>
                  <p className="text-gray-500 text-xs">DM to enquire via Instagram</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Scroll Carousel */}
      <section className="py-12 sm:py-16 bg-[#111] overflow-hidden border-t border-[#2a2a2a]">
        <div className="text-center mb-8">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C5A55A] mb-2">@trend5etters</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Follow Us On Instagram</h2>
        </div>
        <div className="ig-marquee-wrap">
          <div className="ig-marquee-track">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 flex-shrink-0 px-2">
                {[
                  "/ig-1.jpg",
                  "/ig-2.jpg",
                  "/ig-3.jpg",
                  "/ig-4.jpg",
                  "/ig-5.jpg",
                  "/ig-6.jpg",
                ].map((src, i) => (
                  <a key={`${setIdx}-${i}`} href="https://www.instagram.com/trend5etters/" target="_blank" rel="noopener noreferrer" className="w-[180px] h-[320px] sm:w-[220px] sm:h-[390px] flex-shrink-0 overflow-hidden rounded-lg border border-[#2a2a2a]">
                    <img src={src} alt={`TrendSetters post ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="https://www.instagram.com/trend5etters/" target="_blank" rel="noopener noreferrer" className="text-[#C5A55A] text-sm font-bold hover:text-white transition-colors">@trend5etters</a>
        </div>
      </section>

      {/* Category Swipe — Clothing & Footwear */}
      <section className="py-14 bg-[#0A0A0A] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clothing */}
          <div className="mb-14">
            <div className="mb-8 text-center">
              <p className="text-[#C5A55A] text-[10px] font-bold tracking-[0.25em] uppercase mb-2 font-display">Collection</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">CLOTHING</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {[...Array(6)].map((_, i) => (
                <a key={i} href="https://wa.me/447904856891?text=Hi%20TrendSetters%2C%20I%20am%20interested%20in%20your%20clothing." target="_blank" rel="noopener noreferrer"
                  className="group flex-shrink-0 w-[180px] sm:w-[220px] snap-start">
                  <div className="relative aspect-[4/5] bg-[#111] border border-[#2a2a2a] overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <span className="bg-[#C5A55A] text-[#0A0A0A] px-6 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Enquire Now</span>
                    </div>
                  </div>
                  <div className="h-2 bg-[#2a2a2a] rounded w-2/3 mb-2" />
                  <div className="h-2 bg-[#1a1a1a] rounded w-1/2" />
                </a>
              ))}
            </div>
          </div>

          {/* Footwear */}
          <div>
            <div className="mb-8 text-center">
              <p className="text-[#C5A55A] text-[10px] font-bold tracking-[0.25em] uppercase mb-2 font-display">Collection</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">FOOTWEAR</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {[...Array(6)].map((_, i) => (
                <a key={i} href="https://wa.me/447904856891?text=Hi%20TrendSetters%2C%20I%20am%20interested%20in%20your%20footwear." target="_blank" rel="noopener noreferrer"
                  className="group flex-shrink-0 w-[180px] sm:w-[220px] snap-start">
                  <div className="relative aspect-[4/5] bg-[#111] border border-[#2a2a2a] overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <span className="bg-[#C5A55A] text-[#0A0A0A] px-6 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Enquire Now</span>
                    </div>
                  </div>
                  <div className="h-2 bg-[#2a2a2a] rounded w-2/3 mb-2" />
                  <div className="h-2 bg-[#1a1a1a] rounded w-1/2" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 sm:py-16 bg-[#0A0A0A] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#C5A55A] text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Customer Reviews</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#111] border border-[#2a2a2a] p-6 rounded-lg">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 fill-[#C5A55A]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.text}</p>
                <p className="text-[#C5A55A] text-[10px] font-bold tracking-wider uppercase">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <div id="inquiry">
        <InquiryForm />
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col items-center gap-6">
            <img src="/logo.png" alt="TrendSetters" className="h-14 w-auto" />

            <a
              href="https://www.instagram.com/trend5etters/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#C5A55A] transition-colors text-sm font-semibold tracking-wider uppercase"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @trend5etters
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500 text-[11px] tracking-wider uppercase">
              <a href="/privacy" className="hover:text-[#C5A55A] transition-colors">Privacy Policy</a>
              <span>&middot;</span>
              <a href="/terms" className="hover:text-[#C5A55A] transition-colors">Terms</a>
              <span>&middot;</span>
              <a href="/returns" className="hover:text-[#C5A55A] transition-colors">Returns</a>
              <span>&middot;</span>
              <a href="/delivery" className="hover:text-[#C5A55A] transition-colors">Delivery</a>
            </div>

            <p className="text-gray-600 text-[11px] tracking-wider uppercase">&copy; 2023 TrendSetters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
