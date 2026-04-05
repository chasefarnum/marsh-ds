import { cn } from "@/lib/utils"

const sizeMap = {
  xs: "text-base",
  sm: "text-3xl",
  md: "text-5xl",
  lg: "text-6xl",
  xl: "text-7xl",
} as const

export interface ComboHeaderProps {
  first: string
  last: string
  size?: keyof typeof sizeMap
  className?: string
}

export function ComboHeader({ first, last, size = "xs", className }: ComboHeaderProps) {
  const textSize = sizeMap[size]

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      <span
        className={cn(
          "font-sans font-light leading-normal uppercase text-foreground whitespace-nowrap",
          textSize
        )}
      >
        {first}
      </span>
      <span
        className={cn(
          "font-sans font-bold leading-normal uppercase text-foreground whitespace-nowrap",
          textSize
        )}
      >
        {last}
      </span>
    </div>
  )
}
