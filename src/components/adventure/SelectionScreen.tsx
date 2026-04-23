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
      <div className="mt-5 text-center">
        <div className="pixel-border mx-auto max-w-sm rounded-none bg-accent px-4 py-3 shadow-pixel">
          <h2 className="pixel-text font-display text-lg leading-relaxed">Escolha o caminho da nossa aventura!</h2>
        </div>
      </div>
      <div className="mt-auto grid min-h-[20rem] grid-cols-3 items-end gap-2 pb-0">
        {adventure.doors.map((door, index) => (
          <MysteryDoor
            key={door.id}
            door={door}
            disabled={openingDoorId !== null}
            isOpening={openingDoorId === door.id}
            onChoose={onChoose}
          />
        ))}
      </div>
      <div className="-mt-12 flex justify-center pointer-events-none">
        <CoupleAvatars size="sm" />
      </div>
      <div className="pixel-border mb-4 rounded-none bg-card/95 p-4 shadow-pixel">
        <p className="font-display text-base">💌 {adventure.prompt}</p>
        <p className="mt-1 text-sm font-bold text-muted-foreground">Dica: escolha com o coração, sem espiar!</p>
      </div>
    </div>
  );
};