import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

/*
 * Stimmen als Spaltensatz auf dem Grauband. Keine Karten, keine Avatare,
 * keine Sterne — im Editorial-System trägt das Zitat sich selbst.
 */
export default function Testimonials() {
  return (
    <section className="bg-newsprint pb-20 sm:pb-28 lg:pb-[100px]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-x-5 gap-y-10 border-t border-ink pt-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="col-span-12 lg:col-span-4">
              <figure className="flex h-full flex-col lg:pr-8">
                <blockquote className="t-subheading font-normal">
                  <span aria-hidden className="accent-ink">
                    &bdquo;
                  </span>
                  {t.quote}
                  <span aria-hidden className="accent-ink">
                    &ldquo;
                  </span>
                </blockquote>
                <figcaption className="t-caption mt-5 text-stone">
                  {t.name} &middot; {t.context}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
