import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kodeverket",
    legalName: "Kodeverket Bergen",
    url: "https://www.kodeverketbergen.no",
    logo: "https://www.kodeverketbergen.no/logo.png",
    sameAs: [
        "https://www.facebook.com/kodeverketbergen",
        "https://www.linkedin.com/company/kodeverket-bergen",
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "hello@kodeverketbergen.no",
            telephone: "+47 41 62 79 16",
            areaServed: ["NO"],
            availableLanguage: ["no", "en"],
        },
    ],
};

const webSite = {
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

const webService = {
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
        "Vi leverer raske, SEO-optimaliserte nettsider og skreddersydd webdesign for bedrifter i Oslo, Stavanger, Bergen og resten av Norge.",
};

export const metadata = {
    title: "Nettsider i Bergen | Kodeverket Bergen – Webdesign & SEO",
    description:
        "Kodeverket Bergen lager raske og SEO-optimaliserte nettsider. Skreddersydd webdesign som gir flere kunder – bestill gratis konsultasjon i dag!",
    keywords: [
        "nettsider Bergen",
        "webdesign Bergen",
        "SEO Bergen",
        "skreddersydd webutvikling",
        "bedriftsnettsted Bergen",
    ],
    other: {
        "application/ld+json": JSON.stringify([org, webSite, webService]),
    },
    icons: {
        icon: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: "Kodeverket Bergen | Profesjonelle nettsider",
        description: "Spesialister på skreddersydde web-løsninger",
        url: "https://www.kodeverketbergen.no",
        siteName: "Kodeverket",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
