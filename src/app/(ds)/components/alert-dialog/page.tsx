"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogPage() {
  return (
    <>
      <PageHeader
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
      />

      <SectionTitle>Delete Item</SectionTitle>
      <Preview>
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive" />}>
            Delete Item
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this item?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the selected item and all associated
                data. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep Item</AlertDialogCancel>
              <AlertDialogAction>Yes, Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Preview>
    </>
  );
}
