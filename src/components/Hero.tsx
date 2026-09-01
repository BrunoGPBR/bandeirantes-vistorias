import Image from "next/image";
import { CheckCircle2, Clock, ShieldCheck, Wrench, Star } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/556730230044?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20vistorias%20veiculares.";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/backgroundsite.jpeg"
          alt="Técnico realizando vistoria veicular"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1136]/95 via-[#1F34A6]/85 to-[#1D28F2]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1136]/60 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-pink/10 blur-3xl" />
      </div>

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[560px] md:min-h-[640px]">
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
              <Clock className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-xs md:text-sm font-semibold text-white/90">
                Atendimento rápido • Sem agendamento
              </span>
            </div>

            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-white">
              VISTORIAS VEICULARES COM{" "}
              <span className="block md:inline text-gradient-red drop-shadow-sm">
                RAPIDEZ E SEGURANÇA
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
              Realizamos vistoria cautelar, transferência, regularização e outros
              serviços veiculares com atendimento ágil e equipe especializada.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-card border-white/40">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-red-500 to-brand-pink shadow-lg shadow-brand-red/30 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.8} />
              </div>
              <span className="text-sm md:text-base font-bold text-brand-navy leading-snug">
                Atendimento por ordem de chegada, sem necessidade de agendamento.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#26B03D] to-[#189D32] text-white font-extrabold py-5 px-8 rounded-2xl shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:from-[#239e37] hover:to-[#178d2d] hover:shadow-emerald-500/50 hover:-translate-y-1 active:translate-y-0 text-base md:text-lg uppercase tracking-widest"
              >
                <span className="absolute inset-0 rounded-2xl ring-2 ring-emerald-400/40 animate-pulse" />
                <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
                <span className="relative z-10">FALAR NO WHATSAPP</span>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-blue-800 border-2 border-white/90 flex items-center justify-center text-white text-xs font-black shadow-lg"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-amber-400 drop-shadow-sm" />
                  ))}
                  <span className="ml-2 text-base md:text-lg font-black text-white">4,9</span>
                </div>
                <p className="text-xs md:text-sm text-white/70 font-semibold">
                  +500 clientes satisfeitos no Google
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-3xl p-5 flex flex-col gap-3 border-white/40 backdrop-blur-2xl">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue-700">
                  Laudos Aprovados
                </p>
                <p className="text-3xl font-black text-brand-navy leading-none">+3.500</p>
                <p className="text-xs text-brand-blue-700 font-medium mt-auto">
                  Laudos emitidos com sucesso
                </p>
              </div>

              <div className="glass-card rounded-3xl p-5 flex flex-col gap-3 border-white/40 backdrop-blur-2xl mt-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-red-500 to-brand-pink flex items-center justify-center shadow-lg shadow-brand-red/30">
                  <Wrench className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue-700">
                  Rapidez
                </p>
                <p className="text-3xl font-black text-brand-navy leading-none">~30 min</p>
                <p className="text-xs text-brand-blue-700 font-medium mt-auto">
                  Tempo médio por atendimento
                </p>
              </div>

              <div className="col-span-2 glass-card rounded-3xl p-5 border-white/40 backdrop-blur-2xl flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-800 flex items-center justify-center shadow-xl shadow-brand-blue-500/30 flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" strokeWidth={2.3} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue-700 mb-1">
                    Horário de Funcionamento
                  </p>
                  <p className="text-sm md:text-base font-bold text-brand-navy leading-snug">
                    Seg a Sex: 07h30 às 17h30
                  </p>
                  <p className="text-sm font-semibold text-brand-blue-700">
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
