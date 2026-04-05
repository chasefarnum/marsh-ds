"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Toggle } from "@/components/ui/toggle";

export default function TogglePage() {
  return (
    <>
      <PageHeader
        title="Toggle"
        description="A two-state button that can be toggled on or off."
      />

      <SectionTitle>Default</SectionTitle>
      <Preview>
        <div className="flex gap-3">
          <Toggle>Favorite</Toggle>
          <Toggle>Bookmark</Toggle>
          <Toggle>Pin</Toggle>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>With Variants</SectionTitle>
      <Preview>
        <div className="flex gap-3">
          <Toggle variant="outline">Option A</Toggle>
          <Toggle variant="outline">Option B</Toggle>
          <Toggle variant="outline">Option C</Toggle>
          <Toggle variant="outline">Option D</Toggle>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <div className="flex items-center gap-3">
          <Toggle size="sm">Small</Toggle>
          <Toggle size="default">Default</Toggle>
          <Toggle size="lg">Large</Toggle>
        </div>
      </Preview>
    </>
  );
}
