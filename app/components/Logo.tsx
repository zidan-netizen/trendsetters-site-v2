export default function Logo({ className = "", width = 160 }: { className?: string; width?: number }) {
  const aspect = 380 / 80;
  const w = width;
  const h = w / aspect;
  return (
    <svg
      viewBox="0 0 380 80"
      width={w}
      height={h}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="190"
        y="35"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="#FFFFFF"
        letterSpacing="6"
        textAnchor="middle"
      >
        THE CLOTHING
      </text>
      <text
        x="190"
        y="65"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontSize="32"
        fontWeight="900"
        fill="#FFFFFF"
        letterSpacing="8"
        textAnchor="middle"
      >
        LAB
      </text>
    </svg>
  );
}
