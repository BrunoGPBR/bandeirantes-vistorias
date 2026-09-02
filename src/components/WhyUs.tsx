import { Zap, Users, Award, Eye, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Atendimento Ágil",
    description: "Processo rápido e eficiente, com foco no seu tempo.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes e capacitados.",
  },
  {
    icon: Award,
    title: "Laudos Confiáveis",
    description: "Laudos completos, aceitos por órgãos competentes.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Processos claros e atendimento honesto.",
  },
  {
    icon: MapPin,
    title: "Localização de Fácil Acesso",
    description: "Região central e estacionamento prático.",
  },
];

export default function WhyUs() {
  return (
    <section id="porque" className="py-14 sm:py-20 bg-brand-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-200 mb-3">
            Motivos para confiar
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            POR QUE ESCOLHER A{" "}
            <span className="text-brand-red-500">BANDEIRANTES?</span>
          </h2>
          <p className="text-sm sm:text-base text-white/65 max-w-2xl mx-auto leading-relaxed">
            Referência em vistoria veicular na região Centro-Oeste.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 [&>*:nth-child(5)]:sm:col-span-2 [&>*:nth-child(5)]:md:col-span-1">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.10] hover:border-white/20 transition-colors w-full"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-red-500/90 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 leading-snug break-words">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed break-words">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
