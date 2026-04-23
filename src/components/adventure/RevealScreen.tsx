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

  return (
    <div className="flex flex-1 flex-col py-3 animate-pop">
      <div className="text-center">
        <p className="font-display text-sm uppercase tracking-wide text-game-ink/70">Missão desbloqueada</p>
        <h2 className="mt-1 font-display text-4xl leading-none">{selectedDoor.title}</h2>
      </div>

      <section className="pixel-border relative mt-6 overflow-hidden rounded-3xl bg-card/95 p-5 shadow-pixel">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-game-sparkle/50 blur-2xl" />
        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-lg">Rota escolhida: Porta {selectedDoor.id}</p>
            <p className="text-sm font-bold text-muted-foreground">Prontos para o mini-date épico?</p>
          </div>
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-3xl shadow-glow">
            {selectedDoor.icons[0]}
          </div>
        </div>
        <ol className="relative mt-5 space-y-3">
          {selectedDoor.activities.map((activity, index) => (
            <li key={activity} className="flex items-center gap-3 rounded-2xl bg-muted/75 p-3 font-bold shadow-soft">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent font-display">
                {selectedDoor.icons[index] ?? "✦"}
              </span>
              <span>{activity}</span>
            </li>
          ))}
        </ol>
      </section>

      {!showAll ? (
        <button
          type="button"
          onClick={onShowAll}
          className="pixel-border mt-5 rounded-2xl bg-secondary px-5 py-4 font-display text-secondary-foreground shadow-pixel transition hover:-translate-y-1 active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          Revelar caminhos alternativos
        </button>
      ) : (
        <section className="mt-5 space-y-3 animate-pop">
          <h3 className="font-display text-xl">Outras portas escondiam...</h3>
          {alternateDoors.map((door) => (
            <article key={door.id} className="pixel-border rounded-2xl bg-card/90 p-4 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-display text-lg">Porta {door.id}: {door.title}</h4>
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
          className="pixel-border rounded-2xl bg-primary px-5 py-4 font-display text-primary-foreground shadow-pixel transition active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          Jogar de novo
        </button>
        <button
          type="button"
          className="pixel-border rounded-2xl bg-card/90 px-5 py-3 font-display shadow-soft transition active:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
        >
          Montar nova aventura em breve ✨
        </button>
      </div>
    </div>
  );
};