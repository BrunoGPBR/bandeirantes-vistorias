import { MessageCircle, MapPin, ClipboardCheck, FileCheck } from "lucide-react";

type Step = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: MessageCircle,
    number: 1,
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp para mais informações e tire suas dúvidas.",
  },
  {
    icon: MapPin,
    number: 2,
    title: "Venha Até a Bandeirantes",
    description: "Nosso atendimento é por ordem de chegada, sem necessidade de agendamento.",
  },
  {
    icon: ClipboardCheck,
    number: 3,
    title: "Realizamos a Vistoria",
    description: "Nossa equipe especializada fará a análise técnica completa do veículo.",
  },
  {
    icon: FileCheck,
    number: 4,
    title: "Receba seu Laudo",
    description: "Laudo entregue com agilidade, segurança e total confiabilidade.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-navy/70">
              Passo a passo
            </span>
          </div>

          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-5">
            COMO <span className="text-brand-red">FUNCIONA</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-slate-200" />
            <div className="w-2 h-2 rotate-45 bg-brand-red rounded-sm" />
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-red/20 via-brand-red to-brand-red/20 -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="relative">
                <div className="flex lg:block items-start gap-4 lg:gap-0">
                  <div className="relative flex-shrink-0 lg:mb-6 lg:mx-auto lg:inline-flex">
                    <div className="absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-brand-red/10 blur-xl scale-75" />
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-brand-red to-red-500 flex items-center justify-center shadow-xl shadow-brand-red/30 z-10">
                      <span className="heading-display text-2xl lg:text-3xl text-white">
                        {number}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white border-2 border-slate-100 shadow-md flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-brand-red" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="lg:text-center pt-1">
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
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center -rotate-90 lg:rotate-0">
                      <svg
                        className="w-3.5 h-3.5 text-slate-400"
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
