import { PageHeader } from "@/components/ds/page-header";

const FONTS = [
  {
    name: "Noto Sans",
    role: "Sans-serif",
    description:
      "The primary sans-serif typeface used for UI elements, body copy, navigation, and all functional text across digital products.",
    token: "--font-sans",
    usage: "UI, body, navigation, labels",
  },
  {
    name: "Marsh Serif",
    role: "Serif",
    description:
      "The editorial serif typeface used for headlines, pull quotes, and long-form storytelling where a refined, literary voice is needed.",
    token: "--font-serif",
    usage: "Headlines, editorial, pull quotes",
  },
  {
    name: "Noto Sans Mono",
    role: "Monospace",
    description:
      "The monospace typeface used for code snippets, technical values, token references, and tabular data throughout the design system.",
    token: "--font-mono",
    usage: "Code, tokens, tabular data",
  },
];

function FontCard({
  font,
}: {
  font: (typeof FONTS)[number];
}) {
  return (
    <div className="rounded border border-border bg-card p-8">
      {/* Preview area */}
      <div className="flex h-48 items-center justify-center rounded bg-muted">
        <p className="text-8xl text-foreground" style={{ fontFamily: `var(${font.token})`, fontWeight: 400 }}>
          Ag
        </p>
      </div>

      {/* Info */}
      <div className="space-y-3 pt-6">
        <h3 className="text-2xl font-medium text-foreground">{font.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {font.description}
        </p>
        <dl className="space-y-1.5 text-sm">
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Token:</dt>
            <dd className="font-mono text-xs text-foreground">{font.token}</dd>
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
        description="Typeface assets and licensing details for the font families used across the Marsh brand."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {FONTS.map((font) => (
          <FontCard key={font.name} font={font} />
        ))}
      </div>
    </>
  );
}
