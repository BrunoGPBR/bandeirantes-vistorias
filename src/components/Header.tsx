import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556730230044";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          <a href="#" className="flex items-center flex-shrink-0 mr-3">
            <Image
              src="/logo.png"
              alt="Bandeirantes Vistorias Veicular"
              width={380}
              height={72}
              className="h-14 sm:h-20 md:h-24 w-auto object-contain"
              priority
            />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-2.5 px-3 sm:px-5 rounded-lg shadow-md shadow-emerald-500/30 hover:bg-[#1EBE5D] transition-all flex-shrink-0 border-0 outline-none ring-0"
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
