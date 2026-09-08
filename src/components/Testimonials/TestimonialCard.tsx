import type { Testimonial } from "@/data/siteContent";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-brand-white border border-brand-gray-200 p-8 relative">
      <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} de 5 estrelas`}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-brand-gray-700 leading-relaxed mb-6">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-gray-200 flex items-center justify-center text-brand-gray-600 font-medium text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-brand-black">{testimonial.name}</p>
          <p className="text-sm text-brand-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </article>
  );
}