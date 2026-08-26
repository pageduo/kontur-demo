import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead } from "../Section";
import Reveal from "../Reveal";
import { galleryProjects } from "@/lib/content";
import { img } from "@/lib/images";

/*
 * Referenzen im Artikelkarten-Muster des Systems: randloses Foto oben,
 * darunter die Kategorie als rote Marke, Titel und dreizeiliger Auszug.
 * Die Kategoriemarke ist die einzige vorgesehene Stelle für Rot im Inhalt.
 */
export default function WorkSection({ variant = "home" }: { variant?: "home" | "page" }) {
  const shown = variant === "home" ? galleryProjects.slice(0, 3) : galleryProjects;

  return (
    <Section id="referenzen" label="Referenzen" number="05" tone="gray">
      {variant === "home" && (
      <SectionHead
        number="05"
        eyebrow="Referenzen"
        title="Arbeiten, die im Regal bestehen."
        intro="Ein Ausschnitt aus den letzten drei Jahren. Von der Kaffeetüte bis zur Küchenmaschine."
        action={{ label: "Alle Projekte", href: "/referenzen" }}
      />
      )}

      <div className="grid grid-cols-12 gap-x-5 gap-y-14">
        {shown.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 3) * 0.07}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <Link href={`/referenzen/${project.slug}`} className="group flex h-full flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-pewter">
                <Image
                  src={img.gallery[project.slug]?.[0] ?? img.hero}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="raw-img object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>

              <p className="tag-red mt-5">{project.category}</p>
              <h3 className="t-subheading mt-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                {project.title}
              </h3>
              <p className="t-body-sm mt-2 line-clamp-3 text-stone">{project.description}</p>
              <p className="t-caption mt-3 text-stone">{project.year}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
