import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTextos } from "@/textos";

const pasta = "/site cafe nossa senhora/";
const slides = ["graos-maduros.jpg", "colheita-cafe.jpg", "flores-cafe.jpg", "terreiro-secagem.jpg", "xicara-cafe.jpg"];

export default function Inicio() {
  const t = useTextos().inicio;
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section id="inicio" className="bg-creme px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-[90rem] text-center">
        <h1 data-revelar className="mx-auto max-w-5xl font-display text-4xl leading-tight font-medium text-floresta md:text-6xl lg:text-7xl">
          {t.titulo}
        </h1>
        <p data-revelar style={{ "--atraso": "150ms" }} className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg tracking-wide text-grao md:text-xl">
          {t.subtitulo.map(
            (item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="h-2.5 w-1.5 rounded-full bg-mostarda" />}
                {item}
              </span>
            )
          )}
        </p>

        <div data-revelar style={{ "--atraso": "300ms" }} className="mx-auto mt-12 max-w-[63rem] overflow-hidden rounded-md border border-cafe" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, i) => (
              <div key={s} className="relative aspect-video min-w-0 flex-[0_0_100%]">
                <Image
                  src={pasta + s}
                  alt={t.fotos[i]}
                  fill
                  sizes="(min-width: 1008px) 1008px, 100vw"
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
