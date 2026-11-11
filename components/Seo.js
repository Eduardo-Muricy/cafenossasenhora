import Head from "next/head";
import { useRouter } from "next/router";
import { useTextos } from "@/textos";

export const SITE_URL = "https://www.nossasenhoradocafe.com";

const imagem = `${SITE_URL}/og-image.jpg`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nossa Senhora do Café",
  alternateName: "Sítio Nossa Senhora do Café",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: imagem,
  slogan: "Cafés especiais · Produzido por mulher",
  founder: { "@type": "Person", name: "Sandra Momoeda" },
  email: "momoedapersonal@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Distrito dos Ferreiras",
    addressLocality: "São Gonçalo do Sapucaí",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+55-35-99819-7716", contactType: "sales", areaServed: "BR", availableLanguage: "Portuguese" },
    { "@type": "ContactPoint", telephone: "+55-11-95222-5806", contactType: "sales", areaServed: "BR", availableLanguage: "Portuguese" },
  ],
  sameAs: ["https://instagram.com/cafe.nossasenhoradocafe"],
  memberOf: [
    { "@type": "Organization", name: "IWCA Brasil" },
    { "@type": "Organization", name: "AMECAFÉ" },
  ],
};

export default function Seo() {
  const { locale, defaultLocale } = useRouter();
  const { titulo, descricao, ogAlt, ogLocale } = useTextos().seo;
  const url = locale === defaultLocale ? `${SITE_URL}/` : `${SITE_URL}/${locale}`;

  return (
    <Head>
      <title>{titulo}</title>
      <meta name="description" content={descricao} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="pt-BR" href={`${SITE_URL}/`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Nossa Senhora do Café" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={titulo} />
      <meta property="og:description" content={descricao} />
      <meta property="og:image" content={imagem} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titulo} />
      <meta name="twitter:description" content={descricao} />
      <meta name="twitter:image" content={imagem} />

      <meta name="geo.region" content="BR-MG" />
      <meta name="geo.placename" content="São Gonçalo do Sapucaí" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...jsonLd, description: descricao }) }}
      />
    </Head>
  );
}
