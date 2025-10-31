import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const ORG = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kodeverket",
    legalName: "Kodeverket Bergen",
    url: "https://www.kodeverketbergen.no",
    logo: "https://www.kodeverketbergen.no/logo.png",
    sameAs: ["https://www.linkedin.com/company/kodeverktet-bergen/"],
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "hello@kodeverketbergen.no",
            telephone: "+4741627916",
            areaServed: ["NO"],
            availableLanguage: ["no", "en"],
        },
    ],
};

const WEBSITE = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kodeverket",
    url: "https://www.kodeverketbergen.no",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://www.kodeverketbergen.no/sok?q={search_term_string}",
        "query-input": "required name=search_term_string",
    },
};

const SERVICE = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Skreddersydde nettsider og SEO",
    serviceType: "Web design, Web development, SEO",
    provider: { "@type": "Organization", name: "Kodeverket" },
    areaServed: [
        { "@type": "City", name: "Oslo" },
        { "@type": "City", name: "Stavanger" },
        { "@type": "City", name: "Bergen" },
        { "@type": "City", name: "Trondheim" },
        { "@type": "Country", name: "Norge" },
    ],
    offers: {
        "@type": "Offer",
        url: "https://www.kodeverketbergen.no",
        priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "NOK",
        },
    },
    description:
        "Vi leverer raske, SEO-optimaliserte nettsider og skreddersydd webdesign for bedrifter, klubber, lag og privatpersoner i Oslo, Stavanger, Bergen og resten av Norge.",
};

export const metadata = {
    metadataBase: new URL("https://www.kodeverketbergen.no"),
    title: "Nettsider utviklet i regnet i Bergen | Kodeverket Bergen – Webdesign & SEO",
    description:
        "Kodeverket Bergen lager raske og SEO-optimaliserte nettsider. Skreddersydd webdesign som gir flere kunder – bestill gratis konsultasjon i dag!",
    keywords: [
        "nettsider Bergen",
        "webdesign Bergen",
        "utviklet i regnet",
        "utvikling Bergen",
        "SEO Bergen",
        "skreddersydd webutvikling",
        "bedriftsnettsted Bergen",
    ],
    alternates: { canonical: "/" },
    icons: {
        icon: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: "Kodeverket Bergen | Profesjonelle nettsider",
        description: "Spesialister på skreddersydde web-løsninger",
        url: "https://www.kodeverketbergen.no",
        siteName: "Kodeverket",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
        locale: "no_NO",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kodeverket Bergen | Profesjonelle nettsider",
        description:
            "Skreddersydde nettsider med SEO og design som gir resultater. Gratis konsultasjon.",
        images: ["/og-image.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='no'>
            <head>
                <Script
                    id='ld-org'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }}
                />
                <Script
                    id='ld-website'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(WEBSITE),
                    }}
                />
                <Script
                    id='ld-service'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(SERVICE),
                    }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
