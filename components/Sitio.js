import Ornamento from "@/components/Ornamento";
import Image from "next/image";

const pasta = "/site cafe nossa senhora/";
const foto = { src: "sitio-paisagem.jpg", alt: "Sítio Nossa Senhora do Café, Serra da Mantiqueira" };

export default function Sitio() {
  return (
    <section id="local" className="bg-aureola px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 data-revelar className="text-center font-display text-4xl font-medium text-floresta md:text-5xl">
          O sítio
        </h2>
        <Ornamento />

        <div data-revelar className="space-y-5 text-lg leading-relaxed font-light text-cafe">
          <p>
            O Sítio Nossa Senhora do Café fica no Distrito dos Ferreiras, em São Gonçalo do
            Sapucaí, no Sul de Minas Gerais, nas montanhas da Serra da Mantiqueira. Os cafezais
            estão a 1.100 metros de altitude, onde o clima de serra, com dias de sol e noites
            frescas, favorece uma maturação mais lenta e cafés de xícara doce e aromática.
          </p>
          <p>
            O manejo é consciente e a colheita é seletiva, feita à mão, para levar à xícara apenas
            os frutos no ponto certo. A propriedade é conduzida por mulheres e o café é produzido
            em pequena escala, com acompanhamento de perto de cada etapa, da lavoura à secagem.
          </p>
          <p>
            Nossos cafés são pontuados e já foram premiados. A produtora integra a IWCA Brasil e a
            AMECAFÉ, associação de mulheres cafeicultoras da Serra da Mantiqueira, e já exportou
            lotes especiais para a Inglaterra.
          </p>
        </div>

        <div data-revelar className="foto-zoom relative mt-12 aspect-video overflow-hidden rounded-md border border-cafe">
          <Image
            src={pasta + foto.src}
            alt={foto.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
