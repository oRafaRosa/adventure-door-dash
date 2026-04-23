type CoupleAvatarsProps = {
  size?: "sm" | "md" | "lg";
  pose?: "idle" | "celebrate";
};

const sizeClasses = {
  sm: "scale-[0.72]",
  md: "scale-[0.9]",
  lg: "scale-100",
};

export const CoupleAvatars = ({ size = "md", pose = "idle" }: CoupleAvatarsProps) => {
  return (
    <div
      className={`pixel-avatar relative h-56 w-40 origin-bottom ${sizeClasses[size]} ${pose === "celebrate" ? "animate-bob" : ""}`}
      aria-label="Avatares pixelados do casal"
    >
      <div className="absolute bottom-1 left-7 h-3 w-28 bg-game-ink/25" />

      <div className="absolute bottom-4 left-7 h-10 w-8 bg-[#8e5d3d]" />
      <div className="absolute bottom-4 left-[3.8rem] h-10 w-8 bg-[#5a3a2d]" />
      <div className="absolute bottom-14 left-6 h-11 w-11 bg-[#efe3c0]" />
      <div className="absolute bottom-[6.1rem] left-4 h-9 w-[3.6rem] bg-[#6d4a3c]" />
      <div className="absolute bottom-[5.3rem] left-8 h-8 w-8 bg-[#f1d7b0]" />
      <div className="absolute bottom-[6.8rem] left-7 h-3 w-7 bg-[#2f1d1a]" />
      <div className="absolute bottom-[5.8rem] left-[3.45rem] h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-[5.6rem] left-[4.2rem] h-4 w-5 bg-[#efe3c0]" />

      <div className="absolute bottom-[5.6rem] left-[5.6rem] h-10 w-8 bg-[#2f313b]" />
      <div className="absolute bottom-[5.6rem] left-[7.9rem] h-10 w-8 bg-[#2f313b]" />
      <div className="absolute bottom-[7.9rem] left-[5.4rem] h-11 w-11 bg-[#f3e5c7]" />
      <div className="absolute bottom-[10.2rem] left-[5.2rem] h-5 w-12 bg-[#3a2419]" />
      <div className="absolute bottom-[9.1rem] left-[5.5rem] h-3 w-[3rem] bg-game-ink/80" />
      <div className="absolute bottom-[8.7rem] left-[6.2rem] h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-[8.7rem] left-[7.6rem] h-2 w-2 bg-game-ink" />
      <div className="absolute bottom-[8.55rem] left-[6rem] h-3 w-5 border-x-2 border-game-ink" />

      <div className="absolute bottom-16 left-[3.8rem] h-3 w-10 bg-[#f3e5c7]" />
      <div className="absolute bottom-[8.9rem] left-[5.3rem] h-3 w-10 bg-[#f3e5c7]" />

      {pose === "celebrate" && (
        <>
          <div className="absolute left-[4.5rem] top-3 animate-bounce text-2xl text-game-heart">♥</div>
          <div className="absolute left-3 top-10 animate-sparkle text-game-sparkle">✦</div>
          <div className="absolute right-1 top-12 animate-sparkle text-game-sparkle [animation-delay:0.4s]">✦</div>
        </>
      )}
    </div>
  );
};
