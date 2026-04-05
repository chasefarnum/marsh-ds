export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string | string[];
}) {
  const paragraphs = Array.isArray(description) ? description : [description];
  return (
    <div className="mb-[72px]">
      <h1 className="font-sans text-5xl font-semibold text-foreground">{title}</h1>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className={`font-sans text-secondary-foreground ${i === 0 ? "text-xl font-normal" : "text-lg font-normal"}`}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 font-sans text-2xl font-medium text-foreground">{children}</h3>
  );
}

export function SectionBreak() {
  return <div className="my-10" />;
}

export function Preview({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full rounded-sm border border-border/40 bg-background p-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
