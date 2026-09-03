import { MapPin, Clock, Phone, Car, Navigation } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const ENDERECO = "Av. Bandeirantes, 900 - Amambai, Campo Grande - MS";
const CEP = "CEP 79006-000";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Bandeirantes Vistorias Veicular " + ENDERECO
)}`;
const WAZE_LINK = `https://www.waze.com/ul?q=${encodeURIComponent(
  "Av. Bandeirantes 900 Amambai Campo Grande MS"
)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Bandeirantes Vistorias Veicular Av. Bandeirantes 900 Amambai Campo Grande MS 79006-000"
)}&output=embed`;

const WHATSAPP_URL = "https://wa.me/556730230044";

const infoCards = [
  {
    icon: MapPin,
    label: "Endereço",
    lines: [ENDERECO, CEP],
    accent: "from-brand-blue-500 to-brand-blue-800",
  },
  {
    icon: Clock,
    label: "Horário de funcionamento",
    lines: ["Seg a Sex: 07h30 às 18h00", "Sábado: 08h00 às 12h00"],
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Phone,
    label: "Contato",
    lines: ["(67) 3023-0044", "WhatsApp • Telefone"],
    accent: "from-brand-red-500 to-brand-red-700",
  },
  {
    icon: Car,
    label: "Facilidades",
    lines: ["Região central", "Estacionamento prático"],
    accent: "from-indigo-500 to-indigo-700",
  },
];

export default function LocationMap() {
  return (
    <section id="localizacao" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-700 mb-3">
            Venha nos visitar
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy mb-4 break-words">
            NOSSA LOCALIZAÇÃO
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed break-words">
            Estamos localizados na Av. Bandeirantes, no bairro Amambaí, em Campo Grande/MS.
            Fácil acesso e estacionamento prático para sua comodidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 bg-slate-100">
              <iframe
                title="Mapa da Bandeirantes Vistorias Veicular em Campo Grande MS"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white font-extrabold shadow-lg shadow-brand-blue-600/25 hover:shadow-brand-blue-600/45 hover:-translate-y-0.5 transition-all text-sm min-h-[52px]"
              >
                <Navigation className="w-5 h-5 flex-shrink-0" strokeWidth={2.2} />
                ABRIR NO GOOGLE MAPS
              </a>
              <a
                href={WAZE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-white border border-slate-200 text-brand-navy font-extrabold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm min-h-[52px]"
              >
                <Navigation className="w-5 h-5 text-cyan-500 flex-shrink-0" strokeWidth={2.2} />
                NAVEGAR PELO WAZE
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 mb-6 lg:mb-0">
            {infoCards.map(({ icon: Icon, label, lines, accent }) => (
              <div
                key={label}
                className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-brand-blue-200 hover:bg-white hover:shadow-md transition-all w-full"
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-[11px] font-black tracking-widest uppercase text-slate-500 mb-1.5">
                    {label}
                  </p>
                  {lines.map((line, idx) => (
                    <p
                      key={line}
                      className={`${idx === 0 ? "font-bold text-brand-navy" : "text-slate-600"} text-sm leading-snug break-words`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 lg:col-span-1 flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#25D366] text-white font-extrabold shadow-lg shadow-emerald-500/25 hover:bg-[#1EBE5D] hover:shadow-emerald-500/45 hover:-translate-y-0.5 transition-all text-sm min-h-[52px]"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                FALAR NO WHATSAPP
              </a>
              <a
                href="tel:+556730230044"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 hover:-translate-y-0.5 transition-all text-sm min-h-[52px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={2.2} />
                LIGAR AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
