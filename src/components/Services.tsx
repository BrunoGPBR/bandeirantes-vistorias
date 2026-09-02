import { CarFront, ShieldCheck, Paintbrush, FileCheck, Truck, Warehouse, Building2 } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-700 mb-3">
            O que fazemos
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy mb-4 break-words">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed break-words">
            Soluções completas em vistoria veicular com laudos aceitos pelos DETRANs e
            órgãos competentes de todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, description, iconBg, iconColor }) => {
            const waLink = buildWhatsAppLink(title);
            return (
              <article
                key={title}
                className="group bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all w-full"
              >
                <div className="mb-5">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 sm:w-6 sm:h-6 ${iconColor} flex-shrink-0`} strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-brand-navy mb-2 leading-snug break-words">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 break-words">
                  {description}
                </p>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between pl-3 pr-1.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 transition-colors min-h-[44px]"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-700 flex-shrink-0"  />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wide text-emerald-800 truncate">
                      Quero este serviço
                    </span>
                  </span>
                  <span className="w-7 h-7 rounded-md bg-[#25D366] text-white flex items-center justify-center group-hover:bg-[#1EBE5D] transition-colors flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 flex-shrink-0"
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

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-950 border border-brand-blue-700/50 shadow-2xl shadow-brand-blue-950/20">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-red-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-brand-blue-500/15 blur-3xl pointer-events-none" />
          <div className="relative p-5 sm:p-8 lg:p-10 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-5">
                <Building2 className="w-4 h-4 text-brand-red-400 flex-shrink-0" strokeWidth={2.2} />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] text-white/85">
                  Para o seu negócio
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4 break-words">
                Condições especiais para{" "}
                <span className="text-brand-red-400">lojistas</span>
              </h3>
              <div className="space-y-3 max-w-2xl">
                <p className="text-sm sm:text-base text-white/80 leading-relaxed break-words font-semibold">
                  Sua loja merece condições diferenciadas.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed break-words">
                  Conte com valores especiais em vistorias e perícias, atendimento ágil e a segurança de um serviço realizado com responsabilidade e conformidade.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed break-words">
                  Se você é lojista, fale com a Bandeirantes e consulte nossas condições exclusivas.
                </p>
              </div>
            </div>
            <div className="w-full max-w-md">
              <a
                href="https://wa.me/556730230044?text=Ol%C3%A1%21%20Sou%20lojista%20e%20tenho%20interesse%20nas%20condi%C3%A7%C3%B5es%20especiais%20para%20vistorias%20e%20per%C3%ADcias%20para%20a%20minha%20loja.%20Pode%20me%20enviar%20os%20valores%20exclusivos%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold py-4 px-5 sm:px-6 rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all text-sm sm:text-base min-h-[56px] text-center break-words"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="truncate">CONSULTAR VALORES PARA LOJISTAS</span>
              </a>
              <p className="text-[11px] sm:text-xs text-white/55 mt-3 text-center">
                Atendimento empresarial dedicado • Resposta rápida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
