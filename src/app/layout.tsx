import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bandeirantesvistorias.com.br"),
  title: {
    default: "Bandeirantes Vistorias Veicular | Vistoria Rápida e Segura em Campo Grande - MS",
    template: "%s | Bandeirantes Vistorias Veicular",
  },
  description:
    "Bandeirantes Vistorias Veicular em Campo Grande - MS. Vistoria para transferência, cautelar, regularização, alteração de características e pesquisa veicular. Atendimento rápido sem agendamento.",
  keywords: [
    "vistoria veicular",
    "vistoria de transferência",
    "vistoria cautelar",
    "detran",
    "campo grande",
    "ms",
    "mato grosso do sul",
    "bandeirantes vistorias",
    "regularização veicular",
    "laudo veicular",
  ],
  authors: [{ name: "Bandeirantes Vistorias Veicular" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bandeirantesvistorias.com.br",
    title: "Bandeirantes Vistorias Veicular | Vistoria Rápida e Segura",
    description:
      "Vistorias veiculares com rapidez e segurança em Campo Grande - MS. Atendimento por ordem de chegada, sem agendamento.",
    siteName: "Bandeirantes Vistorias Veicular",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bandeirantes Vistorias Veicular | Vistoria Rápida e Segura",
    description:
      "Vistorias veiculares com rapidez e segurança em Campo Grande - MS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/faviconbandeirantes.png", type: "image/png" },
    ],
    shortcut: ["/faviconbandeirantes.png"],
    apple: [
      { url: "/faviconbandeirantes.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/faviconbandeirantes.png" />
        <link rel="shortcut icon" type="image/png" href="/faviconbandeirantes.png" />
        <link rel="apple-touch-icon" type="image/png" href="/faviconbandeirantes.png" />
      </head>
      <body className="antialiased scroll-smooth">{children}</body>
    </html>
  );
}
