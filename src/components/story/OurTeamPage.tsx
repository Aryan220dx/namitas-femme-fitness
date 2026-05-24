import Image from "next/image";
import { cn } from "@/lib/utils";
import { TEAM, CONTACT_CTA } from "@/data/storyPages";
import { LuxuryCTA, Reveal, StoryHero, StoryPage, StorySection } from "./StoryPrimitives";

export function OurTeamPage() {
  return (
    <StoryPage>
      <StoryHero
        kicker="Our Team"
        title="Trainers shaped by discipline and care."
        body="A cinematic chapter for the women who carry the training floor: athletic discipline, movement energy, and calm nutritional guidance working together as one wellness collective."
      />

      <StorySection eyebrow="Wellness Collective" title="The women who carry the floor">
        <div className="space-y-20">
          {TEAM.map((member, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <Reveal key={member.name}>
                <article className="grid items-center gap-10 border border-gold-light/18 bg-ivory/[0.045] p-5 md:p-8 lg:grid-cols-2 lg:gap-16">
                  <div className={cn(!imageFirst && "lg:order-2")}>
                    <div className="relative aspect-[4/5] overflow-hidden border border-gold-light/18 shadow-[0_28px_90px_rgba(0,0,0,0.36)]">
                      <Image
                        src={member.image.src}
                        alt={member.image.alt}
                        fill
                        sizes="(min-width: 1024px) 42vw, 92vw"
                        className={cn("object-cover grayscale-[18%] transition duration-700 hover:grayscale-0", member.name === "Samata Sarvankar" ? "object-center" : "object-top")}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{member.role}</p>
                    <h2 className="mb-6 font-serif text-4xl leading-tight md:text-6xl">{member.name}</h2>
                    <p className="mb-8 text-lg leading-8 text-ivory/72">{member.intro}</p>

                    <div className="space-y-5">
                      {member.groups.map((group) => (
                        <section key={group.title} className="border-l border-gold-light/45 pl-5">
                          <h3 className="mb-3 font-serif text-2xl text-ivory">{group.title}</h3>
                          <ul className="space-y-3">
                            {group.items.map((item) => (
                              <li key={item} className="leading-7 text-ivory/64">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </StorySection>

      <LuxuryCTA title="Meet the team inside the studio." body={CONTACT_CTA.body} href={CONTACT_CTA.href} />
    </StoryPage>
  );
}
