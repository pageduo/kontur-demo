import Image from "next/image";
import { Section, SectionHead } from "../Section";
import Reveal from "../Reveal";
import { team } from "@/lib/content";
import { img } from "@/lib/images";

export default function TeamSection({ variant = "home" }: { variant?: "home" | "page" }) {
  const shown = variant === "home" ? team.slice(0, 4) : team;

  return (
    <Section id="team" label="Team" number="06" tone="paper">
      {variant === "home" && (
      <SectionHead
        number="06"
        eyebrow="Team"
        title="Neun Leute, ein Tisch, kurze Wege."
        intro={
          variant === "home"
            ? "Wer an Ihrem Projekt arbeitet, sitzt im selben Haus wie die Werkstatt. Sie sprechen mit den Gestaltenden, nicht mit einer Zwischenebene."
            : "Das Kernteam des Studios. Für jedes Projekt gibt es eine feste Ansprechperson, die von Kickoff bis Rollout dabeibleibt."
        }
        action={variant === "home" ? { label: "Das ganze Team", href: "/team" } : undefined}
      />
      )}

      <div className="grid grid-cols-12 gap-x-5 gap-y-12">
        {shown.map((member, i) => (
          <Reveal
            key={member.key}
            delay={(i % 4) * 0.06}
            className="col-span-6 lg:col-span-3"
          >
            <figure className="group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-pewter">
                <Image
                  src={img.team[member.key as keyof typeof img.team]}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="raw-img object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-4">
                <p className="t-subheading">{member.name}</p>
                <p className="t-caption mt-1 text-stone">{member.role}</p>
                {variant === "page" && (
                  <p className="t-body-sm mt-3 text-stone">{member.bio}</p>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
