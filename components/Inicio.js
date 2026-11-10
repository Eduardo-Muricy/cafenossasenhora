import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const pasta = "/site cafe nossa senhora/";
const slides = [
  { src: "graos-maduros.jpg", alt: "Grãos de café maduros no pé" },
  { src: "colheita-cafe.jpg", alt: "Colheita do café" },
  { src: "flores-cafe.jpg", alt: "Flores do cafeeiro" },
  { src: "terreiro-secagem.jpg", alt: "Café secando no terreiro" },
  { src: "xicara-cafe.jpg", alt: "Xícara de café" },
];

export default function Inicio() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section id="inicio" className="bg-floresta px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-[90rem] text-center">
        <h1 data-revelar className="mx-auto max-w-5xl font-display text-4xl leading-tight font-medium text-aureola md:text-6xl lg:text-7xl">
          Café de Altitude da Serra da Mantiqueira
        </h1>
        <p data-revelar style={{ "--atraso": "150ms" }} className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg tracking-wide text-creme/80 md:text-xl">
          {["Sítio Nossa Senhora do Café", "São Gonçalo do Sapucaí", "Sul de Minas Gerais", "1.100 m"].map(
            (t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="h-2.5 w-1.5 rounded-full bg-mostarda" />}
                {t}
              </span>
            )
          )}
        </p>

        <div data-revelar style={{ "--atraso": "300ms" }} className="mx-auto mt-12 max-w-[63rem] overflow-hidden rounded-md border border-aureola/25" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, i) => (
              <div key={s.src} className="relative aspect-video min-w-0 flex-[0_0_100%]">
                <Image
                  src={pasta + s.src}
                  alt={s.alt}
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
