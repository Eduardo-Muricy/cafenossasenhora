/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  reactStrictMode: true,
  // Português em "/", inglês em "/en".
  // Quem chega em "/" com o dispositivo em inglês vai para "/en";
  // a escolha feita no globo fica salva no cookie NEXT_LOCALE e tem prioridade.
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
  },
};

export default nextConfig;
