import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IDIOMAS, useTextos } from "@/textos";

function Globo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

// Botão de globo com as opções de idioma
export default function SeletorIdioma() {
  const { locale } = useRouter();
  const t = useTextos().nav;
  const [aberto, setAberto] = useState(false);
  const ref = useRef(null);
  const atual = IDIOMAS.find((i) => i.locale === locale) ?? IDIOMAS[0];

  useEffect(() => {
    if (!aberto) return;
    const foraDoMenu = (e) => !ref.current?.contains(e.target) && setAberto(false);
    const esc = (e) => e.key === "Escape" && setAberto(false);
    document.addEventListener("pointerdown", foraDoMenu);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", foraDoMenu);
      document.removeEventListener("keydown", esc);
    };
  }, [aberto]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={aberto}
        aria-controls="menu-idioma"
        onClick={() => setAberto(!aberto)}
        className="flex items-center gap-1.5 rounded-full px-2 py-1.5 transition hover:text-creme"
      >
        <Globo className="h-5 w-5" />
        <span className="text-xs font-medium tracking-[0.15em]">{atual.curto}</span>
        <span className="sr-only">— {t.idioma}</span>
      </button>

      {aberto && (
        <ul
          id="menu-idioma"
          className="absolute top-full right-0 mt-2 min-w-36 overflow-hidden rounded-md border border-cafe bg-creme py-1 text-cafe shadow-lg"
        >
          {IDIOMAS.map((i) => (
            <li key={i.locale}>
              <Link
                href="/"
                locale={i.locale}
                lang={i.locale}
                hrefLang={i.locale}
                aria-current={i.locale === atual.locale ? "true" : undefined}
                onClick={() => {
                  // Guarda a escolha para não ser redirecionado de volta pelo idioma do dispositivo
                  document.cookie = `NEXT_LOCALE=${i.locale}; path=/; max-age=31536000; SameSite=Lax`;
                  setAberto(false);
                }}
                className={`flex items-center justify-between gap-4 px-4 py-2 text-sm transition hover:bg-aureola ${
                  i.locale === atual.locale ? "font-medium text-floresta" : ""
                }`}
              >
                {i.rotulo}
                <span className="text-xs tracking-[0.15em] text-grao">{i.curto}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
