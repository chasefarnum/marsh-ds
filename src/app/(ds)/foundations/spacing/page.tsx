import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";

const spacingTokens = [
  { name: "0.5", px: 2 },
  { name: "1", px: 4 },
  { name: "1.5", px: 6 },
  { name: "2", px: 8 },
  { name: "3", px: 12 },
  { name: "4", px: 16 },
  { name: "5", px: 20 },
  { name: "6", px: 24 },
  { name: "8", px: 32 },
  { name: "10", px: 40 },
  { name: "12", px: 48 },
  { name: "16", px: 64 },
  { name: "20", px: 80 },
  { name: "24", px: 96 },
];

export default function SpacingPage() {
  return (
    <>
      <PageHeader
        title="Spacing"
        description="Consistent spacing tokens used for margin, padding, and layout gaps."
      />

      <SectionTitle>Spacing Scale</SectionTitle>
      <Preview>
        <div className="space-y-4">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-4">
              <span className="w-10 text-right font-mono text-xs text-foreground">
                {token.name}
              </span>
              <div
                className="h-3 rounded-sm"
                style={{
                  width: `${token.px}px`,
                  backgroundColor: "var(--foreground)",
                }}
              />
              <span className="font-mono text-xs text-muted-foreground">
                {token.px}px
              </span>
            </div>
          ))}
        </div>
      </Preview>
    </>
  );
}
