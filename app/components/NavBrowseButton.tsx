"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const categories = [
  { label: "New Arrivals", href: "#products" },
  { label: "Clothing", href: "#products" },
  { label: "Footwear", href: "#products" },
  { label: "Accessories", href: "#products" },
];

export default function NavBrowseButton() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-gray-400 hover:text-[#C5A55A] transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100]">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-72 bg-[#0A0A0A] border-r border-[#2a2a2a] p-6 overflow-y-auto animate-slide-in-left">
              <div className="flex justify-between items-center mb-8">
                <img src="/logo.png" alt="TrendSetters" className="h-10 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-white text-xl"
                >
                  &times;
                </button>
              </div>

              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A55A] mb-4">
                Categories
              </h3>
              <nav className="space-y-3 mb-8">
                {categories.map((cat) => (
                  <a
                    key={cat.label}
                    href={cat.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm text-gray-500 hover:text-[#C5A55A] transition-colors"
                  >
                    {cat.label}
                  </a>
                ))}
              </nav>

              <div className="border-t border-[#2a2a2a] pt-6 space-y-3">
                <a
                  href="https://www.instagram.com/trend5etters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-gray-500 hover:text-[#C5A55A] transition-colors"
                >
                  Instagram @trend5etters
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
