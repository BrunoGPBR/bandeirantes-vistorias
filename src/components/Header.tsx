import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556730230044";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center flex-shrink-0 mr-3">
            <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-900 px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-md shadow-brand-blue-700/20 ring-1 ring-brand-blue-500/30">
              <Image
                src="/logo.png"
                alt="Bandeirantes Vistorias Veicular"
                width={380}
                height={72}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                priority
              />
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-2.5 px-3 sm:px-5 rounded-lg shadow-md shadow-emerald-500/20 hover:bg-[#1EBE5D] hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span className="hidden sm:inline-block text-sm font-semibold tracking-wide">
              WHATSAPP
            </span>
            <span className="sm:hidden text-xs font-bold">
              ATENDIMENTO
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
