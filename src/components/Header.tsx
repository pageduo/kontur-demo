"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/lib/content";
import { primarySections, overlayPages } from "@/lib/sections";

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * Hauptmenü im Editorial-Duktus.
 *
 * Die Bewegungsidee stammt vom "Tubelight"-Navbar: der aktive Punkt wird von
 * einem Element hinterlegt, das per framer-motion `layoutId` weich mitwandert.
 * Der Neon-Glow des Originals entfällt bewusst — das Design-System ist
 * ausdrücklich schattenlos und ohne Verläufe. Statt Leuchten hinterlegt hier
 * ein solides schwarzes Pill den aktiven Punkt und dreht die Schrift auf Weiß.
 *
 * Die Punkte sind echte Routen: jeder Abschnitt des One-Pagers ist zusätzlich
 * als eigene Seite erreichbar und deeplinkbar.
 */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  /*
   * Routenwechsel schließt das Overlay. Die Anpassung passiert beim Rendern
   * statt in einem Effekt: React verwirft den angefangenen Durchlauf sofort
   * und rendert direkt neu, statt erst das offene Menü zu committen und es
   * anschließend wieder zuzuklappen. Genau dafür ist dieses Muster gedacht.
   */
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-paper/95 backdrop-blur-[2px]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-start justify-between gap-6 px-5 py-5 sm:px-8">
          {/* Wortmarke, zweizeilig und bewusst klein — die Hero-Typo ist das
              eigentliche Markenstatement, nicht das Logo. */}
          <Link href="/" className="shrink-0 leading-[1.15]">
            <span className="block text-[14px] font-medium tracking-[0.02em]">{company.name}</span>
            <span className="block text-[14px] text-stone">Studio für Design</span>
          </Link>

          {/* Schwebende Pill-Leiste */}
          <nav
            aria-label="Hauptmenü"
            className="hidden shrink-0 items-center rounded-[500px] border border-ink bg-paper p-1 lg:flex"
          >
            {primarySections.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-[500px] px-4 py-2 text-[14px] transition-colors duration-300 ${
                    isActive ? "text-paper" : "text-ink hover:text-stone"
                  }`}
                >
                  {isActive && (
                    // Bewusst OHNE negatives z-index: Kinder mit z-index < 0
                    // werden vor den Hintergründen nicht-positionierter
                    // Nachfahren gezeichnet — das weiße bg der Leiste läge
                    // also darüber und das Pill wäre unsichtbar.
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-[500px] bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href={company.phoneHref} className="pill pill-sm hidden xl:inline-flex">
              {company.phone}
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="menu-overlay"
              className="pill pill-sm"
            >
              Menü
              <span aria-hidden className="flex flex-col gap-[3px]">
                <span className="block h-px w-3.5 bg-current" />
                <span className="block h-px w-3.5 bg-current" />
              </span>
            </button>
          </div>
        </div>
        {/* Haarlinie erscheint erst beim Scrollen — im Ruhezustand schwebt die
            Leiste rahmenlos über dem weißen Papier. */}
        <div
          className={`mx-auto h-px max-w-[1400px] origin-left bg-pewter transition-transform duration-500 ${
            scrolled ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-overlay"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink text-paper"
          >
            <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between px-5 py-5 sm:px-8">
              <span className="leading-[1.15]">
                <span className="block text-[14px] font-medium">{company.name}</span>
                <span className="block text-[14px] text-paper/55">Studio für Design</span>
              </span>
              <button onClick={() => setMenuOpen(false)} className="pill pill-sm pill-invert">
                Schließen
                <span aria-hidden className="relative block h-3 w-3">
                  <span className="absolute left-0 top-1/2 h-px w-3 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-3 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <nav
              aria-label="Alle Seiten"
              className="mx-auto w-full max-w-[1400px] flex-1 px-5 pb-16 pt-6 sm:px-8"
            >
              {overlayPages.map((page, i) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.035, duration: 0.5, ease: EASE }}
                >
                  <Link
                    href={page.href}
                    className="group flex items-baseline gap-5 border-b border-paper/15 py-3 sm:gap-8 sm:py-4"
                  >
                    <span className="sec-num sec-num--invert w-12 shrink-0">{page.number}</span>
                    <span className="t-heading-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 sm:text-[46px]">
                      {page.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mx-auto flex w-full max-w-[1400px] flex-wrap gap-x-10 gap-y-2 px-5 pb-10 text-[14px] text-paper/60 sm:px-8">
              <a href={company.phoneHref} className="ulink">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="ulink">
                {company.email}
              </a>
              <span>
                {company.address.street}, {company.address.zip} {company.address.city}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
