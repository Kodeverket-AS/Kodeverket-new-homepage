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

export const metadata = {
  title: "Kodeverket Bergen | Skreddersydde nettsider for bedrifter",
  description:
    "Vi lager moderne og brukervennlige nettsider i Bergen. Skreddersydd design, rask ytelse og søkemotoroptimalisert kode. Få en gratis konsultasjon!",
  keywords: [
    "nettside",
    "webutvikling Bergen",
    "webdesign",
    "SEO",
    "bedriftsnettsted",
  ],
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png", 
  },
  openGraph: {
    title: "Kodeverket Bergen | Profesjonelle nettsider",
    description:
      "Spesialister på skreddersydde web-løsninger for bergenske bedrifter",
    url: "https://www.kodeverkebergen.no",
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
  
};

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
