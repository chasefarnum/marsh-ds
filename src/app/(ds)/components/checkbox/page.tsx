"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
  return (
    <>
      <PageHeader
        title="Checkbox"
        description="A control that allows selecting one or more options from a set."
      />

      <SectionTitle>Preferences</SectionTitle>
      <Preview>
        <fieldset className="space-y-3">
          <legend className="mb-3 text-sm font-medium text-foreground">
            Select all that apply
          </legend>
          {[
            { id: "option-a", label: "Option A" },
            { id: "option-b", label: "Option B" },
            { id: "option-c", label: "Option C" },
            { id: "option-d", label: "Option D" },
            { id: "option-e", label: "Option E" },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Checkbox id={item.id} />
              <Label htmlFor={item.id}>{item.label}</Label>
            </div>
          ))}
        </fieldset>
      </Preview>
    </>
  );
}
