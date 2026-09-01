import Image from "next/image";
import { MapPin, Clock, Phone, Scale } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556730230044";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-950 text-slate-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex mb-5">
              <Image
                src="/logo.png"
                alt="Bandeirantes Vistorias Veicular"
                width={380}
                height={80}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-lg">
              Há mais de 10 anos oferecendo serviços de vistoria veicular com rapidez,
              segurança e profissionalismo.
            </p>

            <div className="mb-6 p-4 rounded-xl bg-white/[0.04] border border-white/10">
              <p className="text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">
                Pessoa Jurídica
              </p>
              <p className="text-sm font-bold text-white/90">
                CNPJ 52.461.136/0001-00
              </p>
              <p className="text-xs text-slate-400">
                BANDEIRANTES VISTORIAS VEICULAR LTDA
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-white"  />
              </a>
              <a
                href="tel:+556730230044"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-black tracking-widest uppercase text-brand-blue-300 mb-4">
              Endereço
            </h3>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-snug mb-0.5">
                  Av. Bandeirantes, 4567 - Amambaí
                </p>
                <p className="text-sm text-slate-400">Campo Grande / MS</p>
                <p className="text-sm text-slate-400">CEP 79005-000</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[10px] font-black tracking-widest uppercase text-brand-blue-300 mb-4">
              Contato, Horário & Regulamentação
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                    Horário
                  </p>
                  <p className="text-sm font-bold text-white">Seg a Sex: 07h30 às 17h30</p>
                  <p className="text-sm text-slate-400">Sábado: 07h30 às 12h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                    Contato
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
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-brand-blue-300" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                    Regulamentação
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Laudos em conformidade com as normativas CONTRAN e DETRAN/MS.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Bandeirantes Vistorias Veicular Ltda. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-slate-500">
              CNPJ 52.461.136/0001-00 · Campo Grande - MS
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-medium text-slate-400">
              Criado e desenvolvido por
            </span>
            <a
              href="https://instagram.com/studioblemq"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-red-500 flex items-center justify-center text-[10px] font-black text-white shadow">
                @
              </span>
              <span className="text-xs font-black tracking-wide text-slate-200 group-hover:text-white transition-colors">
                studioblemq
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
