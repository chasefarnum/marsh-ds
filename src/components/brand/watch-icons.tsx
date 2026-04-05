"use client"

import { BiLogoYoutube, BiLogoSpotify, BiLogoApple } from "react-icons/bi"
import { cn } from "@/lib/utils"

export interface WatchIconsProps {
  youtube?: string
  spotify?: string
  apple?: string
  className?: string
}

export function WatchIcons({ youtube, spotify, apple, className }: WatchIconsProps) {
  const hasAny = youtube || spotify || apple

  if (!hasAny) return null

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-mono font-normal text-sm leading-4 text-secondary-foreground whitespace-nowrap">
        Watch:
      </span>
      <div className="flex items-center gap-1.5">
        {youtube && (
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch on YouTube"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <BiLogoYoutube className="size-5" />
          </a>
        )}
        {spotify && (
          <a
            href={spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Spotify"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <BiLogoSpotify className="size-5" />
          </a>
        )}
        {apple && (
          <a
            href={apple}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Apple Podcasts"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <BiLogoApple className="size-5" />
          </a>
        )}
      </div>
    </div>
  )
}
