import { AdventureDoor, AdventureSet } from "@/data/adventure";
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
    <div className={openingDoorId ? "flex flex-1 flex-col animate-shake" : "flex flex-1 flex-col"}>
      <GameHud musicOn={musicOn} soundOn={soundOn} onToggleMusic={onToggleMusic} onToggleSound={onToggleSound} />
      <div className="mt-3 text-center">
        <div className="pixel-border mx-auto max-w-sm rounded-none bg-[linear-gradient(180deg,hsl(var(--wood-light))_0%,hsl(var(--wood))_100%)] px-4 py-4 shadow-pixel">
          <h2 className="pixel-text font-display text-base leading-relaxed text-game-cream sm:text-lg">
            Escolha o caminho da nossa aventura!
          </h2>
        </div>
      </div>

      <div className="relative mt-4 flex-1">
        <div className="pixel-border relative h-[31rem] overflow-hidden rounded-none shadow-pixel">
          <SelectionScene />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,26,0.10)_0%,rgba(8,12,26,0.02)_35%,rgba(8,12,26,0.12)_100%)]" />
          <div className="absolute inset-x-3 top-8 z-20 grid grid-cols-3 gap-3">
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
            <div className="pixel-border rounded-none bg-game-ink/92 p-4 text-game-cream shadow-pixel">
              <p className="font-display text-[10px] leading-relaxed">QUAL CAMINHO VAMOS ESCOLHER JUNTOS?</p>
              <p className="mt-2 text-sm font-bold text-game-cream/80">{adventure.prompt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
