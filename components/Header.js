import Image from "next/image";
import { useEffect, useState } from "react";

const esquerda = [
  { label: "Produtora", href: "#produtora" },
  { label: "Sítio", href: "#sitio" },
];
const direita = [
  { label: "Cafés", href: "#cafes" },
  { label: "Contato", href: "#contato" },
];

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
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-creme/95 text-cafe backdrop-blur">
      <div className={`mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 transition-[height] duration-300 ${rolou ? "h-16" : "h-20"}`}>
        <nav aria-label="Principal, parte 1" className="hidden md:block">
          <ul className="flex justify-end gap-7 pr-10 font-display text-base tracking-wide">
            <Links itens={esquerda} />
          </ul>
        </nav>

        <a
          href="#inicio"
          aria-label="Café de Altitude da Serra da Mantiqueira — início"
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

        <nav aria-label="Principal, parte 2" className="hidden md:block">
          <ul className="flex gap-7 pl-10 font-display text-base tracking-wide">
            <Links itens={direita} />
          </ul>
        </nav>

        <button
          type="button"
          className="col-start-3 justify-self-end md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          onClick={() => setAberto(!aberto)}
        >
          <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden className="flex w-8 flex-col gap-1.5">
            <span className={`h-0.5 bg-cafe transition ${aberto ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-cafe transition ${aberto ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-cafe transition ${aberto ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Filete duplo, como o contorno de um vitral */}
      <div aria-hidden className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-cafe" />
        <div className="mt-[3px] h-px bg-mostarda" />
      </div>

      {aberto && (
        <nav id="menu-mobile" aria-label="Principal" className="border-b border-cafe bg-aureola md:hidden">
          <ul className="flex flex-col items-center gap-5 py-8 font-display text-xl tracking-wide">
            <Links itens={[...esquerda, ...direita]} onClick={fechar} />
          </ul>
        </nav>
      )}
    </header>
  );
}
