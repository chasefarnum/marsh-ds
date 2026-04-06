"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { BiSearch, BiX } from "react-icons/bi";
import { Input } from "@/components/ui/input";

const ALL_PAGES = [
  // Foundations
  { label: "Design Tokens", href: "/foundations/design-tokens", section: "Foundations" },
  { label: "Colors", href: "/foundations/colors", section: "Foundations" },
  { label: "Typography", href: "/foundations/typography", section: "Foundations" },
  { label: "Spacing", href: "/foundations/spacing", section: "Foundations" },
  { label: "Overlays", href: "/foundations/overlays", section: "Foundations" },
  { label: "Animation", href: "/foundations/animation", section: "Foundations" },
  // Components
  { label: "Accordion", href: "/components/accordion", section: "Components" },
  { label: "Alert", href: "/components/alert", section: "Components" },
  { label: "Alert Dialog", href: "/components/alert-dialog", section: "Components" },
  { label: "Aspect Ratio", href: "/components/aspect-ratio", section: "Components" },
  { label: "Avatar", href: "/components/avatar", section: "Components" },
  { label: "Badge", href: "/components/badge", section: "Components" },
  { label: "Breadcrumb", href: "/components/breadcrumb", section: "Components" },
  { label: "Button", href: "/components/button", section: "Components" },
  { label: "Calendar", href: "/components/calendar", section: "Components" },
  { label: "Card", href: "/components/card", section: "Components" },
  { label: "Carousel", href: "/components/carousel", section: "Components" },
  { label: "Checkbox", href: "/components/checkbox", section: "Components" },
  { label: "Collapsible", href: "/components/collapsible", section: "Components" },
  { label: "Combobox", href: "/components/combobox", section: "Components" },
  { label: "Command", href: "/components/command", section: "Components" },
  { label: "Context Menu", href: "/components/context-menu", section: "Components" },
  { label: "Dialog", href: "/components/dialog", section: "Components" },
  { label: "Drawer", href: "/components/drawer", section: "Components" },
  { label: "Dropdown Menu", href: "/components/dropdown-menu", section: "Components" },
  { label: "Hover Card", href: "/components/hover-card", section: "Components" },
  { label: "Input", href: "/components/input", section: "Components" },
  { label: "Input OTP", href: "/components/input-otp", section: "Components" },
  { label: "Kbd", href: "/components/kbd", section: "Components" },
  { label: "Label", href: "/components/label", section: "Components" },
  { label: "Menubar", href: "/components/menubar", section: "Components" },
  { label: "Navigation Menu", href: "/components/navigation-menu", section: "Components" },
  { label: "Pagination", href: "/components/pagination", section: "Components" },
  { label: "Popover", href: "/components/popover", section: "Components" },
  { label: "Progress", href: "/components/progress", section: "Components" },
  { label: "Radio Group", href: "/components/radio-group", section: "Components" },
  { label: "Resizable", href: "/components/resizable", section: "Components" },
  { label: "Scroll Area", href: "/components/scroll-area", section: "Components" },
  { label: "Select", href: "/components/select", section: "Components" },
  { label: "Separator", href: "/components/separator", section: "Components" },
  { label: "Sheet", href: "/components/sheet", section: "Components" },
  { label: "Skeleton", href: "/components/skeleton", section: "Components" },
  { label: "Slider", href: "/components/slider", section: "Components" },
  { label: "Sonner", href: "/components/sonner", section: "Components" },
  { label: "Switch", href: "/components/switch", section: "Components" },
  { label: "Table", href: "/components/table", section: "Components" },
  { label: "Tabs", href: "/components/tabs", section: "Components" },
  { label: "Textarea", href: "/components/textarea", section: "Components" },
  { label: "Toggle", href: "/components/toggle", section: "Components" },
  { label: "Toggle Group", href: "/components/toggle-group", section: "Components" },
  { label: "Tooltip", href: "/components/tooltip", section: "Components" },
  { label: "Experience Card", href: "/components/experience-card", section: "Components" },
  { label: "News Card", href: "/components/news-card", section: "Components" },
];

export function SidebarSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const focusInput = () =>
    (document.getElementById("sidebar-search-input") as HTMLInputElement | null)?.focus();
  const blurInput = () =>
    (document.getElementById("sidebar-search-input") as HTMLInputElement | null)?.blur();

  const filtered = query.trim()
    ? ALL_PAGES.filter((p) =>
        p.label.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Group results by section
  const grouped = filtered.reduce<Record<string, typeof ALL_PAGES>>((acc, page) => {
    if (!acc[page.section]) acc[page.section] = [];
    acc[page.section].push(page);
    return acc;
  }, {});

  const flatResults = Object.values(grouped).flat();

  // Reset selection when results change
  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard shortcut ⌘K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        focusInput();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
        blurInput();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, flatResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flatResults[selectedIdx]) {
      e.preventDefault();
      router.push(flatResults[selectedIdx].href);
      setQuery("");
      setOpen(false);
      blurInput();
    }
  };

  const handleSelect = (href: string) => {
    router.push(href);
    setQuery("");
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Input */}
      <div className="relative">
        <BiSearch size={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="sidebar-search-input"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="pl-8 pr-8 text-xs"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setOpen(false);
              focusInput();
            }}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <BiX size={16} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && flatResults.length > 0 && (
        <div className="absolute left-0 right-0 top-9 z-50 max-h-72 overflow-y-auto rounded-sm border border-border bg-background shadow-lg">
          {Object.entries(grouped).map(([section, pages]) => (
            <div key={section}>
              <div className="px-3 pt-2.5 pb-1 font-sans text-[11px] font-semibold text-muted-foreground">
                {section}
              </div>
              {pages.map((page) => {
                const idx = flatResults.indexOf(page);
                return (
                  <button
                    key={page.href}
                    onClick={() => handleSelect(page.href)}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    className={`flex w-full items-center px-3 py-2 text-left font-sans text-sm transition-colors ${
                      idx === selectedIdx
                        ? "bg-secondary text-foreground"
                        : "text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {page.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
