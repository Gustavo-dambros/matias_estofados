import { Container } from "@/components/ui";
import { getWhatsAppUrl, getWhatsAppPhoneLink } from "@/utils/whatsapp";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-brand-black text-brand-white"
      role="contentinfo"
    >
      <Container className="py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Matias Estofados</h3>
            <p className="text-brand-gray-400 text-sm leading-relaxed mb-6">
              Há mais de 20 anos transformando casas em lares com conforto, qualidade e atendimento que faz a diferença.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray-400 hover:text-brand-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray-400 hover:text-brand-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <address className="not-italic text-brand-gray-300 text-sm leading-relaxed space-y-3">
              <p>{siteContent.address}</p>
              <p>
                <a
                  href={getWhatsAppPhoneLink()}
                  className="hover:text-brand-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteContent.company.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{siteContent.hours}</span>
              </p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <nav aria-label="Navegação do rodapé">
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-brand-gray-400 hover:text-brand-white transition-colors">Início</a></li>
                <li><a href="#produtos" className="text-brand-gray-400 hover:text-brand-white transition-colors">Produtos</a></li>
                <li><a href="#sobre" className="text-brand-gray-400 hover:text-brand-white transition-colors">Sobre Nós</a></li>
                <li><a href="#depoimentos" className="text-brand-gray-400 hover:text-brand-white transition-colors">Depoimentos</a></li>
                <li><a href="#contato" className="text-brand-gray-400 hover:text-brand-white transition-colors">Contato</a></li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Produtos</h4>
            <nav aria-label="Categorias de produtos">
              <ul className="space-y-2 text-sm">
                <li><a href="#produtos" className="text-brand-gray-400 hover:text-brand-white transition-colors">Sofás</a></li>
                <li><a href="#produtos" className="text-brand-gray-400 hover:text-brand-white transition-colors">Poltronas</a></li>
                <li><a href="#produtos" className="text-brand-gray-400 hover:text-brand-white transition-colors">Colchões</a></li>
                <li><a href={getWhatsAppUrl("Olá! Gostaria de saber sobre opções de personalização.")} target="_blank" rel="noopener noreferrer" className="text-brand-gray-400 hover:text-brand-white transition-colors">Sob Medida</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-brand-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-gray-500 text-sm">
              © {currentYear} {siteContent.company.name}. Todos os direitos reservados.
            </p>
            <p className="text-brand-gray-500 text-sm">
              Desenvolvido com dedicação para a comunidade de Umuarama.
            </p>
          </div>
        </div>
      </Container>

      <div className="fixed bottom-6 right-6 z-50 md:hidden" aria-hidden="true">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-brand-white rounded-full shadow-lg flex items-center justify-center border-2 border-brand-gray-200"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <svg className="w-7 h-7 text-brand-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.011L2 22l5.279-1.338A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}