type PixelCoupleProps = {
  pose?: "path" | "kiss";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-[120px]",
  md: "w-[172px]",
  lg: "w-[220px]",
};

export const PixelCouple = ({ pose = "path", size = "md", className = "" }: PixelCoupleProps) => {
  return (
    <div className={`pixel-couple ${sizeClasses[size]} ${className}`.trim()} aria-label="Rafa e Gabi em pixel art">
      {pose === "kiss" ? <KissPose /> : <PathPose />}
    </div>
  );
};

const PathPose = () => (
  <svg viewBox="0 0 104 124" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="52" cy="118" rx="28" ry="5" fill="rgba(17,23,39,0.18)" />

    <rect x="29" y="62" width="12" height="26" fill="#f2ebe2" />
    <rect x="29" y="88" width="5" height="18" fill="#8f7564" />
    <rect x="36" y="88" width="5" height="18" fill="#8f7564" />
    <rect x="27" y="106" width="8" height="4" fill="#f7f5ee" />
    <rect x="35" y="106" width="8" height="4" fill="#f7f5ee" />
    <rect x="27" y="43" width="16" height="22" fill="#77624e" />
    <rect x="25" y="37" width="20" height="8" fill="#4b2c23" />
    <rect x="26" y="34" width="18" height="4" fill="#e9c4a6" />
    <rect x="28" y="30" width="15" height="5" fill="#3a221b" />
    <rect x="24" y="45" width="4" height="18" fill="#2a1915" />
    <rect x="42" y="45" width="4" height="18" fill="#2a1915" />
    <rect x="35" y="37" width="5" height="3" fill="#f2ebe2" />

    <rect x="57" y="59" width="14" height="28" fill="#232833" />
    <rect x="57" y="87" width="5" height="20" fill="#2a2f3b" />
    <rect x="65" y="87" width="5" height="20" fill="#2a2f3b" />
    <rect x="55" y="107" width="9" height="4" fill="#f7f5ef" />
    <rect x="64" y="107" width="9" height="4" fill="#f7f5ef" />
    <rect x="55" y="44" width="18" height="18" fill="#1a1d26" />
    <rect x="54" y="37" width="20" height="8" fill="#6c4431" />
    <rect x="56" y="34" width="16" height="4" fill="#e8c19d" />
    <rect x="57" y="30" width="14" height="5" fill="#3f271d" />
    <rect x="58" y="44" width="4" height="4" fill="#172033" />
    <rect x="66" y="44" width="4" height="4" fill="#172033" />
    <rect x="61" y="44" width="5" height="1" fill="#cae2ff" />
    <rect x="60" y="48" width="8" height="1" fill="#172033" />
    <rect x="51" y="63" width="5" height="16" fill="#eac4a6" />
    <rect x="48" y="68" width="5" height="8" fill="#eac4a6" />
    <rect x="71" y="63" width="6" height="14" fill="#e8bf9b" />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 120 128" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="60" cy="121" rx="30" ry="5" fill="rgba(17,23,39,0.18)" />

    <rect x="34" y="32" width="18" height="8" fill="#4b2c23" />
    <rect x="31" y="39" width="24" height="18" fill="#4b2c23" />
    <rect x="34" y="42" width="17" height="14" fill="#efc8ab" />
    <rect x="36" y="44" width="3" height="3" fill="#1b2437" />
    <rect x="46" y="44" width="3" height="3" fill="#1b2437" />
    <rect x="40" y="50" width="7" height="2" fill="#d87b88" />
    <rect x="32" y="56" width="22" height="6" fill="#ffffff" />
    <rect x="31" y="61" width="24" height="21" fill="#ffffff" />
    <rect x="32" y="82" width="10" height="20" fill="#98b5ea" />
    <rect x="42" y="82" width="10" height="20" fill="#8ea9e2" />
    <rect x="33" y="102" width="5" height="16" fill="#e1b89b" />
    <rect x="47" y="102" width="5" height="16" fill="#e1b89b" />
    <rect x="31" y="118" width="8" height="4" fill="#f7f5ef" />
    <rect x="45" y="118" width="8" height="4" fill="#f7f5ef" />

    <rect x="62" y="28" width="22" height="8" fill="#6b4331" />
    <rect x="60" y="36" width="26" height="20" fill="#6b4331" />
    <rect x="63" y="40" width="18" height="14" fill="#efc8ab" />
    <rect x="64" y="42" width="4" height="4" fill="#192133" />
    <rect x="76" y="42" width="4" height="4" fill="#192133" />
    <rect x="69" y="42" width="8" height="1" fill="#cae3ff" />
    <rect x="68" y="46" width="10" height="1" fill="#192133" />
    <rect x="61" y="56" width="24" height="6" fill="#232833" />
    <rect x="60" y="61" width="26" height="24" fill="#232833" />
    <rect x="62" y="85" width="10" height="20" fill="#2a2f3b" />
    <rect x="74" y="85" width="10" height="20" fill="#2a2f3b" />
    <rect x="63" y="105" width="5" height="14" fill="#e1b89b" />
    <rect x="78" y="105" width="5" height="14" fill="#e1b89b" />
    <rect x="61" y="119" width="8" height="4" fill="#f7f5ef" />
    <rect x="76" y="119" width="8" height="4" fill="#f7f5ef" />

    <rect x="51" y="68" width="14" height="10" fill="#efc8ab" />
    <rect x="46" y="72" width="9" height="9" fill="#efc8ab" />
    <rect x="61" y="73" width="13" height="9" fill="#e7bc97" />

    <rect x="52" y="20" width="10" height="7" fill="#ff658d" />
    <rect x="49" y="23" width="16" height="7" fill="#ff658d" />
    <rect x="54" y="29" width="6" height="5" fill="#ff658d" />
  </svg>
);
