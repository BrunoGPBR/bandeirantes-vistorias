import { Car, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5567992345678";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-red shadow-lg shadow-brand-red/20 transition-transform group-hover:scale-105">
              <Car className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] md:text-xs font-extrabold tracking-[0.15em] text-brand-navy/60 uppercase">
                Bandeirantes
              </span>
              <span className="text-sm md:text-base font-extrabold text-brand-navy tracking-tight leading-none">
                VISTORIAS VEICULAR
              </span>
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red text-white font-bold py-2.5 px-4 md:px-5 rounded-lg shadow-md shadow-brand-red/20 transition-all duration-300 hover:bg-brand-red-hover hover:shadow-red-glow hover:-translate-y-0.5 active:translate-y-0 text-xs md:text-sm"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 fill-white/20" strokeWidth={2.5} />
            <span className="hidden sm:inline font-semibold tracking-wide">WHATSAPP</span>
          </a>
        </div>
      </div>
    </header>
  );
}
