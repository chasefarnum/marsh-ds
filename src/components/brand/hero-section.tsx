import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage: string;
  className?: string;
}

export function HeroSection({
  eyebrow,
  heading,
  description,
  ctaText = "Learn More",
  ctaHref = "#",
  backgroundImage,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[600px] items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      {/* Top gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-overlay-medium to-transparent" />
      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-brand-black to-transparent" />
      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6 px-[var(--gutter-mobile)] text-center sm:px-[var(--gutter)]">
        {eyebrow && (
          <span className="font-sans text-xs font-medium uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </span>
        )}
        <h1 className="font-sans text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
          {heading}
        </h1>
        {description && (
          <p className="font-serif text-lg text-neutral-300">
            {description}
          </p>
        )}
        <Button variant="outline" size="lg" className="border-neutral-400 text-white hover:bg-white/10" render={<a href={ctaHref} />}>
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
