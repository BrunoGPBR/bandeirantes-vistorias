import { Phone, ArrowRight, Building2, Clock, CreditCard } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/556730230044?text=Ol%C3%A1%21%20Quero%20solicitar%20um%20or%C3%A7amento%20de%20vistoria%20veicular.";

export default function CtaBanner() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-950 via-brand-blue-800 to-brand-blue-700" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-brand-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-brand-red-500/20 blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-brand-pink/10 blur-3xl" />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="absolute inset-0 opacity-[0.06]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid-2" width="64" height="64" patternUnits="userSpaceOnUse">
                  <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid-2)" />
            </svg>
          </div>
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">
                Ação imediata
              </span>
            </div>

            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-5 md:mb-6 leading-[1.1]">
              PRECISA FAZER UMA{" "}
              <span className="text-gradient-red">VISTORIA?</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
              Venha até a Bandeirantes Vistorias ou fale com nossa equipe pelo WhatsApp
              e tire suas dúvidas. Atendimento rápido, profissional e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 md:mb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#26B03D] to-[#189D32] text-white font-extrabold py-5 px-8 rounded-2xl shadow-2xl shadow-emerald-500/35 transition-all duration-300 hover:from-[#239e37] hover:to-[#178d2d] hover:shadow-emerald-500/60 hover:-translate-y-1 active:translate-y-0 text-base md:text-lg uppercase tracking-widest"
              >
                <span className="absolute inset-0 rounded-2xl ring-2 ring-emerald-400/50 animate-pulse" />
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                <span className="relative z-10">FALAR NO WHATSAPP AGORA</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={2.5} />
              </a>

              <a
                href="tel:+556730230044"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/20 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 text-base md:text-lg"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.2} />
                (67) 3023-0044
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                { icon: Clock, label: "Sem agendamento", value: "Ordem de chegada" },
                { icon: Building2, label: "Tempo médio", value: "~30 minutos" },
                {
                  icon: CreditCard,
                  label: "Pagamento facilitado",
                  value: "Pix • Cartão • Dinheiro",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white/[0.10] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white/90" strokeWidth={2.2} />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-[10px] md:text-xs font-bold tracking-wider text-white/50 uppercase mb-0.5 truncate">
                      {label}
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-white/90 truncate">
                      {value}
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
