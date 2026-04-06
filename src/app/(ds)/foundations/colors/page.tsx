import {
  PageHeader,
  SectionTitle,
  SectionBreak,
} from "@/components/ds/page-header";
import { ColorChip } from "@/components/ds/color-chip";

const brandColors = [
  { name: "brand-black", value: "#000000" },
  { name: "brand-white", value: "#FFFFFF" },
];

const blueScale = [
  { name: "accent-950", value: "#000917" },
  { name: "accent-900", value: "#00112d" },
  { name: "accent-850", value: "#000f47" },
  { name: "accent-800", value: "#042384" },
  { name: "accent-700", value: "#0737c2" },
  { name: "accent-600", value: "#0b4bff" },
  { name: "accent-500", value: "#3370ff" },
  { name: "accent-400", value: "#5a95ff" },
  { name: "accent-300", value: "#82baff" },
  { name: "accent-200", value: "#a8d3ff" },
  { name: "accent-100", value: "#ceecff" },
  { name: "accent-050", value: "#e7f6ff" },
];

const neutralScale = [
  { name: "neutral-950", value: "#100f0e" },
  { name: "neutral-900", value: "#1f1e1c" },
  { name: "neutral-850", value: "#2e2d2a" },
  { name: "neutral-800", value: "#3d3c37" },
  { name: "neutral-700", value: "#5c5b56" },
  { name: "neutral-600", value: "#7b7974" },
  { name: "neutral-500", value: "#9a9893" },
  { name: "neutral-400", value: "#b9b6b1" },
  { name: "neutral-300", value: "#d8d5d0" },
  { name: "neutral-200", value: "#e8e4df" },
  { name: "neutral-100", value: "#f0ece7" },
  { name: "neutral-050", value: "#f7f3ee" },
];

const goldScale = [
  { name: "gold-900", value: "#2e1d00" },
  { name: "gold-800", value: "#704602" },
  { name: "gold-700", value: "#cb7e03" },
  { name: "gold-600", value: "#e59f02" },
  { name: "gold-500", value: "#ffbf00" },
  { name: "gold-400", value: "#ffcc45" },
  { name: "gold-300", value: "#ffd98a" },
  { name: "gold-200", value: "#ffe6b2" },
  { name: "gold-100", value: "#fff3da" },
  { name: "gold-050", value: "#fff9ed" },
];

const greenScale = [
  { name: "green-900", value: "#0f2415" },
  { name: "green-800", value: "#1f4e00" },
  { name: "green-700", value: "#2f7500" },
  { name: "green-600", value: "#4d9a18" },
  { name: "green-500", value: "#6abf30" },
  { name: "green-400", value: "#8dce61" },
  { name: "green-300", value: "#b0dc92" },
  { name: "green-200", value: "#c8e4b5" },
  { name: "green-100", value: "#dfecd7" },
  { name: "green-050", value: "#eff6eb" },
];

const purpleScale = [
  { name: "purple-900", value: "#2f0140" },
  { name: "purple-800", value: "#5e017f" },
  { name: "purple-700", value: "#8f20de" },
  { name: "purple-600", value: "#a344e6" },
  { name: "purple-500", value: "#b769ef" },
  { name: "purple-400", value: "#ca8df7" },
  { name: "purple-300", value: "#deb1ff" },
  { name: "purple-200", value: "#eacdff" },
  { name: "purple-100", value: "#f5e8ff" },
  { name: "purple-050", value: "#faf4ff" },
];

const redScale = [
  { name: "red-900", value: "#380a0b" },
  { name: "red-800", value: "#691315" },
  { name: "red-700", value: "#9a1c1f" },
  { name: "red-600", value: "#c53532" },
  { name: "red-500", value: "#ef4e45" },
  { name: "red-400", value: "#f77e76" },
  { name: "red-300", value: "#ffaea6" },
  { name: "red-200", value: "#ffc7c1" },
  { name: "red-100", value: "#ffdfdb" },
  { name: "red-050", value: "#fff7f6" },
];

const semanticTokens = [
  {
    name: "background",
    className: "bg-background",
    value: "var(--background)",
    uses: ["Page and layout canvas", "Section backgrounds", "App shell fill"],
  },
  {
    name: "foreground",
    className: "bg-foreground",
    value: "var(--foreground)",
    uses: ["Body copy", "Default text color", "Paragraphs and labels"],
  },
  {
    name: "card",
    className: "bg-card",
    value: "var(--card)",
    uses: ["Card surfaces", "Panels and drawers", "Modal backgrounds"],
  },
  {
    name: "card-foreground",
    className: "bg-card-foreground",
    value: "var(--card-foreground)",
    uses: ["Text inside cards", "Panel headings", "Modal body text"],
  },
  {
    name: "popover",
    className: "bg-popover",
    value: "var(--popover)",
    uses: ["Dropdown menus", "Tooltips", "Floating popovers"],
  },
  {
    name: "popover-foreground",
    className: "bg-popover-foreground",
    value: "var(--popover-foreground)",
    uses: ["Text inside dropdowns", "Tooltip text", "Popover labels"],
  },
  {
    name: "primary",
    className: "bg-primary",
    value: "var(--primary)",
    uses: ["Primary buttons", "Key CTAs", "Active nav indicators"],
  },
  {
    name: "primary-foreground",
    className: "bg-primary-foreground",
    value: "var(--primary-foreground)",
    uses: ["Text on primary buttons", "Icons on primary backgrounds"],
  },
  {
    name: "secondary",
    className: "bg-secondary",
    value: "var(--secondary)",
    uses: ["Secondary buttons", "Alternative actions", "Pill tags"],
  },
  {
    name: "secondary-foreground",
    className: "bg-secondary-foreground",
    value: "var(--secondary-foreground)",
    uses: ["Text on secondary buttons", "Tag labels"],
  },
  {
    name: "muted",
    className: "bg-muted",
    value: "var(--muted)",
    uses: ["Disabled states", "Tab bar backgrounds", "Code block fills", "Skeleton loaders"],
  },
  {
    name: "muted-foreground",
    className: "bg-muted-foreground",
    value: "var(--muted-foreground)",
    uses: ["Placeholder text", "Captions and metadata", "Helper text", "Timestamps"],
  },
  {
    name: "accent",
    className: "bg-accent",
    value: "var(--accent)",
    uses: ["Hover states", "Selected items", "Highlighted rows", "Active chips"],
  },
  {
    name: "accent-foreground",
    className: "bg-accent-foreground",
    value: "var(--accent-foreground)",
    uses: ["Text on accent backgrounds", "Icons on highlighted items"],
  },
  {
    name: "accent-secondary",
    className: "bg-accent-secondary",
    value: "var(--accent-secondary)",
    uses: ["Stronger accent emphasis", "Pressed/active accent states", "Accent borders"],
  },
  {
    name: "border",
    className: "bg-border",
    value: "var(--border)",
    uses: ["Dividers", "Input outlines", "Card borders", "Table rules"],
  },
  {
    name: "gold",
    className: "bg-gold",
    value: "var(--gold)",
    uses: ["Gold buttons", "Eyebrow headers", "Decorative dividers", "Brand accent used sparingly"],
  },
  {
    name: "gold-foreground",
    className: "bg-gold-foreground",
    value: "var(--gold-foreground)",
    uses: ["Text on gold backgrounds", "Icons on gold surfaces"],
  },
  {
    name: "input",
    className: "bg-input",
    value: "var(--input)",
    uses: ["Text input backgrounds", "Select backgrounds", "Textarea fills"],
  },
  {
    name: "ring",
    className: "bg-ring",
    value: "var(--ring)",
    uses: ["Keyboard focus rings", "Accessibility outlines on interactive elements"],
  },
  {
    name: "destructive",
    className: "bg-destructive",
    value: "var(--destructive)",
    uses: ["Delete actions", "Error alerts", "Form validation errors", "Danger badges"],
  },
  {
    name: "destructive-foreground",
    className: "bg-destructive-foreground",
    value: "var(--destructive-foreground)",
    uses: ["Text on destructive backgrounds", "Icons in error states"],
  },
  {
    name: "warning",
    className: "bg-warning",
    value: "var(--warning)",
    uses: ["Warning banners", "High-urgency notices", "Alert indicators"],
  },
  {
    name: "warning-foreground",
    className: "bg-warning-foreground",
    value: "var(--warning-foreground)",
    uses: ["Text on warning banners", "Icons in warning states"],
  },
  {
    name: "caution",
    className: "bg-caution",
    value: "var(--caution)",
    uses: ["Mild warnings", "Informational notices", "In-progress status badges"],
  },
  {
    name: "caution-foreground",
    className: "bg-caution-foreground",
    value: "var(--caution-foreground)",
    uses: ["Text on caution backgrounds"],
  },
  {
    name: "success",
    className: "bg-success",
    value: "var(--success)",
    uses: ["Success states", "Confirmation banners", "Completed step indicators"],
  },
  {
    name: "success-foreground",
    className: "bg-success-foreground",
    value: "var(--success-foreground)",
    uses: ["Text on success backgrounds", "Icons in success states"],
  },
  {
    name: "info",
    className: "bg-info",
    value: "var(--info)",
    uses: ["Informational banners", "Help tooltips", "Neutral status badges"],
  },
  {
    name: "info-foreground",
    className: "bg-info-foreground",
    value: "var(--info-foreground)",
    uses: ["Text on info backgrounds"],
  },
];

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        title="Colors"
        description="Primitive palette and semantic design tokens that define the visual identity."
      />

      <SectionTitle>Brand</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {brandColors.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Blue — Primary Brand</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {blueScale.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Neutral — Grays</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {neutralScale.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Gold — Accent</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {goldScale.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Green</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {greenScale.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Purple</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {purpleScale.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Red</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {redScale.map((color) => (
          <ColorChip key={color.name} name={color.name} value={color.value} />
        ))}
      </div>

      <SectionBreak />

      <SectionTitle>Semantic Tokens</SectionTitle>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {semanticTokens.map((token) => (
          <div
            key={token.name}
            className="flex items-start gap-4 rounded-sm border border-border bg-card p-4"
          >
            {/* Swatch */}
            <div
              className={`h-12 w-12 shrink-0 rounded-sm border border-border ${token.className}`}
            />
            {/* Info */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-foreground">
                  {token.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {token.value}
                </span>
              </div>
              <ul className="mt-1.5 space-y-0.5">
                {token.uses.map((use) => (
                  <li
                    key={use}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
