export default function HomePage() {
  return (
    <>
      <div className="mb-[72px]">
        <h1 className="font-sans text-5xl tracking-tight text-foreground">
          <span className="font-light">Marsh design system</span>
        </h1>
        <p className="mt-4 font-serif text-xl text-muted-foreground">
          Marsh provides the components and tools that help teams work
          more efficiently and bring greater consistency to Marsh&rsquo;s
          digital presence.
        </p>
      </div>
      <div className="overflow-hidden rounded-sm bg-muted h-[480px] flex items-center justify-center">
        <p className="text-muted-foreground font-sans text-sm">
          Cover image placeholder — replace /public/img-ds-cover.png
        </p>
      </div>
    </>
  );
}
