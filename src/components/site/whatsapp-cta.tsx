import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export function WhatsAppCTA() {
  return (
    <a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-ink px-5 py-4 text-paper shadow-portrait transition-smooth hover:bg-primary"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline text-sm font-medium">Chat on WhatsApp</span>
    </a>
  );
}
