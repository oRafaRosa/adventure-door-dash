import { AdventureDoor } from "@/data/adventure";

const themeClasses: Record<AdventureDoor["theme"], string> = {
  red: "bg-door-red",
  blue: "bg-door-blue",
  green: "bg-door-green",
};

type MysteryDoorProps = {
  door: AdventureDoor;
  disabled: boolean;
  isOpening: boolean;
  onChoose: (door: AdventureDoor) => void;
};

export const MysteryDoor = ({ door, disabled, isOpening, onChoose }: MysteryDoorProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChoose(door)}
      data-open={isOpening}
      className="door-card group relative flex min-h-[14rem] flex-1 flex-col items-center justify-end rounded-none outline-none transition duration-300 hover:-translate-y-2 focus-visible:ring-4 focus-visible:ring-ring/60 disabled:pointer-events-none"
      aria-label={`Escolher ${door.label}`}
    >
      <span className="coin-badge absolute top-0 z-20">{door.id}</span>
      <div className="path-ribbon absolute bottom-0 h-20 w-[4.8rem] opacity-95" />
      <div className="absolute bottom-12 h-20 w-16 bg-game-sparkle/45 blur-xl transition group-hover:scale-110" />
      <div className="stone-arch relative mb-6 mt-10 h-[8.8rem] w-[6.2rem] animate-wiggle p-2 shadow-pixel">
        <span className="question-block absolute left-1/2 top-[-0.8rem] z-10 -translate-x-1/2">?</span>
        <div className={`door-panel relative h-full ${themeClasses[door.theme]} pixel-border overflow-hidden`}>
          <div className="absolute inset-x-3 top-4 h-12 border-4 border-game-cream/45" />
          <div className="absolute right-2 top-[4.2rem] h-3 w-3 rounded-full bg-game-sun shadow-glow" />
          <div className="absolute inset-x-3 bottom-3 h-5 bg-game-ink/10" />
          <div className="absolute inset-x-0 top-0 h-2 bg-game-cream/30" />
        </div>
      </div>
      <div className="pixel-border absolute bottom-0 left-1/2 w-[6.5rem] -translate-x-1/2 rounded-none bg-card/95 px-2 py-3 text-center shadow-soft">
        <p className="font-display text-[9px] leading-relaxed text-game-ink">{door.label}</p>
        <p className="mt-1 text-[10px] font-extrabold tracking-normal text-muted-foreground">???</p>
      </div>
      {isOpening && <span className="reveal-burst pointer-events-none absolute inset-0" />}
    </button>
  );
};
