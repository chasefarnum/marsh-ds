"use client";

import { useState } from "react";
import Image from "next/image";
import { SidebarNav } from "./sidebar-nav";
import { SidebarSearch } from "./sidebar-search";
import { ThemeToggle } from "./theme-toggle";
import { BiX, BiMenu } from "react-icons/bi";

export function DSLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-40 flex w-64 flex-col border-r border-border bg-sidebar transition-transform duration-200 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Header: logo + search */}
        <div className="shrink-0 px-5 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <Image
                src="/marsh-logo-midnight.svg"
                alt="Marsh"
                width={120}
                height={28}
                priority
                className="block dark:hidden"
              />
              <Image
                src="/marsh-logo-white.svg"
                alt="Marsh"
                width={120}
                height={28}
                priority
                className="hidden dark:block"
              />
            </a>
            {/* Close button on mobile */}
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded p-1 text-muted-foreground hover:text-foreground lg:hidden"
              aria-label="Close sidebar"
            >
              <BiX size={24} />
            </button>
          </div>
          <div className="mt-5">
            <SidebarSearch />
          </div>
        </div>

        {/* Scrollable nav */}
        <div className="flex-1 overflow-y-auto">
          <SidebarNav onNavigate={() => setOpen(false)} />
        </div>
      </aside>

      {/* Content */}
      <main className="min-h-screen flex-1 bg-background lg:ml-64">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-5 sm:px-8 lg:justify-end lg:px-14 lg:pt-6">
          {/* Hamburger on mobile */}
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer rounded p-1 text-muted-foreground hover:text-foreground lg:hidden"
            aria-label="Open sidebar"
          >
            <BiMenu size={24} />
          </button>
          <ThemeToggle />
        </div>
        <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-4 sm:px-8 sm:pb-16 sm:pt-6 lg:px-14">
          {children}
        </div>
      </main>
    </div>
  );
}
