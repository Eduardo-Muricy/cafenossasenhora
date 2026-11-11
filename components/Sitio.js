import Ornamento from "@/components/Ornamento";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTextos } from "@/textos";

// Fotos oficiais do sítio (public/sitio)
const fotos = [
  { src: "/sitio/IMG_8999.jpeg", pos: "object-[50%_58%]" },
  { src: "/sitio/IMG_4065.JPG", pos: "object-[50%_55%]" },
  { src: "/sitio/3.JPG", pos: "object-center" },
];

export default function Sitio() {
  const t = useTextos().sitio;
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
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

        <div data-revelar className="mt-12 overflow-hidden rounded-md border border-cafe" ref={emblaRef}>
          <div className="flex">
            {fotos.map((f, i) => (
              <div key={f.src} className="relative aspect-4/3 min-w-0 flex-[0_0_100%]">
                <Image
                  src={f.src}
                  alt={t.fotos[i]}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className={`object-cover ${f.pos}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
