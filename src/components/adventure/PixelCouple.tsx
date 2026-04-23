type PixelCoupleProps = {
  pose?: "path" | "kiss";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-[132px]",
  md: "w-[188px]",
  lg: "w-[252px]",
};

const outline = "#1b2336";
const gabiSkin = "#efc8ab";
const rafaSkin = "#e3bb98";
const gabiHair = "#412a21";
const rafaHair = "#523121";
const white = "#f6f2ea";

export const PixelCouple = ({ pose = "path", size = "md", className = "" }: PixelCoupleProps) => {
  return (
    <div className={`pixel-couple ${sizeClasses[size]} ${className}`.trim()} aria-label="Rafa e Gabi em pixel art">
      {pose === "kiss" ? <KissPose /> : <PathPose />}
    </div>
  );
};

const PathPose = () => (
  <svg viewBox="0 0 190 170" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="96" cy="160" rx="46" ry="6" fill="rgba(27,35,54,0.14)" />

    <g transform="translate(26 22)">
      <path
        d="M24 6h18v6h6v12h2v34h-4v22h-10V58h-8V24h-8V12h4z"
        fill={gabiHair}
        stroke={outline}
        strokeWidth="2"
      />
      <path d="M26 12h14v10H26z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M18 22h28v6H18z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M16 28h32v28H16z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M18 56h28v16H18z" fill="#778b69" stroke={outline} strokeWidth="2" />
      <path d="M22 72h6v26h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M36 72h6v26h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M20 98h12v8H20z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M34 98h12v8H34z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M10 32h6v28h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M8 58h8v8H8z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M48 32h6v18h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M54 38h14v6H54z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M4 48h10v18H4z" fill="#8e724f" stroke={outline} strokeWidth="2" />
      <path d="M4 42h8v8H4z" fill="#8e724f" stroke={outline} strokeWidth="2" />
      <path d="M18 10h6v20h-6z" fill="#59372a" />
      <path d="M42 14h4v18h-4z" fill="#59372a" />
    </g>

    <g transform="translate(96 20)">
      <path
        d="M28 6h18v6h4v8h2v8h-4v26h4v22h-10V58h-14V28h-4V14h4z"
        fill="#7e5d3f"
        stroke={outline}
        strokeWidth="2"
      />
      <path
        d="M24 4h20v6h6v10h2v14h-4V46h-22V20h-2V10h4z"
        fill={rafaHair}
        stroke={outline}
        strokeWidth="2"
      />
      <path d="M28 12h14v10H28z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M24 22h22v6H24z" fill="#1f2530" stroke={outline} strokeWidth="2" />
      <path d="M20 28h30v30H20z" fill="#1f2530" stroke={outline} strokeWidth="2" />
      <path d="M22 58h26v16H22z" fill="#2b3440" stroke={outline} strokeWidth="2" />
      <path d="M26 74h6v26h-6z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M40 74h6v26h-6z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M24 100h12v8H24z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M38 100h12v8H38z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M14 32h6v18h-6z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M8 38h8v8H8z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M50 34h6v26h-6z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M56 42h10v8H56z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M50 30h10v26H50z" fill="#8a6846" stroke={outline} strokeWidth="2" />
      <path d="M14 30h8v28h-8z" fill="#8a6846" stroke={outline} strokeWidth="2" />
      <path d="M30 18h6v4h8v2H28v-2h2z" fill="#8c6348" />
    </g>

    <path d="M90 74h10v8H90z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
    <path d="M98 74h10v8H98z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 200 176" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="100" cy="166" rx="48" ry="6" fill="rgba(27,35,54,0.14)" />

    <g transform="translate(22 18)">
      <path
        d="M30 10h18v6h6v10h2v20h-4v18h-10V48h-8V24h-6V16h2z"
        fill={gabiHair}
        stroke={outline}
        strokeWidth="2"
      />
      <path
        d="M24 22h8v34h-8z"
        fill={gabiHair}
        stroke={outline}
        strokeWidth="2"
      />
      <path d="M32 18h12v14H32z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M28 30h18v4H28z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M24 34h24v24H24z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M26 58h22v20H26z" fill="#98b5ea" stroke={outline} strokeWidth="2" />
      <path d="M28 78h6v24h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M40 78h6v18h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M26 102h11v8H26z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M38 96h11v8H38z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M20 40h6v22h-6z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M48 40h8v18h-8z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M54 44h16v8H54z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
      <path d="M46 18h4v4h4v4h-4v4h-4v-4h-4v-4h4z" fill="#ffffff" stroke={outline} strokeWidth="2" />
      <path d="M34 22h4v2h6v2h-8z" fill="#ff839f" />
    </g>

    <g transform="translate(102 16)">
      <path
        d="M26 6h18v6h6v10h2v10h-4v18h4v20h-10V58h-16V22h-2V12h2z"
        fill="#8b6845"
        stroke={outline}
        strokeWidth="2"
      />
      <path
        d="M24 4h20v6h6v10h2v12h-4v12H24V18h-2V10h2z"
        fill={rafaHair}
        stroke={outline}
        strokeWidth="2"
      />
      <path d="M28 14h14v16H28z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M28 20h6v6h-6z" fill="#d7ecff" stroke={outline} strokeWidth="2" />
      <path d="M36 20h6v6h-6z" fill="#d7ecff" stroke={outline} strokeWidth="2" />
      <path d="M34 22h2v2h-2z" fill={outline} />
      <path d="M28 30h14v4H28z" fill="#8e6549" stroke={outline} strokeWidth="2" />
      <path d="M22 34h24v24H22z" fill="#1f2530" stroke={outline} strokeWidth="2" />
      <path d="M24 58h22v18H24z" fill="#2b3440" stroke={outline} strokeWidth="2" />
      <path d="M26 76h6v24h-6z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M40 76h6v24h-6z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M24 100h11v8H24z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M38 100h11v8H38z" fill={white} stroke={outline} strokeWidth="2" />
      <path d="M16 40h8v20h-8z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M10 46h8v8h-8z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M46 38h8v24h-8z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
      <path d="M16 36h8v26h-8z" fill="#8c6948" stroke={outline} strokeWidth="2" />
      <path d="M48 36h8v26h-8z" fill="#8c6948" stroke={outline} strokeWidth="2" />
    </g>

    <path d="M92 74h12v10H92z" fill={gabiSkin} stroke={outline} strokeWidth="2" />
    <path d="M100 70h12v10h-12z" fill={rafaSkin} stroke={outline} strokeWidth="2" />
    <path d="M95 10h8v6h6v8h-8v4h-6v-4h-8v-8h8z" fill="#ff5f8e" stroke={outline} strokeWidth="2" />
  </svg>
);
