"use client";

const categories = [
  { label: "Latest Arrivals", href: "#products" },
  { label: "Clothing", href: "#products" },
  { label: "Footwear", href: "#products" },
  { label: "Accessories", href: "#products" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-56 shrink-0 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto border-r border-[#2a2a2a] pr-6">
      <div className="py-8">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A55A] mb-4">
          Categories
        </h3>
        <nav className="space-y-2.5 mb-10">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="block text-xs text-gray-500 hover:text-[#C5A55A] transition-colors duration-300 tracking-wide"
            >
              {cat.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="block w-full bg-[#C5A55A] hover:bg-[#d4b872] text-[#0A0A0A] py-3 text-[10px] font-bold tracking-[0.18em] uppercase text-center transition-colors duration-300"
        >
          Shop Now
        </a>
      </div>
    </aside>
  );
}
