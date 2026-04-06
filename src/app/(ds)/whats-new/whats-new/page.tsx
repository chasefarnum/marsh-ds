import { PageHeader } from "@/components/ds/page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const entries = [
  {
    date: "2026-04-06",
    item: "Illustrations",
    version: "1.1.0",
    description: "New Tools & Resources page with all illustrated icons. Click any illustration to copy the SVG for use in Figma.",
  },
  {
    date: "2026-04-06",
    item: "Border tokens",
    version: "1.1.0",
    description: "Border token updated to neutral-400 (light) and neutral-700 (dark). Swept all components and pages to use border-border consistently — removed hardcoded opacities (/10, /40, /50) and border-input misuse.",
  },
  {
    date: "2026-04-06",
    item: "Selected states",
    version: "1.1.0",
    description: "All menu and dropdown selected/focus states now use accent-100 (bg-accent-100) for a consistent light-blue highlight — Dropdown Menu, Context Menu, Menubar, Select, Command, Combobox.",
  },
  {
    date: "2026-04-06",
    item: "Switch",
    version: "1.1.0",
    description: "Switch thumb changed to brand-white so it is always visible. Unchecked track darkened to neutral-300 (light) and neutral-700 (dark) for better contrast.",
  },
  {
    date: "2026-04-06",
    item: "Sonner toasts",
    version: "1.1.0",
    description: "Toast text now uses the correct semantic color tokens per type (success, error, warning, info). Font connected to --font-sans token.",
  },
  {
    date: "2026-04-06",
    item: "Calendar",
    version: "1.1.0",
    description: "Today indicator changed from filled bg-muted to a ring-1 ring-border outline. Hover state on day buttons now shows the same ring outline with no fill.",
  },
  {
    date: "2026-04-06",
    item: "Dialog footer",
    version: "1.1.0",
    description: "Removed bg-muted/50 background from dialog footer. Now renders as a single 1px border-border separator line.",
  },
  {
    date: "2026-04-06",
    item: "Heading styles",
    version: "1.1.0",
    description: "Removed uppercase + tracking-widest from in-page section headings (Popover, Scroll Area, Hover Card, Collapsible). All now use text-2xl Marsh Serif. Collapsible group label uses the Label component.",
  },
  {
    date: "2026-04-06",
    item: "Toggle & Tabs",
    version: "1.1.0",
    description: "Toggle and Tabs text weight changed from font-semibold to font-medium. Toggle outline variant uses border-border. Hover/pressed states aligned with button tokens (bg-muted for default, bg-secondary for outline).",
  },
  {
    date: "2026-04-06",
    item: "InputGroup",
    version: "1.1.0",
    description: "InputGroup (used by Combobox and Command) border changed from border-input to border-border with bg-transparent, matching standalone Input field tokens.",
  },
  {
    date: "2026-04-06",
    item: "Navigation Menu",
    version: "1.1.0",
    description: "Navigation menu trigger and link text weight changed to font-medium.",
  },
  {
    date: "2026-04-06",
    item: "Fonts page",
    version: "1.1.0",
    description: "Fonts page updated with real font names (Noto Sans, Marsh Serif, Noto Sans Mono), large Ag preview, and correct token colors.",
  },
  {
    date: "2026-04-06",
    item: "Brand name",
    version: "1.1.0",
    description: "All instances of [Brand Name] and [System Name] replaced with Marsh across the documentation site.",
  },
];

export default function WhatsNewPage() {
  return (
    <>
      <PageHeader
        title="What's New"
        description="Latest updates, additions, and changes to the design system."
      />
      <Table className="table-fixed w-full">
        <colgroup>
          <col className="hidden sm:table-column w-[15%]" />
          <col className="w-[50%] sm:w-[20%]" />
          <col className="hidden sm:table-column w-[15%]" />
          <col className="w-[50%]" />
        </colgroup>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell">Date</TableHead>
            <TableHead>Item</TableHead>
            <TableHead className="hidden sm:table-column">Version</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.item}>
              <TableCell className="hidden sm:table-cell text-muted-foreground tabular-nums">
                {entry.date}
              </TableCell>
              <TableCell className="font-medium">{entry.item}</TableCell>
              <TableCell className="hidden sm:table-cell text-muted-foreground">
                {entry.version}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {entry.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
