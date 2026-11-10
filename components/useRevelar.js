import { useEffect } from "react";

// Adiciona .revelado aos elementos [data-revelar] quando entram na tela
export default function useRevelar() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-revelar]");
    const io = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revelado");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
