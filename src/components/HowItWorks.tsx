const steps = [
  {
    number: 1,
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp e tire suas dúvidas.",
    accent: "blue",
  },
  {
    number: 2,
    title: "Venha Até a Bandeirantes",
    description: "Atendimento por ordem de chegada, sem agendamento.",
    accent: "red",
  },
  {
    number: 3,
    title: "Realizamos a Vistoria",
    description: "Análise técnica completa e objetiva do veículo.",
    accent: "blue",
  },
  {
    number: 4,
    title: "Receba seu Laudo",
    description: "Laudo entregue com agilidade e segurança.",
    accent: "red",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-700 mb-3">
            Passo a passo
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy mb-4">
            COMO FUNCIONA
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Processo simples e transparente, em apenas 4 passos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {steps.map(({ number, title, description, accent }) => {
            const bg = accent === "blue"
              ? "bg-gradient-to-br from-brand-blue-500 to-brand-blue-800"
              : "bg-gradient-to-br from-brand-red-500 to-brand-red-700";
            const accentColor = accent === "blue" ? "text-brand-blue-600" : "text-brand-red-500";

            return (
              <div key={number} className="relative">
                <div className="flex lg:block items-start gap-4 lg:gap-0">
                  <div className="relative lg:text-center lg:mb-5 flex-shrink-0">
                    <div
                      className={`inline-flex w-14 h-14 sm:w-16 sm:h-16 rounded-full ${bg} text-white font-black text-xl sm:text-2xl items-center justify-center shadow-xl shadow-black/10 ring-4 ring-white z-10 relative`}
                    >
                      {number}
                    </div>
                  </div>

                  <div className="lg:text-center pt-1 lg:pt-0">
                    <span className={`text-[10px] font-black tracking-widest uppercase block mb-1 ${accentColor}`}>
                      Passo {number}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-brand-navy mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
