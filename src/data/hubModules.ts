export type HubModule = {
  slug: string;
  title: string;
  description: string;
  path: string;
  status: "active" | "coming-soon";
  icon: string;
};

export const hubModules: HubModule[] = [
  {
    slug: "adventure-door-dash",
    title: "Adventure Door Dash",
    description: "Uma experiência mobile em pixel art com portas secretas e surpresas para o Rafa e a Gabi.",
    path: "/adventure",
    status: "active",
    icon: "🚪",
  },
  {
    slug: "convites-para-jantar",
    title: "Convites para jantar",
    description: "Planeje o próximo jantar especial com ideias, data e local para o casal.",
    path: "/convites",
    status: "coming-soon",
    icon: "🍽️",
  },
  {
    slug: "roteiros-surpresa",
    title: "Roteiros surpresa",
    description: "Guarde roteiros e experiências para futuras aventuras e encontros.",
    path: "/roteiros",
    status: "coming-soon",
    icon: "✨",
  },
];
