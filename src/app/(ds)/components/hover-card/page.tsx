"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function HoverCardPage() {
  return (
    <>
      <PageHeader
        title="Hover Card"
        description="A card that appears when hovering over a trigger element, perfect for showing preview information."
      />

      <SectionTitle>User Profile Preview</SectionTitle>
      <Preview>
        <p className="text-sm text-muted-foreground">
          This content is curated by{" "}
          <HoverCard>
            <HoverCardTrigger className="cursor-pointer font-medium text-foreground underline underline-offset-4">
                Alex Morgan
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <Avatar size="lg">
                  <AvatarImage src="https://i.pravatar.cc/96?u=alex-morgan" alt="Alex Morgan" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-2xl">Alex Morgan</h4>
                  <p className="text-xs text-muted-foreground">
                    Senior contributor with expertise in design systems and component architecture.
                    10+ years of experience.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Member since 2019
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>{" "}
          and features curated selections from verified sources.
        </p>
      </Preview>

      <SectionTitle>Item Details</SectionTitle>
      <Preview>
        <div className="flex gap-6 text-sm text-muted-foreground">
          {["Product Alpha", "Product Beta", "Product Gamma"].map(
            (item) => (
              <HoverCard key={item}>
                <HoverCardTrigger className="cursor-pointer font-medium text-foreground underline underline-offset-4">
                    {item}
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-2">
                    <h4 className="text-2xl">{item}</h4>
                    <p className="text-xs text-muted-foreground">
                      A featured item sourced directly from trusted partners.
                      Available while supplies last.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-lg bg-secondary px-2 py-0.5">Seasonal</span>
                      <span className="rounded-lg bg-secondary px-2 py-0.5">Featured</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )
          )}
        </div>
      </Preview>
    </>
  );
}
