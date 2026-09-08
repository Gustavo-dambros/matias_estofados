import { Container } from "@/components/ui";
import { siteContent, type Highlight } from "@/data/siteContent";
import type { ReactElement } from "react";

interface AboutProps {
  highlights?: Highlight[];
}

export function About({ highlights = siteContent.highlights }: AboutProps) {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28 lg:py-32 bg-brand-gray-50"
      aria-labelledby="sobre-title"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 id="sobre-title" className="section-title">
              Mais de 20 Anos de
              <br />
              <span className="text-brand-gray-900">História e Confiança</span>
            </h2>
            <p className="section-subtitle mt-6 text-brand-gray-700">
              A Matias Estofados e Colchões nasceu do sonho de levar conforto e qualidade
              para as famílias de Umuarama e região. Ao longo de mais de duas décadas,
              construímos uma reputação sólida baseada em honestidade, atendimento humano
              e produtos que duram.
            </p>
            <p className="mt-6 text-brand-gray-600 leading-relaxed">
              Somos uma empresa familiar que entende a importância de escolher o sofá
              perfeito para a sala de estar ou o colchão ideal para noites de sono reparador.
              Por isso, cada cliente é recebido com atenção personalizada — sem pressa,
              sem pressão, apenas o compromisso de ajudar você a fazer a melhor escolha.
            </p>
            <p className="mt-6 text-brand-gray-600 leading-relaxed">
              Hoje, além da loja física na Av. Anhanguera, oferecemos entrega gratuita
              em Umuarama e cidades vizinhas, além da opção de retirada na porta para
              quem prefere buscar. Tudo pensado para sua comodidade.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="p-6 bg-brand-white border border-brand-gray-200 hover:border-brand-gray-300 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-black rounded-none flex items-center justify-center mb-4" aria-hidden="true">
                  {getHighlightIcon(highlight.icon)}
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">{highlight.title}</h3>
                <p className="text-sm text-brand-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function getHighlightIcon(iconName: string): ReactElement {
  const icons: Record<string, ReactElement> = {
    truck: (
      <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    package: (
      <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    star: (
      <svg className="w-6 h-6 text-brand-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return icons[iconName] || icons.truck;
}