import { PropsWithChildren } from "react";

export const PixelWorld = ({ children }: PropsWithChildren) => {
  return (
    <main className="game-shell relative min-h-screen overflow-hidden text-game-ink">
      <div className="cloud left-[-1rem] top-12 h-10 w-24 animate-float" />
      <div className="cloud right-4 top-20 h-8 w-20 animate-float [animation-delay:1.4s]" />
      <div className="cloud left-10 top-40 h-7 w-16 animate-float [animation-delay:2.1s]" />
      <div className="cloud right-10 top-52 h-9 w-24 animate-float [animation-delay:2.8s]" />
      <div className="hill hill-back left-[-6%] bottom-28 h-44 w-56" />
      <div className="hill hill-back right-[-10%] bottom-24 h-40 w-64" />
      <div className="hill hill-front left-[-18%] bottom-0 h-48 w-72" />
      <div className="hill hill-front right-[-18%] bottom-0 h-44 w-72" />
      <div className="pipe left-[-1rem] bottom-24" />
      <div className="pipe right-[-0.5rem] bottom-24" />
      <div className="pixel-bush left-10 bottom-28" />
      <div className="pixel-bush right-12 bottom-32 [transform:scale(1.08)]" />
      <div className="pixel-fence left-1/2 bottom-[5.7rem] -translate-x-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-secondary/55" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--game-soil))_100%)]" />
      <div className="absolute bottom-[5.5rem] left-0 right-0 h-24 bg-game-meadow/50" />
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
