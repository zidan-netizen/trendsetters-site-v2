"use client";

import { useState, useEffect } from "react";

const heroImages = ["/hero-new.jpg"];

export default function HeroRotator() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero image ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 object-[center_20%] lg:object-[center_50%]"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
