import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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

const Adventure = () => {
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao Hub do Rafa & Gabi
        </Link>
      </div>
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
    </div>
  );
};

export default Adventure;
