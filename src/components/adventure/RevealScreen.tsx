import { Eye, RotateCcw, Sparkles } from "lucide-react";
import { AdventureDoor, AdventureSet } from "@/data/adventure";
import { RevealScene } from "./RevealScene";

type RevealScreenProps = {
  adventure: AdventureSet;
  selectedDoor: AdventureDoor;
  showAll: boolean;
  onShowAll: () => void;
  onReplay: () => void;
};

export const RevealScreen = ({ adventure, selectedDoor, showAll, onShowAll, onReplay }: RevealScreenProps) => {
  const alternateDoors = adventure.doors.filter((door) => door.id !== selectedDoor.id);

  return (
    <div className="flex flex-1 flex-col gap-4 py-2 animate-pop">
      <section className="pixel-panel relative overflow-hidden bg-card/80 p-2 shadow-pixel">
        <RevealScene door={selectedDoor} flagText={selectedDoor.badge} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,22,0.08)_0%,rgba(7,10,22,0.04)_34%,rgba(7,10,22,0.16)_100%)]" />

        <div className="relative z-10 flex min-h-[42rem] flex-col p-3">
          <div className="grid gap-3 sm:grid-cols-[1fr_0.9fr]">
            <div className="pixel-panel bg-game-ink/95 p-3 text-game-cream shadow-soft">
              <div className="flex items-center justify-between gap-3 text-[9px] uppercase tracking-[0.25em] text-game-cream/80">
                <span>P1</span>
                <span>♥ ♥ ♥ ♥</span>
                <span>WORLD {selectedDoor.world}</span>
              </div>
              <div className="mt-3 grid gap-2 text-left">
                <div className="font-display text-[8px] uppercase text-game-heart">{selectedDoor.eyebrow}</div>
                <div className="font-display text-[10px] uppercase leading-relaxed text-accent">{selectedDoor.subtitle}</div>
                <div className="font-display text-[10px] leading-relaxed">{selectedDoor.title}</div>
              </div>
            </div>
            <div className="pixel-panel bg-game-ink/95 p-3 text-game-cream shadow-soft">
              <div className="flex items-center justify-between gap-3 text-[9px] uppercase tracking-[0.25em] text-game-cream/80">
                <span>TIME</span>
                <span>{selectedDoor.time}</span>
                <span>🪙 x{selectedDoor.coins}</span>
              </div>
              <div className="mt-3 text-[10px] leading-relaxed text-game-cream">{selectedDoor.summary}</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="pixel-text font-display text-[1.9rem] leading-relaxed text-accent sm:text-[2.3rem]">LEVEL CLEAR!</h2>
            <p className="mt-2 font-display text-[10px] leading-relaxed text-game-cream">ROTEIRO DESBLOQUEADO</p>
          </div>

          <div className="mx-auto mt-5 w-full max-w-[19rem]">
            <div className="pixel-panel bg-game-ink/88 p-4 text-game-cream shadow-soft">
              <div className="space-y-3 font-display text-[10px] leading-relaxed">
                <div className="flex items-center justify-between gap-2 border-b-4 border-game-cream/15 pb-3">
                  <span>★ {selectedDoor.reward}</span>
                  <span className="text-right text-game-cream/90">+200</span>
                </div>
                {selectedDoor.activities.map((activity, index) => (
                  <div key={activity} className="flex items-center justify-between gap-2">
                    <span>{selectedDoor.icons[index] ?? "★"} {activity}</span>
                    <span className="text-right text-game-cream/90">+{50 + index * 25}</span>
                  </div>
                ))}
                <div className="mt-3 border-t-4 border-game-cream/20 pt-3 text-center">
                  <p className="text-[9px] text-accent">SCORE</p>
                  <p className="mt-1 text-xl text-game-cream">{selectedDoor.score}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto grid gap-3">
            <div className="pixel-panel bg-game-ink/95 p-3 text-left text-game-cream shadow-soft">
              <p className="font-display text-[9px] leading-relaxed text-accent">STAGE NOTE:</p>
              <p className="mt-2 text-sm font-bold">{selectedDoor.companionLine}</p>
            </div>
          </div>
        </div>
      </section>

      {!showAll ? (
        <button
          type="button"
          onClick={onShowAll}
          className="pixel-button mt-1 flex w-full items-center justify-center gap-2 bg-secondary"
        >
          <Eye className="h-4 w-4" />
          REVELAR OUTRAS PORTAS
        </button>
      ) : (
        <section className="mt-1 space-y-3 animate-pop">
          <h3 className="font-display text-base leading-relaxed uppercase tracking-[0.2em] text-game-cream/85">As outras portas escondiam</h3>
          {alternateDoors.map((door) => (
            <article key={door.id} className="alternate-door-card pixel-panel bg-card/90 p-4 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-display text-[9px] leading-relaxed">{door.label}</h4>
                  <p className="mt-1 font-display text-[10px] uppercase leading-relaxed text-accent">{door.title}</p>
                </div>
                <span className="inline-grid h-10 w-10 place-items-center border-4 border-game-ink bg-game-cream text-2xl">{door.icons[0]}</span>
              </div>
              <p className="mt-3 text-sm font-bold leading-relaxed text-muted-foreground">{door.activities.join(" • ")}</p>
            </article>
          ))}
        </section>
      )}

      <div className="mt-auto grid grid-cols-1 gap-3 pt-2">
        <button
          type="button"
          onClick={onReplay}
          className="pixel-button flex items-center justify-center gap-2 bg-primary"
        >
          <RotateCcw className="h-4 w-4" />
          JOGAR DE NOVO
        </button>
        <button
          type="button"
          className="pixel-panel flex items-center justify-center gap-2 bg-card/90 px-5 py-3 font-display text-[10px] leading-relaxed shadow-soft transition active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          BONUS STAGE EM BREVE
        </button>
      </div>
    </div>
  );
};
