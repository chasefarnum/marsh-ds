"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function TooltipPage() {
  return (
    <>
      <PageHeader
        title="Tooltip"
        description="A small popup that appears on hover to provide additional context about an element."
      />

      <SectionTitle>Default</SectionTitle>
      <Preview className="flex justify-center">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            Hover me
          </TooltipTrigger>
          <TooltipContent>
            <p>Additional context goes here</p>
          </TooltipContent>
        </Tooltip>
      </Preview>

      <SectionBreak />

      <SectionTitle>Placement Variants</SectionTitle>
      <Preview className="flex justify-center gap-4">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>
            Top
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Appears above</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>
            Right
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Appears right</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>
            Bottom
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Appears below</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>
            Left
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Appears left</p>
          </TooltipContent>
        </Tooltip>
      </Preview>

      <SectionBreak />

      <SectionTitle>Contextual Actions</SectionTitle>
      <Preview className="flex justify-center gap-3">
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" />}>
            Save
          </TooltipTrigger>
          <TooltipContent>
            <p>Save your changes</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>
            Share
          </TooltipTrigger>
          <TooltipContent>
            <p>Share this with others</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="ghost" size="sm" />}>
            Print
          </TooltipTrigger>
          <TooltipContent>
            <p>Print a copy</p>
          </TooltipContent>
        </Tooltip>
      </Preview>
    </>
  );
}
