import { Container } from "@/components/ui";
import { ProductCard } from "./ProductCard";
import { siteContent, type Product } from "@/data/siteContent";

interface ProductGridProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductGrid({
  products = siteContent.products,
  title = "Nossos Produtos",
  subtitle = "Sofás, poltronas e colchões selecionados com o melhor custo-benefício da região.",
}: ProductGridProps) {
  return (
    <section
      id="produtos"
      className="py-20 md:py-28 lg:py-32 bg-brand-white"
      aria-labelledby="produtos-title"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="produtos-title" className="section-title">
            {title}
          </h2>
          <p className="section-subtitle mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de ver mais produtos da Matias Estofados.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-black hover:text-brand-gray-600 transition-colors"
          >
            Ver todos os produtos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/5544998028949?text=${encodeURIComponent(message)}`;
}