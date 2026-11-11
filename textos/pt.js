// Textos do site em português. A versão em inglês fica em ./en.js com a mesma estrutura.
const pt = {
  seo: {
    titulo: "Nossa Senhora do Café | Café de Altitude da Serra da Mantiqueira",
    descricao:
      "Cafés especiais produzidos por mulher no Sítio Nossa Senhora do Café, em São Gonçalo do Sapucaí, Sul de Minas Gerais, entre 1.100 e 1.250 m de altitude na Serra da Mantiqueira. Catuaí Vermelho, Catucaí Amarelo, Catiguá, Bourbon Vermelho, Arara, Paraíso MG2 e IAC 125 RN, de 84 a 87,5 pontos.",
    ogAlt: "Cafezais do Sítio Nossa Senhora do Café na Serra da Mantiqueira",
    ogLocale: "pt_BR",
  },

  nav: {
    produtora: "Produtora",
    sitio: "Sítio",
    cafes: "Nossos Cafés",
    contato: "Contato",
    logo: "Café de Altitude da Serra da Mantiqueira — início",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    idioma: "Idioma",
  },

  inicio: {
    titulo: "Café de Altitude da Serra da Mantiqueira",
    subtitulo: ["Sítio Nossa Senhora do Café", "São Gonçalo do Sapucaí", "Sul de Minas Gerais", "1100-1250m"],
    fotos: [
      "Cacho de café vermelho maduro no pé",
      "Cafezais nas montanhas da Serra da Mantiqueira",
      "Cacho de café amarelo maduro no pé",
      "Peneira cheia de café cereja recém-colhido",
      "Vista do sítio pela janela, com a serra ao fundo",
      "Galho de cafeeiro carregado de frutos vermelhos",
    ],
  },

  produtora: {
    titulo: "A produtora",
    paragrafos: [
      "Sandra Maria, de origem paulista, decidiu tornar-se a primeira geração da família na cafeicultura. Em 1997, abriu mão de sua vida estável no Japão após vir visitar seu querido pai e se apaixonar pelo café ao conhecer a fazenda de amigos dele. Decidida, debruçou-se sobre os livros e estudou a fundo a cultura cafeeira. Em 1999, retornou definitivamente ao Brasil com seus três filhos pequenos e, em dezembro daquele mesmo ano, plantou seu primeiro pé de café, dando origem à belíssima história que é escrita a cada dia até hoje.",
      "Estudou no Instituto Federal de Machado, associou-se à International Women's Coffee Alliance (IWCA Brasil) em 2017 e é uma das cofundadoras da AMECAFÉ, associação de grande reconhecimento no cenário cafeeiro.",
      "Hoje, conduz o sítio com o mesmo cuidado e profissionalismo do primeiro plantio, atuando fortemente no empoderamento e na união de mulheres cafeicultoras da região. Além disso, seu filho mais novo, que cresceu acompanhando de perto sua dedicação, também auxilia nas atividades do sítio.",
    ],
    fotos: [
      "Sandra Momoeda ao lado de um cafeeiro carregado",
      "Sandra Momoeda segurando dois pacotes do seu café no cafezal",
      "Sandra Momoeda e uma senhora cuidando de mudas de café",
      "Sandra Momoeda fazendo o manejo da lavoura",
      "Sandra Momoeda recebendo visitantes no cafezal",
    ],
  },

  sitio: {
    titulo: "O sítio",
    paragrafos: [
      "O Sítio Nossa Senhora do Café fica no Distrito dos Ferreiras, em São Gonçalo do Sapucaí, no Sul de Minas Gerais, nas montanhas da Serra da Mantiqueira — uma região reconhecida com Denominação de Origem (DO). Nosso terroir, clima e altitude nos presenteiam com cafés de excelência, mundialmente reconhecidos como região de cafés especiais. Os cafezais estão entre 1.100 e 1.250 metros de altitude, onde o clima de serra, com dias de sol e noites frias, favorece uma maturação mais lenta e cafés especiais com perfis sensoriais incríveis.",
      "Fazemos parte da agricultura familiar e produzimos em pequena escala, com acompanhamento rigoroso de cada etapa, buscando sempre o manejo consciente e sustentável da propriedade. Atualmente, estamos em processo de transição para transformar nosso sítio em uma agrofloresta, integrando a lavoura ao ecossistema local.",
    ],
    fotos: [
      "Cafezais do sítio nas montanhas da Serra da Mantiqueira",
      "Vista do sítio pela janela, com a serra ao fundo",
      "Visitantes reunidos em frente à casa do sítio",
    ],
  },

  cafes: {
    titulo: "Nossos cafés",
    paragrafos: [
      "Cultivamos sete variedades de café, todos sendo especiais. Neste ano, celebramos a primeira colheita das variedades Paraíso MG2, Arara e IAC 125 RN, que têm demonstrado excelência na produção de bebidas de altíssima qualidade.",
      "Já as variedades Catiguá, Catuaí Vermelho, Catucaí Amarelo e Bourbon Vermelho consolidam nossa tradição, fazendo grande sucesso em cafeterias e torrefações nacionais e internacionais.",
    ],
    pontos: "pontos",
    notasSensoriais: "Notas sensoriais",
    // Textos conforme as embalagens. A cor do grão segue a posição (ver components/Cafes.js)
    variedades: [
      { nome: "Catuaí Vermelho", pontos: "86", notas: ["Melado", "Frutas Vermelhas", "Chocolate", "Castanha-do-Pará", "Toque Cítrico"] },
      { nome: "Catucaí Amarelo", pontos: "87", notas: ["Mel", "Açúcar Mascavo", "Laranja", "Maracujá", "Frutas Amarelas", "Chá Verde", "Toque Floral", "Limão Siciliano"] },
      { nome: "Catiguá", pontos: "87", notas: ["Melado", "Frutas Tropicais", "Maçã Verde", "Herbal", "Mel", "Jasmim", "Capim Limão"] },
      { nome: "Bourbon Vermelho", pontos: "86,75", notas: ["Amora Roxa", "Frutas Silvestres", "Frutas Vermelhas", "Vinho", "Melado"] },
      { nome: "Arara", pontos: "86", notas: ["Mascavo", "Frutas Tropicais", "Málico", "Framboesa"] },
      { nome: "Paraíso MG2", pontos: "87,5", notas: ["Melaço", "Cítrico", "Frutas Vermelhas", "Garapa"] },
      { nome: "IAC 125 RN", destaque: "Café Uva", pontos: "84", notas: ["Nibs Cacau", "Especiarias", "Mascavo", "Chocolate"] },
    ],
    chamada: "Para cotar preço, solicitar amostras ou saber a disponibilidade atual,",
    chamadaLink: "fale com a gente",
  },

  contato: {
    titulo: "Contato",
    texto: "Para cotação de preços e amostras, fale diretamente conosco.",
    rotulos: {
      whatsMG: "WhatsApp (MG)",
      whatsSP: "Telefone / WhatsApp (SP)",
      email: "E-mail",
      instagram: "Instagram",
    },
    endereco: ["Sítio Nossa Senhora do Café", "Distrito dos Ferreiras, São Gonçalo do Sapucaí - MG"],
  },

  rodape: "Nossa Senhora do Café · Cafés especiais · Serra da Mantiqueira",
};

export default pt;
