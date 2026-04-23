import { AdventureDoor, AdventureSet } from "@/data/adventure";
import { CoupleAvatars } from "./CoupleAvatars";
import { GameHud } from "./GameHud";
import { MysteryDoor } from "./MysteryDoor";

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
      <div className="mt-4 text-center">
        <div className="pixel-border mx-auto max-w-sm rounded-none bg-[linear-gradient(180deg,hsl(var(--wood-light))_0%,hsl(var(--wood))_100%)] px-4 py-4 shadow-pixel">
          <h2 className="pixel-text font-display text-base leading-relaxed text-game-cream sm:text-lg">
            Escolha o caminho da nossa aventura!
          </h2>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {adventure.doors.map((door) => (
          <div key={`tag-${door.id}`} className="pixel-border rounded-none bg-card/90 px-2 py-1 shadow-soft">
            <span className="font-display text-[8px] leading-relaxed">{door.id}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto grid min-h-[21rem] grid-cols-3 items-end gap-2 pb-0 pt-4">
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
      <div className="-mt-6 flex justify-center pointer-events-none">
        <CoupleAvatars size="md" pose="path" />
      </div>
      <div className="pixel-border mb-3 mt-1 rounded-none bg-game-ink/92 p-4 text-game-cream shadow-pixel">
        <p className="font-display text-[10px] leading-relaxed">QUAL CAMINHO VAMOS ESCOLHER JUNTOS?</p>
        <p className="mt-2 text-sm font-bold text-game-cream/80">{adventure.prompt}</p>
      </div>
    </div>
  );
};
