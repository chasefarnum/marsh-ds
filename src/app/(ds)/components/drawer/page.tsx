"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function DrawerPage() {
  return (
    <>
      <PageHeader
        title="Drawer"
        description="A panel that slides in from the edge of the screen."
      />

      <SectionTitle>Order Summary</SectionTitle>
      <Preview>
        <Drawer>
          <DrawerTrigger asChild>
            <Button>View Summary</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Your Order</DrawerTitle>
              <DrawerDescription>
                Review your selections before placing the order.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-4">
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Item A</span>
                  <span className="text-muted-foreground">$24</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Item B</span>
                  <span className="text-muted-foreground">$42</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Item C</span>
                  <span className="text-muted-foreground">$16</span>
                </li>
                <li className="flex justify-between pt-1 font-medium">
                  <span>Total</span>
                  <span>$82</span>
                </li>
              </ul>
            </div>
            <DrawerFooter>
              <Button>Place Order</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Preview>
    </>
  );
}
