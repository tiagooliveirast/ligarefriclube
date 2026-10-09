import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/config/site";
import LenisProvider from "@/components/effects/LenisProvider";
import { MotionProvider } from "@/components/effects/motion-lazy";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: "Liga Refriclube | Você não precisa mais tocar seu negócio sozinho",
  description:
    "Ecossistema de ajuda mútua para técnicos de refrigeração e linha branca: comunidade, encontros mensais ao vivo, Refriclube incluso e Chaves de Reconhecimento.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.siteUrl,
    siteName: "Liga Refriclube",
    title: "Liga Refriclube | Você não precisa mais tocar seu negócio sozinho",
    description:
      "Ecossistema de ajuda mútua para técnicos de refrigeração e linha branca: comunidade, encontros mensais ao vivo, Refriclube incluso e Chaves de Reconhecimento.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liga Refriclube | Você não precisa mais tocar seu negócio sozinho",
    description:
      "Ecossistema de ajuda mútua para técnicos de refrigeração e linha branca: comunidade, encontros mensais ao vivo, Refriclube incluso e Chaves de Reconhecimento.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070B12",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Liga Refriclube",
  description:
    "Assinatura anual para técnicos de refrigeração e linha branca: comunidade, encontro mensal ao vivo, sistema de gestão Refriclube incluso e Chaves de Reconhecimento.",
  brand: { "@type": "Brand", name: "Refriclube" },
  offers: {
    "@type": "Offer",
    url: site.checkoutUrl,
    priceCurrency: "BRL",
    price: "947.00",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="noise min-h-screen bg-[#070B12] text-[#EAF2FF] antialiased">
        <MotionProvider>
          <LenisProvider>{children}</LenisProvider>
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        {site.metaPixelId ? (
          <>
            <Script
              id="meta-pixel"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${site.metaPixelId}');fbq('track','PageView');`,
              }}
            />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${site.metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        ) : null}
        {site.ga4Id ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
              strategy="lazyOnload"
            />
            <Script
              id="ga4-init"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.ga4Id}');`,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
