import Ornamento from "@/components/Ornamento";
import Image from "next/image";
import { useTextos } from "@/textos";

const pasta = "/site cafe nossa senhora/";
const foto = "sitio-paisagem.jpg";

export default function Sitio() {
  const t = useTextos().sitio;
  return (
    <section id="sitio" className="bg-creme px-6 py-16 md:py-24">
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

        <div data-revelar className="foto-zoom relative mt-12 aspect-video overflow-hidden rounded-md border border-cafe">
          <Image
            src={pasta + foto}
            alt={t.foto}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
