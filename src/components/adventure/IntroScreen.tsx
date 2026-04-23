import { AdventureSet } from "@/data/adventure";
import { SelectionScene } from "./SelectionScene";

type IntroScreenProps = {
  adventure: AdventureSet;
  onStart: () => void;
};

export const IntroScreen = ({ adventure, onStart }: IntroScreenProps) => {
  return (
    <div className="flex flex-1 flex-col gap-4 pb-4 pt-2 animate-pop">
      <div className="pixel-panel bg-card/90 px-4 py-4 text-center shadow-pixel">
        <p className="font-display text-[8px] uppercase tracking-[0.3em] text-muted-foreground">{adventure.studio}</p>
        <div className="pixel-board mt-3 px-4 py-4">
          <p className="font-display text-[8px] uppercase tracking-[0.3em] text-accent">{adventure.brandName}</p>
          <h1 className="pixel-text mt-3 font-display text-[1.45rem] leading-relaxed text-game-cream sm:text-[1.7rem]">
            {adventure.title}
          </h1>
          <p className="mt-3 text-sm font-extrabold leading-relaxed text-game-cream/85">{adventure.intro}</p>
        </div>
      </div>

      <div className="pixel-panel relative flex-1 overflow-hidden bg-card/80 p-2 shadow-pixel">
        <div className="relative h-[26rem] overflow-hidden border-4 border-game-ink bg-black/10">
          <SelectionScene />
          <div className="absolute left-3 top-3 z-20 pixel-panel bg-game-ink/88 px-3 py-2 text-game-cream shadow-soft">
            <p className="font-display text-[8px] uppercase tracking-[0.2em] text-accent">WORLD MAP</p>
            <p className="mt-1 text-xs font-extrabold text-game-cream/85">Toque numa porta e desbloqueie o roteiro.</p>
          </div>
          <div className="absolute inset-x-5 bottom-8 z-20 grid grid-cols-3 gap-3">
            {adventure.doors.map((door) => (
              <div key={door.id} className="door-preview">
                <span className="door-preview-token">{door.id}</span>
                <span className={`door-preview-core door-preview-${door.theme}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="pixel-panel bg-game-ink/92 px-4 py-3 text-game-cream shadow-pixel">
          <p className="font-display text-[9px] uppercase tracking-[0.3em] text-accent">MISSAO</p>
          <p className="mt-2 text-sm font-bold leading-relaxed text-game-cream/85">{adventure.prompt}</p>
        </div>
        <button type="button" onClick={onStart} className="pixel-button w-full">
          ENTRAR NO MAPA
        </button>
      </div>
    </div>
  );
};
