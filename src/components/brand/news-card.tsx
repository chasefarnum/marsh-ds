import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export function NewsCard({
  title,
  date,
  imageSrc,
  imageAlt = "",
  className,
}: NewsCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-3 border-t border-brand-black pt-4 cursor-pointer",
        className
      )}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="size-full object-cover transition-transform duration-[var(--duration-editorial)] ease-[var(--ease-editorial)] group-hover:scale-105"
        />
      </div>
      <time className="font-sans text-xs uppercase tracking-wider text-neutral-500">
        {date}
      </time>
      <h3 className="font-sans text-sm font-light leading-snug text-foreground group-hover:text-neutral-600 transition-colors duration-[var(--duration-normal)]">
        {title}
      </h3>
    </article>
  );
}
