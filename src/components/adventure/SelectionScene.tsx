import { PixelCouple } from "./PixelCouple";

export const SelectionScene = () => {
  return (
    <div className="selection-scene absolute inset-0 overflow-hidden">
      <div className="scene-sun" />
      <div className="scene-cloud left-[6%] top-[14%] h-8 w-20 animate-float" />
      <div className="scene-cloud right-[8%] top-[19%] h-7 w-16 animate-float [animation-delay:1.2s]" />
      <div className="scene-cloud left-[24%] top-[26%] h-6 w-14 animate-float [animation-delay:2s]" />

      <div className="scene-hill scene-hill-back left-[-6%] bottom-[34%] h-36 w-48" />
      <div className="scene-hill scene-hill-back right-[-8%] bottom-[33%] h-32 w-52" />
      <div className="scene-hill scene-hill-front left-[-10%] bottom-[20%] h-32 w-52" />
      <div className="scene-hill scene-hill-front right-[-10%] bottom-[18%] h-32 w-56" />

      <div className="selection-ground" />
      <div className="selection-path selection-path-left" />
      <div className="selection-path selection-path-center" />
      <div className="selection-path selection-path-right" />

      <div className="pipe left-[-0.5rem] bottom-[28%] scale-90" />
      <div className="pipe right-[-0.75rem] bottom-[29%] scale-90" />
      <div className="pixel-bush left-4 bottom-[26%]" />
      <div className="pixel-bush right-5 bottom-[24%] [transform:scale(1.2)]" />

      <div className="absolute bottom-[10%] left-1/2 z-10 -translate-x-1/2">
        <PixelCouple pose="path" size="lg" className="animate-bob" />
      </div>
    </div>
  );
};
