import { useEffect, useRef } from "react";

type SoundName = "tap" | "magic" | "success";

type SoundEngineProps = {
  musicOn: boolean;
  soundOn: boolean;
};

export const SoundEngine = ({ musicOn, soundOn }: SoundEngineProps) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const musicIntervalRef = useRef<number | null>(null);
  const noteIndexRef = useRef(0);

  useEffect(() => {
    return () => {
      if (musicIntervalRef.current) {
        window.clearInterval(musicIntervalRef.current);
      }
      audioContextRef.current?.close().catch(() => undefined);
    };
  }, []);

  useEffect(() => {
    const unlockAudio = () => {
      if (!audioContextRef.current) {
        const context = new AudioContext();
        const gain = context.createGain();
        gain.gain.value = 0.18;
        gain.connect(context.destination);
        audioContextRef.current = context;
        masterGainRef.current = gain;
      }

      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume().catch(() => undefined);
      }
    };

    const onPointerDown = () => unlockAudio();

    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    const playPulse = (frequency: number, duration: number, type: OscillatorType, volume: number, detune = 0) => {
      const context = audioContextRef.current;
      const master = masterGainRef.current;
      if (!context || !master) return;

      const start = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, start);
      oscillator.detune.setValueAtTime(detune, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      oscillator.connect(gain);
      gain.connect(master);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.03);
    };

    const playSound = (name: SoundName) => {
      if (!soundOn) return;

      if (name === "tap") {
        playPulse(660, 0.06, "square", 0.05);
        playPulse(880, 0.05, "square", 0.035, 12);
      }

      if (name === "magic") {
        playPulse(392, 0.18, "triangle", 0.04);
        playPulse(587, 0.24, "triangle", 0.045);
        playPulse(784, 0.28, "square", 0.035);
      }

      if (name === "success") {
        playPulse(523.25, 0.09, "square", 0.05);
        playPulse(659.25, 0.12, "square", 0.05);
        playPulse(783.99, 0.18, "square", 0.045);
      }
    };

    const onCustomSound = (event: Event) => {
      const customEvent = event as CustomEvent<{ name: SoundName }>;
      playSound(customEvent.detail.name);
    };

    window.addEventListener("love-doors:sound", onCustomSound);

    return () => window.removeEventListener("love-doors:sound", onCustomSound);
  }, [soundOn]);

  useEffect(() => {
    if (!musicOn) {
      if (musicIntervalRef.current) {
        window.clearInterval(musicIntervalRef.current);
        musicIntervalRef.current = null;
      }
      return;
    }

    const melody = [392, 523.25, 587.33, 659.25, 587.33, 523.25, 440, 523.25];
    const bass = [196, 196, 220, 220, 174.61, 174.61, 164.81, 164.81];

    const tick = () => {
      const context = audioContextRef.current;
      const master = masterGainRef.current;
      if (!context || !master) return;

      const step = noteIndexRef.current % melody.length;
      const now = context.currentTime;

      const lead = context.createOscillator();
      const leadGain = context.createGain();
      lead.type = "square";
      lead.frequency.setValueAtTime(melody[step], now);
      leadGain.gain.setValueAtTime(0.0001, now);
      leadGain.gain.linearRampToValueAtTime(0.03, now + 0.01);
      leadGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      lead.connect(leadGain);
      leadGain.connect(master);
      lead.start(now);
      lead.stop(now + 0.24);

      if (step % 2 === 0) {
        const low = context.createOscillator();
        const lowGain = context.createGain();
        low.type = "triangle";
        low.frequency.setValueAtTime(bass[step], now);
        lowGain.gain.setValueAtTime(0.0001, now);
        lowGain.gain.linearRampToValueAtTime(0.018, now + 0.01);
        lowGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
        low.connect(lowGain);
        lowGain.connect(master);
        low.start(now);
        low.stop(now + 0.3);
      }

      noteIndexRef.current += 1;
    };

    tick();
    musicIntervalRef.current = window.setInterval(tick, 280);

    return () => {
      if (musicIntervalRef.current) {
        window.clearInterval(musicIntervalRef.current);
        musicIntervalRef.current = null;
      }
    };
  }, [musicOn]);

  return null;
};
