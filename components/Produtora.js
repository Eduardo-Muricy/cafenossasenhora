import Ornamento from "@/components/Ornamento";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const pasta = "/site cafe nossa senhora/";
const fotos = [
  { src: "IMG_2353.JPG", alt: "Sandra Momoeda ao lado de um cafeeiro carregado" },
  { src: "sandra-lavoura.jpg", alt: "Sandra Momoeda no terreiro de secagem", pos: "object-[43%_50%]" },
  { src: "IMG_5124.jpeg", alt: "Sandra Momoeda e uma senhora cuidando de mudas de café" },
  { src: "IMG_3378.JPG", alt: "Sandra Momoeda fazendo o manejo da lavoura" },
  { src: "IMG_3882.JPG", alt: "Sandra Momoeda recebendo visitantes no cafezal" },
];

export default function Produtora() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  return (
    <section id="produtora" className="bg-creme px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 data-revelar className="text-center font-display text-4xl font-medium text-floresta md:text-5xl">
          A produtora
        </h2>
        <Ornamento />

        <div data-revelar className="space-y-5 text-lg leading-relaxed font-light text-cafe">
          <p>
            Sandra Momoeda não vem de família de cafeicultores. Em 1997, morando no Japão, visitou
            uma fazenda de café no Brasil e decidiu que era aquilo que faria da vida. Estudou a
            fisiologia da planta, voltou ao Brasil com o filho de três anos e, em dezembro de 1999,
            plantou o primeiro café.
          </p>
          <p>
            Estudou no Instituto Federal de Machado, associou-se à IWCA Brasil em 2017 e participou
            da fundação da AMECAFÉ. Mesmo depois de perder a lavoura em uma queimada na serra,
            recomeçou. Hoje conduz o sítio com o mesmo cuidado do primeiro plantio.
          </p>
        </div>

        <div data-revelar className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {fotos.map((f) => (
              <div key={f.src} className="min-w-0 flex-[0_0_80%] pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%]">
                <div className="foto-zoom relative aspect-3/4 overflow-hidden rounded-md border border-cafe">
                  <Image
                    src={pasta + f.src}
                    alt={f.alt}
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
