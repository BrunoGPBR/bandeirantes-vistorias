"use client";

import Image from "next/image";
import { CheckCircle2, Star, ShieldCheck, Gauge, Clock, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/556730230044?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20vistoria%20veicular%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/backgroundsite.jpeg"
          alt="Atendimento técnico de vistoria veicular"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/95 via-brand-blue-900/80 to-brand-blue-900/40" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="pt-16 sm:pt-24 md:pt-28 py-10 sm:py-16 lg:py-24 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 max-w-full">
              <Clock className="w-3.5 h-3.5 text-white/80 flex-shrink-0" strokeWidth={2.2} />
              <span className="text-[11px] sm:text-sm font-semibold text-white/90 leading-tight truncate">
                Atendimento rápido • Sem agendamento
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] sm:leading-tight text-white tracking-tight break-words">
              VISTORIAS VEICULARES COM{" "}
              <span className="block sm:inline text-brand-red-500">
                RAPIDEZ E SEGURANÇA
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed max-w-xl break-words">
              Realizamos vistoria cautelar, transferência, regularização e outros
              serviços veiculares com atendimento ágil e equipe especializada.
            </p>

            <div className="inline-flex items-start gap-3 px-3.5 py-3 rounded-xl bg-white/95 shadow-lg max-w-full">
              <CheckCircle2 className="w-5 h-5 text-brand-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <p className="text-sm sm:text-[15px] font-bold text-brand-navy leading-snug break-words">
                Atendimento por ordem de chegada, sem necessidade de agendamento.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold py-3.5 px-5 sm:px-6 rounded-xl shadow-xl shadow-emerald-500/25 hover:bg-[#1EBE5D] hover:shadow-emerald-500/45 hover:-translate-y-0.5 transition-all active:translate-y-0 text-sm sm:text-base min-h-[52px]"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0"  />
                  FALAR NO WHATSAPP
                </a>
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("bv:open-location-modal"))
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-bold py-3.5 px-5 rounded-xl hover:bg-white/15 hover:-translate-y-0.5 transition-all text-sm sm:text-base min-h-[52px]"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={2.2} />
                  VER LOCALIZAÇÃO
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-1">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 flex-shrink-0">
                  {["BD", "L", "OL", "RC"].map((initials) => (
                    <div
                      key={initials}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-blue-800 border-2 border-white text-white text-[10px] sm:text-xs font-black flex items-center justify-center"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-0.5 mb-0.5 flex-wrap">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400 flex-shrink-0" />
                    ))}
                    <span className="ml-1.5 text-sm sm:text-base font-black text-white">4,8</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/65 font-semibold truncate">
                    59 avaliações no Google
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 mt-16 lg:mt-0">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-2xl ring-1 ring-black/5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" strokeWidth={2.2} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Laudos Aprovados
                  </p>
                  <p className="text-2xl font-black text-brand-navy leading-none">+3.500</p>
                  <p className="text-xs text-slate-500 mt-2">
                    emitidos para clientes
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-2xl ring-1 ring-black/5 mt-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-red-100 flex items-center justify-center mb-4">
                    <Gauge className="w-5 h-5 text-brand-red-500" strokeWidth={2.2} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Atendimento
                  </p>
                  <p className="text-2xl font-black text-brand-navy leading-none">~30 min</p>
                  <p className="text-xs text-slate-500 mt-2">
                    tempo médio por laudo
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-2xl ring-1 ring-black/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 flex items-center justify-center shadow-lg shadow-brand-blue-600/25 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Horário Comercial
                  </p>
                  <p className="text-sm font-bold text-brand-navy leading-snug">
                    Seg a Sex: 07h30 às 18h00
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    Sábado: 07h30 às 12h00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
