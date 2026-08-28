import { CheckCircle2, Clock, MessageCircle, ShieldCheck, Wrench, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5567992345678";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-brand-navy/5 blur-3xl" />
      </div>

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-brand-red" strokeWidth={2.5} />
              <span className="text-xs md:text-sm font-semibold text-brand-navy/80">
                Atendimento rápido • Sem agendamento
              </span>
            </div>

            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-brand-navy">
              VISTORIAS VEICULARES COM{" "}
              <span className="text-brand-red relative inline-block">
                RAPIDEZ E SEGURANÇA
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-brand-red/30"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4 Q50 0 100 4 T200 4"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              Realizamos vistoria cautelar, transferência, regularização e outros
              serviços veiculares com atendimento ágil e equipe especializada.
            </p>

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm md:text-base font-semibold text-amber-900">
                Atendimento por ordem de chegada, sem necessidade de agendamento.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-lg py-5"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-white/20" strokeWidth={2.5} />
                FALAR NO WHATSAPP
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-brand-navy to-navy-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-brand-navy">4,9</span>
                </div>
                <p className="text-xs md:text-sm text-slate-500 font-medium">
                  +500 clientes satisfeitos
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/20 border border-white/50">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-700 via-brand-navy to-navy-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-green-200">Atendendo agora</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative animate-float">
                    <div className="w-48 h-24 md:w-64 md:h-32 relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-200/90 to-slate-400/80 backdrop-blur-sm shadow-2xl">
                        <div className="absolute top-2 left-4 right-4 h-8 rounded-t-xl bg-brand-navy/40" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-3 bg-brand-red rounded-b-md" />
                        <div className="absolute bottom-1 left-2 w-6 h-6 rounded-full bg-brand-navy/80 border-2 border-slate-500" />
                        <div className="absolute bottom-1 right-2 w-6 h-6 rounded-full bg-brand-navy/80 border-2 border-slate-500" />
                        <div className="absolute top-11 left-4 w-3 h-1.5 rounded-sm bg-amber-300/80 shadow-amber-300/50 shadow-md" />
                        <div className="absolute top-11 right-4 w-3 h-1.5 rounded-sm bg-amber-300/80 shadow-amber-300/50 shadow-md" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-green-400" strokeWidth={2.5} />
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Aprovado</span>
                    </div>
                    <p className="text-lg font-extrabold text-white">+3.500</p>
                    <p className="text-xs text-white/60">Laudos emitidos</p>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Wrench className="w-4 h-4 text-brand-red" strokeWidth={2.5} />
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Rápido</span>
                    </div>
                    <p className="text-lg font-extrabold text-white">~30 min</p>
                    <p className="text-xs text-white/60">Tempo médio</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-2xl bg-white shadow-xl shadow-brand-navy/10 border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hoje</p>
                <p className="text-sm md:text-base font-extrabold text-brand-navy">47 vistorias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
