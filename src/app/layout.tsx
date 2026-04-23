import type { Metadata } from "next";
import { Instrument_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mwgloballink.com"),
  title: {
    default: "MW Global Link — Exportaciones Agroindustriales",
    template: "%s | MW Global Link",
  },
  description:
    "Conectamos el agro argentino con el mundo. Exportaciones agroindustriales con inteligencia global.",
  keywords: [
    "exportaciones", "agroindustrial", "argentina", "agro",
    "soja", "alfalfa", "aceite de oliva", "commodities", "global",
  ],
  authors: [{ name: "MW Global Link" }],
  creator: "MW Global Link",
  publisher: "MW Global Link",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mwgloballink.com",
    siteName: "MW Global Link",
    title: "MW Global Link — Exportaciones Agroindustriales",
    description:
      "Conectamos el agro argentino con el mundo. Exportaciones agroindustriales con inteligencia global.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MW Global Link",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MW Global Link — Exportaciones Agroindustriales",
    description: "Conectamos el agro argentino con el mundo.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MW Global Link",
  url: "https://mwgloballink.com",
  description:
    "Empresa argentina de exportaciones agroindustriales con inteligencia global.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@mwgloballink.com",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: ["https://www.linkedin.com/company/TO_BE_CONFIGURED"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnects para recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />

        {/* Calendly CSS — carga async para no bloquear el render */}
        <link
          rel="preload"
          href="https://assets.calendly.com/assets/external/widget.css"
          as="style"
          onLoad={"this.onload=null;this.rel='stylesheet'" as unknown as React.ReactEventHandler<HTMLLinkElement>}
        />
        <noscript>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${instrumentSans.variable} ${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
