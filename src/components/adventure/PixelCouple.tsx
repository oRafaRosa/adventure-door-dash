type PixelCoupleProps = {
  pose?: "path" | "kiss";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-[128px]",
  md: "w-[184px]",
  lg: "w-[244px]",
};

const outline = "#1b2336";
const gabiSkin = "#efc7ab";
const rafaSkin = "#e3ba97";
const gabiHair = "#3b251d";
const rafaHair = "#4a2b1d";

export const PixelCouple = ({ pose = "path", size = "md", className = "" }: PixelCoupleProps) => {
  return (
    <div className={`pixel-couple ${sizeClasses[size]} ${className}`.trim()} aria-label="Rafa e Gabi em pixel art">
      {pose === "kiss" ? <KissPose /> : <PathPose />}
    </div>
  );
};

const PathPose = () => (
  <svg viewBox="0 0 180 156" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="90" cy="148" rx="42" ry="7" fill="rgba(27,35,54,0.16)" />

    <g transform="translate(34 20)">
      <path d="M12 20h18v10h6v34h-8v14h-6V64h-6V34h-4z" fill={gabiHair} stroke={outline} strokeWidth="2" />
      <rect x="16" y="18" width="12" height="14" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="14" y="32" width="16" height="4" fill="#f5f0e7" stroke={outline} strokeWidth="2" />
      <rect x="12" y="36" width="20" height="22" fill="#f5f0e7" stroke={outline} strokeWidth="2" />
      <rect x="12" y="58" width="20" height="14" fill="#7f8f6f" stroke={outline} strokeWidth="2" />
      <rect x="16" y="72" width="5" height="22" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="24" y="72" width="5" height="22" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="14" y="94" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <rect x="22" y="94" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <rect x="8" y="42" width="4" height="22" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="30" y="44" width="5" height="16" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="35" y="48" width="12" height="4" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="8" y="58" width="5" height="6" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M6 52h8v12H6z" fill="#8b6f4d" stroke={outline} strokeWidth="2" />
      <path d="M5 48h10v5H5z" fill="#8b6f4d" stroke={outline} strokeWidth="2" />
    </g>

    <g transform="translate(88 16)">
      <path d="M14 18h18v8h4v8h-2v10h-6V34h-14z" fill={rafaHair} stroke={outline} strokeWidth="2" />
      <rect x="16" y="18" width="12" height="14" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="15" y="30" width="14" height="3" fill="#c89d7a" />
      <rect x="14" y="32" width="16" height="4" fill="#1f2430" stroke={outline} strokeWidth="2" />
      <rect x="12" y="36" width="20" height="24" fill="#1f2430" stroke={outline} strokeWidth="2" />
      <rect x="12" y="60" width="20" height="14" fill="#2a3140" stroke={outline} strokeWidth="2" />
      <rect x="16" y="74" width="5" height="22" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="24" y="74" width="5" height="22" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="14" y="96" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <rect x="22" y="96" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <rect x="8" y="40" width="4" height="22" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="30" y="44" width="5" height="16" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="0" y="40" width="8" height="28" fill="#775639" stroke={outline} strokeWidth="2" />
      <rect x="32" y="40" width="8" height="28" fill="#775639" stroke={outline} strokeWidth="2" />
      <rect x="35" y="48" width="12" height="4" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="6" y="48" width="4" height="4" fill="#8d6b49" />
      <rect x="34" y="48" width="4" height="4" fill="#8d6b49" />
    </g>

    <rect x="82" y="70" width="16" height="4" rx="1" fill="#eec3a1" stroke={outline} strokeWidth="2" />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 192 170" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="96" cy="160" rx="46" ry="7" fill="rgba(27,35,54,0.16)" />

    <g transform="translate(28 18)">
      <path
        d="M26 18h18v8h4v8h2v18h-4v18h-8V54h-10V34h-2V26h-2z"
        fill={gabiHair}
        stroke={outline}
        strokeWidth="2"
      />
      <rect x="28" y="20" width="14" height="16" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="26" y="36" width="16" height="4" fill="#ffffff" stroke={outline} strokeWidth="2" />
      <rect x="22" y="40" width="22" height="22" fill="#ffffff" stroke={outline} strokeWidth="2" />
      <rect x="24" y="62" width="10" height="18" fill="#9ab7ea" stroke={outline} strokeWidth="2" />
      <rect x="34" y="62" width="10" height="18" fill="#8eace3" stroke={outline} strokeWidth="2" />
      <rect x="24" y="80" width="5" height="26" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="36" y="80" width="5" height="18" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <rect x="22" y="106" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <rect x="34" y="98" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <path d="M18 50h6v24h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M42 48h10v18H42z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M49 50h16v6H49z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M30 28h4v2h6v2h-8z" fill="#ff8ca5" />
      <rect x="36" y="16" width="4" height="4" fill="#ffffff" stroke={outline} strokeWidth="2" />
      <rect x="40" y="20" width="4" height="4" fill="#ffffff" stroke={outline} strokeWidth="2" />
    </g>

    <g transform="translate(92 16)">
      <path
        d="M26 14h18v6h4v8h4v8h-2v16h-6V46h-18V28h-2v-8h2z"
        fill={rafaHair}
        stroke={outline}
        strokeWidth="2"
      />
      <rect x="28" y="18" width="16" height="18" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="28" y="30" width="14" height="3" fill="#8f6549" />
      <rect x="30" y="24" width="6" height="5" fill="#d5ecff" stroke={outline} strokeWidth="2" />
      <rect x="38" y="24" width="6" height="5" fill="#d5ecff" stroke={outline} strokeWidth="2" />
      <rect x="36" y="25" width="2" height="1" fill={outline} />
      <rect x="26" y="36" width="18" height="4" fill="#1a1f2a" stroke={outline} strokeWidth="2" />
      <rect x="22" y="40" width="24" height="24" fill="#1f2430" stroke={outline} strokeWidth="2" />
      <rect x="24" y="64" width="10" height="18" fill="#2a3140" stroke={outline} strokeWidth="2" />
      <rect x="36" y="64" width="10" height="18" fill="#2a3140" stroke={outline} strokeWidth="2" />
      <rect x="24" y="82" width="5" height="24" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="38" y="82" width="5" height="24" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <rect x="22" y="106" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <rect x="36" y="106" width="9" height="6" fill="#f8f7f1" stroke={outline} strokeWidth="2" />
      <path d="M16 48h8v22h-8z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M12 52h10v6H12z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M46 46h10v24H46z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M18 42h8v28h-8z" fill="#7a583c" stroke={outline} strokeWidth="2" />
      <path d="M48 42h8v28h-8z" fill="#7a583c" stroke={outline} strokeWidth="2" />
      <path d="M28 38h14v4H28z" fill="#8d6348" />
    </g>

    <path d="M80 62h10v8H80z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
    <path d="M88 58h10v8H88z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
    <path d="M85 10h8v6h6v8h-8v4h-6v-4h-8v-8h8z" fill="#ff5f8e" stroke={outline} strokeWidth="2" />
  </svg>
);
