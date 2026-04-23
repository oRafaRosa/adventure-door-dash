type PixelCoupleProps = {
  pose?: "path" | "kiss";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type SpriteDefinition = {
  rows: string[];
  palette: Record<string, string>;
};

const sizeClasses = {
  sm: "w-[136px]",
  md: "w-[194px]",
  lg: "w-[262px]",
};

const palette = {
  o: "#172033",
  h: "#40281e",
  H: "#6d4733",
  s: "#efc8ab",
  S: "#e1b894",
  w: "#f7f3eb",
  g: "#82926e",
  b: "#1f2530",
  d: "#2a3442",
  p: "#856446",
  P: "#a47b54",
  u: "#9ab8eb",
  r: "#ff5f8e",
} satisfies Record<string, string>;

const femaleBack: SpriteDefinition = {
  palette,
  rows: [
    "......oooooo......",
    ".....ohhhhHho.....",
    ".....ohssssho.....",
    ".....ohssssho.....",
    ".....ohhhhHho.....",
    "....ohhhhhhHho....",
    "....ohhhhhhHho....",
    "...ohhhwwwwhhho...",
    "..oohwwwwwwwwhho..",
    "..opswwwwwwwwsso..",
    "..opswwwwwwwwsso..",
    "..opsggggggggsso..",
    "..opsggggggggsso..",
    "...oggggggggggo...",
    "....oggggggggo....",
    ".....os....so.....",
    ".....os....so.....",
    ".....os....so.....",
    ".....os....so.....",
    ".....os....so.....",
    "....oww....wwo....",
    "....oww....wwo....",
  ],
};

const maleBack: SpriteDefinition = {
  palette,
  rows: [
    "......oooooo......",
    ".....ohhhhHho.....",
    "....ohhhhhhhHho...",
    "....ohsssssssso...",
    "....ohhhhhhhhho...",
    "...ooppbbbbppoo...",
    "..oopppbbbbpppoo..",
    "..ooppbbbbbbbbpo..",
    ".oopppbbbbbbbbppo.",
    ".oopppbbbbbbbbppo.",
    ".oopppbbbbbbbbppo.",
    ".oopppddddddddppo.",
    "..opppddddddddpo..",
    "...opddddddddpo...",
    "....oddddddddo....",
    ".....os....so.....",
    ".....os....so.....",
    ".....os....so.....",
    ".....os....so.....",
    ".....os....so.....",
    "....oww....wwo....",
    "....oww....wwo....",
  ],
};

const femaleKiss: SpriteDefinition = {
  palette,
  rows: [
    "......ooooo........",
    ".....ohhhhho.......",
    "....ohsssssho......",
    "....ohhsssHho......",
    "...ohhwwwwwho......",
    "...ohwwwwwwwo......",
    "...ohwwwwwwwo......",
    "..ooswwwwwwwo......",
    "..oosuuuuuuuo......",
    "..oopsuuuuuoo......",
    "...oouuuuuoo.......",
    "....os...so........",
    "....os...so........",
    "....os...so........",
    "...oww...wwo.......",
    "...oww...wwo.......",
  ],
};

const maleKiss: SpriteDefinition = {
  palette,
  rows: [
    "........oooooo......",
    ".......ohhhhHho.....",
    "......ohssssssho....",
    "......ohhsssshho....",
    "......opbbbbppoo....",
    "......opbbbbbbpo....",
    "......opbbbbbbpo....",
    "......osbbbbbbpoo...",
    ".....oosdddddddpo...",
    "....oopddddddddpo...",
    "....oopddddddddpo...",
    ".....os...so........",
    ".....os...so........",
    ".....os...so........",
    "....oww...wwo.......",
    "....oww...wwo.......",
  ],
};

export const PixelCouple = ({ pose = "path", size = "md", className = "" }: PixelCoupleProps) => {
  return (
    <div className={`pixel-couple ${sizeClasses[size]} ${className}`.trim()} aria-label="Rafa e Gabi em pixel art">
      {pose === "kiss" ? <KissPose /> : <PathPose />}
    </div>
  );
};

const PixelSprite = ({
  sprite,
  x,
  y,
  pixelSize = 4,
}: {
  sprite: SpriteDefinition;
  x: number;
  y: number;
  pixelSize?: number;
}) => {
  return (
    <g transform={`translate(${x} ${y})`}>
      {sprite.rows.flatMap((row, rowIndex) =>
        [...row].map((cell, columnIndex) => {
          if (cell === ".") return null;

          return (
            <rect
              key={`${rowIndex}-${columnIndex}-${cell}`}
              x={columnIndex * pixelSize}
              y={rowIndex * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill={sprite.palette[cell]}
            />
          );
        }),
      )}
    </g>
  );
};

const PathPose = () => (
  <svg viewBox="0 0 220 180" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="110" cy="170" rx="54" ry="6" fill="rgba(23,32,51,0.15)" />
    <PixelSprite sprite={femaleBack} x={28} y={24} />
    <PixelSprite sprite={maleBack} x={114} y={22} />
    <rect x="102" y="62" width="12" height="4" fill={palette.s} />
    <rect x="100" y="62" width="2" height="4" fill={palette.o} />
    <rect x="114" y="62" width="2" height="4" fill={palette.o} />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 220 188" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="110" cy="178" rx="56" ry="6" fill="rgba(23,32,51,0.15)" />
    <PixelSprite sprite={femaleKiss} x={26} y={28} />
    <PixelSprite sprite={maleKiss} x={110} y={26} />
    <rect x="103" y="24" width="4" height="4" fill={palette.r} />
    <rect x="111" y="24" width="4" height="4" fill={palette.r} />
    <rect x="99" y="28" width="20" height="8" fill={palette.r} />
    <rect x="103" y="36" width="12" height="8" fill={palette.r} />
  </svg>
);
