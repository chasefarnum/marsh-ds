"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RadioGroupPage() {
  return (
    <>
      <PageHeader
        title="Radio Group"
        description="A set of mutually exclusive options where only one can be selected at a time."
      />

      <SectionTitle>Layout Preference</SectionTitle>
      <Preview>
        <RadioGroup defaultValue="option-a">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-a" id="option-a" />
            <Label htmlFor="option-a">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-b" id="option-b" />
            <Label htmlFor="option-b">Option B</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-c" id="option-c" />
            <Label htmlFor="option-c">Option C</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-d" id="option-d" />
            <Label htmlFor="option-d">Option D</Label>
          </div>
        </RadioGroup>
      </Preview>

      <SectionBreak />

      <SectionTitle>Plan Selection</SectionTitle>
      <Preview>
        <RadioGroup defaultValue="plan-a">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="plan-a" id="plan-a" />
            <Label htmlFor="plan-a">Plan A &mdash; $49/mo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="plan-b" id="plan-b" />
            <Label htmlFor="plan-b">Plan B &mdash; $99/mo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="plan-c" id="plan-c" />
            <Label htmlFor="plan-c">Plan C &mdash; Custom</Label>
          </div>
        </RadioGroup>
      </Preview>
    </>
  );
}
