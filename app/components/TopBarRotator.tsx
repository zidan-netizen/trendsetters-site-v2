"use client";

import { useState, useEffect } from "react";

const messages = [
  "£20 OFF YOUR FIRST ORDER — DM US",
  "AUTHENTICITY GUARANTEED",
  "WE SET TRENDS & THEY FOLLOW",
  "DM TO ENQUIRE — @TREND5ETTERS",
];

export default function TopBarRotator() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#C5A55A] py-1 flex items-center justify-center overflow-hidden h-7">
      <div key={current} className="flex items-center gap-2 animate-fade-in px-4">
        <span className="text-[#0A0A0A] text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase truncate text-center">
          {messages[current]}
        </span>
      </div>
    </div>
  );
}
