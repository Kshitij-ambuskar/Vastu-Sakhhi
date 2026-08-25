import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Namaste Pournima, I would like to book a Vastu/Astrology consultation."
  );
  const href = `https://wa.me/${contactInfo.whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VastuSakhhi on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition-transform hover:scale-105 focus-visible:scale-105"
    >
      <MessageCircle size={28} fill="white" className="text-[#25D366]" />
    </a>
  );
}
