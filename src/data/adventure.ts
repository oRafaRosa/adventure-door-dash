export type DoorTheme = "red" | "blue" | "green";

export type AdventureDoor = {
  id: number;
  label: string;
  theme: DoorTheme;
  title: string;
  icons: string[];
  activities: string[];
};

export type AdventureSet = {
  brandName: string;
  title: string;
  prompt: string;
  doors: AdventureDoor[];
};

export const adventureSet: AdventureSet = {
  brandName: "Porta do Encontro",
  title: "Escolha Nossa Aventura",
  prompt: "Qual porta vamos escolher juntos?",
  doors: [
    {
      id: 1,
      label: "Porta 1",
      theme: "red",
      title: "Rota Pico do Jaraguá",
      icons: ["🌄", "🥾", "🏋️", "🍜"],
      activities: ["Acordar cedo", "trilha do pico do jaragua", "ir treinar numa academia diferente", "comer algo diferente"],
    },
    {
      id: 2,
      label: "Porta 2",
      theme: "blue",
      title: "Rota Escalada",
      icons: ["☀️", "🧗", "💪", "🍣"],
      activities: ["Acordar cedo", "Escalada", "ir treinar numa academia diferente", "comer algo diferente"],
    },
    {
      id: 3,
      label: "Porta 3",
      theme: "green",
      title: "Rota Neon no Parque",
      icons: ["🌤️", "🏃", "🥐", "🪩"],
      activities: ["Acordar cedo", "Correr em algum parque diferente", "Comer algo diferente", "Pula pula neon"],
    },
  ],
};