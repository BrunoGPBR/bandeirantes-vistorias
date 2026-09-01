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
    <section id="porque" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-700 to-brand-blue-600" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-brand-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-red-500/15 blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-brand-pink/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-dark-2" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dark-2)" />
          </svg>
        </div>
      </div>

      <div className="container-max relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/90">
              Nossos diferenciais
            </span>
          </div>

          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            POR QUE ESCOLHER A{" "}
            <span className="text-gradient-red drop-shadow">BANDEIRANTES?</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Com anos de experiência e milhares de laudos emitidos, somos referência em
            vistoria veicular na região Centro-Oeste.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative p-5 md:p-6 rounded-3xl bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-400 hover:-translate-y-1.5"
            >
              <div
                className="absolute -top-0.5 -left-0.5 w-10 h-10 rounded-tl-3xl rounded-br-3xl bg-gradient-to-br from-brand-red-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative mb-4 md:mb-5">
                <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-brand-red-500/20 blur-lg group-hover:bg-brand-red-500/30 transition-colors" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-brand-red-500 to-brand-pink flex items-center justify-center shadow-xl shadow-brand-red-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.2} />
                </div>
              </div>

              <div className="relative mb-3">
                <span className="text-[10px] font-extrabold tracking-widest text-white/40">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-sm md:text-base font-extrabold text-white mb-1.5 md:mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
