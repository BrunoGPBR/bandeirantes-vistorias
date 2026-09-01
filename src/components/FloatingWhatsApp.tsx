"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/556730230044?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20vistorias%20veiculares.";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50">
      {showTooltip && (
        <div
          className="absolute bottom-20 right-0 sm:bottom-24 bg-white rounded-3xl shadow-2xl shadow-brand-blue-900/20 border border-slate-100 px-4 py-3.5 mb-2 w-64 sm:w-72 transform transition-all duration-500 animate-fade-in-up"
        >
          <div className="flex items-start gap-3">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-[#26B03D] to-[#189D32] flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/30">
              <WhatsAppIcon className="w-5 h-5" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-brand-navy mb-0.5">
                Bandeirantes Vistorias 👋
              </p>
              <p className="text-xs text-slate-600 leading-snug">
                Olá! Pode tirar suas dúvidas no WhatsApp. Respondemos rapidinho! 😊
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
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#26B03D] to-[#189D32] shadow-2xl shadow-emerald-500/45 flex items-center justify-center transition-all duration-500 hover:from-[#239e37] hover:to-[#178d2d] hover:scale-110 hover:shadow-emerald-500/60 active:scale-95 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
        <span className="absolute inset-0 rounded-full ring-4 ring-emerald-300/40 animate-pulse" />
        <WhatsAppIcon
          className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow"
        />
      </a>
    </div>
  );
}
