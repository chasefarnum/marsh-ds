"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  {
    label: "What's New",
    items: [
      { href: "/whats-new/principles", label: "Principles" },
      { href: "/whats-new/whats-new", label: "What's New" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { href: "/foundations/design-tokens", label: "Design Tokens" },
      { href: "/foundations/colors", label: "Colors" },
      { href: "/foundations/typography", label: "Typography" },
      { href: "/foundations/spacing", label: "Spacing" },
      { href: "/foundations/overlays", label: "Overlays" },
      { href: "/foundations/animation", label: "Animation" },
    ],
  },
  {
    label: "Components",
    items: [
      { href: "/components/accordion", label: "Accordion" },
      { href: "/components/alert", label: "Alert" },
      { href: "/components/alert-dialog", label: "Alert Dialog" },
      { href: "/components/aspect-ratio", label: "Aspect Ratio" },
      { href: "/components/avatar", label: "Avatar" },
      { href: "/components/badge", label: "Badge" },
      { href: "/components/breadcrumb", label: "Breadcrumb" },
      { href: "/components/button", label: "Button" },
      { href: "/components/calendar", label: "Calendar" },
      { href: "/components/card", label: "Card" },
      { href: "/components/carousel", label: "Carousel" },
      { href: "/components/checkbox", label: "Checkbox" },
      { href: "/components/collapsible", label: "Collapsible" },
      { href: "/components/combobox", label: "Combobox" },
      { href: "/components/command", label: "Command" },
      { href: "/components/context-menu", label: "Context Menu" },
      { href: "/components/dialog", label: "Dialog" },
      { href: "/components/drawer", label: "Drawer" },
      { href: "/components/dropdown-menu", label: "Dropdown Menu" },
      { href: "/components/hover-card", label: "Hover Card" },
      { href: "/components/input", label: "Input" },
      { href: "/components/input-otp", label: "Input OTP" },
      { href: "/components/kbd", label: "Kbd" },
      { href: "/components/label", label: "Label" },
      { href: "/components/menubar", label: "Menubar" },
      { href: "/components/navigation-menu", label: "Navigation Menu" },
      { href: "/components/pagination", label: "Pagination" },
      { href: "/components/popover", label: "Popover" },
      { href: "/components/progress", label: "Progress" },
      { href: "/components/radio-group", label: "Radio Group" },
      { href: "/components/resizable", label: "Resizable" },
      { href: "/components/scroll-area", label: "Scroll Area" },
      { href: "/components/select", label: "Select" },
      { href: "/components/separator", label: "Separator" },
      { href: "/components/sheet", label: "Sheet" },
      { href: "/components/skeleton", label: "Skeleton" },
      { href: "/components/slider", label: "Slider" },
      { href: "/components/sonner", label: "Sonner" },
      { href: "/components/switch", label: "Switch" },
      { href: "/components/table", label: "Table" },
      { href: "/components/tabs", label: "Tabs" },
      { href: "/components/textarea", label: "Textarea" },
      { href: "/components/toggle", label: "Toggle" },
      { href: "/components/toggle-group", label: "Toggle Group" },
      { href: "/components/tooltip", label: "Tooltip" },
      { href: "/components/experience-card", label: "Experience Card" },
      { href: "/components/news-card", label: "News Card" },
    ],
  },
  {
    label: "Patterns",
    items: [
      { href: "/patterns/global-nav", label: "Global Nav" },
      { href: "/patterns/global-footer", label: "Global Footer" },
      { href: "/patterns/watch-icons", label: "Watch Icons" },
      { href: "/patterns/combo-header", label: "Combo Header" },
      { href: "/patterns/media-feature", label: "Media Feature" },
      { href: "/patterns/media-list-item", label: "Media List Item" },
    ],
  },
  {
    label: "Tools & Resources",
    items: [
      { href: "/tools/ui-kits", label: "UI Kits" },
      { href: "/tools/fonts", label: "Fonts" },
      { href: "/tools/icons", label: "Icons" },
    ],
  },
];

export function SidebarNav({ onNavigate }: { onNavigate?: () => void } = {}) {
  const pathname = usePathname();

  // Auto-open the section that contains the current page
  const activeSection = NAV.find((s) =>
    s.items.some((i) => pathname === i.href)
  )?.label;

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    activeSection ? { [activeSection]: true } : {}
  );

  const toggle = (label: string) =>
    setOpenSections((s) => ({ ...s, [label]: !s[label] }));

  return (
    <nav className="flex-1 px-3 pb-6">
      {NAV.map((section) => (
        <div key={section.label} className="mb-2">
          <button
            onClick={() => toggle(section.label)}
            className="block w-full cursor-pointer px-3 py-2 text-left font-sans text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
          >
            {section.label}
          </button>
          {openSections[section.label] && (
            <div className="flex flex-col">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={`rounded-sm py-1.5 pl-6 pr-3 text-left font-sans text-sm font-normal transition-colors ${
                    pathname === item.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
