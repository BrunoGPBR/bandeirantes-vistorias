import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    initials: "CM",
    text: "Atendimento excelente. Fui sem agendamento e em menos de 40 minutos saí com o laudo em mãos. Equipe muito profissional e prestativa. Recomendo!",
    gradient: "from-brand-blue-500 to-brand-blue-800",
  },
  {
    name: "Fernanda Silva",
    initials: "FS",
    text: "Escolhi a Bandeirantes para a vistoria do meu carro e fui muito bem atendida. Preço justo, laudo entregue rápido e os funcionários são muito educados.",
    gradient: "from-brand-red-500 to-brand-red-700",
  },
  {
    name: "Roberto Costa",
    initials: "RC",
    text: "Faço vistoria das frotas da minha empresa aqui há mais de 2 anos. Serviço impecável, laudos de qualidade e atendimento personalizado para empresas.",
    gradient: "from-brand-blue-600 to-brand-blue-900",
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
            Prova Social
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy mb-6">
            AVALIAÇÕES DE QUEM JÁ CONFIA
          </h2>

          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="text-4xl sm:text-5xl font-black text-gradient-blue leading-none">
                4,9
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-5 sm:h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-500">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                    Google
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-14 bg-slate-200" />
            <p className="text-sm font-semibold text-slate-700">
              + de <span className="font-black text-brand-navy">500</span> avaliações
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map(({ name, text, initials, gradient }) => (
            <figure
              key={name}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-sm text-slate-700 leading-relaxed mb-5">
                “{text}”
              </blockquote>
              <figcaption className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-black shadow`}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-black text-brand-navy">{name}</p>
                    <p className="text-xs text-slate-500 font-semibold">
                      Cliente verificado
                    </p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500/40">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
