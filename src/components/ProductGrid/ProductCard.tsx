import type { Product } from "@/data/siteContent";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Olá! Tenho interesse no ${product.title}.`;
  const whatsappUrl = `https://wa.me/5544998028949?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="group relative bg-brand-white border border-brand-gray-200 overflow-hidden transition-all duration-300 hover:border-brand-gray-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium text-brand-white bg-brand-black px-2 py-1">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-brand-black group-hover:text-brand-gray-700 transition-colors">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-brand-gray-600 line-clamp-2">{product.description}</p>

        <button
          className="mt-4 w-full px-4 py-2 text-sm font-medium text-brand-black bg-transparent border border-brand-gray-300 hover:bg-brand-black hover:text-brand-white hover:border-brand-black transition-all duration-200"
          onClick={() => window.open(whatsappUrl, "_blank")}
        >
          Solicitar Orçamento
        </button>
      </div>
    </article>
  );
}