type PixelCoupleProps = {
  pose?: "path" | "kiss";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-[136px]",
  md: "w-[194px]",
  lg: "w-[260px]",
};

const outline = "#172033";
const gabiSkin = "#efc8ab";
const rafaSkin = "#e0b893";
const gabiHair = "#41291f";
const gabiHairLight = "#6b4432";
const rafaHair = "#4f2f1f";
const rafaHairLight = "#7a4b32";
const white = "#f7f3eb";

export const PixelCouple = ({ pose = "path", size = "md", className = "" }: PixelCoupleProps) => {
  return (
    <div className={`pixel-couple ${sizeClasses[size]} ${className}`.trim()} aria-label="Rafa e Gabi em pixel art">
      {pose === "kiss" ? <KissPose /> : <PathPose />}
    </div>
  );
};

const PathPose = () => (
  <svg viewBox="0 0 220 180" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="110" cy="170" rx="52" ry="6" fill="rgba(23,32,51,0.15)" />

    <g transform="translate(38 20)">
      <path
        d="M24 6h18v6h8v12h2v40h-4v28h-8V60h-10V24h-6z"
        fill={gabiHair}
        stroke={outline}
        strokeWidth="2"
      />
      <rect x="26" y="10" width="14" height="12" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="22" y="22" width="22" height="6" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="16" y="28" width="34" height="34" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="18" y="62" width="30" height="18" fill="#849470" stroke={outline} strokeWidth="2" />
      <rect x="24" y="80" width="6" height="28" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="36" y="80" width="6" height="28" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="22" y="108" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="34" y="108" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />

      <rect x="10" y="36" width="6" height="26" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="8" y="60" width="8" height="8" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="50" y="36" width="6" height="18" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="56" y="44" width="14" height="6" fill={gabiSkin} stroke={outline} strokeWidth="2" />

      <rect x="6" y="44" width="10" height="22" fill="#866548" stroke={outline} strokeWidth="2" />
      <rect x="8" y="38" width="8" height="8" fill="#866548" stroke={outline} strokeWidth="2" />
      <rect x="18" y="8" width="6" height="44" fill={gabiHairLight} opacity="0.55" />
      <rect x="42" y="14" width="4" height="34" fill={gabiHairLight} opacity="0.45" />
    </g>

    <g transform="translate(118 18)">
      <path
        d="M20 4h18v6h8v8h4v10h-2v10h-6V20h-18V10h4z"
        fill={rafaHair}
        stroke={outline}
        strokeWidth="2"
      />
      <rect x="22" y="10" width="14" height="12" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="20" y="22" width="18" height="6" fill="#1f2530" stroke={outline} strokeWidth="2" />
      <rect x="14" y="28" width="30" height="36" fill="#1f2530" stroke={outline} strokeWidth="2" />
      <rect x="16" y="64" width="26" height="18" fill="#2b3440" stroke={outline} strokeWidth="2" />
      <rect x="20" y="82" width="6" height="28" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="32" y="82" width="6" height="28" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="18" y="110" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="30" y="110" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />

      <rect x="8" y="38" width="6" height="18" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="0" y="44" width="10" height="8" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="44" y="38" width="6" height="26" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="50" y="48" width="12" height="6" fill={rafaSkin} stroke={outline} strokeWidth="2" />

      <rect x="6" y="30" width="8" height="34" fill="#8b6947" stroke={outline} strokeWidth="2" />
      <rect x="44" y="30" width="8" height="34" fill="#8b6947" stroke={outline} strokeWidth="2" />
      <rect x="10" y="34" width="4" height="18" fill="#a67b53" opacity="0.6" />
      <rect x="44" y="34" width="4" height="18" fill="#a67b53" opacity="0.6" />
      <rect x="34" y="6" width="6" height="10" fill={rafaHairLight} opacity="0.55" />
    </g>

    <rect x="102" y="82" width="10" height="8" fill={gabiSkin} stroke={outline} strokeWidth="2" />
    <rect x="112" y="82" width="10" height="8" fill={rafaSkin} stroke={outline} strokeWidth="2" />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 220 188" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="110" cy="178" rx="54" ry="6" fill="rgba(23,32,51,0.15)" />

    <g transform="translate(26 18)">
      <path
        d="M28 10h18v6h8v10h2v20h-4v18h-10V48h-10V24h-4z"
        fill={gabiHair}
        stroke={outline}
        strokeWidth="2"
      />
      <path d="M20 22h8v40h-8z" fill={gabiHair} stroke={outline} strokeWidth="2" />
      <rect x="30" y="16" width="14" height="14" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="28" y="30" width="18" height="4" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="22" y="34" width="26" height="26" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="24" y="60" width="24" height="22" fill="#9ab8eb" stroke={outline} strokeWidth="2" />
      <rect x="26" y="82" width="6" height="28" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="40" y="82" width="6" height="22" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="24" y="110" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="38" y="104" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />

      <rect x="16" y="42" width="6" height="24" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="48" y="42" width="8" height="18" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="56" y="46" width="16" height="8" fill={gabiSkin} stroke={outline} strokeWidth="2" />

      <rect x="42" y="12" width="4" height="4" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="46" y="16" width="4" height="4" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="22" y="12" width="6" height="44" fill={gabiHairLight} opacity="0.55" />
    </g>

    <g transform="translate(120 14)">
      <path
        d="M18 4h18v6h8v8h4v10h-2v10h-6V20h-18V10h4z"
        fill={rafaHair}
        stroke={outline}
        strokeWidth="2"
      />
      <rect x="20" y="14" width="16" height="16" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="22" y="20" width="6" height="6" fill="#d5ecff" stroke={outline} strokeWidth="2" />
      <rect x="30" y="20" width="6" height="6" fill="#d5ecff" stroke={outline} strokeWidth="2" />
      <rect x="28" y="22" width="2" height="2" fill={outline} />
      <rect x="20" y="30" width="16" height="4" fill="#8e6548" stroke={outline} strokeWidth="2" />
      <rect x="14" y="34" width="28" height="28" fill="#1f2530" stroke={outline} strokeWidth="2" />
      <rect x="16" y="62" width="26" height="20" fill="#2b3440" stroke={outline} strokeWidth="2" />
      <rect x="18" y="82" width="6" height="28" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="32" y="82" width="6" height="28" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="16" y="110" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />
      <rect x="30" y="110" width="12" height="8" fill={white} stroke={outline} strokeWidth="2" />

      <rect x="8" y="42" width="8" height="22" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="0" y="48" width="10" height="8" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="42" y="40" width="8" height="26" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="8" y="38" width="8" height="26" fill="#8c6948" stroke={outline} strokeWidth="2" />
      <rect x="42" y="38" width="8" height="26" fill="#8c6948" stroke={outline} strokeWidth="2" />
      <rect x="30" y="8" width="6" height="10" fill={rafaHairLight} opacity="0.55" />
    </g>

    <rect x="98" y="86" width="12" height="10" fill={gabiSkin} stroke={outline} strokeWidth="2" />
    <rect x="108" y="82" width="12" height="10" fill={rafaSkin} stroke={outline} strokeWidth="2" />

    <path d="M108 12h8v6h6v8h-8v4h-6v-4h-8v-8h8z" fill="#ff608f" stroke={outline} strokeWidth="2" />
  </svg>
);
