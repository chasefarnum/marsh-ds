"use client";

import { useState } from "react";
import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxLabel,
} from "@/components/ui/combobox";

const options = [
  { value: "option-a", label: "Option A" },
  { value: "option-b", label: "Option B" },
  { value: "option-c", label: "Option C" },
  { value: "option-d", label: "Option D" },
  { value: "option-e", label: "Option E" },
  { value: "option-f", label: "Option F" },
  { value: "option-g", label: "Option G" },
  { value: "option-h", label: "Option H" },
];

export default function ComboboxPage() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        title="Combobox"
        description="A searchable dropdown for selecting from a list of options."
      />

      <SectionTitle>Select an Option</SectionTitle>
      <Preview>
        <Combobox value={value} onValueChange={setValue}>
          <ComboboxInput placeholder="Search options..." showClear />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No options found.</ComboboxEmpty>
              <ComboboxGroup>
                <ComboboxLabel>Options</ComboboxLabel>
                {options.map((option) => (
                  <ComboboxItem key={option.value} value={option.value}>
                    {option.label}
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        {value && (
          <p className="mt-3 text-sm text-muted-foreground">
            Selected: <span className="text-foreground">{options.find((o) => o.value === value)?.label}</span>
          </p>
        )}
      </Preview>
    </>
  );
}
