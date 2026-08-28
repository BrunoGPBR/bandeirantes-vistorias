"use client";

import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5567992345678?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20vistorias%20veiculares.";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50">
      {showTooltip && (
        <div
          className="absolute bottom-20 right-0 sm:bottom-24 bg-white rounded-2xl shadow-2xl shadow-brand-navy/20 border border-slate-100 px-4 py-3 mb-2 w-64 sm:w-72 transform transition-all duration-500 animate-fade-in-up"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-extrabold text-brand-navy mb-0.5">
                Olá! 👋
              </p>
              <p className="text-xs text-slate-600 leading-snug">
                Pode tirar suas dúvidas no WhatsApp. Respondemos rapidinho!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors -mt-0.5 -mr-1"
              aria-label="Fechar notificação"
            >
              <X className="w-3 h-3 text-slate-500" strokeWidth={2.5} />
            </button>
          </div>
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" />
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all duration-500 hover:bg-green-600 hover:scale-110 hover:shadow-green-500/50 active:scale-95 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full border-4 border-green-300/50 animate-pulse" />
        <MessageCircle
          className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10"
          strokeWidth={2.5}
        />
      </a>
    </div>
  );
}
