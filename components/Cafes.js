import Ornamento from "@/components/Ornamento";
const variedades = [
  { nome: "Bourbon Vermelho", cor: "bg-bourbon", texto: "Variedade tradicional, conhecida pela doçura e pela xícara aromática." },
  { nome: "Catuaí Vermelho", cor: "bg-mostarda", texto: "Variedade clássica das montanhas de Minas, de bom equilíbrio e corpo." },
  { nome: "Catiguá", cor: "bg-oliva", texto: "Variedade de planta vigorosa e xícara delicada e aromática." },
];

export default function Cafes() {
  return (
    <section id="sobre-o-cafe" className="bg-creme px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 data-revelar className="text-center font-display text-4xl font-medium text-floresta md:text-5xl">
          Nossos cafés
        </h2>
        <Ornamento />

        <p data-revelar className="text-lg leading-relaxed font-light text-cafe">
          Trabalhamos com três variedades cultivadas no sítio. Valores, formatos de embalagem e
          disponibilidade da safra variam; entre em contato para receber a cotação.
        </p>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {variedades.map((v, i) => (
            <li key={v.nome} data-revelar style={{ "--atraso": `${i * 120}ms` }} className="hover:shadow-[4px_4px_0_var(--kraft)] rounded-md border border-cafe bg-white/40 p-6 text-center">
              <span aria-hidden className={`mx-auto block h-6 w-4 rounded-full ${v.cor}`} />
              <h3 className="mt-4 font-display text-xl font-medium text-floresta">{v.nome}</h3>
              <p className="mt-3 leading-relaxed font-light text-cafe">{v.texto}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-lg font-light text-cafe">
          Para cotar preço, solicitar amostras ou saber a disponibilidade atual,{" "}
          <a href="#contato" className="font-medium text-floresta underline decoration-mostarda underline-offset-4 hover:text-bourbon">
            fale com a gente
          </a>
          .
        </p>
      </div>
    </section>
  );
}
