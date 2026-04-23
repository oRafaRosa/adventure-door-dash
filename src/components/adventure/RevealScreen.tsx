import { AdventureDoor, AdventureSet } from "@/data/adventure";

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
      reward: "AMAZING VIEW",
      badge: "VIEWS > EVERYTHING",
      score: "98765",
      buddy: "Vocês dois chegaram no topo juntos.",
    },
    2: {
      eyebrow: "LOVE QUEST",
      reward: "POWER MOVE",
      badge: "CHECKPOINT OF LOVE",
      score: "32750",
      buddy: "Vocês acharam uma fase secreta no meio da aventura.",
    },
    3: {
      eyebrow: "NEON DATE",
      reward: "NIGHT BONUS",
      badge: "NEXT STOP: FOREVER",
      score: "45120",
      buddy: "Essa rota saiu direto de um bonus stage romântico.",
    },
  };
  const mission = missionCopy[selectedDoor.id] ?? missionCopy[1];

  return (
    <div className="flex flex-1 flex-col gap-4 py-3 animate-pop">
      <section className="pixel-border relative overflow-hidden rounded-none shadow-pixel">
        <img
          src="./art/rafa-gabi-reveal.png"
          alt="Rafa e Gabi em uma paisagem pixelada romântica no pôr do sol"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,22,0.1)_0%,rgba(7,10,22,0.05)_32%,rgba(7,10,22,0.24)_100%)]" />

        <div className="relative z-10 flex min-h-[45rem] flex-col p-3">
          <div className="pixel-border grid grid-cols-[1.3fr_1fr] overflow-hidden rounded-none bg-game-ink/95 text-game-cream shadow-soft">
            <div className="border-r-4 border-game-cream/20 px-3 py-3 text-left">
              <p className="font-display text-[8px] leading-relaxed text-game-heart">{mission.eyebrow}</p>
              <p className="mt-2 font-display text-[10px] leading-relaxed">{selectedDoor.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 px-3 py-3 text-[8px] font-display leading-relaxed">
              <span>P1</span>
              <span>♥ ♥ ♥ ♥</span>
              <span>🪙x143</span>
              <span>3-1</span>
              <span>TIME</span>
              <span>247</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="pixel-text font-display text-[1.9rem] leading-relaxed text-accent sm:text-[2.3rem]">LEVEL CLEAR!</h2>
            <p className="mt-2 font-display text-[10px] leading-relaxed text-game-cream">TRUE LOVE ACHIEVED!</p>
          </div>

          <div className="mx-auto mt-5 w-full max-w-[15rem]">
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
            <div className="ml-auto pixel-border max-w-[8.5rem] rounded-none bg-primary/90 px-3 py-3 text-center text-primary-foreground shadow-soft">
              <p className="font-display text-[8px] leading-relaxed">{mission.badge}</p>
            </div>
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
          className="pixel-border mt-5 rounded-none bg-secondary px-5 py-4 font-display text-[10px] leading-relaxed text-secondary-foreground shadow-pixel transition hover:-translate-y-1 active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          Revelar caminhos alternativos
        </button>
      ) : (
        <section className="mt-5 space-y-3 animate-pop">
          <h3 className="font-display text-base leading-relaxed">Outras portas escondiam...</h3>
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
          className="pixel-border rounded-none bg-primary px-5 py-4 font-display text-xs leading-relaxed text-primary-foreground shadow-pixel transition active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          Jogar de novo
        </button>
        <button
          type="button"
          className="pixel-border rounded-none bg-card/90 px-5 py-3 font-display text-[10px] leading-relaxed shadow-soft transition active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          Fase bonus em breve
        </button>
      </div>
    </div>
  );
};
