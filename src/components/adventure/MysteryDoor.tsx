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
      className="door-card group relative flex min-h-40 flex-1 flex-col items-center justify-end rounded-none outline-none transition duration-300 hover:-translate-y-2 focus-visible:ring-4 focus-visible:ring-ring/60 disabled:pointer-events-none"
      aria-label={`Escolher ${door.label}`}
    >
      <div className="path-ribbon absolute bottom-0 h-24 w-24 opacity-95" />
      <div className="absolute bottom-14 h-28 w-20 bg-game-sparkle/45 blur-xl transition group-hover:scale-110" />
      <div className="relative mb-8 h-32 w-24 animate-wiggle bg-door-trim p-2 shadow-pixel [animation-delay:var(--delay)]">
        <div className={`door-panel relative h-full ${themeClasses[door.theme]} pixel-border overflow-hidden`}>
          <div className="absolute inset-x-3 top-5 h-10 border-4 border-game-cream/45" />
          <div className="absolute right-3 top-16 h-3 w-3 rounded-full bg-game-sun shadow-glow" />
          <div className="absolute inset-x-4 bottom-4 h-5 rounded bg-game-ink/10" />
          <div className="absolute inset-x-0 top-0 h-2 bg-game-cream/30" />
        </div>
      </div>
      <span className="pixel-border absolute top-2 grid h-9 w-9 place-items-center rounded-none bg-accent font-display text-sm shadow-soft">
        {door.id}
      </span>
      {isOpening && <span className="reveal-burst pointer-events-none absolute inset-0" />}
    </button>
  );
};