"use client";

import * as React from "react";
import { useEffect } from "react";
import { X, MapPin, ExternalLink } from "lucide-react";

const ENDERECO = "Av. Bandeirantes, 900 - Amambai, Campo Grande - MS, 79006-000";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Bandeirantes Vistorias Veicular " + ENDERECO
)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Bandeirantes Vistorias Veicular Av. Bandeirantes 900 Amambai Campo Grande MS"
)}&output=embed`;

type Props = {
  open?: boolean;
  onClose?: () => void;
};

export const OPEN_LOCATION_EVENT = "bv:open-location-modal";

export default function LocationModal({ open: openProp = false, onClose: onCloseProp }: Props) {
  const [open, setOpen] = React.useState(openProp);

  React.useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  const onClose = React.useCallback(() => {
    setOpen(false);
    onCloseProp?.();
  }, [onCloseProp]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_LOCATION_EVENT, handler);
    return () => window.removeEventListener(OPEN_LOCATION_EVENT, handler);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Localização Bandeirantes Vistorias"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[92vh] flex flex-col">
        <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 pb-3 sm:pb-4 border-b border-slate-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-black text-lg sm:text-xl text-brand-navy leading-tight mb-1">
                Nossa Localização
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed break-words">
                {ENDERECO}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" strokeWidth={2.2} />
          </button>
        </div>

        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 flex-shrink-0">
          <iframe
            title="Mapa Bandeirantes Vistorias Veicular"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        <div className="px-5 sm:px-6 py-4 sm:py-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50/60">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 hover:bg-[#1EBE5D] hover:-translate-y-0.5 transition-all"
          >
            <ExternalLink className="w-4 h-4" strokeWidth={2.2} />
            ABRIR NO GOOGLE MAPS
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export { ENDERECO, MAPS_LINK };
