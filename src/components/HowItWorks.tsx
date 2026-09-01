import { MessageCircle, MapPin, ClipboardCheck, FileCheck } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type Step = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  number: number;
  title: string;
  description: string;
  accent?: "blue" | "red";
};

const steps: Step[] = [
  {
    icon: MessageCircle,
    number: 1,
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp para mais informações e tire suas dúvidas.",
    accent: "blue",
  },
  {
    icon: MapPin,
    number: 2,
    title: "Venha Até a Bandeirantes",
    description: "Nosso atendimento é por ordem de chegada, sem necessidade de agendamento.",
    accent: "red",
  },
  {
    icon: ClipboardCheck,
    number: 3,
    title: "Realizamos a Vistoria",
    description: "Nossa equipe especializada fará a análise técnica completa do veículo.",
    accent: "blue",
  },
  {
    icon: FileCheck,
    number: 4,
    title: "Receba seu Laudo",
    description: "Laudo entregue com agilidade, segurança e total confiabilidade.",
    accent: "red",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-white relative">
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue-100/50 blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200/80 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-blue-700">
              Passo a passo
            </span>
          </div>

          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">
            COMO <span className="text-gradient-blue">FUNCIONA</span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Processo simples, rápido e sem burocracia. Em poucos passos você recebe seu
            laudo com total segurança.
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-gradient-to-r from-transparent to-brand-blue-300" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-red-500" />
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-gradient-to-l from-transparent to-brand-blue-300" />
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[72px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-blue-300/40 via-brand-blue-600/70 to-brand-blue-300/40 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map(({ icon: Icon, number, title, description, accent = "blue" }) => (
              <div key={number} className="relative group">
                <div className="flex lg:block items-start gap-4 lg:gap-0">
                  <div className="relative flex-shrink-0 lg:mb-6 lg:mx-auto lg:inline-flex">
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-brand-blue-500/20 to-brand-red-500/10 blur-2xl scale-90 group-hover:scale-100 transition-transform" />
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full ${
                      accent === "blue"
                        ? "bg-gradient-to-br from-brand-blue-500 to-brand-blue-800"
                        : "bg-gradient-to-br from-brand-red-500 to-brand-pink"
                    } flex items-center justify-center shadow-2xl ${
                      accent === "blue"
                        ? "shadow-brand-blue-500/35"
                        : "shadow-brand-red-500/30"
                    } z-10 ring-4 ring-white/50`}>
                      <span className="heading-display text-2xl md:text-3xl text-white drop-shadow">
                        {number}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center">
                      {number === 1 ? (
                        <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
                      ) : (
                        <Icon
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            accent === "blue" ? "text-brand-blue-600" : "text-brand-red-500"
                          }`}
                          strokeWidth={2.6}
                        />
                      )}
                    </div>
                  </div>

                  <div className="lg:text-center pt-1">
                    <span className={`inline-block text-[10px] font-black tracking-widest uppercase mb-1.5 ${
                      accent === "blue" ? "text-brand-blue-600" : "text-brand-red-500"
                    }`}>
                      Passo {number}
                    </span>
                    <h3 className="text-base md:text-lg font-extrabold text-brand-navy mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center mt-8">
                  {number < 4 && (
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-brand-blue-50 group-hover:border-brand-blue-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-brand-blue-600 transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
