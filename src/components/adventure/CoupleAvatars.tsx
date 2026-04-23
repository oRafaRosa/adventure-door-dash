type CoupleAvatarsProps = {
  size?: "sm" | "md" | "lg";
  pose?: "idle" | "celebrate";
};

const sizeClasses = {
  sm: "scale-75",
  md: "scale-90",
  lg: "scale-100",
};

export const CoupleAvatars = ({ size = "md", pose = "idle" }: CoupleAvatarsProps) => {
  return (
    <div className={`pixel-avatar relative h-56 w-40 origin-bottom ${sizeClasses[size]}`} aria-label="Avatares pixelados do casal">
      <div className="absolute bottom-0 left-10 h-3 w-24 bg-game-ink/25" />
      <div className="absolute bottom-4 left-7 h-9 w-7 bg-door-blue" />
      <div className="absolute bottom-4 left-16 h-9 w-7 bg-game-ink" />
      <div className="absolute bottom-[52px] left-5 h-10 w-11 bg-game-cream" />
      <div className="absolute bottom-[92px] left-4 h-9 w-[52px] bg-door-trim" />
      <div className="absolute bottom-[84px] left-8 h-8 w-8 bg-game-cream" />
      <div className="absolute bottom-[104px] left-7 h-4 w-7 bg-door-trim" />
      <div className="absolute bottom-[92px] left-14 h-5 w-4 bg-door-trim" />
      <div className="absolute bottom-[88px] left-14 h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-[88px] left-24 h-9 w-7 bg-game-ink" />
      <div className="absolute bottom-[88px] left-[124px] h-9 w-7 bg-game-ink" />
      <div className="absolute bottom-[124px] left-[88px] h-10 w-11 bg-card" />
      <div className="absolute bottom-[164px] left-[92px] h-8 w-9 bg-game-cream" />
      <div className="absolute bottom-[188px] left-[84px] h-5 w-12 bg-door-trim" />
      <div className="absolute bottom-[168px] left-[88px] h-2 w-[52px] bg-game-ink/80" />
      <div className="absolute bottom-[172px] left-24 h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-[172px] left-32 h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-36 left-14 h-3 w-14 bg-game-cream" />
      <div className="absolute bottom-36 left-[108px] h-3 w-14 bg-game-cream" />
      {pose === "celebrate" && <div className="absolute left-[72px] top-0 animate-bounce text-2xl">♥</div>}
    </div>
  );
};