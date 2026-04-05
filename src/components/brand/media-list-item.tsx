"use client"

import { BiSolidImage, BiRightArrowAlt } from "react-icons/bi"
import { WatchIcons } from "@/components/brand/watch-icons"
import { ComboHeader } from "@/components/brand/combo-header"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

// ─── Shared image placeholder ────────────────────────────────────────────────

function ImagePlaceholder({
  src,
  alt,
  className,
}: {
  src?: string
  alt?: string
  className?: string
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt ?? ""} className={cn("object-cover", className)} />
    )
  }
  return (
    <div className={cn("flex items-center justify-center bg-secondary", className)}>
      <BiSolidImage className="size-6 text-secondary-foreground opacity-60" />
    </div>
  )
}

// ─── Small — 4:3 image ───────────────────────────────────────────────────────

export interface MediaListItemSmProps {
  badge?: string
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  learnMoreHref?: string
  className?: string
}

export function MediaListItemSm({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  learnMoreHref,
  className,
}: MediaListItemSmProps) {
  return (
    <div className={cn("flex flex-col items-start w-full", className)}>
      <Separator className="bg-primary" />
      <div className="flex gap-4 items-end w-full">
        {/* 4:3 image — width derived from aspect ratio × height */}
        <ImagePlaceholder
          src={imageSrc}
          alt={imageAlt}
          className="shrink-0 aspect-[3/4] h-[218px]"
        />
        {/* Text */}
        <div className="flex flex-col gap-2 flex-1 pt-4 min-w-0 h-full justify-between">
          <div className="flex flex-col gap-2">
            {badge && (
              <Badge variant="secondary">{badge}</Badge>
            )}
            <div className="flex flex-col gap-1 w-full">
              <p className="font-sans font-bold text-base leading-normal uppercase text-foreground w-full">
                {title}
              </p>
              {description && (
                <p className="font-sans font-normal text-sm leading-normal text-muted-foreground w-full line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          </div>
          {learnMoreHref && (
            <a href={learnMoreHref} className={cn(buttonVariants({ variant: "link", size: "xs" }), "px-0 self-start")}>
              Learn More <BiRightArrowAlt className="size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Large — 16:9 image ──────────────────────────────────────────────────────

export interface MediaListItemLgProps {
  firstName: string
  lastName: string
  duration?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  watchLinks?: {
    youtube?: string
    spotify?: string
    apple?: string
  }
  className?: string
}

export function MediaListItemLg({
  firstName,
  lastName,
  duration,
  description,
  imageSrc,
  imageAlt,
  watchLinks,
  className,
}: MediaListItemLgProps) {
  const hasWatchLinks =
    watchLinks && (watchLinks.youtube || watchLinks.spotify || watchLinks.apple)

  return (
    <div className={cn("flex flex-col items-start w-full", className)}>
      <Separator className="bg-primary" />

      {/* Mobile: stacked (flex-col), Desktop: side-by-side (flex-row) */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-stretch w-full">

        {/* Image: full-width 16:9 on mobile, fixed-height 16:9 on desktop */}
        <ImagePlaceholder
          src={imageSrc}
          alt={imageAlt}
          className="w-full aspect-video md:w-auto md:h-[178px] md:shrink-0"
        />

        {/* Text */}
        <div className="flex flex-col flex-1 pt-0 md:pt-4 pb-2 min-w-0 gap-4 md:gap-0 md:justify-between w-full">

          {/* Top: name + duration + description */}
          <div className="flex flex-col gap-4 md:gap-1 w-full">
            {/* Header: on mobile name and badge are stacked; on desktop they're inline */}
            <div className="flex flex-col md:flex-row md:gap-2 md:items-center w-full gap-[7px]">
              <ComboHeader first={firstName} last={lastName} size="sm" className="shrink-0" />
              {duration && (
                <div className="md:flex-1 md:flex md:justify-end">
                  <Badge variant="default">{duration}</Badge>
                </div>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="font-sans font-normal text-sm leading-normal text-muted-foreground w-full md:w-[70%]">
                {description}
              </p>
            )}
          </div>

          {/* Watch links: left on mobile, right on desktop */}
          {hasWatchLinks && (
            <div className="flex justify-start md:justify-end w-full">
              <WatchIcons
                youtube={watchLinks?.youtube}
                spotify={watchLinks?.spotify}
                apple={watchLinks?.apple}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
