import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556730230044";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(17,26,84,0.06)]">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative h-10 md:h-12 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="Bandeirantes Vistorias Veicular"
                width={280}
                height={56}
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#26B03D] to-[#189D32] text-white font-bold py-2.5 px-4 md:px-5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:from-[#239e37] hover:to-[#178d2d] hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 text-xs md:text-sm"
          >
            <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold tracking-wide">WHATSAPP</span>
          </a>
        </div>
      </div>
    </header>
  );
}
