import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import Produtora from "@/components/Produtora";
import Sitio from "@/components/Sitio";
import Cafes from "@/components/Cafes";
import Contato from "@/components/Contato";
import useRevelar from "@/components/useRevelar";

const titulo = Cinzel({ variable: "--font-titulo", subsets: ["latin"], weight: ["400", "500", "600"] });
const corpo = Plus_Jakarta_Sans({ variable: "--font-corpo", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function Home() {
  useRevelar();
  return (
    <div className={`${titulo.variable} ${corpo.variable} font-sans`}>
      <Seo />
      <Header />
      <main>
        <Inicio />
        <Produtora />
        <Sitio />
        <Cafes />
        <Contato />
      </main>
      <footer className="bg-cafe px-6 py-6 text-center text-sm font-light text-kraft">
        Nossa Senhora do Café · Cafés especiais · Serra da Mantiqueira
      </footer>
    </div>
  );
}
