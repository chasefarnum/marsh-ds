"use client";

import { useState } from "react";
import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function CollapsiblePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHeader
        title="Collapsible"
        description="An interactive component which expands and collapses content."
      />

      <SectionTitle>Item List</SectionTitle>
      <Preview>
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">
              Group A ({open ? "showing all" : "3 hidden"})
            </h4>
            <CollapsibleTrigger render={<Button variant="ghost" />}>
              {open ? "Show Less" : "Show All"}
            </CollapsibleTrigger>
          </div>
          <div className="mt-3 space-y-2">
            <div className="rounded border border-border px-3 py-3 text-sm text-foreground">
              Item 1 — primary entry in this group
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded border border-border px-3 py-3 text-sm text-foreground">
                Item 2 — secondary entry
              </div>
              <div className="rounded border border-border px-3 py-3 text-sm text-foreground">
                Item 3 — secondary entry
              </div>
              <div className="rounded border border-border px-3 py-3 text-sm text-foreground">
                Item 4 — secondary entry
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </Preview>
    </>
  );
}
