import { PropsWithChildren } from "react";

export const PixelWorld = ({ children }: PropsWithChildren) => {
  return (
    <main className="game-shell relative min-h-screen overflow-hidden text-game-ink">
      <div className="world-grid absolute inset-0 opacity-30" />
      <div className="world-cloud left-[-1rem] top-12 h-10 w-24 animate-float" />
      <div className="world-cloud right-4 top-20 h-8 w-20 animate-float [animation-delay:1.4s]" />
      <div className="world-cloud left-10 top-40 h-7 w-16 animate-float [animation-delay:2.1s]" />
      <div className="world-cloud right-10 top-52 h-9 w-24 animate-float [animation-delay:2.8s]" />
      <div className="world-orb left-[-10%] top-[10%] h-56 w-56" />
      <div className="world-orb right-[-16%] top-[28%] h-64 w-64 opacity-70" />
      <div className="world-hill world-hill-back left-[-6%] bottom-28 h-44 w-56" />
      <div className="world-hill world-hill-back right-[-10%] bottom-24 h-40 w-64" />
      <div className="world-hill world-hill-front left-[-18%] bottom-0 h-48 w-72" />
      <div className="world-hill world-hill-front right-[-18%] bottom-0 h-44 w-72" />
      <div className="world-ground absolute bottom-0 left-0 right-0 h-28" />
      <div className="world-soil absolute bottom-0 left-0 right-0 h-20" />
      <div className="world-meadow absolute bottom-[5.5rem] left-0 right-0 h-24" />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="absolute animate-sparkle text-sm text-game-sparkle"
            style={{
              left: `${8 + ((index * 23) % 84)}%`,
              top: `${18 + ((index * 37) % 58)}%`,
              animationDelay: `${index * 0.23}s`,
            }}
          >
            {index % 3 === 0 ? "♥" : "✦"}
          </span>
        ))}
      </div>
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-3 py-4 sm:px-4 sm:py-5">
        {children}
      </section>
    </main>
  );
};
