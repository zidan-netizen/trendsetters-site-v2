"use client";

import { useState, useEffect } from "react";

export default function PromoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("trendsetters_promo_seen")) return;
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("trendsetters_promo_seen", "1");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative bg-white max-w-md w-full p-10 sm:p-12 text-center rounded-sm border border-[#E5E5E5] shadow-xl">
        <button
          onClick={dismiss}
          className="absolute top-4 right-5 text-gray-400 hover:text-[#121212] text-2xl"
        >
          &times;
        </button>
        <p className="text-[#121212] text-[11px] font-semibold tracking-[0.3em] uppercase mb-5">
          Welcome to TrendSetters
        </p>
        <h3 className="font-display text-4xl sm:text-5xl font-bold text-[#121212] leading-tight mb-5">
          £20 OFF<br />YOUR FIRST<br />ORDER
        </h3>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          DM us on Instagram to claim your discount. Luxury clothing, footwear and accessories sourced for you.
        </p>
        <a
          href="#products"
          onClick={dismiss}
          className="block w-full bg-[#121212] hover:bg-black text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
        >
          Shop Now
        </a>
        <button
          onClick={dismiss}
          className="mt-4 text-gray-400 text-sm underline hover:text-gray-600 transition-colors"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
