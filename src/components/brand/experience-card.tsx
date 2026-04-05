import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export function ExperienceCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  className,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "group relative aspect-[3/4] overflow-hidden cursor-pointer",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover transition-transform duration-[var(--duration-editorial)] ease-[var(--ease-editorial)] group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-overlay-heavy from-[40%] to-transparent p-5 opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100">
        <span className="font-sans text-xs font-medium uppercase tracking-widest text-neutral-400">
          Experience
        </span>
        <h3 className="mt-1 font-sans text-xl font-light text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-2 font-serif text-sm text-neutral-300 line-clamp-2">
            {description}
          </p>
        )}
      </div>
      {/* Bottom label (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <span className="font-sans text-xs font-medium uppercase tracking-wider text-white transition-opacity duration-[var(--duration-normal)] group-hover:opacity-0">
          {title}
        </span>
      </div>
    </div>
  );
}
