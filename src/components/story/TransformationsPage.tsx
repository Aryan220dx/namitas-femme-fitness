import Image from "next/image";
import { CONTACT_CTA, TRANSFORMATION_FILTERS, TRANSFORMATION_STORIES } from "@/data/storyPages";
import { cn } from "@/lib/utils";
import { LuxuryCTA, Reveal, StoryHero, StoryPage, StorySection } from "./StoryPrimitives";

export function TransformationsPage() {
  return (
    <StoryPage>
      <StoryHero
        kicker="Transformations"
        title="Real journeys, held with care."
        body="A cinematic transformation chapter for real women, real progress, and wellness stories shaped without body shaming or aggressive fitness language."
      />

      <StorySection eyebrow="Pathways" title="Transformation begins with safety">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {TRANSFORMATION_FILTERS.map((filter) => (
            <span key={filter} className="shrink-0 rounded-full border border-gold-light/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
              {filter}
            </span>
          ))}
        </div>
      </StorySection>

      <StorySection eyebrow="Stories In Motion" title="Wellness pathways, presented with dignity" className="bg-[#090707]">
        <div className="space-y-20 md:space-y-28">
          {TRANSFORMATION_STORIES.map((story, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <Reveal key={story.title}>
                <article className="grid items-center gap-8 border border-gold-light/16 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.36)] md:p-7 lg:grid-cols-2 lg:gap-14">
                  <figure className={cn("relative", !imageFirst && "lg:order-2")}>
                    <div aria-hidden className="absolute -inset-5 bg-gold-light/10 blur-3xl" />
                    <div className="relative aspect-[5/4] overflow-hidden border border-gold-light/20 bg-black/45 md:aspect-[16/11] lg:aspect-[4/5]">
                      <Image
                        src={story.image.src}
                        alt={story.image.alt}
                        fill
                        sizes="(min-width: 1024px) 44vw, 92vw"
                        className="object-cover grayscale-[10%] transition duration-700 hover:scale-[1.035] hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
                    </div>
                    {story.image.caption ? <figcaption className="mt-4 text-sm leading-6 text-ivory/58">{story.image.caption}</figcaption> : null}
                  </figure>

                  <div className="px-1 py-4 md:px-3 lg:px-0">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">{story.category}</p>
                    <h2 className="mb-7 font-serif text-4xl leading-tight text-ivory md:text-6xl">{story.title}</h2>
                    <div className="mb-8 h-px w-24 bg-gradient-to-r from-gold-light to-transparent" aria-hidden />
                    <p className="max-w-xl text-lg leading-8 text-ivory/70 md:text-xl md:leading-9">{story.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </StorySection>

      <LuxuryCTA title="Every transformation starts with safety." body={CONTACT_CTA.body} href={CONTACT_CTA.href} />
    </StoryPage>
  );
}
