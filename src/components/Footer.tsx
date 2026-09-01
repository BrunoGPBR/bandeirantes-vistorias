import Image from "next/image";
import { MapPin, Clock, Phone, Briefcase, Scale, FileText } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556730230044";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-blue-950 to-[#050818] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue-500/40 to-transparent" />

      <div className="container-max section-padding !py-14 md:!py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="relative h-12 w-auto">
                <Image
                  src="/logo.png"
                  alt="Bandeirantes Vistorias Veicular"
                  width={260}
                  height={52}
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </div>
            </a>
            <p className="text-sm md:text-base text-white/65 leading-relaxed mb-6 max-w-lg">
              Há mais de 10 anos oferecendo serviços de vistoria veicular com rapidez,
              segurança e profissionalismo. Milhares de laudos emitidos e clientes satisfeitos
              em Campo Grande e região.
            </p>

            <div className="mb-7 p-4 md:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-brand-blue-300" strokeWidth={2.2} />
                <span className="text-[11px] font-black tracking-widest uppercase text-white/50">
                  Pessoa Jurídica
                </span>
              </div>
              <p className="text-sm md:text-base font-bold text-white/90 mb-1">
                CNPJ: 52.461.136/0001-00
              </p>
              <p className="text-xs md:text-sm text-white/50">
                BANDEIRANTES VISTORIAS VEICULAR LTDA
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#26B03D] hover:to-[#189D32] hover:border-transparent transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href="tel:+556730230044"
                className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue-600 hover:border-brand-blue-500 transition-all duration-300"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-black tracking-widest text-brand-blue-300 uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500" />
              Endereço
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/95 leading-snug mb-1">
                    Av. Bandeirantes, 4567 - Amambaí
                  </p>
                  <p className="text-sm text-white/65 leading-relaxed">
                    Campo Grande / MS
                  </p>
                  <p className="text-sm text-white/65">
                    CEP: 79005-000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-black tracking-widest text-brand-blue-300 uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500" />
              Contato, Horário & Informações Legais
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-white/50 uppercase mb-1">
                    Horário
                  </p>
                  <p className="text-sm font-bold text-white/95 leading-relaxed">
                    Seg a Sex: 07h30 às 17h30
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Sábado: 07h30 às 12h00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-white/50 uppercase mb-1">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-white hover:text-brand-blue-200 transition-colors"
                  >
                    (67) 3023-0044
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-white/50 uppercase mb-1">
                    Regulamentação
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Laudos emitidos em conformidade com a Resolução CONTRAN nº 1069/2025
                    e normativas do DETRAN/MS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-7 md:pt-9 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:divide-x md:divide-white/10">
              <p className="text-xs md:text-sm text-white/55 leading-relaxed md:pr-4">
                © {new Date().getFullYear()} Bandeirantes Vistorias Veicular Ltda.
                Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 md:pl-4">
                <FileText className="w-3.5 h-3.5 text-white/30" strokeWidth={2} />
                <span className="text-[11px] text-white/40 font-medium">
                  CNPJ 52.461.136/0001-00 • Campo Grande - MS
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-end gap-2.5">
              <span className="text-[11px] font-medium tracking-wide text-white/40">
                Criado e desenvolvido por
              </span>
              <a
                href="https://instagram.com/studioblemq"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-red-500 flex items-center justify-center text-[10px] font-black text-white shadow-md group-hover:scale-110 transition-transform">
                  @
                </span>
                <span className="text-xs font-black tracking-wider text-white/80 group-hover:text-white transition-colors">
                  studioblemq
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
