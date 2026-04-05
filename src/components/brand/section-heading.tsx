import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-sans text-xs font-medium uppercase tracking-widest",
            isDark ? "text-neutral-500" : "text-neutral-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-sans text-2xl font-light tracking-tight sm:text-3xl",
          isDark ? "text-white" : "text-brand-black"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl font-serif text-lg",
            isDark ? "text-neutral-400" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
