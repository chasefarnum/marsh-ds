"use client";

import { useState } from "react";
import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Slider } from "@/components/ui/slider";

export default function SliderPage() {
  const [budget, setBudget] = useState([150]);
  const [level, setLevel] = useState([3]);

  return (
    <>
      <PageHeader
        title="Slider"
        description="A range input for selecting a numeric value within a defined range."
      />

      <SectionTitle>Budget Range</SectionTitle>
      <Preview className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Max budget</span>
          <span className="text-foreground">${budget[0]}</span>
        </div>
        <Slider
          value={budget}
          onValueChange={(value) => setBudget(Array.isArray(value) ? value : [value])}
          max={500}
          step={10}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$0</span>
          <span>$500</span>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Priority Level</SectionTitle>
      <Preview className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Priority</span>
          <span className="text-foreground">{level[0]} / 5</span>
        </div>
        <Slider
          value={level}
          onValueChange={(value) => setLevel(Array.isArray(value) ? value : [value])}
          max={5}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Low</span>
          <span>Critical</span>
        </div>
      </Preview>
    </>
  );
}
