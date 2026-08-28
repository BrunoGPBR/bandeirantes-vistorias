import { Car, MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5567992345678";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-navy to-[#090F1C] text-white">
      <div className="container-max section-padding !py-14 md:!py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-red shadow-xl shadow-brand-red/20 transition-transform group-hover:scale-105">
                <Car className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-extrabold tracking-[0.15em] text-white/50 uppercase">
                  Bandeirantes
                </span>
                <span className="text-lg font-extrabold text-white tracking-tight leading-none">
                  VISTORIAS VEICULAR
                </span>
              </div>
            </a>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 max-w-md">
              Há mais de 10 anos oferecendo serviços de vistoria veicular com rapidez,
              segurança e profissionalismo. Milhares de laudos emitidos e clientes satisfeitos.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              </a>
              <a
                href="tel:+5567992345678"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-extrabold tracking-widest text-brand-red uppercase mb-5">
              Endereço
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                <div>
                  <p className="text-sm font-semibold text-white/90 leading-snug mb-1">
                    Av. Bandeirantes, 4567 - Amambaí
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Campo Grande / MS
                  </p>
                  <p className="text-sm text-white/60">
                    CEP: 79005-000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-extrabold tracking-widest text-brand-red uppercase mb-5">
              Contato & Horário
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                <div>
                  <p className="text-xs font-bold tracking-wider text-white/40 uppercase mb-1">
                    Horário
                  </p>
                  <p className="text-sm font-semibold text-white/90 leading-relaxed">
                    Seg a Sex: 07h30 às 17h30
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Sábado: 07h30 às 12h00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                <div>
                  <p className="text-xs font-bold tracking-wider text-white/40 uppercase mb-1">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-brand-red transition-colors"
                  >
                    (67) 99234-5678
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-white/50 leading-relaxed text-center sm:text-left">
            © {new Date().getFullYear()} Bandeirantes Vistorias Veicular. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <Car className="w-3.5 h-3.5 text-brand-red" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold tracking-wider text-white/40 uppercase">
              Bandeirantes
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
