import { Heart, Map, Music2, Sparkles, Volume2, VolumeX } from "lucide-react";

type GameHudProps = {
  musicOn: boolean;
  soundOn: boolean;
  onToggleMusic: () => void;
  onToggleSound: () => void;
};

export const GameHud = ({ musicOn, soundOn, onToggleMusic, onToggleSound }: GameHudProps) => {
  return (
    <header className="grid gap-2 pt-1">
      <div className="pixel-panel bg-game-ink/95 px-3 py-3 text-game-cream shadow-pixel">
        <div className="grid grid-cols-[1fr_auto] items-start gap-3">
          <div className="min-w-0">
            <p className="font-display text-[8px] uppercase tracking-[0.28em] text-accent">Adventure Door Dash</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="inline-grid h-8 w-8 place-items-center border-2 border-game-cream/25 bg-game-cream/10 text-accent">
                <Map className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[8px] uppercase tracking-[0.18em] text-game-cream/75">Rafa + Gabi</p>
                <p className="truncate text-sm font-extrabold text-game-cream">3 portas secretas no mapa</p>
              </div>
            </div>
          </div>
          <div className="grid justify-items-end gap-2 text-right">
            <div className="flex items-center gap-1 text-game-heart">
              {Array.from({ length: 4 }).map((_, index) => (
                <Heart key={index} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <div className="font-display text-[8px] uppercase tracking-[0.2em] text-game-cream/75">World 1-1</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-2 font-display text-[8px] uppercase tracking-[0.16em]">
          <Sparkles className="h-4 w-4 text-accent" />
          <div className="hud-meter">
            <span className="hud-meter-fill" style={{ width: "78%" }} />
          </div>
          <span className="text-accent">Ready</span>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onToggleMusic}
          className="pixel-icon-button"
          aria-label={musicOn ? "Desligar música" : "Ligar música"}
        >
          <Music2 className={`h-4 w-4 ${musicOn ? "text-accent" : "text-muted-foreground"}`} />
        </button>
        <button
          type="button"
          onClick={onToggleSound}
          className="pixel-icon-button"
          aria-label={soundOn ? "Desligar sons" : "Ligar sons"}
        >
          {soundOn ? <Volume2 className="h-4 w-4 text-accent" /> : <VolumeX className="h-4 w-4 text-muted-foreground" />}
        </button>
      </div>
    </header>
  );
};
