import Image from "next/image";
import { useEffect, useState } from "react";
import { useTextos } from "@/textos";
import SeletorIdioma from "@/components/SeletorIdioma";

function Links({ itens, onClick, className }) {
  return itens.map((i) => (
    <li key={i.href}>
      <a href={i.href} onClick={onClick} className={`nav-link ${className ?? ""}`}>
        {i.label}
      </a>
    </li>
  ));
}

export default function Header() {
  const t = useTextos().nav;
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);
  const [rolou, setRolou] = useState(false);

  const esquerda = [
    { label: t.produtora, href: "#produtora" },
    { label: t.sitio, href: "#sitio" },
  ];
  const direita = [
    { label: t.cafes, href: "#cafes" },
    { label: t.contato, href: "#contato" },
  ];

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-floresta/95 text-aureola backdrop-blur">
      <div className={`mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 transition-[height] duration-300 ${rolou ? "h-16" : "h-20"}`}>
        <nav aria-label="Principal, parte 1" className="hidden md:block">
          <ul className="flex justify-end gap-7 pr-10 font-display text-base tracking-wide">
            <Links itens={esquerda} />
          </ul>
        </nav>

        <a
          href="#inicio"
          aria-label={t.logo}
          className="col-start-2 justify-self-center transition-transform duration-500 hover:-rotate-3 max-md:col-start-1 max-md:justify-self-start"
        >
          <Image
            src="/site cafe nossa senhora/logo-oficial.png"
            alt=""
            width={200}
            height={400}
            priority
            className={`w-auto transition-[height] duration-300 ${rolou ? "h-12" : "h-[4.25rem]"}`}
          />
        </a>

        <div className="col-start-3 flex items-center justify-end gap-4 md:justify-between">
          <nav aria-label="Principal, parte 2" className="hidden md:block">
            <ul className="flex gap-7 pl-10 font-display text-base tracking-wide">
              <Links itens={direita} />
            </ul>
          </nav>

          <SeletorIdioma />

          <button
            type="button"
            className="md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            onClick={() => setAberto(!aberto)}
          >
            <span className="sr-only">{aberto ? t.fecharMenu : t.abrirMenu}</span>
            <span aria-hidden className="flex w-8 flex-col gap-1.5">
              <span className={`h-0.5 bg-aureola transition ${aberto ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-aureola transition ${aberto ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-aureola transition ${aberto ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {aberto && (
        <nav id="menu-mobile" aria-label="Principal" className="border-b border-cafe bg-aureola text-cafe md:hidden">
          <ul className="flex flex-col items-center gap-5 py-8 font-display text-xl tracking-wide">
            <Links itens={[...esquerda, ...direita]} onClick={fechar} />
          </ul>
        </nav>
      )}
    </header>
  );
}
