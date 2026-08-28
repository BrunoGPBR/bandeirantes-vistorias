import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5567992345678";

export default function CtaBanner() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="bg-brand-navy relative py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-red/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-3xl" />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/30 mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
                Ação imediata
              </span>
            </div>

            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-5 md:mb-6 leading-[1.1]">
              PRECISA FAZER UMA{" "}
              <span className="relative inline-block">
                VISTORIA?
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-brand-red/40"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q75 0 150 5 T300 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
              Venha até a Bandeirantes Vistorias ou fale com nossa equipe pelo WhatsApp
              e tire suas dúvidas. Atendimento rápido, profissional e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red text-white font-extrabold py-5 px-8 rounded-xl shadow-2xl shadow-brand-red/30 transition-all duration-300 hover:bg-brand-red-hover hover:shadow-red-glow hover:-translate-y-1 active:translate-y-0 text-base md:text-lg uppercase tracking-widest"
              >
                <MessageCircle
                  className="w-5 h-5 md:w-6 md:h-6 fill-white/20"
                  strokeWidth={2.5}
                />
                FALAR NO WHATSAPP AGORA
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>

              <a
                href="tel:+5567992345678"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/5 border border-white/15 text-white font-bold py-5 px-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 text-base md:text-lg"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.2} />
                (67) 99234-5678
              </a>
            </div>

            <div className="mt-8 md:mt-10 flex items-center justify-center gap-6 flex-wrap">
              {[
                { label: "Sem agendamento", value: "Ordem de chegada" },
                { label: "Tempo médio", value: "~30 minutos" },
                { label: "Pagamento facilitado", value: "Pix • Cartão • Dinheiro" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold tracking-wider text-white/40 uppercase">
                      {item.label}
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-white/80">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
