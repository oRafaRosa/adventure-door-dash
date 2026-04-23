type GameHudProps = {
  musicOn: boolean;
  soundOn: boolean;
  onToggleMusic: () => void;
  onToggleSound: () => void;
};

export const GameHud = ({ musicOn, soundOn, onToggleMusic, onToggleSound }: GameHudProps) => {
  return (
    <header className="flex items-center justify-between gap-2 pt-1 font-display text-sm">
      <div className="pixel-border flex items-center gap-2 rounded-xl bg-card/90 px-3 py-2 shadow-soft">
        <span aria-hidden="true">♥♥♥</span>
        <span>12 moedas</span>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onToggleMusic}
          className="pixel-border grid h-10 w-10 place-items-center rounded-xl bg-card/90 transition active:translate-y-1"
          aria-label={musicOn ? "Desligar música" : "Ligar música"}
        >
          {musicOn ? "♫" : "♬"}
        </button>
        <button
          type="button"
          onClick={onToggleSound}
          className="pixel-border grid h-10 w-10 place-items-center rounded-xl bg-card/90 transition active:translate-y-1"
          aria-label={soundOn ? "Desligar sons" : "Ligar sons"}
        >
          {soundOn ? "🔊" : "🔇"}
        </button>
      </div>
    </header>
  );
};