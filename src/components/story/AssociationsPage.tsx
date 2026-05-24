import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ASSOCIATION_IMAGES, ASSOCIATIONS, CONTACT_CTA } from "@/data/storyPages";
import { ImageMosaic, LuxuryCTA, Reveal, StoryHero, StoryPage, StorySection } from "./StoryPrimitives";

export function AssociationsPage() {
  return (
    <StoryPage>
      <StoryHero
        kicker="Global Associations"
        title="Credibility that travels beyond the studio."
        body="A dedicated chapter for global community health, exercise science, education partnerships, and the international credibility behind Dr. Namita's wellness ecosystem."
      />

      <StorySection eyebrow="International Context" title="Positioned within global wellbeing networks">
        <div className="grid gap-6 lg:grid-cols-2">
          {ASSOCIATIONS.map((association) => (
            <Reveal key={association.name}>
              <article className="h-full border border-gold-light/16 bg-ivory/[0.045] p-7">
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{association.slug}</p>
                    <h2 className="font-serif text-3xl leading-tight">{association.name}</h2>
                  </div>
                  <div className="flex h-14 w-20 shrink-0 items-center justify-center border border-gold-light/24 bg-black/30 font-serif text-xl uppercase text-gold-light">
                    {association.slug.replace("-", " ").split(" ").map((part) => part[0]).join("")}
                  </div>
                </div>
                <p className="mb-7 leading-7 text-ivory/66">{association.summary}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {association.markers.map((marker) => (
                    <span key={marker} className="rounded-full border border-gold-light/22 px-3 py-2 text-[0.68rem] uppercase tracking-[0.14em] text-ivory/72">
                      {marker}
                    </span>
                  ))}
                </div>
                {association.url !== "#" ? (
                  <Link href={association.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                    Source
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </StorySection>

      <StorySection eyebrow="GCH Foundation" title="Healthy schools, healthy children, global wellbeing" className="bg-[#090707]">
        <ImageMosaic images={ASSOCIATION_IMAGES.gch} />
      </StorySection>

      <StorySection eyebrow="ACESS" title="Exercise and sports science in international conversation">
        <ImageMosaic images={ASSOCIATION_IMAGES.acess} />
      </StorySection>

      <StorySection eyebrow="Resource Person" title="Teaching, mentoring, and representing wellness expertise" className="bg-[#120c0d]">
        <ImageMosaic images={ASSOCIATION_IMAGES.resource} />
      </StorySection>

      <LuxuryCTA title="International credibility. Local care." body={CONTACT_CTA.body} href={CONTACT_CTA.href} />
    </StoryPage>
  );
}
