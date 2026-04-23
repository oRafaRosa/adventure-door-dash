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
  <svg viewBox="0 0 200 200" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    {/* Shadow */}
    <ellipse cx="100" cy="185" rx="50" ry="8" fill="rgba(0,0,0,0.15)" />

    {/* ===== GABI - MULHER (ESQUERDA) ===== */}
    
    {/* Corpo - blusa azul */}
    <rect x="48" y="100" width="30" height="30" fill="#6bb6d6" />
    
    {/* Pernas */}
    <rect x="54" y="130" width="8" height="32" fill="#d4a574" />
    <rect x="68" y="130" width="8" height="32" fill="#d4a574" />
    
    {/* Pés - sapatinhos brancos */}
    <rect x="52" y="162" width="12" height="8" fill="#f5f5f5" />
    <rect x="66" y="162" width="12" height="8" fill="#f5f5f5" />
    
    {/* Braço esquerdo (caído) */}
    <rect x="38" y="110" width="10" height="28" fill="#d4a574" />
    {/* Mão esquerda */}
    <rect x="36" y="138" width="8" height="8" fill="#d4a574" />
    
    {/* Braço direito estendido (mão dada) */}
    <rect x="78" y="108" width="12" height="26" fill="#d4a574" />
    {/* Mão direita */}
    <rect x="90" y="110" width="8" height="8" fill="#d4a574" />
    
    {/* Pescoço */}
    <rect x="58" y="88" width="10" height="12" fill="#d4a574" />
    
    {/* Cabelo preto comprido */}
    <rect x="50" y="50" width="26" height="14" fill="#1a1a1a" />
    <rect x="48" y="64" width="4" height="28" fill="#1a1a1a" />
    <rect x="74" y="64" width="4" height="28" fill="#1a1a1a" />
    
    {/* Cabeça */}
    <rect x="52" y="60" width="22" height="28" fill="#d4a574" />
    
    {/* Rosto */}
    <rect x="54" y="64" width="18" height="18" fill="#e8c4a8" />
    
    {/* Olhos */}
    <rect x="60" y="70" width="2" height="3" fill="#000" />
    <rect x="70" y="70" width="2" height="3" fill="#000" />
    
    {/* Boca sorriso */}
    <rect x="63" y="77" width="8" height="2" fill="#ff6b9d" />
    
    {/* ===== RAFA - HOMEM (DIREITA) ===== */}
    
    {/* Corpo - camiseta preta */}
    <rect x="122" y="100" width="30" height="30" fill="#1a1a1a" />
    
    {/* Pernas - calça escura */}
    <rect x="124" y="130" width="8" height="32" fill="#4a4a4a" />
    <rect x="138" y="130" width="8" height="32" fill="#4a4a4a" />
    
    {/* Pés - sapatinhos brancos */}
    <rect x="122" y="162" width="12" height="8" fill="#f5f5f5" />
    <rect x="136" y="162" width="12" height="8" fill="#f5f5f5" />
    
    {/* Braço direito (caído) */}
    <rect x="152" y="110" width="10" height="28" fill="#d4a574" />
    {/* Mão direita */}
    <rect x="162" y="138" width="8" height="8" fill="#d4a574" />
    
    {/* Braço esquerdo estendido (mão dada) */}
    <rect x="110" y="108" width="12" height="26" fill="#d4a574" />
    {/* Mão esquerda */}
    <rect x="102" y="110" width="8" height="8" fill="#d4a574" />
    
    {/* Pescoço */}
    <rect x="132" y="88" width="10" height="12" fill="#d4a574" />
    
    {/* Cabelo preto curtíssimo */}
    <rect x="124" y="50" width="26" height="10" fill="#2a2a2a" />
    <rect x="124" y="60" width="26" height="4" fill="#3d3d3d" />
    
    {/* Cabeça */}
    <rect x="126" y="60" width="22" height="28" fill="#d4a574" />
    
    {/* Rosto */}
    <rect x="128" y="64" width="18" height="18" fill="#e8c4a8" />
    
    {/* Óculos */}
    <rect x="132" y="68" width="5" height="5" fill="#f4d666" />
    <rect x="143" y="68" width="5" height="5" fill="#f4d666" />
    <rect x="137" y="70" width="6" height="1" fill="#2a2a2a" />
    
    {/* Olhos dentro dos óculos */}
    <rect x="134" y="70" width="2" height="2" fill="#000" />
    <rect x="145" y="70" width="2" height="2" fill="#000" />
    
    {/* Boca sorriso */}
    <rect x="135" y="77" width="8" height="2" fill="#ff6b9d" />
    
    {/* Coração flutuante entre eles */}
    <rect x="96" y="72" width="6" height="6" fill="#ff6b9d" />
    <rect x="92" y="68" width="4" height="4" fill="#ff6b9d" />
    <rect x="102" y="68" width="4" height="4" fill="#ff6b9d" />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 200 200" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    {/* Shadow */}
    <ellipse cx="100" cy="185" rx="50" ry="8" fill="rgba(0,0,0,0.15)" />

    {/* ===== GABI - MULHER (ESQUERDA, INCLINADA) ===== */}
    
    {/* Corpo - blusa azul */}
    <rect x="40" y="110" width="30" height="32" fill="#6bb6d6" />
    
    {/* Pernas */}
    <rect x="46" y="142" width="8" height="28" fill="#d4a574" />
    <rect x="60" y="142" width="8" height="28" fill="#d4a574" />
    
    {/* Pés */}
    <rect x="44" y="170" width="12" height="8" fill="#f5f5f5" />
    <rect x="58" y="170" width="12" height="8" fill="#f5f5f5" />
    
    {/* Braços abraçando */}
    <rect x="30" y="120" width="10" height="32" fill="#d4a574" />
    <rect x="70" y="115" width="12" height="28" fill="#d4a574" />
    
    {/* Pescoço */}
    <rect x="50" y="98" width="10" height="12" fill="#d4a574" />
    
    {/* Cabelo preto comprido */}
    <rect x="42" y="55" width="26" height="14" fill="#1a1a1a" />
    <rect x="40" y="69" width="4" height="32" fill="#1a1a1a" />
    <rect x="66" y="69" width="4" height="32" fill="#1a1a1a" />
    
    {/* Cabeça */}
    <rect x="44" y="65" width="22" height="32" fill="#d4a574" />
    
    {/* Rosto */}
    <rect x="46" y="70" width="18" height="20" fill="#e8c4a8" />
    
    {/* Olhos fechados (felicidade) */}
    <rect x="52" y="76" width="3" height="2" fill="#000" />
    <rect x="64" y="76" width="3" height="2" fill="#000" />
    
    {/* Boca em beijo */}
    <circle cx="60" cy="84" r="3" fill="#ff6b9d" />
    
    {/* ===== RAFA - HOMEM (DIREITA, INCLINADO) ===== */}
    
    {/* Corpo - camiseta preta */}
    <rect x="130" y="110" width="30" height="32" fill="#1a1a1a" />
    
    {/* Pernas */}
    <rect x="136" y="142" width="8" height="28" fill="#4a4a4a" />
    <rect x="150" y="142" width="8" height="28" fill="#4a4a4a" />
    
    {/* Pés */}
    <rect x="134" y="170" width="12" height="8" fill="#f5f5f5" />
    <rect x="148" y="170" width="12" height="8" fill="#f5f5f5" />
    
    {/* Braços abraçando */}
    <rect x="160" y="120" width="10" height="32" fill="#d4a574" />
    <rect x="118" y="115" width="12" height="28" fill="#d4a574" />
    
    {/* Pescoço */}
    <rect x="140" y="98" width="10" height="12" fill="#d4a574" />
    
    {/* Cabelo preto curtíssimo */}
    <rect x="132" y="55" width="26" height="10" fill="#2a2a2a" />
    <rect x="132" y="65" width="26" height="4" fill="#3d3d3d" />
    
    {/* Cabeça */}
    <rect x="134" y="65" width="22" height="32" fill="#d4a574" />
    
    {/* Rosto */}
    <rect x="136" y="70" width="18" height="20" fill="#e8c4a8" />
    
    {/* Óculos */}
    <rect x="140" y="73" width="5" height="5" fill="#f4d666" />
    <rect x="151" y="73" width="5" height="5" fill="#f4d666" />
    <rect x="145" y="75" width="6" height="1" fill="#2a2a2a" />
    
    {/* Olhos dentro dos óculos (fechados) */}
    <rect x="142" y="75" width="2" height="2" fill="#000" />
    <rect x="153" y="75" width="2" height="2" fill="#000" />
    
    {/* Boca em beijo */}
    <circle cx="145" cy="84" r="3" fill="#ff6b9d" />
    
    {/* Corações ao redor */}
    <rect x="70" y="50" width="6" height="6" fill="#ff6b9d" />
    <rect x="66" y="46" width="4" height="4" fill="#ff6b9d" />
    <rect x="76" y="46" width="4" height="4" fill="#ff6b9d" />
    
    <rect x="126" y="50" width="6" height="6" fill="#ff6b9d" />
    <rect x="122" y="46" width="4" height="4" fill="#ff6b9d" />
    <rect x="132" y="46" width="4" height="4" fill="#ff6b9d" />
  </svg>
);
