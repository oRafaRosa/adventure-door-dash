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
  const missionCopy: Record<number, { eyebrow: string; reward: string; badge: string; score: string; buddy: string }> = {
    1: {
      eyebrow: "PEAK OF HEARTS",
      reward: "EPIC SELFIE",
      badge: "AMAZING VIEW",
      score: "98765",
      buddy: "Vocês dois chegaram no topo juntos.",
    },
    2: {
      eyebrow: "KISS QUEST",
      reward: "FLOWER POWER",
      badge: "CHECKPOINT OF LOVE",
      score: "32750",
      buddy: "Vocês acharam uma fase secreta no meio da aventura.",
    },
    3: {
      eyebrow: "NIGHT BONUS",
      reward: "NEON ROUTE",
      badge: "NEXT STOP: FOREVER",
      score: "45120",
      buddy: "Essa rota saiu direto de um bonus stage romântico.",
    },
  };
  const mission = missionCopy[selectedDoor.id] ?? missionCopy[1];

  return (
    <div className="flex flex-1 flex-col gap-4 py-3 animate-pop">
      <section className="pixel-border relative overflow-hidden rounded-none shadow-pixel">
        <RevealScene flagText={mission.badge} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,22,0.08)_0%,rgba(7,10,22,0.04)_34%,rgba(7,10,22,0.16)_100%)]" />

        <div className="relative z-10 flex min-h-[45rem] flex-col p-3">
          <div className="grid gap-3 sm:grid-cols-[1fr_0.9fr]">
            <div className="pixel-border rounded-none bg-game-ink/95 p-3 text-game-cream shadow-soft">
              <div className="flex items-center justify-between gap-3 text-[9px] uppercase tracking-[0.25em] text-game-cream/80">
                <span>P1</span>
                <span>♥ ♥ ♥ ♥</span>
                <span>WORLD 3-1</span>
              </div>
              <div className="mt-3 grid gap-2 text-left">
                <div className="font-display text-[8px] uppercase text-game-heart">{mission.eyebrow}</div>
                <div className="font-display text-[10px] leading-relaxed">{selectedDoor.title}</div>
              </div>
            </div>
            <div className="pixel-border rounded-none bg-game-ink/95 p-3 text-game-cream shadow-soft">
              <div className="flex items-center justify-between gap-3 text-[9px] uppercase tracking-[0.25em] text-game-cream/80">
                <span>TIME</span>
                <span>247</span>
                <span>🪙 x143</span>
              </div>
              <div className="mt-3 text-[10px] leading-relaxed text-game-cream">Você desbloqueou um roteiro romântico com tudo que faz nossa conexão brilhar.</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="pixel-text font-display text-[1.9rem] leading-relaxed text-accent sm:text-[2.3rem]">LEVEL CLEAR!</h2>
            <p className="mt-2 font-display text-[10px] leading-relaxed text-game-cream">TRUE LOVE ACHIEVED!</p>
          </div>

          <div className="mx-auto mt-5 w-full max-w-[18rem]">
            <div className="pixel-border rounded-none bg-game-ink/88 p-4 text-game-cream shadow-soft">
              <div className="space-y-3 font-display text-[10px] leading-relaxed">
                <div className="flex items-center justify-between gap-2">
                  <span>♥ FOUND LOVE</span>
                  <span className="text-right text-game-cream/90">+100</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>{selectedDoor.icons[0]} {mission.reward}</span>
                  <span className="text-right text-game-cream/90">+50</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>★ PERFECT DAY</span>
                  <span className="text-right text-game-cream/90">+150</span>
                </div>
                <div className="mt-3 border-t-4 border-game-cream/20 pt-3 text-center">
                  <p className="text-[9px] text-accent">SCORE</p>
                  <p className="mt-1 text-xl text-game-cream">{mission.score}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto grid gap-3">
            <div className="pixel-border rounded-none bg-game-ink/95 p-3 text-left text-game-cream shadow-soft">
              <p className="font-display text-[9px] leading-relaxed text-accent">TRAIL BUDDY SAYS:</p>
              <p className="mt-2 text-sm font-bold">{mission.buddy}</p>
            </div>
          </div>
        </div>
      </section>

      {!showAll ? (
        <button
          type="button"
          onClick={onShowAll}
          className="pixel-button mt-5 w-full rounded-none bg-secondary"
        >
          REVELAR CAMINHOS ALTERNATIVOS
        </button>
      ) : (
        <section className="mt-5 space-y-3 animate-pop">
          <h3 className="font-display text-base leading-relaxed uppercase tracking-[0.2em] text-game-cream/85">Outras portas escondiam...</h3>
          {alternateDoors.map((door) => (
            <article key={door.id} className="pixel-border rounded-none bg-card/90 p-4 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-display text-[9px] leading-relaxed">Porta {door.id}: {door.title}</h4>
                <span className="text-2xl">{door.icons[0]}</span>
              </div>
              <p className="mt-2 text-sm font-bold text-muted-foreground">{door.activities.join(" • ")}</p>
            </article>
          ))}
        </section>
      )}

      <div className="mt-auto grid grid-cols-1 gap-3 pt-6">
        <button
          type="button"
          onClick={onReplay}
          className="pixel-button rounded-none bg-primary"
        >
          JOGAR DE NOVO
        </button>
        <button
          type="button"
          className="pixel-border rounded-none bg-card/90 px-5 py-3 font-display text-[10px] leading-relaxed shadow-soft transition active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          FASE BONUS EM BREVE
        </button>
      </div>
    </div>
  );
};
