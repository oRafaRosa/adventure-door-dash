type PixelCoupleProps = {
  pose?: "path" | "kiss";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-[120px]",
  md: "w-[172px]",
  lg: "w-[240px]",
};

export const PixelCouple = ({ pose = "path", size = "md", className = "" }: PixelCoupleProps) => {
  return (
    <div className={`pixel-couple ${sizeClasses[size]} ${className}`.trim()} aria-label="Rafa e Gabi em pixel art">
      {pose === "kiss" ? <KissPose /> : <PathPose />}
    </div>
  );
};

const PathPose = () => (
  <svg viewBox="0 0 160 140" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="80" cy="132" rx="40" ry="6" fill="rgba(17,23,39,0.16)" />

    <rect x="44" y="46" width="16" height="36" fill="#f6ddc4" />
    <rect x="44" y="82" width="16" height="18" fill="#8d745a" />
    <rect x="48" y="100" width="8" height="6" fill="#f7f5ef" />
    <rect x="58" y="102" width="8" height="4" fill="#f7f5ef" />
    <rect x="42" y="36" width="28" height="14" fill="#4f3021" />
    <rect x="44" y="50" width="24" height="14" fill="#7c5a43" />
    <rect x="52" y="28" width="18" height="10" fill="#2f1f1a" />
    <rect x="48" y="24" width="26" height="8" fill="#2f1f1a" />
    <rect x="54" y="20" width="20" height="8" fill="#3a2620" />
    <rect x="64" y="30" width="8" height="4" fill="#f6ddc4" />
    <rect x="58" y="34" width="6" height="2" fill="#161c25" />
    <rect x="72" y="34" width="6" height="2" fill="#161c25" />
    <rect x="54" y="48" width="28" height="18" fill="#fbe8d3" />
    <rect x="56" y="62" width="24" height="10" fill="#ffffff" />

    <rect x="102" y="48" width="22" height="40" fill="#2d323a" />
    <rect x="102" y="88" width="22" height="18" fill="#333a46" />
    <rect x="106" y="106" width="8" height="6" fill="#d8d9dc" />
    <rect x="116" y="106" width="8" height="6" fill="#d8d9dc" />
    <rect x="108" y="34" width="28" height="10" fill="#4b3224" />
    <rect x="104" y="28" width="32" height="10" fill="#492f21" />
    <rect x="110" y="24" width="26" height="10" fill="#3d291f" />
    <rect x="110" y="40" width="10" height="6" fill="#f6ddc4" />
    <rect x="126" y="40" width="10" height="6" fill="#f6ddc4" />
    <rect x="108" y="48" width="24" height="18" fill="#111827" />
    <rect x="112" y="66" width="18" height="10" fill="#98b0db" />

    <rect x="72" y="60" width="14" height="18" fill="#f6ddc4" />
    <rect x="82" y="74" width="10" height="10" fill="#ffffff" />
    <rect x="72" y="76" width="22" height="6" fill="#b0c6e8" />

    <rect x="76" y="90" width="16" height="16" fill="#2d323a" />
    <rect x="68" y="90" width="10" height="10" fill="#f6ddc4" />
    <rect x="66" y="102" width="10" height="6" fill="#d8d9dc" />
    <rect x="86" y="102" width="10" height="6" fill="#d8d9dc" />

    <rect x="54" y="84" width="48" height="8" fill="#e5c29a" />
    <rect x="50" y="90" width="60" height="10" fill="#b8e4d2" />
    <rect x="50" y="100" width="20" height="10" fill="#61866a" />
    <rect x="81" y="100" width="20" height="10" fill="#45614b" />

    <rect x="36" y="18" width="20" height="10" fill="#ab8876" />
    <rect x="38" y="6" width="16" height="12" fill="#f6ddc4" />
    <rect x="60" y="8" width="8" height="10" fill="#f6ddc4" />
    <rect x="52" y="16" width="20" height="8" fill="#4b3224" />

    <rect x="102" y="18" width="24" height="10" fill="#1e2735" />
    <rect x="104" y="6" width="18" height="12" fill="#2d323a" />
    <rect x="122" y="14" width="10" height="10" fill="#f6ddc4" />

    <rect x="112" y="24" width="10" height="6" fill="#b0c6e8" />
    <rect x="110" y="30" width="12" height="4" fill="#1e2735" />

    <rect x="64" y="64" width="10" height="4" fill="#d0a884" />
    <rect x="86" y="64" width="10" height="4" fill="#b8d4f1" />

    <rect x="72" y="68" width="34" height="4" fill="#f6ddc4" />
    <rect x="70" y="72" width="38" height="6" fill="#2d323a" />

    <path d="M60 88 L78 88" stroke="#111827" strokeWidth="4" />
    <path d="M62 76 L70 84" stroke="#111827" strokeWidth="4" />
    <path d="M90 76 L98 84" stroke="#111827" strokeWidth="4" />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 160 140" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="80" cy="132" rx="40" ry="6" fill="rgba(17,23,39,0.16)" />

    <rect x="42" y="44" width="18" height="36" fill="#f6ddc4" />
    <rect x="42" y="80" width="18" height="18" fill="#8d745a" />
    <rect x="46" y="98" width="8" height="6" fill="#f7f5ef" />
    <rect x="56" y="100" width="8" height="4" fill="#f7f5ef" />
    <rect x="38" y="32" width="30" height="18" fill="#4f3120" />
    <rect x="42" y="20" width="24" height="14" fill="#39241c" />
    <rect x="44" y="16" width="14" height="10" fill="#2b1d1a" />
    <rect x="50" y="46" width="22" height="20" fill="#ffffff" />
    <rect x="46" y="58" width="16" height="10" fill="#e2b8a5" />

    <rect x="80" y="30" width="24" height="44" fill="#2d323a" />
    <rect x="84" y="74" width="24" height="20" fill="#333a46" />
    <rect x="86" y="96" width="8" height="6" fill="#d8d9dc" />
    <rect x="96" y="96" width="8" height="6" fill="#d8d9dc" />
    <rect x="74" y="20" width="38" height="18" fill="#4d3223" />
    <rect x="78" y="12" width="30" height="14" fill="#3f2921" />
    <rect x="88" y="26" width="12" height="8" fill="#f6ddc4" />
    <rect x="88" y="34" width="8" height="4" fill="#161c25" />
    <rect x="100" y="34" width="8" height="4" fill="#161c25" />
    <rect x="76" y="44" width="24" height="22" fill="#232833" />
    <rect x="80" y="62" width="16" height="12" fill="#98b0db" />

    <rect x="58" y="76" width="16" height="10" fill="#f6ddc4" />
    <rect x="58" y="86" width="24" height="10" fill="#e2b8a5" />
    <rect x="56" y="96" width="30" height="10" fill="#ffffff" />

    <rect x="48" y="104" width="10" height="8" fill="#868d99" />
    <rect x="70" y="104" width="10" height="8" fill="#868d99" />
    <rect x="92" y="104" width="10" height="8" fill="#d8d9dc" />

    <rect x="38" y="36" width="16" height="10" fill="#d3b39b" />
    <rect x="50" y="34" width="10" height="6" fill="#eeb8a4" />
    <rect x="36" y="38" width="8" height="4" fill="#d0a48a" />
    <rect x="74" y="38" width="12" height="10" fill="#f6ddc4" />

    <rect x="52" y="20" width="18" height="10" fill="#ff5d84" />
    <rect x="50" y="12" width="22" height="10" fill="#f2486f" />
    <rect x="54" y="28" width="14" height="6" fill="#ff8db4" />

    <path d="M62 54 L82 54" stroke="#111827" strokeWidth="4" />
    <path d="M75 58 L80 62" stroke="#111827" strokeWidth="4" />
    <path d="M45 54 L52 62" stroke="#111827" strokeWidth="4" />

    <rect x="64" y="16" width="8" height="8" fill="#ffffff" />
    <rect x="68" y="22" width="4" height="4" fill="#ff658d" />
    <rect x="72" y="18" width="4" height="4" fill="#ff658d" />
  </svg>
);
