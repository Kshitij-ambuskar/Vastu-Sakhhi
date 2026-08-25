// Signature visual motif for VastuSakhhi: a Vastu Purusha Mandala grid
// overlaid with a Kundli (birth chart) diamond — the two disciplines
// literally superimposed as fine gold linework. Used sparingly as an
// ambient background element, never as decoration for its own sake.

type ChartMotifProps = {
  className?: string;
  variant?: "hero" | "divider";
};

export default function ChartMotif({ className = "", variant = "hero" }: ChartMotifProps) {
  const stroke = variant === "hero" ? "rgba(212,175,55,0.35)" : "rgba(212,175,55,0.5)";
  const strokeDim = variant === "hero" ? "rgba(212,175,55,0.14)" : "rgba(212,175,55,0.2)";

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* 9x9 Vastu grid */}
      {Array.from({ length: 8 }).map((_, i) => {
        const pos = 20 + ((i + 1) * 360) / 9;
        return (
          <g key={`grid-${i}`}>
            <line x1={pos} y1="20" x2={pos} y2="380" stroke={strokeDim} strokeWidth="1" />
            <line x1="20" y1={pos} x2="380" y2={pos} stroke={strokeDim} strokeWidth="1" />
          </g>
        );
      })}
      <rect x="20" y="20" width="360" height="360" stroke={stroke} strokeWidth="1.25" fill="none" />

      {/* Kundli diamond (North Indian chart) overlay */}
      <g stroke={stroke} strokeWidth="1.25" fill="none">
        <path d="M200 20 L380 200 L200 380 L20 200 Z" />
        <path d="M20 20 L380 380" />
        <path d="M380 20 L20 380" />
      </g>

      {/* Center bindu */}
      <circle cx="200" cy="200" r="4" fill="rgba(212,175,55,0.55)" />
    </svg>
  );
}
