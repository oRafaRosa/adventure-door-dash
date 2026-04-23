import { AdventureSet } from "@/data/adventure";
import { CoupleAvatars } from "./CoupleAvatars";

type IntroScreenProps = {
  adventure: AdventureSet;
  onStart: () => void;
};

export const IntroScreen = ({ adventure, onStart }: IntroScreenProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center pb-10 text-center animate-pop">
      <div className="mb-5 rounded-none bg-card/80 px-4 py-2 font-display text-[10px] leading-relaxed shadow-soft pixel-border">
        {adventure.brandName}
      </div>
      <h1 className="pixel-text max-w-xs font-display text-2xl leading-relaxed text-game-ink drop-shadow-sm">
        {adventure.title}
      </h1>
      <p className="mt-4 max-w-sm text-lg font-bold leading-relaxed text-game-ink/80">
        Três portinhas misteriosas, um toque de sorte e uma aventura surpresa pra viver juntinhos.
      </p>
      <div className="relative mt-6 h-48 w-full max-w-xs">
        {["bg-door-red", "bg-door-blue", "bg-door-green"].map((tone, index) => (
          <div
            key={tone}
            className={`pixel-border absolute bottom-0 h-28 w-20 rounded-none ${tone} shadow-pixel animate-wiggle`}
            style={{ left: `${8 + index * 32}%`, animationDelay: `${index * 0.28}s` }}
          >
            <span className="absolute right-3 top-14 h-3 w-3 rounded-full bg-game-sun" />
          </div>
        ))}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <CoupleAvatars size="sm" />
        </div>
      </div>
      <button
        type="button"
        onClick={onStart}
        className="pixel-border mt-12 rounded-none bg-primary px-8 py-4 font-display text-xs leading-relaxed text-primary-foreground shadow-pixel transition hover:-translate-y-1 active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
      >
        Começar
      </button>
    </div>
  );
};