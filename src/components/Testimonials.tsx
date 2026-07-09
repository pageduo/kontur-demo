import Image from "next/image";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";
import { img } from "@/lib/images";

export default function Testimonials() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-signal-dark">{"// Stimmen unserer Kunden"}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-5xl">
            Was Marken über die Zusammenarbeit sagen.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className="flex flex-col justify-between rounded-3xl bg-cream p-8"
            >
              <p className="font-display text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={img.testimonialAvatars[i]}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="font-label">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-stone">{t.context}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
