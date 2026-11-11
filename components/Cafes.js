import Ornamento from "@/components/Ornamento";

import { useTextos } from "@/textos";

// Cor do grão de cada variedade, na mesma ordem das listas em /textos
const cores = ["bg-bourbon", "bg-mostarda", "bg-oliva", "bg-aureola", "bg-kraft", "bg-grao"];

export default function Cafes() {
  const t = useTextos().cafes;
  return (
    <section id="cafes" className="bg-aureola px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 data-revelar className="text-center font-display text-4xl font-medium text-floresta md:text-5xl">
          {t.titulo}
        </h2>
        <Ornamento />

        <div data-revelar className="space-y-5 text-lg leading-relaxed font-light text-cafe">
          {t.paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <ul className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-5">
        {t.variedades.map((v, i) => (
          <li
            key={v.nome}
            data-revelar
            style={{ "--atraso": `${(i % 3) * 120}ms` }}
            className="flex w-full flex-col rounded-md border border-cafe bg-white/40 p-6 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span aria-hidden className={`block h-6 w-4 rounded-full border border-cafe/30 ${cores[i] ?? "bg-kraft"}`} />
                <h3 className="mt-4 font-display text-xl font-medium text-floresta">{v.nome}</h3>
              </div>
              <p className="text-right font-display leading-none text-bourbon">
                <span className="block text-4xl font-medium">{v.pontos}</span>
                <span className="mt-1 block text-xs tracking-[0.18em] uppercase">{t.pontos}</span>
              </p>
            </div>

            {v.destaque && <p className="mt-3 font-light text-cafe italic">{v.destaque}</p>}

            <p className="mt-5 text-xs font-medium tracking-[0.18em] text-grao uppercase">{t.notasSensoriais}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {v.notas.map((n) => (
                <li key={n} className="rounded-full border border-kraft px-2.5 py-0.5 text-sm text-cafe">
                  {n}
                </li>
              ))}
            </ul>

            {v.perfil && (
              <dl className="mt-5 space-y-1 text-sm">
                {v.perfil.map(([k, val]) => (
                  <div key={k} className="flex gap-2">
                    <dt className="font-medium text-floresta">{k}:</dt>
                    <dd className="font-light text-cafe">{val}</dd>
                  </div>
                ))}
              </dl>
            )}

            {v.prova && (
              <p className="mt-auto pt-5 text-xs font-light tracking-wide text-grao">{v.prova}</p>
            )}
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-light text-cafe">
        {t.chamada}{" "}
        <a href="#contato" className="font-medium text-floresta underline decoration-mostarda underline-offset-4 hover:text-bourbon">
          {t.chamadaLink}
        </a>
        .
      </p>
    </section>
  );
}
