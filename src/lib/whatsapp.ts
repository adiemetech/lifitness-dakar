// TODO: remplacer par le numéro WhatsApp mobile dédié dès que fourni —
// les fixes Orange (+221 33 ...) ne sont pas joignables sur WhatsApp.
export const WHATSAPP_NUMBER = '221338205338';

export const WHATSAPP_DEFAULT_MESSAGE =
  "Bonjour Lifitness ! Je souhaite réserver ma séance d'essai gratuite.";

export const WHATSAPP_DEFAULT_MESSAGE_EN =
  'Hello Lifitness! I would like to book my free trial session.';

export function whatsappUrl(
  message: string = WHATSAPP_DEFAULT_MESSAGE,
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
