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
    <div className={`pixel-avatar relative h-32 w-40 origin-bottom ${sizeClasses[size]}`} aria-label="Avatares pixelados do casal">
      <div className="absolute bottom-0 left-10 h-3 w-24 bg-game-ink/25" />
      <div className="absolute bottom-4 left-7 h-9 w-7 bg-door-blue" />
      <div className="absolute bottom-4 left-16 h-9 w-7 bg-game-ink" />
      <div className="absolute bottom-13 left-5 h-10 w-11 bg-game-cream" />
      <div className="absolute bottom-23 left-4 h-9 w-13 bg-door-trim" />
      <div className="absolute bottom-21 left-8 h-8 w-8 bg-game-cream" />
      <div className="absolute bottom-26 left-7 h-4 w-7 bg-door-trim" />
      <div className="absolute bottom-23 left-14 h-5 w-4 bg-door-trim" />
      <div className="absolute bottom-22 left-14 h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-22 left-24 h-9 w-7 bg-game-ink" />
      <div className="absolute bottom-22 left-31 h-9 w-7 bg-game-ink" />
      <div className="absolute bottom-31 left-22 h-10 w-11 bg-card" />
      <div className="absolute bottom-41 left-23 h-8 w-9 bg-game-cream" />
      <div className="absolute bottom-47 left-21 h-5 w-12 bg-door-trim" />
      <div className="absolute bottom-42 left-22 h-2 w-13 bg-game-ink/80" />
      <div className="absolute bottom-43 left-24 h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-43 left-32 h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-36 left-14 h-3 w-14 bg-game-cream" />
      <div className="absolute bottom-36 left-27 h-3 w-14 bg-game-cream" />
      {pose === "celebrate" && <div className="absolute left-18 top-0 animate-bounce text-2xl">♥</div>}
    </div>
  );
};