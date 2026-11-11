import Ornamento from "@/components/Ornamento";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTextos } from "@/textos";

const pasta = "/site cafe nossa senhora/";
const fotos = [
  { src: pasta + "IMG_2353.JPG" },
  { src: "/Cafes/IMG_2464.JPG", pos: "object-[50%_30%]" },
  { src: pasta + "IMG_5124.jpeg" },
  { src: pasta + "IMG_3378.JPG" },
  { src: pasta + "IMG_3882.JPG" },
];

export default function Produtora() {
  const t = useTextos().produtora;
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  return (
    <section id="produtora" className="bg-aureola px-6 py-16 md:py-24">
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

        <div data-revelar className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {fotos.map((f, i) => (
              <div key={f.src} className="min-w-0 flex-[0_0_80%] pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%]">
                <div className="foto-zoom relative aspect-3/4 overflow-hidden rounded-md">
                  <Image
                    src={f.src}
                    alt={t.fotos[i]}
                    fill
                    sizes="(min-width: 768px) 256px, (min-width: 640px) 50vw, 80vw"
                    className={`object-cover ${f.pos ?? ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
