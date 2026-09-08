import { useState, useCallback } from "react";
import { Container } from "@/components/ui";
import { TestimonialCard } from "./TestimonialCard";
import { siteContent, type Testimonial } from "@/data/siteContent";

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export function Testimonials({ testimonials = siteContent.testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = typeof window !== "undefined" ? (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1) : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  return (
    <section
      id="depoimentos"
      className="py-20 md:py-28 lg:py-32 bg-brand-white"
      aria-labelledby="depoimentos-title"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gray-100 border border-brand-gray-200 px-4 py-2 rounded-none mb-4">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-2xl font-bold text-brand-black">5.0</span>
            <span className="text-sm text-brand-gray-600">Avaliação no Google</span>
          </div>
          <h2 id="depoimentos-title" className="section-title">
            O que Dizem Nossos Clientes
          </h2>
          <p className="section-subtitle mx-auto">
            Mais de 200 avaliações 5 estrelas. Confira o que nossos clientes falam sobre a experiência Matias Estofados.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex / Math.max(1, testimonials.length)) * 100}%)`,
              }}
              role="list"
              aria-label="Depoimentos de clientes"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`w-full ${itemsPerView === 3 ? "lg:w-1/3" : itemsPerView === 2 ? "md:w-1/2" : ""} px-3`}
                  role="listitem"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 lg:-translate-x-0 w-12 h-12 bg-brand-white border border-brand-gray-300 rounded-full flex items-center justify-center text-brand-black hover:bg-brand-gray-50 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-black"
                aria-label="Depoimento anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 lg:translate-x-0 w-12 h-12 bg-brand-white border border-brand-gray-300 rounded-full flex items-center justify-center text-brand-black hover:bg-brand-gray-50 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-black"
                aria-label="Próximo depoimento"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegação dos depoimentos">
            {Array.from({ length: Math.max(1, maxIndex + 1) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-brand-black w-6" : "bg-brand-gray-300 hover:bg-brand-gray-400"
                }`}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Ir para grupo de depoimentos ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Matias+Estofados+Umuarama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-black hover:text-brand-gray-600 transition-colors"
          >
            Ver todas as avaliações no Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}