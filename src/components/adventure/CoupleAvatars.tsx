type CoupleAvatarsProps = {
  size?: "sm" | "md" | "lg";
  pose?: "path" | "embrace";
};

const sizeClasses = {
  sm: "w-[126px]",
  md: "w-[168px]",
  lg: "w-[208px]",
};

const PixelRect = ({
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
}) => <rect x={x} y={y} width={w} height={h} fill={fill} />;

const PathPose = () => (
  <svg viewBox="0 0 64 78" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <PixelRect x={14} y={73} w={36} h={3} fill="rgba(29,35,58,0.18)" />

    <PixelRect x={16} y={50} w={7} h={17} fill="#f4efe4" />
    <PixelRect x={16} y={67} w={3} h={7} fill="#cbb39a" />
    <PixelRect x={20} y={67} w={3} h={7} fill="#cbb39a" />
    <PixelRect x={15} y={74} w={4} h={2} fill="#f6f3ea" />
    <PixelRect x={20} y={74} w={4} h={2} fill="#f6f3ea" />
    <PixelRect x={17} y={52} w={5} h={11} fill="#8e7865" />
    <PixelRect x={15} y={49} w={9} h={3} fill="#f4efe4" />

    <PixelRect x={14} y={32} w={10} h={18} fill="#41261f" />
    <PixelRect x={13} y={29} w={12} h={5} fill="#41261f" />
    <PixelRect x={14} y={27} w={10} h={3} fill="#e8c6ab" />
    <PixelRect x={16} y={24} w={7} h={4} fill="#41261f" />
    <PixelRect x={13} y={33} w={2} h={16} fill="#2d1a15" />
    <PixelRect x={23} y={33} w={2} h={16} fill="#2d1a15" />
    <PixelRect x={19} y={30} w={4} h={2} fill="#f6ede0" />

    <PixelRect x={31} y={48} w={8} h={16} fill="#f0eadc" />
    <PixelRect x={31} y={64} w={3} h={10} fill="#23252f" />
    <PixelRect x={36} y={64} w={3} h={10} fill="#23252f" />
    <PixelRect x={30} y={74} w={4} h={2} fill="#f7f5ef" />
    <PixelRect x={36} y={74} w={4} h={2} fill="#f7f5ef" />
    <PixelRect x={31} y={50} w={8} h={10} fill="#161923" />
    <PixelRect x={30} y={47} w={10} h={3} fill="#f0eadc" />

    <PixelRect x={30} y={31} w={10} h={16} fill="#5f3928" />
    <PixelRect x={29} y={28} w={12} h={4} fill="#5f3928" />
    <PixelRect x={30} y={26} w={10} h={3} fill="#e5bd9a" />
    <PixelRect x={31} y={24} w={8} h={2} fill="#3b2219" />
    <PixelRect x={31} y={32} w={3} h={3} fill="#1b2335" />
    <PixelRect x={36} y={32} w={3} h={3} fill="#1b2335" />
    <PixelRect x={34} y={32} w={2} h={1} fill="#d4e9ff" />
    <PixelRect x={33} y={35} w={4} h={1} fill="#1b2335" />

    <PixelRect x={24} y={51} w={2} h={10} fill="#f1d4ba" />
    <PixelRect x={26} y={53} w={2} h={6} fill="#f1d4ba" />
    <PixelRect x={27} y={53} w={2} h={7} fill="#f1d4ba" />
    <PixelRect x={28} y={51} w={2} h={9} fill="#f1d4ba" />

    <PixelRect x={22} y={57} w={2} h={2} fill="#d65b74" />
    <PixelRect x={39} y={54} w={4} h={2} fill="#f1d4ba" />
  </svg>
);

const EmbracePose = () => (
  <svg viewBox="0 0 76 78" className="block h-auto w-full" shapeRendering="crispEdges" aria-hidden="true">
    <PixelRect x={17} y={73} w={42} h={3} fill="rgba(29,35,58,0.18)" />

    <PixelRect x={25} y={17} w={10} h={4} fill="#4a281f" />
    <PixelRect x={23} y={20} w={14} h={10} fill="#4a281f" />
    <PixelRect x={25} y={22} w={10} h={9} fill="#efc6ab" />
    <PixelRect x={26} y={24} w={2} h={2} fill="#1d2335" />
    <PixelRect x={32} y={24} w={2} h={2} fill="#1d2335" />
    <PixelRect x={28} y={28} w={4} h={1} fill="#c97d88" />
    <PixelRect x={24} y={31} w={12} h={3} fill="#ffffff" />
    <PixelRect x={23} y={34} w={14} h={12} fill="#ffffff" />
    <PixelRect x={24} y={46} w={7} h={12} fill="#7a6c58" />
    <PixelRect x={31} y={46} w={6} h={12} fill="#7a6c58" />
    <PixelRect x={24} y={58} w={3} h={14} fill="#d2b89f" />
    <PixelRect x={34} y={58} w={3} h={14} fill="#d2b89f" />
    <PixelRect x={23} y={72} w={5} h={2} fill="#f8f5ef" />
    <PixelRect x={33} y={72} w={5} h={2} fill="#f8f5ef" />

    <PixelRect x={40} y={15} w={12} h={4} fill="#623b29" />
    <PixelRect x={39} y={19} w={14} h={12} fill="#623b29" />
    <PixelRect x={41} y={22} w={10} h={8} fill="#efc6ab" />
    <PixelRect x={42} y={23} w={3} h={3} fill="#1d2335" />
    <PixelRect x={47} y={23} w={3} h={3} fill="#1d2335" />
    <PixelRect x={45} y={23} w={2} h={1} fill="#d4e9ff" />
    <PixelRect x={44} y={26} w={5} h={1} fill="#1d2335" />
    <PixelRect x={39} y={31} w={14} h={3} fill="#efe8da" />
    <PixelRect x={38} y={34} w={16} h={13} fill="#161923" />
    <PixelRect x={39} y={47} w={7} h={12} fill="#23252f" />
    <PixelRect x={47} y={47} w={6} h={12} fill="#23252f" />
    <PixelRect x={40} y={59} w={3} h={13} fill="#e4c2a5" />
    <PixelRect x={49} y={59} w={3} h={13} fill="#e4c2a5" />
    <PixelRect x={39} y={72} w={5} h={2} fill="#f7f5ef" />
    <PixelRect x={48} y={72} w={5} h={2} fill="#f7f5ef" />

    <PixelRect x={33} y={38} w={9} h={7} fill="#efc6ab" />
    <PixelRect x={29} y={40} w={6} h={6} fill="#efc6ab" />
    <PixelRect x={37} y={42} w={10} h={6} fill="#efc6ab" />

    <PixelRect x={34} y={11} w={8} h={6} fill="#ff5d86" />
    <PixelRect x={32} y={13} w={12} h={6} fill="#ff5d86" />
    <PixelRect x={35} y={18} w={6} h={4} fill="#ff5d86" />
  </svg>
);

export const CoupleAvatars = ({ size = "md", pose = "path" }: CoupleAvatarsProps) => {
  return (
    <div
      className={`pixel-avatar relative ${sizeClasses[size]} origin-bottom ${pose === "embrace" ? "animate-bob" : ""}`}
      aria-label="Avatares pixelados do casal"
    >
      {pose === "embrace" ? <EmbracePose /> : <PathPose />}
    </div>
  );
};
