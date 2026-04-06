"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const POLICY_LINKS = [
  { label: "FAQ", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Return Policy", href: "#" },
  { label: "Shipping Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
]

export function GlobalFooter({ className }: { className?: string }) {
  const [email, setEmail] = useState("")

  return (
    <footer className={cn("w-full bg-background", className)}>
      <div className="mx-auto max-w-[1196px] px-6 pt-12 pb-10 md:px-[120px] md:pt-16 md:pb-12 flex flex-col gap-10">

        {/* ── Main content ─────────────────────────────── */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start">

          {/* Brand */}
          <div className="flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Marsh"
              width={155}
              height={27}
              className="dark:invert"
            />
          </div>

          {/* Right column: links above, subscribe below */}
          <div className="flex flex-col gap-8 md:items-end">

            {/* Policy links */}
            <nav className="flex flex-col gap-1 items-start md:items-end">
              {POLICY_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(buttonVariants({ variant: "link", size: "xs" }))}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Subscribe */}
            <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="md:w-[220px]"
              />
              <Button
                variant="default"
                size="default"
                className="shrink-0"
                onClick={() => setEmail("")}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────── */}
        <Separator />

        {/* ── Copyright ────────────────────────────────── */}
        <p className="text-xs font-sans text-muted-foreground">
          © [YEAR] Marsh. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
