import { AdventureSet } from "@/data/adventure";
import { SelectionScene } from "./SelectionScene";

type IntroScreenProps = {
  adventure: AdventureSet;
  onStart: () => void;
};

export const IntroScreen = ({ adventure, onStart }: IntroScreenProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-between pb-4 pt-3 text-center animate-pop">
      <div className="w-full">
        <div className="mx-auto inline-flex rounded-none bg-card/85 px-4 py-2 font-display text-[9px] leading-relaxed shadow-soft pixel-border">
          {adventure.brandName}
        </div>
        <div className="pixel-border relative mx-auto mt-4 max-w-sm rounded-none bg-[linear-gradient(180deg,hsl(var(--wood-light))_0%,hsl(var(--wood))_100%)] px-4 py-5 shadow-pixel">
          <span className="absolute left-3 top-3 h-2 w-2 bg-game-sparkle shadow-soft" />
          <span className="absolute right-3 top-3 h-2 w-2 bg-game-sparkle shadow-soft" />
          <h1 className="pixel-text font-display text-xl leading-relaxed text-game-cream sm:text-2xl">
            {adventure.title}
          </h1>
          <p className="mt-3 text-sm font-extrabold leading-relaxed text-game-cream/90">
            Escolha uma fase surpresa e descubra o date que desbloqueia nosso próximo checkpoint.
          </p>
        </div>
      </div>

      <div className="relative mt-5 w-full flex-1">
        <div className="pixel-border relative mx-auto h-[27rem] overflow-hidden rounded-none shadow-pixel">
          <SelectionScene />
          <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(10,14,27,0.18),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(10,14,27,0.16))]" />
        </div>
      </div>

      <div className="w-full max-w-sm space-y-3">
        <div className="pixel-border rounded-none bg-game-ink/92 px-4 py-3 text-game-cream shadow-pixel">
          <p className="font-display text-[10px] leading-relaxed text-accent">READY PLAYER LOVE</p>
          <p className="mt-2 text-sm font-bold leading-relaxed text-game-cream/85">{adventure.prompt}</p>
        </div>
        <button
          type="button"
          onClick={onStart}
          className="pixel-border w-full rounded-none bg-primary px-6 py-4 font-display text-xs leading-relaxed text-primary-foreground shadow-pixel transition hover:-translate-y-1 active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};
