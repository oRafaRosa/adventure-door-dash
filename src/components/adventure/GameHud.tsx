type GameHudProps = {
  musicOn: boolean;
  soundOn: boolean;
  onToggleMusic: () => void;
  onToggleSound: () => void;
};

export const GameHud = ({ musicOn, soundOn, onToggleMusic, onToggleSound }: GameHudProps) => {
  return (
    <header className="grid grid-cols-[1fr_auto] items-start gap-2 pt-1 font-display text-[9px] leading-relaxed sm:text-[10px]">
      <div className="grid gap-2">
        <div className="pixel-border flex items-center justify-between gap-3 rounded-none bg-card/90 px-3 py-2 shadow-soft">
          <div className="grid gap-1">
            <span>PLAYER 1</span>
            <span className="text-game-heart">♥ ♥ ♥</span>
          </div>
          <div className="text-right">
            <p>COINS x03</p>
            <p>WORLD 1-1</p>
          </div>
        </div>
        <div className="pixel-border flex items-center justify-between rounded-none bg-game-ink/90 px-3 py-2 text-game-cream shadow-soft">
          <span>TIME 00:00</span>
          <span>LOVE QUEST</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onToggleMusic}
          className="pixel-border grid h-11 w-11 place-items-center rounded-none bg-card/90 text-sm transition active:translate-y-1"
          aria-label={musicOn ? "Desligar música" : "Ligar música"}
        >
          {musicOn ? "♫" : "×♫"}
        </button>
        <button
          type="button"
          onClick={onToggleSound}
          className="pixel-border grid h-11 w-11 place-items-center rounded-none bg-card/90 text-sm transition active:translate-y-1"
          aria-label={soundOn ? "Desligar sons" : "Ligar sons"}
        >
          {soundOn ? "SFX" : "OFF"}
        </button>
      </div>
    </header>
  );
};
