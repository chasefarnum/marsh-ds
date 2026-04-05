"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupPage() {
  return (
    <>
      <PageHeader
        title="Toggle Group"
        description="A group of toggle buttons where one or multiple items can be selected."
      />

      <SectionTitle>Single Selection &mdash; View Mode</SectionTitle>
      <Preview>
        <ToggleGroup defaultValue={["list"]}>
          <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="table">Table</ToggleGroupItem>
          <ToggleGroupItem value="kanban">Kanban</ToggleGroupItem>
        </ToggleGroup>
      </Preview>

      <SectionBreak />

      <SectionTitle>Multiple Selection &mdash; Filters</SectionTitle>
      <Preview>
        <ToggleGroup variant="outline">
          <ToggleGroupItem value="active">Active</ToggleGroupItem>
          <ToggleGroupItem value="featured">Featured</ToggleGroupItem>
          <ToggleGroupItem value="archived">Archived</ToggleGroupItem>
          <ToggleGroupItem value="draft">Draft</ToggleGroupItem>
          <ToggleGroupItem value="pinned">Pinned</ToggleGroupItem>
        </ToggleGroup>
      </Preview>
    </>
  );
}
