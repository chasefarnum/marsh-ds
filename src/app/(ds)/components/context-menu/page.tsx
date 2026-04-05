"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";

export default function ContextMenuPage() {
  return (
    <>
      <PageHeader
        title="Context Menu"
        description="A menu that appears on right-click, providing contextual actions."
      />

      <SectionTitle>Right-Click Area</SectionTitle>
      <Preview>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
            Right-click here for options
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Edit</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuItem>Add to Favorites</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Share</ContextMenuItem>
            <ContextMenuItem>Copy Link</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Preview>
    </>
  );
}
