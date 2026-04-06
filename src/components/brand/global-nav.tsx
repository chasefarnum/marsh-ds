"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { BiShoppingBag, BiMenu, BiX, BiChevronDown } from "react-icons/bi"

const NAV_ITEMS = [
  { label: "Learn", href: "#", hasDropdown: true },
  { label: "Discover", href: "#", hasDropdown: true },
  { label: "Experience", href: "#", hasDropdown: true },
  { label: "Shop", href: "#", hasDropdown: false },
]

export function GlobalNav({ className }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn("w-full bg-background", className)}>
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-[1196px] mx-auto">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Marsh"
            width={155}
            height={27}
            className="dark:invert"
          />
        </Link>

        {/* Desktop: nav + cart */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(buttonVariants({ variant: "link", size: "xs" }))}
              >
                {item.label}
                {item.hasDropdown && <BiChevronDown className="size-4" />}
              </Link>
            ))}
          </div>
          <Button variant="ghost" size="icon-sm" aria-label="Shopping bag">
            <BiShoppingBag />
          </Button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="link" size="icon-sm" aria-label="Shopping bag">
            <BiShoppingBag />
          </Button>
          <Button
            variant="link"
            size="icon-sm"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <BiX /> : <BiMenu />}
          </Button>
        </div>

      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-sm text-foreground hover:bg-secondary transition-colors"
            >
              <span className="uppercase tracking-widest text-xs font-bold">
                {item.label}
              </span>
              {item.hasDropdown && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/icon-chevron-down.svg"
                  alt=""
                  width={12}
                  height={8}
                  className="opacity-80 dark:invert -rotate-90"
                />
              )}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
