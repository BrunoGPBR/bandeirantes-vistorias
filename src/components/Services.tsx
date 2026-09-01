import { CarForward, ShieldCheck, Paintbrush, FileCheck2, Truck, Warehouse } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type Service = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: CarForward,
    title: "Vistoria de Transferência",
    description:
      "Verifica a identificação e as condições do veículo para garantir uma transferência segura e regularizada.",
  },
  {
    icon: ShieldCheck,
    title: "Vistoria Cautelar",
    description:
      "Analisa a procedência, estrutura e identificação do veículo, trazendo mais segurança na compra e venda.",
  },
  {
    icon: Paintbrush,
    title: "Vistoria para Alteração de Característica",
    description:
      "Verifica se as modificações realizadas no veículo estão de acordo com as exigências legais.",
  },
  {
    icon: FileCheck2,
    title: "Regularização",
    description:
      "Verifica o veículo para auxiliar na regularização de pendências e alterações junto aos órgãos competentes.",
  },
  {
    icon: Truck,
    title: "Vistoria Móvel – Veículos Pesados",
    description:
      "Vistoria realizada no local para veículos pesados com mais de 10 toneladas, com praticidade e segurança.",
  },
  {
    icon: Warehouse,
    title: "Vistoria em Pátio de Apreensão",
    description:
      "Realizamos a vistoria diretamente no pátio, facilitando a regularização e liberação do veículo.",
  },
];

function buildWhatsAppLink(serviceTitle: string, description: string) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no serviço de ${serviceTitle}.\n\nPoderia me enviar mais informações, valores e como proceder?\n\nServiço: ${serviceTitle}\nDescrição: ${description}`
  );
  return `https://wa.me/556730230044?text=${msg}`;
}

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-brand-blue-200 to-transparent" />
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-brand-blue-100/40 blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200/80 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-blue-700">
              O que fazemos
            </span>
          </div>

          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">
            NOSSOS <span className="text-gradient-blue">SERVIÇOS</span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Soluções completas em vistoria veicular com laudos aceitos pelos DETRANs e
            órgãos competentes de todo o Brasil.
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-gradient-to-r from-transparent to-brand-blue-300" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-red-500" />
            <div className="h-0.5 w-12 md:w-20 rounded-full bg-gradient-to-l from-transparent to-brand-blue-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {services.map(({ icon: Icon, title, description }, index) => {
            const waLink = buildWhatsAppLink(title, description);
            return (
              <article
                key={title}
                className="card-service group flex flex-col"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative mb-5 flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-brand-blue-500/15 blur-md group-hover:bg-brand-blue-500/25 transition-colors" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue-500 via-brand-blue-600 to-brand-blue-800 flex items-center justify-center shadow-lg shadow-brand-blue-500/25 group-hover:scale-105 group-hover:rotate-[-2deg] transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.1} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-black tracking-widest text-brand-blue-500 uppercase block mb-1">
                      Serviço 0{index + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-brand-navy leading-snug">
                      {title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">
                  {description}
                </p>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative mt-auto inline-flex items-center justify-between w-full pl-5 pr-2 py-2.5 rounded-2xl bg-gradient-to-r from-brand-blue-50 to-emerald-50 border border-brand-blue-100/80 hover:border-emerald-200 hover:from-emerald-50 hover:to-emerald-100/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-2.5">
                    <WhatsAppIcon className="w-5 h-5" />
                    <span className="text-xs md:text-sm font-black tracking-wider uppercase text-brand-blue-800 group-hover/btn:text-emerald-700 transition-colors">
                      Quero este serviço
                    </span>
                  </span>
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#26B03D] to-[#189D32] shadow-md shadow-emerald-500/30 group-hover/btn:shadow-emerald-500/50 group-hover/btn:scale-110 group-hover/btn:translate-x-0.5 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
