"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SelectPage() {
  return (
    <>
      <PageHeader
        title="Select"
        description="A dropdown menu for choosing a single value from a list of options."
      />

      <SectionTitle>Basic Select</SectionTitle>
      <Preview className="space-y-2">
        <Label>Quantity</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select quantity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="8">8</SelectItem>
            <SelectItem value="10">10+</SelectItem>
          </SelectContent>
        </Select>
      </Preview>

      <SectionBreak />

      <SectionTitle>Grouped Options</SectionTitle>
      <Preview className="space-y-2">
        <Label>Category</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Group A</SelectLabel>
              <SelectItem value="a1">Option A1</SelectItem>
              <SelectItem value="a2">Option A2</SelectItem>
              <SelectItem value="a3">Option A3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Group B</SelectLabel>
              <SelectItem value="b1">Option B1</SelectItem>
              <SelectItem value="b2">Option B2</SelectItem>
              <SelectItem value="b3">Option B3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Group C</SelectLabel>
              <SelectItem value="c1">Option C1</SelectItem>
              <SelectItem value="c2">Option C2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Preview>
    </>
  );
}
