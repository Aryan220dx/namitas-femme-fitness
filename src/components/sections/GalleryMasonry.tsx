import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/gallery";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionWrapper } from "../ui/SectionWrapper";

export function GalleryMasonry() {
  return (
    <SectionWrapper>
      <SectionHeading title="Inside the Studio" subtitle="A glimpse into our world of calm, privacy, and premium care." />
      <div className="masonry">
        {GALLERY_IMAGES.map((image, index) => (
          <figure key={image.src} className="masonry-item overflow-hidden rounded-lg border border-ink-border/30 bg-ivory-low">
            <Image
              src={image.src}
              alt={image.alt}
              width={700}
              height={index % 2 === 0 ? 900 : 620}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="h-auto w-full grayscale transition-all duration-500 hover:scale-[1.02] hover:grayscale-0"
            />
          </figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
