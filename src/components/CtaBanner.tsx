import { Phone, Clock, CreditCard, CalendarCheck } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/556730230044?text=Ol%C3%A1%21%20Quero%20solicitar%20um%20or%C3%A7amento%20de%20vistoria%20veicular.";

export default function CtaBanner() {
  return (
    <section id="contato" className="py-14 sm:py-20 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-200 mb-4">
            Fale Conosco
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight break-words">
            PRECISA FAZER UMA{" "}
            <span className="text-brand-red-500">VISTORIA?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8 break-words">
            Venha até a Bandeirantes Vistorias ou fale com nossa equipe pelo WhatsApp.
            Atendimento rápido, profissional e eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold py-3.5 px-5 sm:px-6 rounded-xl shadow-2xl shadow-emerald-500/25 hover:bg-[#1EBE5D] hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all active:translate-y-0 text-sm sm:text-base min-h-[52px]"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0"  />
              FALAR NO WHATSAPP AGORA
            </a>
            <a
              href="tel:+556730230044"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-bold py-3.5 px-5 sm:px-6 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all text-sm sm:text-base min-h-[52px]"
            >
              <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={2.2} />
              (67) 3023-0044
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { icon: CalendarCheck, label: "Atendimento", value: "Por ordem de chegada" },
              { icon: Clock, label: "Tempo médio", value: "~30 minutos" },
              { icon: CreditCard, label: "Pagamento facilitado", value: "Pix • Cartão • Dinheiro" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] backdrop-blur border border-white/10 w-full"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white/85 flex-shrink-0" strokeWidth={2.2} />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-[10px] font-bold tracking-wider text-white/50 uppercase mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 truncate break-words">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
