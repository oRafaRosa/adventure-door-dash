import { useMemo, useState } from "react";
import { IntroScreen } from "@/components/adventure/IntroScreen";
import { PixelWorld } from "@/components/adventure/PixelWorld";
import { RevealScreen } from "@/components/adventure/RevealScreen";
import { SelectionScreen } from "@/components/adventure/SelectionScreen";
import { SoundEngine } from "@/components/adventure/SoundEngine";
import { AdventureDoor, adventureSet } from "@/data/adventure";

type Screen = "intro" | "selection" | "reveal";

const playSoundHook = (name: "tap" | "magic" | "success", enabled: boolean) => {
  if (!enabled) return;
  window.dispatchEvent(new CustomEvent("love-doors:sound", { detail: { name } }));
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [selectedDoor, setSelectedDoor] = useState<AdventureDoor | null>(null);
  const [openingDoorId, setOpeningDoorId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);

  const adventure = useMemo(() => adventureSet, []);

  const startAdventure = () => {
    playSoundHook("tap", soundOn);
    setScreen("selection");
  };

  const chooseDoor = (door: AdventureDoor) => {
    if (openingDoorId) return;
    playSoundHook("tap", soundOn);
    setOpeningDoorId(door.id);
    setTimeout(() => playSoundHook("magic", soundOn), 260);
    setTimeout(() => {
      setSelectedDoor(door);
      setOpeningDoorId(null);
      setScreen("reveal");
      playSoundHook("success", soundOn);
    }, 1150);
  };

  const replay = () => {
    playSoundHook("tap", soundOn);
    setSelectedDoor(null);
    setShowAll(false);
    setOpeningDoorId(null);
    setScreen("selection");
  };

  return (
    <PixelWorld>
      <SoundEngine musicOn={musicOn} soundOn={soundOn} />
      {screen === "intro" && <IntroScreen adventure={adventure} onStart={startAdventure} />}
      {screen === "selection" && (
        <SelectionScreen
          adventure={adventure}
          openingDoorId={openingDoorId}
          musicOn={musicOn}
          soundOn={soundOn}
          onChoose={chooseDoor}
          onToggleMusic={() => setMusicOn((value) => !value)}
          onToggleSound={() => setSoundOn((value) => !value)}
        />
      )}
      {screen === "reveal" && selectedDoor && (
        <RevealScreen
          adventure={adventure}
          selectedDoor={selectedDoor}
          showAll={showAll}
          onShowAll={() => {
            playSoundHook("magic", soundOn);
            setShowAll(true);
          }}
          onReplay={replay}
        />
      )}
    </PixelWorld>
  );
};

export default Index;
