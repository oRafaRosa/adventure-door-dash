import { Link } from "react-router-dom";
import { hubModules } from "@/data/hubModules";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] border border-border bg-muted p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Hub do Rafa &amp; da Gabi</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Um espaço para seus módulos, aventuras e convites.</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          O adventure door dash agora é um módulo do hub. Aqui você pode criar novos módulos no futuro para convites,
          roteiros, memórias e outras experiências pessoais.
        </p>
      </div>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hubModules.map((module) => (
          <article
            key={module.slug}
            className={`rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition duration-200 ${
              module.status === "coming-soon" ? "opacity-70 hover:shadow" : "hover:-translate-y-1 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-3xl">{module.icon}</div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {module.status === "active" ? "Ativo" : "Em breve"}
              </span>
            </div>
            <h2 className="mt-6 text-xl font-semibold">{module.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{module.description}</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              {module.status === "active" ? (
                <Link
                  to={module.path}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-background transition hover:bg-primary/90"
                >
                  Abrir módulo
                </Link>
              ) : (
                <span className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                  Em breve
                </span>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  </div>
);

export default Index;
