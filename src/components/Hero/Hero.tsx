import { Container } from "@/components/ui";
import { Button } from "@/components/ui";
import { getWhatsAppUrl } from "@/utils/whatsapp";

interface HeroProps {
  backgroundImage?: string;
}

export function Hero({ backgroundImage = "/hero_bg.png" }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 via-brand-black/50 to-transparent" />
      </div>

      <Container className="relative z-10 py-20 pt-32">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-brand-white leading-[1.1]"
          >
            Conforto e Qualidade
            <br />
            <span className="text-brand-white/90">para Transformar sua Casa</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-brand-white/90 max-w-2xl leading-relaxed">
            Há mais de 20 anos levando o melhor em sofás, poltronas e colchões para Umuarama e região.
            Atendimento personalizado, entrega grátis e garantia de satisfação.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => window.open(getWhatsAppUrl("Olá! Gostaria de conhecer os produtos da Matias Estofados."), "_blank")}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.011L2 22l5.279-1.338A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              Fale pelo WhatsApp
            </Button>

            <Button variant="secondary" size="lg" onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}>
              Ver Produtos
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 text-brand-white/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Entrega Grátis Umuarama e Região</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Retirada na Loja</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Atendimento 5 Estrelas</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-brand-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}