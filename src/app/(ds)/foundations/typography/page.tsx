import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";

const sansScale = [
  { className: "text-xs", size: "11px" },
  { className: "text-sm", size: "13px" },
  { className: "text-base", size: "16px" },
  { className: "text-lg", size: "18px" },
  { className: "text-xl", size: "20px" },
  { className: "text-2xl", size: "26px" },
  { className: "text-3xl", size: "32px" },
  { className: "text-4xl", size: "40px" },
  { className: "text-5xl", size: "52px" },
];

const serifScale = [
  { className: "text-serif-base", size: "20px" },
  { className: "text-serif-lg",   size: "26px" },
  { className: "text-serif-xl",   size: "32px" },
  { className: "text-serif-2xl",  size: "40px" },
  { className: "text-serif-3xl",  size: "52px" },
];

const monoScale = [
  { className: "text-xs", size: "11px" },
  { className: "text-sm", size: "13px" },
  { className: "text-base", size: "16px" },
  { className: "text-lg", size: "18px" },
  { className: "text-xl", size: "20px" },
];

const weightScale = [
  { className: "font-thin", value: "100" },
  { className: "font-extralight", value: "200" },
  { className: "font-light", value: "300" },
  { className: "font-normal", value: "400" },
  { className: "font-medium", value: "500" },
  { className: "font-semibold", value: "600" },
  { className: "font-bold", value: "700" },
  { className: "font-extrabold", value: "800" },
  { className: "font-black", value: "900" },
];

const leadingScale = [
  { className: "leading-none", value: "1" },
  { className: "leading-tight", value: "1.25" },
  { className: "leading-snug", value: "1.375" },
  { className: "leading-normal", value: "1.5" },
  { className: "leading-relaxed", value: "1.625" },
  { className: "leading-loose", value: "2" },
];

const trackingScale = [
  { className: "tracking-tightest", value: "-0.03em" },
  { className: "tracking-tight", value: "-0.01em" },
  { className: "tracking-normal", value: "0" },
  { className: "tracking-wide", value: "0.05em" },
  { className: "tracking-wider", value: "0.1em" },
  { className: "tracking-widest", value: "0.2em" },
];

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        description="Type scales, font families, and letter-spacing tokens for consistent hierarchy."
      />

      <SectionTitle>Sans-Serif Scale (Noto Sans)</SectionTitle>
      <Preview>
        <div className="space-y-6">
          {sansScale.map((item) => (
            <div key={item.className} className="space-y-1">
              <p className={`font-sans text-foreground ${item.className}`}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.className} &middot; {item.size}
              </p>
            </div>
          ))}
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Serif Scale (Marsh Serif)</SectionTitle>
      <Preview>
        <div className="space-y-6">
          {serifScale.map((item) => (
            <div key={item.className} className="space-y-1">
              <p className={`font-serif text-foreground ${item.className}`}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.className} &middot; {item.size}
              </p>
            </div>
          ))}
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Monospace Scale (Noto Sans Mono)</SectionTitle>
      <Preview>
        <div className="space-y-6">
          {monoScale.map((item) => (
            <div key={item.className} className="space-y-1">
              <p className={`font-mono text-foreground ${item.className}`}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.className} &middot; {item.size}
              </p>
            </div>
          ))}
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Font Weight</SectionTitle>
      <Preview>
        <div className="space-y-6">
          {weightScale.map((item) => (
            <div key={item.className} className="space-y-1">
              <p className={`font-sans text-lg text-foreground ${item.className}`}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.className} &middot; {item.value}
              </p>
            </div>
          ))}
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Line Height</SectionTitle>
      <Preview>
        <div className="space-y-8">
          {leadingScale.map((item) => (
            <div key={item.className} className="space-y-1">
              <p className={`font-sans text-base text-foreground ${item.className}`}>
                Good typography creates a clear visual hierarchy, improves the readability of content, and supports the overall user experience across every surface.
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.className} &middot; {item.value}
              </p>
            </div>
          ))}
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Letter Spacing</SectionTitle>
      <Preview>
        <div className="space-y-6">
          {trackingScale.map((item) => (
            <div key={item.className} className="space-y-1">
              <p
                className={`font-sans text-lg text-foreground ${item.className}`}
              >
                SAMPLE TEXT
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.className} &middot; {item.value}
              </p>
            </div>
          ))}
        </div>
      </Preview>
    </>
  );
}
