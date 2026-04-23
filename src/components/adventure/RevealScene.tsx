import { PixelCouple } from "./PixelCouple";

type RevealSceneProps = {
  flagText: string;
};

export const RevealScene = ({ flagText }: RevealSceneProps) => {
  return (
    <div className="reveal-scene absolute inset-0 overflow-hidden">
      <div className="reveal-stars" />
      <div className="reveal-sunset" />
      <div className="reveal-mountains reveal-mountains-back" />
      <div className="reveal-mountains reveal-mountains-front" />
      <div className="reveal-river" />
      <div className="reveal-rock-platform" />

      <div className="absolute bottom-[16%] left-1/2 z-20 -translate-x-[62%]">
        <PixelCouple pose="kiss" size="lg" />
      </div>

      <div className="pixel-heart absolute bottom-[47%] left-1/2 z-20 -translate-x-[2.6rem] animate-bob">♥</div>

      <div className="absolute bottom-[19%] right-[8%] z-20 flex items-end gap-2">
        <div className="flag-pole" />
        <div className="flag-banner animate-flag">
          <span className="font-display text-[8px] leading-relaxed text-game-cream">{flagText}</span>
        </div>
      </div>
    </div>
  );
};
