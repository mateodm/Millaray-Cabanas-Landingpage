import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://cabannasmillaray.com.ar";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cabañas Millaray | San Francisco del Monte de Oro, San Luis",
    template: "%s | Cabañas Millaray",
  },
  description:
    "Cabañas Millaray: tu refugio en San Francisco del Monte de Oro, San Luis. Disfrutá de la naturaleza serrana, paisajes únicos y todas las comodidades. Reservas por WhatsApp.",
  keywords: [
    "cabañas san luis",
    "cabañas san francisco del monte de oro",
    "alojamiento san luis argentina",
    "turismo san luis",
    "cabañas millaray",
    "alquiler cabañas sierras san luis",
    "descanso naturaleza san luis",
    "cabañas habilitadas san francisco",
    "turismo serrano argentina",
  ],
  authors: [{ name: "Cabañas Millaray" }],
  creator: "Cabañas Millaray",
  publisher: "Cabañas Millaray",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Cabañas Millaray",
    title: "Cabañas Millaray | San Francisco del Monte de Oro, San Luis",
    description:
      "Tu refugio en las sierras de San Luis. Relajate, desconectate y disfrutá de la naturaleza en Cabañas Millaray.",
    images: [
      {
        url: "/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Cabañas Millaray - San Francisco del Monte de Oro, San Luis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas Millaray | San Luis, Argentina",
    description:
      "Tu refugio en las sierras de San Luis. Relajate, desconectate y disfrutá de la naturaleza en Cabañas Millaray.",
    images: ["/exterior.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
