import Ornamento from "@/components/Ornamento";
const canais = [
  { rotulo: "WhatsApp (MG)", valor: "(35) 99819-7716", href: "https://wa.me/5535998197716" },
  { rotulo: "Telefone / WhatsApp (SP)", valor: "(11) 95222-5806", href: "https://wa.me/5511952225806" },
  { rotulo: "E-mail", valor: "sandrammcafe66@gmail.com", href: "mailto:sandrammcafe66@gmail.com" },
  { rotulo: "Instagram", valor: "@cafe.nossasenhoradocafe", href: "https://instagram.com/cafe.nossasenhoradocafe" },
];

export default function Contato() {
  return (
      <section id="contato" className="bg-floresta px-6 py-16 text-creme md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-revelar className="font-display text-4xl font-medium text-aureola md:text-5xl">Contato</h2>
          <Ornamento claro />

          <p className="text-lg font-light">Para cotação de preços e amostras, fale diretamente conosco.</p>

          <ul data-revelar className="mt-10 grid gap-4 sm:grid-cols-2">
            {canais.map((c) => (
              <li key={c.rotulo}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block rounded-md border border-creme/30 px-5 py-4 transition hover:border-mostarda hover:bg-creme/5"
                >
                  <span className="block text-xs font-medium tracking-[0.18em] text-kraft uppercase">{c.rotulo}</span>
                  <span className="mt-1 block text-lg break-words">{c.valor}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-light text-creme/80">
            Sítio Nossa Senhora do Café
            <br />
            Distrito dos Ferreiras, São Gonçalo do Sapucaí - MG
          </p>
        </div>
      </section>
  );
}
