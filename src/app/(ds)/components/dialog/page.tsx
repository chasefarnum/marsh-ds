"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogPage() {
  return (
    <>
      <PageHeader
        title="Dialog"
        description="A modal window that appears over the main content to capture user input."
      />

      <SectionTitle>New Entry</SectionTitle>
      <Preview>
        <Dialog>
          <DialogTrigger render={<Button />}>Create New</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Entry</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new entry.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter a name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" type="number" placeholder="1" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" defaultValue="09:00" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Preview>
    </>
  );
}
