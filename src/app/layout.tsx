import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

/*
 * Eine einzige Grotesk für das gesamte System.
 * HelveticaNow ist nicht frei lizenziert; DESIGN.md nennt Helvetica Neue,
 * Inter und Neue Haas Grotesk als Ersatz. Inter Tight kommt der engeren
 * Laufweite und den geschlosseneren Punzen von HelveticaNow am nächsten und
 * verträgt das aggressive negative Tracking bei 150px, ohne auseinanderzufallen.
 */
const grotesk = Inter_Tight({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "KONTUR Studio: Design mit Kante | Demo-Website";
const description =
  "Demo-Website für ein Produkt- und Verpackungsdesign-Studio in Hamburg: Produktdesign, Verpackungsdesign, Branding und Prototyping. Diese Seite ist eine Agentur-Demo und kein echtes Unternehmen.";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title,
    description,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={grotesk.variable}>
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
