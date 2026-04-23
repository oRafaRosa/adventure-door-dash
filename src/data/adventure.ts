export type DoorTheme = "red" | "blue" | "green";

export type AdventureDoor = {
  id: number;
  label: string;
  theme: DoorTheme;
  title: string;
  subtitle: string;
  icons: string[];
  activities: string[];
  eyebrow: string;
  reward: string;
  badge: string;
  world: string;
  time: string;
  coins: number;
  score: string;
  summary: string;
  companionLine: string;
};

export type AdventureSet = {
  brandName: string;
  studio: string;
  title: string;
  intro: string;
  prompt: string;
  doors: AdventureDoor[];
};

export const adventureSet: AdventureSet = {
  brandName: "Adventure Door Dash",
  studio: "R2 Solutions Group - Tech & Consulting",
  title: "3 portas secretas. 1 roteiro surpresa.",
  intro: "Rafa e Gabi so precisam abrir uma porta. O resto vira fase bonus.",
  prompt: "Escolha uma porta e revela qual vai ser o nosso proximo roteiro.",
  doors: [
    {
      id: 1,
      label: "Porta 1",
      theme: "red",
      title: "Pico do Jaragua",
      subtitle: "sunrise route",
      icons: ["🌄", "🥾", "🏋️", "🍜"],
      activities: ["Acordar cedo", "Trilha do Pico do Jaragua", "Treinar numa academia diferente", "Comer algo diferente"],
      eyebrow: "PEAK OF HEARTS",
      reward: "VISTA LENDARIA",
      badge: "PICO DOS CORACOES",
      world: "1-1",
      time: "247",
      coins: 143,
      score: "98765",
      summary: "Uma rota de amanhecer, altitude e final surpresa fora da rotina.",
      companionLine: "Vocês desbloquearam a fase do nascer do sol.",
    },
    {
      id: 2,
      label: "Porta 2",
      theme: "blue",
      title: "Escalada",
      subtitle: "vertical bonus",
      icons: ["🧗", "⛰️", "🏋️", "🍣"],
      activities: ["Acordar cedo", "Escalada", "Treinar numa academia diferente", "Comer algo diferente"],
      eyebrow: "CLIMB QUEST",
      reward: "ROTA VERTICAL",
      badge: "CHECKPOINT DE ALTURA",
      world: "2-1",
      time: "198",
      coins: 167,
      score: "86420",
      summary: "Um roteiro de coragem com desafio fisico, treino novo e refeicao fora do script.",
      companionLine: "Essa porta abriu o modo coragem para Rafa e Gabi.",
    },
    {
      id: 3,
      label: "Porta 3",
      theme: "green",
      title: "Neon no Parque",
      subtitle: "secret night route",
      icons: ["🌿", "🏃", "🍔", "🪩"],
      activities: ["Acordar cedo", "Correr em algum parque diferente", "Comer algo diferente", "Pula-pula neon"],
      eyebrow: "NEON BONUS",
      reward: "NOITE SURPRESA",
      badge: "FASE SECRETA",
      world: "3-1",
      time: "123",
      coins: 187,
      score: "45120",
      summary: "Comeca leve durante o dia e fecha em bonus stage neon a noite.",
      companionLine: "Um caminho que sai do parque e termina em fase secreta.",
    },
  ],
};
