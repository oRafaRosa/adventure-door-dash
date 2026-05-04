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
    description: "Uma surpresa interativa que eu criei pra você explorar junto comigo.",
    path: "/adventure",
    status: "active",
    icon: "🚪",
  },
  {
    slug: "convites-para-jantar",
    title: "Convites para jantar",
    description: "Um lugar para deixar registros dos nossos jantares e das ideias gostosas que quero te convidar.",
    path: "/convites",
    status: "coming-soon",
    icon: "🍽️",
  },
  {
    slug: "roteiros-surpresa",
    title: "Roteiros surpresa",
    description: "Aqui virão planos especiais, passeios e pequenas aventuras que quero preparar pra você.",
    path: "/roteiros",
    status: "coming-soon",
    icon: "✨",
  },
];
