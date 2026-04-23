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
  title: "Escolha nossa próxima aventura",
  prompt: "Qual porta vamos escolher juntos?",
  doors: [
    {
      id: 1,
      label: "Porta 1",
      theme: "red",
      title: "Pico + Fondue",
      icons: ["🌄", "🥾", "🍷", "🍜"],
      activities: ["Trilha ao amanhecer", "Foto no mirante", "Fondue surpresa", "Pôr do sol juntos"],
    },
    {
      id: 2,
      label: "Porta 2",
      theme: "blue",
      title: "Escalada + Barco",
      icons: ["🧗", "☀️", "🍣", "🎶"],
      activities: ["Escalada divertida", "Passeio de barco", "Jantar especial", "Noite neon"],
    },
    {
      id: 3,
      label: "Porta 3",
      theme: "green",
      title: "Parque + Trampolim",
      icons: ["🌿", "🏃", "🥐", "🪩"],
      activities: ["Café da manhã caprichado", "Passeio no parque", "Brunch gostoso", "Escape neon"],
    },
  ],
};
