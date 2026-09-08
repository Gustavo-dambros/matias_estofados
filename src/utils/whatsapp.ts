import { siteContent } from "@/data/siteContent";

export function getWhatsAppUrl(message?: string): string {
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent(`Olá! Gostaria de mais informações sobre os produtos da ${siteContent.company.name}.`);
  return `https://wa.me/${siteContent.company.whatsapp}?text=${encodedMessage}`;
}

export function getWhatsAppPhoneLink(): string {
  return `tel:${siteContent.company.phone.replace(/\D/g, "")}`;
}