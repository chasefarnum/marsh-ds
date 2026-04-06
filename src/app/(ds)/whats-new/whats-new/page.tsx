"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/ds/page-header"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const entries = [
  {
    date: "Apr 6, 2026",
    item: "Illustrations",
    href: "/tools/illustrations",
    version: "1.1.0",
    bullets: [
      "New Tools & Resources page listing all illustrated SVG assets",
      "Click any illustration to copy the SVG to clipboard",
      "Automatically shows light or dark variant based on current theme",
      "SVG id attribute injected with illustration name for correct Figma frame naming on paste",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Border tokens",
    href: null,
    version: "1.1.0",
    bullets: [
      "border token updated to neutral-400 (light) and neutral-700 (dark)",
      "Swept all 55 components and pages to use border-border consistently",
      "Removed hardcoded opacity variants (/10, /40, /50) and border-input misuse across the system",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Selected states",
    href: null,
    version: "1.1.0",
    bullets: [
      "All menu and dropdown selected/focus states now use bg-accent-100",
      "Applies to: Dropdown Menu, Context Menu, Menubar, Select, Command, Combobox",
      "Consistent light-blue highlight replaces the previous bg-muted/bg-accent approach",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Switch",
    href: "/components/switch",
    version: "1.1.0",
    bullets: [
      "Thumb changed to brand-white so it is always visible against any track color",
      "Unchecked track darkened to neutral-300 (light) and neutral-700 (dark)",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Sonner toasts",
    href: "/components/sonner",
    version: "1.1.0",
    bullets: [
      "Text color now uses the correct semantic tokens per type (success, error, warning, info)",
      "Font connected to --font-sans token via [data-sonner-toast] CSS overrides",
      "Title, description, and icon child elements explicitly override Sonner's own styles",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Calendar",
    href: "/components/calendar",
    version: "1.1.0",
    bullets: [
      "Today indicator changed from filled bg-muted to a ring-1 ring-border outline",
      "Hover state on day buttons now shows the same ring outline with no background fill",
      "Selected state (bg-primary) unchanged",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Dialog",
    href: "/components/dialog",
    version: "1.1.0",
    bullets: [
      "Removed bg-muted/50 background from DialogFooter",
      "Footer now renders as a single 1px border-border separator line",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Heading styles",
    href: null,
    version: "1.1.0",
    bullets: [
      "Removed uppercase + tracking-widest from all in-page section headings",
      "Popover (Quick Entry, Filter Options), Scroll Area (All Items), Hover Card names now use text-2xl Marsh Serif",
      "Collapsible group header now uses the Label component",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Toggle",
    href: "/components/toggle",
    version: "1.1.0",
    bullets: [
      "Font weight changed from font-semibold to font-medium",
      "Outline variant border changed from border-input to border-border",
      "Default hover uses bg-muted (matches ghost button); outline hover and pressed state use bg-secondary (matches outline button)",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Tabs",
    href: "/components/tabs",
    version: "1.1.0",
    bullets: [
      "Tab trigger font weight changed from font-semibold to font-medium",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "InputGroup",
    href: "/components/combobox",
    version: "1.1.0",
    bullets: [
      "Border changed from border-input to border-border",
      "Background changed to bg-transparent (matches standalone Input)",
      "Fixes Combobox and Command search field appearance",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Navigation Menu",
    href: "/components/navigation-menu",
    version: "1.1.0",
    bullets: [
      "Trigger and link text weight changed to font-medium",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Fonts page",
    href: "/tools/fonts",
    version: "1.1.0",
    bullets: [
      "Font names updated to Noto Sans, Marsh Serif, Noto Sans Mono",
      "Large Ag preview at text-8xl in each typeface",
      "Token colors corrected throughout",
    ],
  },
  {
    date: "Apr 6, 2026",
    item: "Brand name",
    href: null,
    version: "1.1.0",
    bullets: [
      "All instances of [Brand Name] and [System Name] replaced with Marsh across the documentation site",
    ],
  },
]

export default function WhatsNewPage() {
  const [filter, setFilter] = useState("")

  const filtered = entries.filter((e) => {
    const q = filter.toLowerCase()
    return (
      e.item.toLowerCase().includes(q) ||
      e.date.toLowerCase().includes(q) ||
      e.version.toLowerCase().includes(q) ||
      e.bullets.some((b) => b.toLowerCase().includes(q))
    )
  })

  return (
    <>
      <PageHeader
        title="What's New"
        description="Latest updates, additions, and changes to the Marsh design system."
      />
      <Input
        placeholder="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 max-w-xs"
      />
      <Table className="table-fixed w-full">
        <colgroup>
          <col className="hidden sm:table-column w-[14%]" />
          <col className="w-[22%] sm:w-[18%]" />
          <col className="hidden sm:table-column w-[10%]" />
          <col className="w-[78%] sm:w-[58%]" />
        </colgroup>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell">Date</TableHead>
            <TableHead>Item</TableHead>
            <TableHead className="hidden sm:table-cell">Version</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((entry) => (
            <TableRow key={entry.item}>
              <TableCell className="hidden sm:table-cell align-top font-mono text-muted-foreground">
                {entry.date}
              </TableCell>
              <TableCell className="align-top font-mono font-medium">
                {entry.href ? (
                  <Link href={entry.href} className="underline underline-offset-4 hover:text-primary">
                    {entry.item}
                  </Link>
                ) : (
                  entry.item
                )}
              </TableCell>
              <TableCell className="hidden sm:table-cell align-top font-mono text-muted-foreground">
                {entry.version}
              </TableCell>
              <TableCell className="font-mono text-muted-foreground">
                <ul className="list-disc pl-4 space-y-1">
                  {entry.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
