"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/556730230044?text=Ol%C3%A1%21%20Quero%20informa%C3%A7%C3%B5es%20sobre%20vistorias%20veiculares.";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const hide = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(hide);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-slate-200 px-4 py-3 mb-2 w-64 sm:w-72">
          <div className="flex items-start gap-3">
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm">
                <WhatsAppIcon className="w-5 h-5 text-white" variant="outline" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-brand-navy mb-0.5">
                Bandeirantes Vistorias
              </p>
              <p className="text-xs text-slate-600 leading-snug">
                Olá! Pode tirar suas dúvidas no WhatsApp. Respondemos rapidinho!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors -mt-0.5 -mr-1 flex-shrink-0"
              aria-label="Fechar notificação"
            >
              <X className="w-3 h-3 text-slate-500" strokeWidth={2.5} />
            </button>
          </div>
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white rotate-45 border-r border-b border-slate-200" />
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:bg-[#1EBE5D] hover:scale-105 transition-all active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20" />
        <WhatsAppIcon
          className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10"
          variant="outline"
        />
      </a>
    </div>
  );
}
