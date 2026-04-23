import { PropsWithChildren } from "react";

export const PixelWorld = ({ children }: PropsWithChildren) => {
  return (
    <main className="game-shell relative min-h-screen overflow-hidden text-game-ink">
      <div className="cloud left-[-2rem] top-12 h-10 w-24 animate-float" />
      <div className="cloud right-4 top-24 h-8 w-20 animate-float [animation-delay:1.4s]" />
      <div className="cloud left-12 top-44 h-7 w-16 animate-float [animation-delay:2.1s]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-secondary/45" />
      <div className="absolute bottom-8 left-0 right-0 h-6 bg-secondary/25 blur-sm" />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {Array.from({ length: 16 }).map((_, index) => (
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
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-5">
        {children}
      </section>
    </main>
  );
};