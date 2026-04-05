import { PageHeader } from "@/components/ds/page-header";

const FONTS = [
  {
    name: "REPLACE_SANS_FONT",
    role: "Sans-serif",
    description:
      "The primary sans-serif typeface used for UI elements, body copy, navigation, and all functional text across digital products.",
    weights: "— update in tokens/primitive/typography.tokens.json",
    usage: "UI, body, navigation, labels",
  },
  {
    name: "REPLACE_SERIF_FONT",
    role: "Serif",
    description:
      "The editorial serif typeface used for headlines, pull quotes, and long-form storytelling where a refined, literary voice is needed.",
    weights: "— update in tokens/primitive/typography.tokens.json",
    usage: "Headlines, editorial, pull quotes",
  },
  {
    name: "REPLACE_MONO_FONT",
    role: "Monospace",
    description:
      "The monospace typeface used for code snippets, technical values, token references, and tabular data throughout the design system.",
    weights: "— update in tokens/primitive/typography.tokens.json",
    usage: "Code, tokens, tabular data",
  },
];

function FontCard({
  font,
}: {
  font: (typeof FONTS)[number];
}) {
  return (
    <div className="rounded-lg border border-[var(--color-neutral-900)] bg-[var(--color-brand-black)] p-8">
      {/* Preview area placeholder */}
      <div className="flex h-48 items-center justify-center rounded-md bg-[var(--color-neutral-900)]">
        <p className="text-xs text-muted-foreground font-mono">{font.name}</p>
      </div>

      {/* Info */}
      <div className="space-y-3 pt-6">
        <h3 className="text-base font-medium text-foreground">{font.role}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {font.description}
        </p>
        <dl className="space-y-1.5 text-sm">
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Token:</dt>
            <dd className="font-mono text-xs text-foreground">{font.weights}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Usage:</dt>
            <dd className="text-foreground">{font.usage}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default function FontsPage() {
  return (
    <>
      <PageHeader
        title="Fonts"
        description="Typeface assets and licensing details for the font families used across the [Brand Name] brand."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {FONTS.map((font) => (
          <FontCard key={font.name} font={font} />
        ))}
      </div>
    </>
  );
}
