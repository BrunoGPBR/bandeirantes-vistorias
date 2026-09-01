import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  text: string;
  initials: string;
  gradient: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendes",
    initials: "CM",
    gradient: "from-brand-blue-500 to-brand-blue-800",
    text: "Atendimento excelente! Fui sem agendamento e em menos de 40 minutos saí com o laudo em mãos. Equipe muito profissional e prestativa. Recomendo demais!",
  },
  {
    name: "Fernanda Silva",
    initials: "FS",
    gradient: "from-brand-red-500 to-brand-pink",
    text: "Escolhi a Bandeirantes para a vistoria do meu carro e fui muito bem atendida. Preço justo, laudo entregue rápido e os funcionários são muito educados. Voltarei sempre!",
  },
  {
    name: "Roberto Costa",
    initials: "RC",
    gradient: "from-brand-blue-600 via-brand-blue-700 to-brand-blue-900",
    text: "Faço vistoria das frotas da minha empresa aqui há mais de 2 anos. Serviço impecável, laudos de qualidade e atendimento personalizado para empresas. Melhor da região!",
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="section-padding bg-gradient-to-b from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-brand-blue-100/40 blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 mb-5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-700">
              Avaliações Reais
            </span>
          </div>

          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
            AVALIAÇÕES DE QUEM JÁ <span className="text-gradient-blue">CONFIA</span>
          </h2>

          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 sm:py-5 rounded-3xl bg-white border border-slate-200/70 shadow-card backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="text-5xl md:text-6xl font-black text-gradient-blue leading-none">
                4,9
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 text-amber-400 fill-amber-400 drop-shadow-sm"
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
                  <span className="text-xs font-bold text-blue-600 tracking-wide uppercase">
                    Google
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-14 bg-slate-200" />
            <div className="text-sm md:text-base font-semibold text-slate-600">
              + de <span className="font-black text-brand-navy">500</span> avaliações no Google
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {testimonials.map(({ name, text, initials, gradient }) => (
            <figure
              key={name}
              className="relative group bg-white rounded-3xl p-6 md:p-8 border border-slate-200/70 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400"
            >
              <Quote className="absolute top-5 right-5 w-9 h-9 text-brand-blue-100 group-hover:text-brand-blue-200 transition-colors" strokeWidth={1.5} />

              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-sm md:text-[15px] text-slate-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center justify-between pt-5 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-sm font-black text-white tracking-wide">
                      {initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-black text-brand-navy">{name}</p>
                    <p className="text-xs text-slate-500 font-semibold">Cliente verificado</p>
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
