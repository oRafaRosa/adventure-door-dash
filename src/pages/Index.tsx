import { Link } from "react-router-dom";
import { hubModules } from "@/data/hubModules";

const Index = () => (
  <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,207,232,0.35),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_28%),linear-gradient(180deg,#faf5ff_0%,#fffbeb_100%)] text-slate-900">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-pink-500">Hub do Rafa &amp; da Gabi</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Um cantinho nosso pra eu salvar o que crio pra você.</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Esse site é só nosso. Aqui vou guardar as ideias, surpresas e pequenas coisas que eu fizer pra você — e sempre vou adicionar mais quando tiver algo novo.
        </p>
      </div>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hubModules.map((module) => (
          <article
            key={module.slug}
            className={`rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-soft transition duration-200 ${
              module.status === "coming-soon"
                ? "opacity-80 hover:shadow-lg"
                : "hover:-translate-y-1 hover:shadow-xl"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-3xl">{module.icon}</div>
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
                {module.status === "active" ? "Ativo" : "Em breve"}
              </span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-slate-950">{module.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              {module.status === "active" ? (
                <Link
                  to={module.path}
                  className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
                >
                  Ver agora
                </Link>
              ) : (
                <span className="rounded-full border border-dashed border-slate-200 px-4 py-2 text-sm text-slate-500">
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
