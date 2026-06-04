"use client";

import { useState, useEffect } from "react";

const slides = ["/hero-d.jpg", "/hero-c.jpg", "/hero-f.jpg"];

export default function HeroSwiper() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full relative">
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden relative">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hero image ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
