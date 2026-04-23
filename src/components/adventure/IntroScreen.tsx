import { AdventureSet } from "@/data/adventure";
import { CoupleAvatars } from "./CoupleAvatars";

type IntroScreenProps = {
  adventure: AdventureSet;
  onStart: () => void;
};

export const IntroScreen = ({ adventure, onStart }: IntroScreenProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-between pb-6 pt-4 text-center animate-pop">
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

      <div className="relative mt-6 w-full flex-1">
        <div className="mx-auto mt-2 grid max-w-sm grid-cols-3 items-end gap-3 px-2">
          {["bg-door-red", "bg-door-blue", "bg-door-green"].map((tone, index) => (
            <div
              key={tone}
              className="relative flex flex-col items-center"
              style={{ animationDelay: `${index * 0.22}s` }}
            >
              <span className="coin-badge mb-2 animate-bob">{index + 1}</span>
              <div className="stone-arch animate-wiggle">
                <div className={`door-panel relative h-[5.6rem] w-[4.5rem] ${tone} pixel-border overflow-hidden`}>
                  <span className="question-block absolute left-1/2 top-4 -translate-x-1/2">?</span>
                  <span className="absolute right-2 top-10 h-2.5 w-2.5 rounded-full bg-game-sun shadow-glow" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mx-auto mt-2 w-fit">
          <CoupleAvatars size="md" />
        </div>
      </div>

      <div className="w-full max-w-sm space-y-3">
        <div className="pixel-border rounded-none bg-card/90 px-4 py-3 shadow-pixel">
          <p className="font-display text-[10px] leading-relaxed text-game-ink">Ready Player Love</p>
          <p className="mt-2 text-sm font-bold leading-relaxed text-game-ink/80">{adventure.prompt}</p>
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
