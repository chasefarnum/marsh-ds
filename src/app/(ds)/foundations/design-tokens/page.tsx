import {
  PageHeader,
  SectionTitle,
  SectionBreak,
} from "@/components/ds/page-header";
import { TokenTable } from "@/components/ds/token-table";

const colorPrimitives = [
  { token: "brand-black", css: "--color-brand-black", value: "#000000" },
  { token: "brand-white", css: "--color-brand-white", value: "#FFFFFF" },
  { token: "accent-50", css: "--color-accent-50", value: "#F5F5F5" },
  { token: "accent-100", css: "--color-accent-100", value: "#E0E0E0" },
  { token: "accent-200", css: "--color-accent-200", value: "#BDBDBD" },
  { token: "accent-300", css: "--color-accent-300", value: "#FF00FF (replace with brand accent)" },
  { token: "accent-400", css: "--color-accent-400", value: "#CC00CC (replace with brand accent)" },
  { token: "accent-500", css: "--color-accent-500", value: "#990099 (replace with brand accent)" },
  { token: "neutral-50", css: "--color-neutral-50", value: "#FAFAFA" },
  { token: "neutral-100", css: "--color-neutral-100", value: "#F5F5F5" },
  { token: "neutral-200", css: "--color-neutral-200", value: "#EFEFEF" },
  { token: "neutral-300", css: "--color-neutral-300", value: "#D9D9D9" },
  { token: "neutral-400", css: "--color-neutral-400", value: "#C5C5C5" },
  { token: "neutral-500", css: "--color-neutral-500", value: "#949494" },
  { token: "neutral-600", css: "--color-neutral-600", value: "#717171" },
  { token: "neutral-700", css: "--color-neutral-700", value: "#4A4A4A" },
  { token: "neutral-800", css: "--color-neutral-800", value: "#2A2A2A" },
  { token: "neutral-900", css: "--color-neutral-900", value: "#1A1A1A" },
];

const colorSemantic = [
  { token: "background", css: "--background", value: "Light: #FFFFFF / Dark: #000000", swatchClass: "bg-background" },
  { token: "foreground", css: "--foreground", value: "Light: #000000 / Dark: #FFFFFF", swatchClass: "bg-foreground" },
  { token: "primary", css: "--primary", value: "Light: #000000 / Dark: #FFFFFF", swatchClass: "bg-primary" },
  { token: "primary-foreground", css: "--primary-foreground", value: "Light: #FFFFFF / Dark: #000000", swatchClass: "bg-primary-foreground" },
  { token: "secondary", css: "--secondary", value: "Light: #EFEFEF / Dark: #2A2A2A", swatchClass: "bg-secondary" },
  { token: "muted", css: "--muted", value: "Light: #F5F5F5 / Dark: #1A1A1A", swatchClass: "bg-muted" },
  { token: "muted-foreground", css: "--muted-foreground", value: "Light: #717171 / Dark: #C5C5C5", swatchClass: "bg-muted-foreground" },
  { token: "accent", css: "--accent", value: "#FF00FF (replace with brand accent)", swatchClass: "bg-accent" },
  { token: "destructive", css: "--destructive", value: "Light: #CC0000 / Dark: #CC0000", swatchClass: "bg-destructive" },
  { token: "border", css: "--border", value: "Light: #D9D9D9 / Dark: #4A4A4A", swatchClass: "bg-border" },
  { token: "ring", css: "--ring", value: "#FF00FF (replace with brand accent)", swatchClass: "bg-ring" },
  { token: "input", css: "--input", value: "Light: #EFEFEF / Dark: #2A2A2A", swatchClass: "bg-input" },
  { token: "card", css: "--card", value: "Light: #FFFFFF / Dark: #1A1A1A", swatchClass: "bg-card" },
];

const colorStatus = [
  { token: "destructive", css: "--destructive", value: "#CC0000 (extended.red)", swatchClass: "bg-destructive" },
  { token: "warning", css: "--warning", value: "#CC5500 (extended.orange)", swatchClass: "bg-warning" },
  { token: "caution", css: "--caution", value: "#CCAA00 (extended.yellow)", swatchClass: "bg-caution" },
  { token: "success", css: "--success", value: "#336633 (extended.green)", swatchClass: "bg-success" },
  { token: "info", css: "--info", value: "#336699 (extended.blue)", swatchClass: "bg-info" },
  { token: "accent-secondary", css: "--accent-secondary", value: "#663366 (extended.purple)", swatchClass: "bg-accent-secondary" },
];

const colorOverlay = [
  { token: "overlay-light", css: "--color-overlay-light", value: "rgba(0, 0, 0, 0.3)" },
  { token: "overlay-medium", css: "--color-overlay-medium", value: "rgba(0, 0, 0, 0.5)" },
  { token: "overlay-heavy", css: "--color-overlay-heavy", value: "rgba(0, 0, 0, 0.73)" },
];

const typography = [
  { token: "font-sans", css: "--font-sans", value: "REPLACE_SANS_FONT, Helvetica Neue, sans-serif" },
  { token: "font-serif", css: "--font-serif", value: "REPLACE_SERIF_FONT, Georgia, serif" },
  { token: "font-mono", css: "--font-mono", value: "REPLACE_MONO_FONT, monospace" },
];

const fontWeights = [
  { token: "font-light", css: "font-weight", value: "300" },
  { token: "font-normal", css: "font-weight", value: "400" },
  { token: "font-medium", css: "font-weight", value: "500 (base default)" },
  { token: "font-semibold", css: "font-weight", value: "600" },
  { token: "font-bold", css: "font-weight", value: "700" },
];

const fontSizes = [
  { token: "text-xs", css: "font-size", value: "0.75rem / 12px" },
  { token: "text-sm", css: "font-size", value: "0.875rem / 14px" },
  { token: "text-base", css: "font-size", value: "1rem / 16px" },
  { token: "text-lg", css: "font-size", value: "1.125rem / 18px" },
  { token: "text-xl", css: "font-size", value: "1.25rem / 20px" },
  { token: "text-2xl", css: "font-size", value: "1.5rem / 24px" },
  { token: "text-3xl", css: "font-size", value: "1.875rem / 30px" },
  { token: "text-4xl", css: "font-size", value: "2.25rem / 36px" },
  { token: "text-5xl", css: "font-size", value: "3rem / 48px" },
];

const spacing = [
  { token: "spacing-0", css: "0", value: "0px" },
  { token: "spacing-0.5", css: "0.125rem", value: "2px" },
  { token: "spacing-1", css: "0.25rem", value: "4px" },
  { token: "spacing-1.5", css: "0.375rem", value: "6px" },
  { token: "spacing-2", css: "0.5rem", value: "8px" },
  { token: "spacing-2.5", css: "0.625rem", value: "10px" },
  { token: "spacing-3", css: "0.75rem", value: "12px" },
  { token: "spacing-4", css: "1rem", value: "16px" },
  { token: "spacing-5", css: "1.25rem", value: "20px" },
  { token: "spacing-6", css: "1.5rem", value: "24px" },
  { token: "spacing-8", css: "2rem", value: "32px" },
  { token: "spacing-10", css: "2.5rem", value: "40px" },
  { token: "spacing-12", css: "3rem", value: "48px" },
  { token: "spacing-14", css: "3.5rem", value: "56px" },
  { token: "spacing-16", css: "4rem", value: "64px" },
  { token: "spacing-20", css: "5rem", value: "80px" },
];

const radius = [
  { token: "radius", css: "--radius", value: "0.125rem / 2px" },
  { token: "radius-sm", css: "--radius-sm", value: "0.125rem / 2px" },
  { token: "radius-md", css: "--radius-md", value: "0.125rem / 2px" },
  { token: "radius-lg", css: "--radius-lg", value: "0.125rem / 2px" },
  { token: "radius-xl", css: "--radius-xl", value: "0.125rem / 2px" },
  { token: "radius-4xl", css: "--radius-4xl", value: "62.4375rem / pill" },
];

const shadows = [
  { token: "shadow-sm", css: "--shadow-sm", value: "0 1px 2px rgba(0,0,0,0.05)" },
  { token: "shadow-md", css: "--shadow-md", value: "0 4px 12px rgba(0,0,0,0.1)" },
  { token: "shadow-lg", css: "--shadow-lg", value: "0 12px 32px rgba(0,0,0,0.15)" },
];

const animation = [
  { token: "duration-fast", css: "--duration-fast", value: "150ms" },
  { token: "duration-normal", css: "--duration-normal", value: "300ms" },
  { token: "duration-slow", css: "--duration-slow", value: "500ms" },
  { token: "duration-editorial", css: "--duration-editorial", value: "800ms" },
  { token: "ease-default", css: "--ease-default", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  { token: "ease-editorial", css: "--ease-editorial", value: "cubic-bezier(0.16, 1, 0.3, 1)" },
];

const layout = [
  { token: "container-sm", css: "--container-sm", value: "640px" },
  { token: "container-md", css: "--container-md", value: "768px" },
  { token: "container-lg", css: "--container-lg", value: "1024px" },
  { token: "container-xl", css: "--container-xl", value: "1280px" },
  { token: "container-2xl", css: "--container-2xl", value: "1440px" },
  { token: "gutter", css: "--gutter", value: "40px" },
  { token: "gutter-mobile", css: "--gutter-mobile", value: "20px" },
];

const buttonSizes = [
  { token: "button-xs", css: "size='xs'", value: "h-7 / px-2.5 / text-xs" },
  { token: "button-sm", css: "size='sm'", value: "h-9 / px-3 / text-sm" },
  { token: "button-default", css: "size='default'", value: "h-10 / px-4 / text-sm" },
  { token: "button-lg", css: "size='lg'", value: "h-11 / px-5 / text-base" },
  { token: "button-xl", css: "size='xl'", value: "h-14 / px-8 / text-lg" },
];

export default function DesignTokensPage() {
  return (
    <>
      <PageHeader
        title="Design Tokens"
        description="The complete token inventory — every value that bridges code, design, and Figma."
      />

      <SectionTitle>Color — Primitives</SectionTitle>
      <TokenTable rows={colorPrimitives} showSwatch />

      <SectionBreak />

      <SectionTitle>Color — Semantic</SectionTitle>
      <TokenTable rows={colorSemantic} showSwatch />

      <SectionBreak />

      <SectionTitle>Color — Status</SectionTitle>
      <TokenTable rows={colorStatus} showSwatch />

      <SectionBreak />

      <SectionTitle>Color — Overlays</SectionTitle>
      <TokenTable rows={colorOverlay} />

      <SectionBreak />

      <SectionTitle>Typography — Font Families</SectionTitle>
      <TokenTable rows={typography} />

      <SectionBreak />

      <SectionTitle>Typography — Font Weights</SectionTitle>
      <TokenTable rows={fontWeights} />

      <SectionBreak />

      <SectionTitle>Typography — Font Sizes</SectionTitle>
      <TokenTable rows={fontSizes} />

      <SectionBreak />

      <SectionTitle>Spacing</SectionTitle>
      <TokenTable rows={spacing} />

      <SectionBreak />

      <SectionTitle>Border Radius</SectionTitle>
      <TokenTable rows={radius} />

      <SectionBreak />

      <SectionTitle>Shadows</SectionTitle>
      <TokenTable rows={shadows} />

      <SectionBreak />

      <SectionTitle>Animation</SectionTitle>
      <TokenTable rows={animation} />

      <SectionBreak />

      <SectionTitle>Layout</SectionTitle>
      <TokenTable rows={layout} />

      <SectionBreak />

      <SectionTitle>Button Sizes</SectionTitle>
      <TokenTable rows={buttonSizes} />
    </>
  );
}
