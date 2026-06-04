"use client";

import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12", "One Size"];

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://www.instagram.com/trend5etters/`,
      "_blank"
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-[#111] border-y border-[#2a2a2a]">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#C5A55A] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">
          Request Service
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
          Cannot Find What You Want?
        </h2>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Tell us what you are looking for and we will source it. Any piece, any size, delivered to your door. We specialise in luxury sourcing for clothing, footwear, and accessories.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#0A0A0A] border border-[#2a2a2a] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[#C5A55A] focus:outline-none transition-colors"
              placeholder="e.g. James"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">
              Size
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
              className="w-full bg-[#0A0A0A] border border-[#2a2a2a] px-4 py-3 text-sm text-white focus:border-[#C5A55A] focus:outline-none transition-colors appearance-none"
            >
              <option value="">Select size</option>
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">
              What are you looking for?
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="w-full bg-[#0A0A0A] border border-[#2a2a2a] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[#C5A55A] focus:outline-none transition-colors resize-none"
              placeholder="e.g. Louis Vuitton bag in caramel, or Dior B22 trainers in UK 9"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C5A55A] hover:bg-[#d4b872] text-[#0A0A0A] py-3.5 text-[10px] font-bold tracking-[0.18em] uppercase transition-colors"
          >
            Send Request via Instagram DM
          </button>
        </form>
      </div>
    </section>
  );
}
