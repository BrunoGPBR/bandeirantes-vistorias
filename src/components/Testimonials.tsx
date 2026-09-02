import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  initials: string;
  review: string;
  response: string;
  avatarFrom: string;
  avatarTo: string;
  badge?: string;
  badgeColor?: string;
  meta: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Bárbara Dias",
    initials: "BD",
    review:
      "Atendimento excelente!!! Equipe ágil, atenciosa e prestativa. A melhor de CG, super recomendo.",
    response:
      "Bárbara, ficamos felizes com o seu feedback. Que bom que você saiu satisfeita!!",
    avatarFrom: "from-fuchsia-500",
    avatarTo: "to-brand-red-500",
    badge: "3 avaliações",
    badgeColor: "bg-slate-100 text-slate-600",
    meta: "Há 1 ano",
  },
  {
    name: "Lya",
    initials: "L",
    review:
      "Excelente serviço. Atendimento rápido e de qualidade. Equipe atenciosa e profissional. Recomendo!",
    response:
      "Agradecemos a confiança, Lya! Ficamos muito felizes com o seu reconhecimento.",
    avatarFrom: "from-amber-500",
    avatarTo: "to-orange-500",
    badge: "3 avaliações · 1 foto",
    badgeColor: "bg-amber-50 text-amber-700",
    meta: "Há 1 ano",
  },
  {
    name: "Otacilio Lopes",
    initials: "OL",
    review: "Profissionais super atenciosos, e um excelente atendimento.",
    response:
      "Muito obrigada pela avaliação, Otacilio! Ficamos felizes com o reconhecimento da atenção e do profissionalismo da nossa equipe. Agradecemos pela confiança!",
    avatarFrom: "from-cyan-500",
    avatarTo: "to-brand-blue-600",
    badge: "2 avaliações",
    badgeColor: "bg-cyan-50 text-cyan-700",
    meta: "Há 2 anos",
  },
  {
    name: "Rogerio Carmo",
    initials: "RC",
    review: "Serviços de primeira, agilidade e rapidez.",
    response:
      "Agradecemos pela sua avaliação! Ficamos muito felizes com o reconhecimento do nosso trabalho. Conte sempre conosco para um serviço de qualidade, ágil e eficiente!",
    avatarFrom: "from-emerald-500",
    avatarTo: "to-teal-600",
    badge: "Local Guide · 189 avaliações",
    badgeColor: "bg-emerald-50 text-emerald-700",
    meta: "Há 1 ano",
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-14 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-700 mb-3">
            Avaliações reais
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy mb-5 break-words">
            AVALIAÇÕES DE QUEM JÁ CONFIA
          </h2>

          <div className="inline-flex items-center gap-4 px-4 sm:px-5 py-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm max-w-full w-full sm:w-auto justify-center sm:justify-start">
            <div className="text-left min-w-0">
              <p className="text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1">
                Nota geral no Google
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-brand-navy leading-none flex-shrink-0">
                  4,8
                </span>
                <div className="flex items-center gap-0.5 flex-shrink-0">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400 flex-shrink-0"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-600 flex-shrink-0">
                  (59 avaliações)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
          {testimonials.map(
            ({
              name,
              initials,
              review,
              response,
              avatarFrom,
              avatarTo,
              badge,
              badgeColor,
              meta,
            }) => (
              <article
                key={name}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all w-full"
              >
                <div className="flex items-start gap-3 sm:gap-3.5 mb-5">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${avatarFrom} ${avatarTo} text-white text-[13px] sm:text-sm font-black flex items-center justify-center shadow flex-shrink-0 ring-2 ring-white`}
                  >
                    {initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="text-sm sm:text-base font-black text-brand-navy leading-tight break-words">
                        {name}
                      </h3>
                      {badge && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor} flex-shrink-0`}
                        >
                          {badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0"
                        />
                      ))}
                      <span className="ml-1 text-[11px] text-slate-500 font-medium flex-shrink-0">
                        {meta}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed mb-4 break-words">
                  “{review}”
                </p>

                <div className="relative pl-3 sm:pl-4 border-l-2 border-brand-blue-100">
                  <p className="text-[11px] font-black uppercase tracking-wider text-brand-blue-600 mb-1">
                    Resposta da empresa
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                    {response}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
