import { AdventureDoor, AdventureSet } from "@/data/adventure";
import { Sparkles } from "lucide-react";
import { GameHud } from "./GameHud";
import { MysteryDoor } from "./MysteryDoor";
import { SelectionScene } from "./SelectionScene";

type SelectionScreenProps = {
  adventure: AdventureSet;
  openingDoorId: number | null;
  musicOn: boolean;
  soundOn: boolean;
  onChoose: (door: AdventureDoor) => void;
  onToggleMusic: () => void;
  onToggleSound: () => void;
};

export const SelectionScreen = ({
  adventure,
  openingDoorId,
  musicOn,
  soundOn,
  onChoose,
  onToggleMusic,
  onToggleSound,
}: SelectionScreenProps) => {
  return (
    <div className={openingDoorId ? "flex flex-1 flex-col gap-3 animate-shake" : "flex flex-1 flex-col gap-3"}>
      <GameHud musicOn={musicOn} soundOn={soundOn} onToggleMusic={onToggleMusic} onToggleSound={onToggleSound} />
      <div className="pixel-board px-4 py-4 text-center shadow-pixel">
        <p className="font-display text-[8px] uppercase tracking-[0.3em] text-accent">STAGE SELECT</p>
        <h2 className="pixel-text mt-2 font-display text-base leading-relaxed text-game-cream sm:text-lg">
          Escolha uma das tres portas secretas
        </h2>
      </div>

      <div className="pixel-panel bg-card/85 px-3 py-3 shadow-pixel">
        <div className="flex items-start gap-2">
          <span className="inline-grid h-8 w-8 shrink-0 place-items-center border-2 border-game-ink bg-accent/80 text-game-ink">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-[8px] uppercase tracking-[0.22em] text-muted-foreground">Briefing</p>
            <p className="mt-1 text-sm font-extrabold leading-relaxed text-game-ink">{adventure.prompt}</p>
          </div>
        </div>
      </div>

      <div className="pixel-panel relative flex-1 overflow-hidden bg-card/80 p-2 shadow-pixel">
        <div className="relative h-[32rem] overflow-hidden border-4 border-game-ink">
          <SelectionScene />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,26,0.08)_0%,rgba(8,12,26,0.02)_35%,rgba(8,12,26,0.15)_100%)]" />
          <div className="absolute inset-x-4 top-5 z-20 flex items-center justify-between">
            <div className="pixel-panel bg-game-ink/88 px-3 py-2 text-game-cream shadow-soft">
              <p className="font-display text-[8px] uppercase tracking-[0.2em] text-accent">WORLD 1-1</p>
              <p className="mt-1 text-xs font-extrabold text-game-cream/85">Tres escolhas. Nenhum spoiler.</p>
            </div>
            <div className="pixel-panel bg-game-ink/88 px-3 py-2 text-game-cream shadow-soft">
              <p className="font-display text-[8px] uppercase tracking-[0.2em] text-accent">PLAYER</p>
              <p className="mt-1 text-xs font-extrabold text-game-cream/85">Rafa + Gabi</p>
            </div>
          </div>
          <div className="absolute inset-x-3 bottom-[5.8rem] z-20 grid grid-cols-3 gap-2">
            {adventure.doors.map((door) => (
              <MysteryDoor
                key={door.id}
                door={door}
                disabled={openingDoorId !== null}
                isOpening={openingDoorId === door.id}
                onChoose={onChoose}
              />
            ))}
          </div>
          <div className="absolute inset-x-4 bottom-4 z-20">
            <div className="pixel-panel bg-game-ink/92 p-4 text-game-cream shadow-pixel">
              <p className="font-display text-[9px] leading-relaxed uppercase tracking-[0.2em] text-accent">TOQUE EM UMA PORTA PARA REVELAR O ROTEIRO</p>
              <p className="mt-2 text-sm font-bold text-game-cream/80">Cada porta abre um plano completo. Antes disso, e segredo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
