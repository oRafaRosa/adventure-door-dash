type PixelCoupleProps = {
  pose?: "path" | "kiss";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-[140px]",
  md: "w-[200px]",
  lg: "w-[270px]",
};

const C = {
  outline: "#162033",
  gabiSkin: "#efc7ab",
  rafaSkin: "#e1b792",
  gabiHair: "#3f281e",
  gabiHairLight: "#6a4432",
  rafaHair: "#4d2e20",
  rafaHairLight: "#7a4b33",
  white: "#f7f3eb",
  green: "#81916e",
  black: "#202632",
  dark: "#2b3443",
  backpack: "#8a6948",
  backpackLight: "#ad8257",
  jeans: "#9ab7ea",
  heart: "#ff608f",
};

const P = ({
  x,
  y,
  w = 1,
  h = 1,
  fill,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  fill: string;
}) => <rect x={x * 4} y={y * 4} width={w * 4} height={h * 4} fill={fill} />;

export const PixelCouple = ({ pose = "path", size = "md", className = "" }: PixelCoupleProps) => {
  return (
    <div className={`pixel-couple ${sizeClasses[size]} ${className}`.trim()} aria-label="Rafa e Gabi em pixel art">
      {pose === "kiss" ? <KissPose /> : <PathPose />}
    </div>
  );
};

const FemaleBack = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <P x={4} y={0} w={8} h={2} fill={C.outline} />
    <P x={3} y={2} w={10} h={7} fill={C.outline} />
    <P x={4} y={2} w={2} h={12} fill={C.outline} />
    <P x={10} y={2} w={2} h={12} fill={C.outline} />
    <P x={5} y={2} w={6} h={7} fill={C.gabiHair} />
    <P x={5} y={3} w={1} h={8} fill={C.gabiHairLight} />
    <P x={10} y={3} w={1} h={7} fill={C.gabiHairLight} />
    <P x={6} y={3} w={3} h={4} fill={C.gabiSkin} />

    <P x={2} y={9} w={12} h={10} fill={C.outline} />
    <P x={3} y={10} w={10} h={8} fill={C.white} />
    <P x={1} y={10} w={2} h={8} fill={C.outline} />
    <P x={0} y={11} w={2} h={6} fill={C.backpack} />
    <P x={1} y={12} w={1} h={3} fill={C.backpackLight} />
    <P x={13} y={10} w={2} h={4} fill={C.outline} />
    <P x={14} y={11} w={1} h={2} fill={C.gabiSkin} />
    <P x={15} y={12} w={4} h={2} fill={C.outline} />
    <P x={16} y={12} w={2} h={1} fill={C.gabiSkin} />

    <P x={3} y={19} w={10} h={5} fill={C.outline} />
    <P x={4} y={20} w={8} h={4} fill={C.green} />
    <P x={5} y={24} w={2} h={8} fill={C.outline} />
    <P x={9} y={24} w={2} h={8} fill={C.outline} />
    <P x={6} y={24} w={1} h={7} fill={C.gabiSkin} />
    <P x={9} y={24} w={1} h={7} fill={C.gabiSkin} />
    <P x={4} y={32} w={4} h={3} fill={C.outline} />
    <P x={8} y={32} w={4} h={3} fill={C.outline} />
    <P x={5} y={33} w={2} h={1} fill={C.white} />
    <P x={9} y={33} w={2} h={1} fill={C.white} />
  </g>
);

const MaleBack = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <P x={4} y={0} w={8} h={2} fill={C.outline} />
    <P x={3} y={2} w={10} h={6} fill={C.outline} />
    <P x={4} y={2} w={7} h={5} fill={C.rafaHair} />
    <P x={9} y={2} w={2} h={2} fill={C.rafaHairLight} />
    <P x={6} y={3} w={3} h={3} fill={C.rafaSkin} />

    <P x={2} y={8} w={12} h={12} fill={C.outline} />
    <P x={3} y={9} w={10} h={10} fill={C.black} />
    <P x={0} y={10} w={2} h={9} fill={C.backpack} />
    <P x={1} y={11} w={1} h={5} fill={C.backpackLight} />
    <P x={14} y={10} w={2} h={9} fill={C.backpack} />
    <P x={14} y={11} w={1} h={5} fill={C.backpackLight} />
    <P x={16} y={12} w={3} h={2} fill={C.outline} />
    <P x={16} y={12} w={2} h={1} fill={C.rafaSkin} />
    <P x={-3} y={12} w={3} h={2} fill={C.outline} />
    <P x={-2} y={12} w={2} h={1} fill={C.rafaSkin} />

    <P x={4} y={20} w={8} h={5} fill={C.outline} />
    <P x={5} y={20} w={6} h={4} fill={C.dark} />
    <P x={5} y={25} w={2} h={8} fill={C.outline} />
    <P x={9} y={25} w={2} h={8} fill={C.outline} />
    <P x={6} y={25} w={1} h={7} fill={C.rafaSkin} />
    <P x={9} y={25} w={1} h={7} fill={C.rafaSkin} />
    <P x={4} y={33} w={4} h={3} fill={C.outline} />
    <P x={8} y={33} w={4} h={3} fill={C.outline} />
    <P x={5} y={34} w={2} h={1} fill={C.white} />
    <P x={9} y={34} w={2} h={1} fill={C.white} />
  </g>
);

const FemaleKiss = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <P x={5} y={0} w={8} h={2} fill={C.outline} />
    <P x={4} y={2} w={10} h={8} fill={C.outline} />
    <P x={3} y={4} w={2} h={10} fill={C.outline} />
    <P x={5} y={2} w={7} h={8} fill={C.gabiHair} />
    <P x={5} y={3} w={1} h={8} fill={C.gabiHairLight} />
    <P x={7} y={3} w={3} h={4} fill={C.gabiSkin} />
    <P x={10} y={2} w={1} h={1} fill={C.white} />
    <P x={11} y={3} w={1} h={1} fill={C.white} />

    <P x={4} y={10} w={11} h={10} fill={C.outline} />
    <P x={5} y={11} w={9} h={8} fill={C.white} />
    <P x={3} y={12} w={2} h={7} fill={C.outline} />
    <P x={15} y={12} w={2} h={4} fill={C.outline} />
    <P x={16} y={13} w={4} h={2} fill={C.gabiSkin} />

    <P x={5} y={20} w={8} h={6} fill={C.outline} />
    <P x={6} y={20} w={6} h={5} fill={C.jeans} />
    <P x={6} y={26} w={2} h={8} fill={C.outline} />
    <P x={10} y={26} w={2} h={6} fill={C.outline} />
    <P x={7} y={26} w={1} h={7} fill={C.gabiSkin} />
    <P x={10} y={26} w={1} h={5} fill={C.gabiSkin} />
    <P x={5} y={34} w={4} h={3} fill={C.outline} />
    <P x={9} y={32} w={4} h={3} fill={C.outline} />
    <P x={6} y={35} w={2} h={1} fill={C.white} />
    <P x={10} y={33} w={2} h={1} fill={C.white} />
  </g>
);

const MaleKiss = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <P x={5} y={0} w={8} h={2} fill={C.outline} />
    <P x={4} y={2} w={10} h={8} fill={C.outline} />
    <P x={5} y={2} w={7} h={7} fill={C.rafaHair} />
    <P x={9} y={2} w={2} h={2} fill={C.rafaHairLight} />
    <P x={7} y={4} w={3} h={4} fill={C.rafaSkin} />
    <P x={7} y={5} w={2} h={2} fill="#d5ecff" />
    <P x={9} y={5} w={2} h={2} fill="#d5ecff" />

    <P x={4} y={10} w={11} h={10} fill={C.outline} />
    <P x={5} y={11} w={9} h={8} fill={C.black} />
    <P x={3} y={11} w={2} h={8} fill={C.backpack} />
    <P x={15} y={11} w={2} h={8} fill={C.backpack} />
    <P x={2} y={13} w={3} h={2} fill={C.gabiSkin} />
    <P x={15} y={12} w={2} h={6} fill={C.gabiSkin} />

    <P x={5} y={20} w={8} h={6} fill={C.outline} />
    <P x={6} y={20} w={6} h={5} fill={C.dark} />
    <P x={6} y={26} w={2} h={8} fill={C.outline} />
    <P x={10} y={26} w={2} h={8} fill={C.outline} />
    <P x={7} y={26} w={1} h={7} fill={C.rafaSkin} />
    <P x={10} y={26} w={1} h={7} fill={C.rafaSkin} />
    <P x={5} y={34} w={4} h={3} fill={C.outline} />
    <P x={9} y={34} w={4} h={3} fill={C.outline} />
    <P x={6} y={35} w={2} h={1} fill={C.white} />
    <P x={10} y={35} w={2} h={1} fill={C.white} />
  </g>
);

const PathPose = () => (
  <svg viewBox="0 0 220 180" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="110" cy="170" rx="56" ry="6" fill="rgba(23,32,51,0.15)" />
    <FemaleBack x={26} y={16} />
    <MaleBack x={126} y={14} />
    <P x={102} y={74} w={3} h={2} fill={C.outline} />
    <P x={103} y={74} w={1} h={1} fill={C.gabiSkin} />
    <P x={105} y={74} w={3} h={2} fill={C.outline} />
    <P x={105} y={74} w={1} h={1} fill={C.rafaSkin} />
  </svg>
);

const KissPose = () => (
  <svg viewBox="0 0 220 188" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <ellipse cx="110" cy="178" rx="58" ry="6" fill="rgba(23,32,51,0.15)" />
    <FemaleKiss x={24} y={24} />
    <MaleKiss x={124} y={22} />
    <P x={107} y={14} w={2} h={1} fill={C.heart} />
    <P x={110} y={14} w={2} h={1} fill={C.heart} />
    <P x={106} y={15} w={7} h={2} fill={C.heart} />
    <P x={108} y={17} w={3} h={2} fill={C.heart} />
  </svg>
);
