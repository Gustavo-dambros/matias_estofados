export const siteContent = {
  company: {
    name: "Matias Estofados e Colchões",
    phone: "(44) 99802-8949",
    whatsapp: "5544998028949",
  },
  address: "Av. Anhanguera, 2734 - Zona V, Umuarama - PR, 87504-290",
  hours: "Seg–Sáb 8h–18h | Dom fechado",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.123456789!2d-53.321!3d-23.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzU0LjAiUyA1M8KwMTknMTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  products: [
    {
      id: 1,
      title: "Sofá 3 Lugares Retrátil",
      category: "Sofás",
      image: "/images/sofa-3l.png",
      description: "Conforto premium com assentos retráteis e encosto reclinável. Estrutura em madeira de eucalipto tratado.",
    },
    {
      id: 2,
      title: "Sofá de Canto 5 Lugares",
      category: "Sofás",
      image: "/images/sofa-canto.png",
      description: "Design moderno em L, ideal para salas amplas. Tecido suede de alta durabilidade.",
    },
    {
      id: 3,
      title: "Poltrona Reclinável",
      category: "Poltronas",
      image: "/images/poltrona.png",
      description: "Design ergonômico com mecanismo silencioso. Disponível em couro legítimo ou suede.",
    },
    {
      id: 4,
      title: "Poltrona do Papai",
      category: "Poltronas",
      image: "/images/poltrona-papai.png",
      description: "Clássico conforto com apoio para os pés e encosto alto. Perfeita para leitura e descanso.",
    },
    {
      id: 5,
      title: "Colchão Molas Ensacadas Queen",
      category: "Colchões",
      image: "/images/colchao-queen.png",
      description: "Molas ensacadas individualmente, pillow top duplo e tecido malha belga. Suporte ortopédico.",
    },
    {
      id: 6,
      title: "Colchão Espuma D33 Casal",
      category: "Colchões",
      image: "/images/colchao-casal.png",
      description: "Espuma de alta densidade D33, tratamento antiácaro e antialérgico. Firmeza ideal.",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Maria Silva",
      location: "Umuarama - PR",
      text: "Atendimento impecável do começo ao fim! A entrega foi no prazo combinado e o sofá é ainda mais bonito pessoalmente. Recomendo de olhos fechados.",
      rating: 5,
    },
    {
      id: 2,
      name: "João Pedro",
      location: "Umuarama - PR",
      text: "Melhor colchão que já comprei. Dormi como nunca na primeira noite. O vendedor teve paciência para explicar cada modelo. Nota 10!",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Carolina",
      location: "Cruzeiro do Oeste - PR",
      text: "Comprei a poltrona do papai para meu pai de 80 anos. Ele amou! A retirada na porta foi super prática e o preço justo. Voltarei com certeza.",
      rating: 5,
    },
    {
      id: 4,
      name: "Roberto Lima",
      location: "Umuarama - PR",
      text: "Sofá de canto lindo, tecido de qualidade e a equipe de montagem muito caprichosa. Loja de confiança, daquelas que a gente indica para família.",
      rating: 5,
    },
  ],
  highlights: [
    {
      icon: "truck",
      title: "Entrega Grátis",
      description: "Entregamos em Umuarama e região sem custo adicional nas compras acima de R$ 500.",
    },
    {
      icon: "package",
      title: "Retirada na Porta",
      description: "Prefere buscar? Seu pedido fica pronto na loja, é só passar e carregar.",
    },
    {
      icon: "star",
      title: "Atendimento 5★",
      description: "Equipe treinada para ajudar você a escolher o produto ideal para sua casa.",
    },
    {
      icon: "shield",
      title: "Garantia Estendida",
      description: "Todos os produtos com garantia de fábrica + suporte local pós-venda.",
    },
  ],
};

export type Product = typeof siteContent.products[0];
export type Testimonial = typeof siteContent.testimonials[0];
export type Highlight = typeof siteContent.highlights[0];