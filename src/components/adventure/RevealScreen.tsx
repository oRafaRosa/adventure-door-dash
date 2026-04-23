import { AdventureDoor, AdventureSet } from "@/data/adventure";
import { CoupleAvatars } from "./CoupleAvatars";

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
    <div className="flex flex-1 flex-col py-3 animate-pop">
      <div className="pixel-border grid grid-cols-[1.3fr_1fr] overflow-hidden rounded-none bg-game-ink/95 text-game-cream shadow-pixel">
        <div className="border-r-4 border-game-cream/20 px-3 py-3 text-left">
          <p className="font-display text-[8px] leading-relaxed text-game-heart">LOVE QUEST</p>
          <p className="mt-2 font-display text-[10px] leading-relaxed">{selectedDoor.title}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 px-3 py-3 text-[8px] font-display leading-relaxed">
          <span>GABI</span>
          <span>🪙x143</span>
          <span>TIME</span>
          <span>1-1</span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h2 className="pixel-text font-display text-2xl leading-relaxed text-accent sm:text-[2rem]">LEVEL CLEAR!</h2>
        <p className="mt-2 font-display text-[10px] leading-relaxed text-game-ink/80">TRUE LOVE ACHIEVED</p>
      </div>

      <div className="-mb-5 mt-3 flex justify-center pointer-events-none">
        <CoupleAvatars size="md" pose="embrace" />
      </div>

      <section className="pixel-border relative mt-0 overflow-hidden rounded-none bg-card/95 p-4 shadow-pixel">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-game-sparkle/50 blur-2xl" />
        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-[10px] leading-relaxed">CHECKPOINT {selectedDoor.id}</p>
            <p className="mt-1 text-sm font-extrabold text-muted-foreground">{selectedDoor.title}</p>
          </div>
          <div className="grid h-16 w-16 place-items-center rounded-none bg-primary text-3xl shadow-glow pixel-border">
            {selectedDoor.icons[0]}
          </div>
        </div>

        <div className="relative mt-4 grid grid-cols-2 gap-2">
          <div className="pixel-border rounded-none bg-accent/75 px-3 py-2 text-left">
            <p className="font-display text-[8px] leading-relaxed">FLOWER POWER</p>
            <p className="mt-1 text-lg font-black">+50</p>
          </div>
          <div className="pixel-border rounded-none bg-primary/80 px-3 py-2 text-left text-primary-foreground">
            <p className="font-display text-[8px] leading-relaxed">HEART BONUS</p>
            <p className="mt-1 text-lg font-black">+100</p>
          </div>
        </div>

        <ol className="relative mt-4 space-y-3">
          {selectedDoor.activities.map((activity, index) => (
            <li key={activity} className="flex items-center gap-3 rounded-none bg-muted/75 p-3 font-bold shadow-soft pixel-border animate-pop">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-none bg-accent font-display">
                {selectedDoor.icons[index] ?? "✦"}
              </span>
              <span>{activity}</span>
            </li>
          ))}
        </ol>

        <div className="pixel-border mt-4 rounded-none bg-game-ink/95 p-3 text-left text-game-cream shadow-soft">
          <p className="font-display text-[9px] leading-relaxed text-accent">TRAIL BUDDY:</p>
          <p className="mt-2 text-sm font-bold">Voce desbloqueou um date surpresa digno de fase secreta.</p>
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
