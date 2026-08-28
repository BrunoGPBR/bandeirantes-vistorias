import { Car, ShieldCheck, FileText, Wrench, Search, Truck } from "lucide-react";

type Service = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Car,
    title: "Vistoria para Transferência",
    description:
      "Vistoria completa para transferência de propriedade do veículo com laudo aceito por todos os DETRANs.",
  },
  {
    icon: ShieldCheck,
    title: "Vistoria Cautelar",
    description:
      "Análise detalhada da procedência, histórico de sinistros e estado de conservação do veículo.",
  },
  {
    icon: FileText,
    title: "Vistoria para Regularização",
    description:
      "Regularize seu veículo junto aos órgãos competentes com laudo técnico completo e confiável.",
  },
  {
    icon: Wrench,
    title: "Alteração de Características",
    description:
      "Vistoria para alteração de cor, combustível, blindagem ou qualquer modificação no veículo.",
  },
  {
    icon: Search,
    title: "Pesquisa Veicular",
    description:
      "Consulta detalhada da situação do veículo: histórico, multas, restrições e situação legal.",
  },
  {
    icon: Truck,
    title: "Atendimento para Empresas / Frotas",
    description:
      "Soluções personalizadas e planos especiais para empresas com veículos de passeio e utilitários.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
              O que fazemos
            </span>
          </div>

          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-5">
            NOSSOS <span className="text-brand-red">SERVIÇOS</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-slate-200" />
            <div className="w-2 h-2 rotate-45 bg-brand-red rounded-sm" />
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="card-service group cursor-pointer"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative mb-5">
                <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-brand-red/10 blur-md group-hover:bg-brand-red/20 transition-colors" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-red to-red-500 flex items-center justify-center shadow-lg shadow-brand-red/20 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-extrabold text-brand-navy mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {description}
              </p>

              <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-400 group-hover:text-brand-red transition-colors">
                  Saiba mais
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-red transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
