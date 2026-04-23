import { AdventureDoor } from "@/data/adventure";
import { cn } from "@/lib/utils";

const themeClasses: Record<AdventureDoor["theme"], { glow: string; core: string; rune: string }> = {
  red: {
    glow: "shadow-[0_0_28px_rgba(255,154,96,0.75)]",
    core: "door-preview-red",
    rune: "text-[#ffcf6f]",
  },
  blue: {
    glow: "shadow-[0_0_28px_rgba(99,201,255,0.82)]",
    core: "door-preview-blue",
    rune: "text-[#88efff]",
  },
  green: {
    glow: "shadow-[0_0_28px_rgba(134,255,141,0.78)]",
    core: "door-preview-green",
    rune: "text-[#c8ff7d]",
  },
};

type MysteryDoorProps = {
  door: AdventureDoor;
  disabled: boolean;
  isOpening: boolean;
  onChoose: (door: AdventureDoor) => void;
};

export const MysteryDoor = ({ door, disabled, isOpening, onChoose }: MysteryDoorProps) => {
  const theme = themeClasses[door.theme];

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChoose(door)}
      data-open={isOpening}
      className={cn(
        "secret-door-card group relative flex min-h-[14.75rem] flex-1 flex-col items-center justify-end outline-none transition duration-300 hover:-translate-y-1.5 focus-visible:ring-4 focus-visible:ring-ring/60 disabled:pointer-events-none",
        door.id === 2 ? "translate-y-0" : "translate-y-4",
      )}
      aria-label={`Escolher ${door.label}`}
    >
      <span className="coin-badge absolute top-0 z-20">{door.id}</span>
      <div className="secret-door-lane absolute bottom-[3.3rem] h-24 w-[4.2rem]" />
      <div className={cn("secret-door-orb absolute bottom-[5.8rem] h-16 w-16 transition duration-300 group-hover:scale-110", theme.glow)} />
      <div className="secret-door-frame relative mb-6 mt-10 h-[9.4rem] w-[6.8rem] animate-wiggle p-2 shadow-pixel">
        <span className="secret-door-cap absolute left-1/2 top-[-0.95rem] z-10 -translate-x-1/2">?</span>
        <div className={cn("secret-door relative h-full overflow-hidden", theme.core)}>
          <span className={cn("secret-door-rune", theme.rune)}>?</span>
          <span className="secret-door-handle" />
          <span className="secret-door-shimmer" />
        </div>
      </div>
      <div className="secret-door-plinth absolute bottom-0 left-1/2 w-[6.9rem] -translate-x-1/2 px-2 py-3 text-center shadow-soft">
        <p className="font-display text-[9px] leading-relaxed text-game-ink">{door.label}</p>
        <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">Roteiro secreto</p>
      </div>
      {isOpening && <span className="portal-burst pointer-events-none absolute inset-0" />}
    </button>
  );
};
