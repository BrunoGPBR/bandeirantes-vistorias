import { Zap, Users, Award, Eye, MapPin } from "lucide-react";

type Reason = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: Zap,
    title: "Atendimento Ágil",
    description: "Processo rápido e eficiente, com foco no seu tempo e na sua conveniência.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes e capacitados para garantir a melhor vistoria.",
  },
  {
    icon: Award,
    title: "Laudos Confiáveis",
    description: "Laudos completos e aceitos pelos órgãos competentes de todo o país.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Processos claros, atendimento honesto e sem surpresas desagradáveis.",
  },
  {
    icon: MapPin,
    title: "Localização de Fácil Acesso",
    description: "Região central, de fácil acesso e com estacionamento para sua comodidade.",
  },
];

export default function WhyUs() {
  return (
    <section id="porque" className="section-padding bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-dark" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dark)" />
          </svg>
        </div>
      </div>

      <div className="container-max relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
              Nossos diferenciais
            </span>
          </div>

          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            POR QUE ESCOLHER A{" "}
            <span className="text-brand-red">BANDEIRANTES?</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Com anos de experiência e milhares de laudos emitidos, somos referência em
            vistoria veicular na região Centro-Oeste.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-brand-red/40 transition-all duration-300"
            >
              <div
                className="absolute -top-0.5 -left-0.5 w-8 h-8 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative mb-4 md:mb-5">
                <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-brand-red/20 blur-md group-hover:bg-brand-red/30 transition-colors" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center shadow-xl shadow-brand-red/30 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.2} />
                </div>
              </div>

              <div className="relative mb-3">
                <span className="text-[10px] font-extrabold tracking-widest text-brand-red">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-sm md:text-base font-extrabold text-white mb-1.5 md:mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-white/55 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
