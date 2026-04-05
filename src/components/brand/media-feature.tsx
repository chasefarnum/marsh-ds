"use client"

import { BiSolidImage } from "react-icons/bi"
import { ComboHeader } from "@/components/brand/combo-header"
import { WatchIcons } from "@/components/brand/watch-icons"
import { cn } from "@/lib/utils"

// ─── Image placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt ?? ""} className={cn("object-cover w-full h-full", className)} />
  }
  return (
    <div className={cn("flex items-center justify-center bg-secondary w-full h-full", className)}>
      <BiSolidImage className="size-6 text-secondary-foreground opacity-60" />
    </div>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MediaFeatureProps {
  firstName: string
  lastName: string
  eyebrow?: { first: string; last: string }
  description: string
  orientation?: "left" | "right"
  type?: "mosaic" | "single"
  imageSrc?: string
  imageAlt?: string
  imageSrc2?: string
  imageSrc3?: string
  watchLinks?: {
    youtube?: string
    spotify?: string
    apple?: string
  }
  className?: string
}

// ─── Component ───────────────────────────────────────────────────────────────

export function MediaFeature({
  firstName,
  lastName,
  eyebrow = { first: "Featured", last: "Episode" },
  description,
  orientation = "left",
  type = "mosaic",
  imageSrc,
  imageAlt,
  imageSrc2,
  imageSrc3,
  watchLinks,
  className,
}: MediaFeatureProps) {
  const alignRight = orientation === "right"

  const imageBlock = (
    <div className="flex flex-col gap-4 flex-1 aspect-square">
      {/* Large image */}
      <div className="flex-1 rounded-sm overflow-hidden">
        <ImagePlaceholder src={imageSrc} alt={imageAlt} />
      </div>
      {/* Mosaic: two small images below */}
      {type === "mosaic" && (
        <div className="flex gap-4 flex-1">
          <div className="flex-1 rounded-sm overflow-hidden">
            <ImagePlaceholder src={imageSrc2} />
          </div>
          <div className="flex-1 rounded-sm overflow-hidden">
            <ImagePlaceholder src={imageSrc3} />
          </div>
        </div>
      )}
    </div>
  )

  const textBlock = (
    <div className={cn("flex flex-col gap-4 flex-1 items-start", alignRight && "md:items-end")}>
      {/* Stacked combo headers — xs label + lg title */}
      <div className={cn("flex flex-col gap-2 w-full items-start", alignRight && "md:items-end")}>
        <ComboHeader first={eyebrow.first} last={eyebrow.last} size="xs" />
        <ComboHeader first={firstName} last={lastName} size="lg" />
      </div>

      {/* Description */}
      <p className={cn(
        "font-sans font-light text-lg leading-normal text-foreground text-left",
        alignRight && "md:text-right"
      )}>
        {description}
      </p>

      {/* Watch icons */}
      {watchLinks && (
        <div className={cn("pt-4 w-full flex justify-start", alignRight && "md:justify-end")}>
          <WatchIcons
            youtube={watchLinks.youtube}
            spotify={watchLinks.spotify}
            apple={watchLinks.apple}
          />
        </div>
      )}
    </div>
  )

  return (
    <div className={cn("w-full bg-background px-6 py-10 md:py-24", className)}>
      {/* Mobile: always flex-col (image on top). Desktop: flex-row, reversed for "right" orientation */}
      <div className={cn(
        "flex flex-col md:flex-row gap-6 items-center mx-auto max-w-[1196px]",
        alignRight && "md:flex-row-reverse"
      )}>
        {imageBlock}
        {textBlock}
      </div>
    </div>
  )
}
