"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SheetPage() {
  return (
    <>
      <PageHeader
        title="Sheet"
        description="A panel that slides in from the edge of the screen, used for supplementary content."
      />

      <SectionTitle>Right Sheet</SectionTitle>
      <Preview className="flex justify-center">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Details
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Entry</SheetTitle>
              <SheetDescription>
                Update the details for entry #REF-2024-0847.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="sheet-name">Name</Label>
                <Input id="sheet-name" defaultValue="Alice Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sheet-date">Date</Label>
                <Input id="sheet-date" defaultValue="March 28, 2026" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sheet-time">Time</Label>
                <Input id="sheet-time" defaultValue="9:00 AM" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sheet-quantity">Quantity</Label>
                <Input id="sheet-quantity" type="number" defaultValue="4" />
              </div>
              <Button>Save Changes</Button>
            </div>
          </SheetContent>
        </Sheet>
      </Preview>

      <SectionBreak />

      <SectionTitle>Left Sheet</SectionTitle>
      <Preview className="flex justify-center">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Filters
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filter Results</SheetTitle>
              <SheetDescription>
                Narrow down results by category and status.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="sheet-category">Category</Label>
                <Input id="sheet-category" placeholder="e.g. Type A, Type B" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sheet-status">Status</Label>
                <Input id="sheet-status" placeholder="e.g. active, archived" />
              </div>
              <Button>Apply Filters</Button>
            </div>
          </SheetContent>
        </Sheet>
      </Preview>
    </>
  );
}
