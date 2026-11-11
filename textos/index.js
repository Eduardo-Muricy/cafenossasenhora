import { useRouter } from "next/router";
import pt from "./pt";
import en from "./en";

export const IDIOMAS = [
  { locale: "pt-BR", rotulo: "Português", curto: "PT" },
  { locale: "en", rotulo: "English", curto: "EN" },
];

const dicionarios = { "pt-BR": pt, en };

export function useTextos() {
  const { locale } = useRouter();
  return dicionarios[locale] ?? pt;
}
