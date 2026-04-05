import {
  PageHeader,
  SectionTitle,
  SectionBreak,
} from "@/components/ds/page-header";
import { ColorChip } from "@/components/ds/color-chip";

const primitives = [
  { name: "brand-black", value: "#000000" },
  { name: "brand-white", value: "#FFFFFF" },
  { name: "accent-300", value: "#FF00FF" },
  { name: "accent-400", value: "#CC00CC" },
  { name: "accent-500", value: "#990099" },
  { name: "neutral-50", value: "#FAFAFA" },
  { name: "neutral-100", value: "#F5F5F5" },
  { name: "neutral-200", value: "#EFEFEF" },
  { name: "neutral-300", value: "#D9D9D9" },
  { name: "neutral-400", value: "#C5C5C5" },
  { name: "neutral-500", value: "#949494" },
  { name: "neutral-600", value: "#717171" },
  { name: "neutral-700", value: "#4A4A4A" },
  { name: "neutral-800", value: "#2A2A2A" },
  { name: "neutral-900", value: "#1A1A1A" },
];

const semanticTokens = [
  { name: "background", className: "bg-background", value: "var(--background)" },
  { name: "foreground", className: "bg-foreground", value: "var(--foreground)" },
  { name: "primary", className: "bg-primary", value: "var(--primary)" },
  { name: "primary-foreground", className: "bg-primary-foreground", value: "var(--primary-foreground)" },
  { name: "secondary", className: "bg-secondary", value: "var(--secondary)" },
  { name: "secondary-foreground", className: "bg-secondary-foreground", value: "var(--secondary-foreground)" },
  { name: "muted", className: "bg-muted", value: "var(--muted)" },
  { name: "muted-foreground", className: "bg-muted-foreground", value: "var(--muted-foreground)" },
  { name: "accent", className: "bg-accent", value: "var(--accent)" },
  { name: "accent-foreground", className: "bg-accent-foreground", value: "var(--accent-foreground)" },
  { name: "border", className: "bg-border", value: "var(--border)" },
  { name: "input", className: "bg-input", value: "var(--input)" },
  { name: "ring", className: "bg-ring", value: "var(--ring)" },
  { name: "destructive", className: "bg-destructive", value: "var(--destructive)" },
  { name: "destructive-foreground", className: "bg-destructive-foreground", value: "var(--destructive-foreground)" },
  { name: "card", className: "bg-card", value: "var(--card)" },
  { name: "card-foreground", className: "bg-card-foreground", value: "var(--card-foreground)" },
  { name: "popover", className: "bg-popover", value: "var(--popover)" },
  { name: "popover-foreground", className: "bg-popover-foreground", value: "var(--popover-foreground)" },
];

const extendedColors = [
  { name: "extended-red", value: "#CC0000" },
  { name: "extended-orange", value: "#CC5500" },
  { name: "extended-yellow", value: "#CCAA00" },
  { name: "extended-green", value: "#336633" },
  { name: "extended-purple", value: "#663366" },
  { name: "extended-blue", value: "#336699" },
];

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        title="Colors"
        description="Primitive palette and semantic design tokens that define the visual identity."
      />

      <SectionTitle>Primitive Palette</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {primitives.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Semantic Tokens</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {semanticTokens.map((token) => (
          <ColorChip
            key={token.name}
            name={token.name}
            value={token.value}
            className={token.className}
          />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Extended Colors</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {extendedColors.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>
    </>
  );
}
