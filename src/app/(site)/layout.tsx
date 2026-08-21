import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollRail from "@/components/ScrollRail";

/*
 * Der frühere CustomCursor ist bewusst entfernt: ein ersetzter Mauszeiger ist
 * genau die Art Effekt, die eine Seite "gemacht" statt selbstverständlich
 * wirken lässt — und das System hier lebt von Zurückhaltung.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRail />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
