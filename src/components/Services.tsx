import { CarFront, ShieldCheck, Paintbrush, FileCheck, Truck, Warehouse } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type Service = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
};

const services: Service[] = [
  {
    icon: CarFront,
    title: "Vistoria de Transferência",
    description:
      "Verifica a identificação e as condições do veículo para garantir uma transferência segura e regularizada.",
    iconBg: "bg-brand-blue-100",
    iconColor: "text-brand-blue-700",
  },
  {
    icon: ShieldCheck,
    title: "Vistoria Cautelar",
    description:
      "Analisa a procedência, estrutura e identificação do veículo, trazendo mais segurança na compra e venda.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    icon: Paintbrush,
    title: "Vistoria para Alteração de Característica",
    description:
      "Verifica se as modificações realizadas no veículo estão de acordo com as exigências legais.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
  },
  {
    icon: FileCheck,
    title: "Regularização",
    description:
      "Verifica o veículo para auxiliar na regularização de pendências e alterações junto aos órgãos competentes.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    icon: Truck,
    title: "Vistoria Móvel – Veículos Pesados",
    description:
      "Vistoria realizada no local para veículos pesados com mais de 10 toneladas, com praticidade e segurança.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
  },
  {
    icon: Warehouse,
    title: "Vistoria em Pátio de Apreensão",
    description:
      "Realizamos a vistoria diretamente no pátio, facilitando a regularização e liberação do veículo.",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
];

function buildWhatsAppLink(serviceTitle: string) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no serviço de ${serviceTitle} — poderia me informar valores e horários disponíveis?`
  );
  return `https://wa.me/556730230044?text=${msg}`;
}

export default function Services() {
  return (
    <section id="servicos" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-700 mb-3">
            O que fazemos
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Soluções completas em vistoria veicular com laudos aceitos pelos DETRANs e
            órgãos competentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, description, iconBg, iconColor }) => {
            const waLink = buildWhatsAppLink(title);
            return (
              <article
                key={title}
                className="group bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="mb-5">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 sm:w-6 sm:h-6 ${iconColor}`} strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-brand-navy mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 min-h-[4.5rem]">
                  {description}
                </p>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between pl-3.5 pr-1.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-700"  />
                    <span className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                      Quero este serviço
                    </span>
                  </span>
                  <span className="w-7 h-7 rounded-md bg-[#25D366] text-white flex items-center justify-center group-hover:bg-[#1EBE5D] transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
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
