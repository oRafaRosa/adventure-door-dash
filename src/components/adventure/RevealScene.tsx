import { type CSSProperties } from "react";
import { AdventureDoor } from "@/data/adventure";
import { cn } from "@/lib/utils";

type RevealSceneProps = {
  door: AdventureDoor;
  flagText: string;
};

const themeStyles: Record<AdventureDoor["theme"], CSSProperties> = {
  red: {
    ["--scene-sky-top" as string]: "235 48% 18%",
    ["--scene-sky-mid" as string]: "256 39% 36%",
    ["--scene-sky-bottom" as string]: "18 91% 70%",
    ["--scene-orb" as string]: "42 100% 72%",
    ["--scene-ridge-back" as string]: "247 31% 30%",
    ["--scene-ridge-front" as string]: "233 28% 20%",
    ["--scene-ground" as string]: "31 43% 28%",
    ["--scene-highlight" as string]: "349 89% 67%",
  } as CSSProperties,
  blue: {
    ["--scene-sky-top" as string]: "219 72% 18%",
    ["--scene-sky-mid" as string]: "210 69% 32%",
    ["--scene-sky-bottom" as string]: "192 91% 68%",
    ["--scene-orb" as string]: "197 100% 79%",
    ["--scene-ridge-back" as string]: "214 39% 29%",
    ["--scene-ridge-front" as string]: "204 34% 18%",
    ["--scene-ground" as string]: "149 36% 24%",
    ["--scene-highlight" as string]: "198 100% 69%",
  } as CSSProperties,
  green: {
    ["--scene-sky-top" as string]: "233 58% 15%",
    ["--scene-sky-mid" as string]: "258 40% 30%",
    ["--scene-sky-bottom" as string]: "319 83% 63%",
    ["--scene-orb" as string]: "50 100% 77%",
    ["--scene-ridge-back" as string]: "186 43% 23%",
    ["--scene-ridge-front" as string]: "162 44% 16%",
    ["--scene-ground" as string]: "122 30% 18%",
    ["--scene-highlight" as string]: "144 100% 67%",
  } as CSSProperties,
};

export const RevealScene = ({ door, flagText }: RevealSceneProps) => {
  return (
    <div className="reveal-scene absolute inset-0 overflow-hidden" style={themeStyles[door.theme]}>
      <div className="reveal-stars" />
      <div className="reveal-sunset" />
      <div className="reveal-ridge reveal-ridge-back" />
      <div className="reveal-ridge reveal-ridge-front" />
      <div className="reveal-waterway" />
      <div className="reveal-stage-floor" />
      <div className={cn("scene-landmark", door.theme === "red" && "scene-landmark-peak")} />
      {door.theme === "blue" && (
        <>
          <div className="scene-climb-wall scene-climb-wall-left" />
          <div className="scene-climb-wall scene-climb-wall-right" />
          <div className="scene-climb-rope" />
          <div className="scene-climb-bolts" />
        </>
      )}
      {door.theme === "green" && (
        <>
          <div className="scene-neon-tree" />
          <div className="scene-neon-arch" />
          <div className="scene-neon-floor" />
        </>
      )}
      <div className="reveal-beacon absolute bottom-[49%] left-1/2 z-20 -translate-x-1/2 animate-bob">♥</div>

      <div className="absolute bottom-[18%] right-[8%] z-20 flex items-end gap-2">
        <div className="flag-pole" />
        <div className="flag-banner animate-flag">
          <span className="font-display text-[8px] leading-relaxed text-game-cream">{flagText}</span>
        </div>
      </div>
    </div>
  );
};
