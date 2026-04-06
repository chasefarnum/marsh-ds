"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PopoverPage() {
  return (
    <>
      <PageHeader
        title="Popover"
        description="A floating panel that appears on click, ideal for inline forms and quick actions."
      />

      <SectionTitle>Quick Form</SectionTitle>
      <Preview className="flex justify-center">
        <Popover>
          <PopoverTrigger className={buttonVariants({ variant: "outline" })}>
            Open Form
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="text-2xl">Quick Entry</h4>
                <p className="text-sm text-muted-foreground">
                  Fill in the fields below to submit.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pop-name">Name</Label>
                  <Input id="pop-name" placeholder="Your name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pop-date">Date</Label>
                    <Input id="pop-date" placeholder="MM/DD/YYYY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pop-quantity">Quantity</Label>
                    <Input id="pop-quantity" type="number" placeholder="1" />
                  </div>
                </div>
                <Button className="w-full">Submit</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Preview>

      <SectionTitle>Filters</SectionTitle>
      <Preview className="flex justify-center">
        <Popover>
          <PopoverTrigger className={buttonVariants({ variant: "outline", size: "sm" })}>
            Set Filters
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="grid gap-4">
              <h4 className="text-2xl">Filter Options</h4>
              <div className="space-y-2">
                <Label htmlFor="pop-category">Category</Label>
                <Input id="pop-category" placeholder="e.g. Type A, Type B" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pop-status">Status</Label>
                <Input id="pop-status" placeholder="e.g. active, archived" />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Preview>
    </>
  );
}
