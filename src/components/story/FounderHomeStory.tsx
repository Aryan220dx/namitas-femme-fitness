"use client";

import { FOUNDER_STORY } from "@/data/storyPages";
import { CountUpStat } from "./CountUpStat";
import { EditorialText, StorySection } from "./StoryPrimitives";

export function FounderHomeStory() {
  return (
    <div className="bg-black text-ivory">
      <StorySection eyebrow="The Why" title="A women-only sanctuary built from lived understanding">
        <EditorialText paragraphs={FOUNDER_STORY.why} />
      </StorySection>

      <StorySection eyebrow="Karwar 2017" title="Where the vision first took form" className="bg-[#090707]">
        <EditorialText paragraphs={FOUNDER_STORY.origin} />
      </StorySection>

      <StorySection eyebrow="Impact Numbers" title="The scale of a quiet revolution" className="bg-[#0d0a0a]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {FOUNDER_STORY.impactStats.map((stat) => (
            <CountUpStat key={stat.label} {...stat} />
          ))}
        </div>
      </StorySection>

      <StorySection eyebrow="Mentorship" title={FOUNDER_STORY.sadhvi.title}>
        <div className="max-w-4xl border-l border-gold-light/50 pl-8">
          <p className="font-serif text-3xl italic leading-tight text-ivory/86 md:text-5xl">{FOUNDER_STORY.sadhvi.body}</p>
        </div>
      </StorySection>
    </div>
  );
}
