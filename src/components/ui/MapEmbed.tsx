import Image from "next/image";
import { getFullAddress } from "@/data/business";
import { SITE_ASSETS } from "@/data/siteAssets";

export function MapEmbed({ src }: { src?: string }) {
  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg border border-ink-border/40 bg-ivory-mid grayscale">
      {src ? (
        <iframe
          src={src}
          title={`Map to ${getFullAddress()}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <Image
          src={SITE_ASSETS.mapPreview.src}
          alt={SITE_ASSETS.mapPreview.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}
