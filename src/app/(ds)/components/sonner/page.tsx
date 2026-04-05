"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

export default function SonnerPage() {
  return (
    <>
      <Toaster />
      <PageHeader
        title="Sonner"
        description="Lightweight toast notifications for success messages, errors, and status updates."
      />

      <SectionTitle>Toast Variants</SectionTitle>
      <Preview>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => toast("Changes saved successfully")}
          >
            Default Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Action complete", {
                description: "Your request has been processed.",
              })
            }
          >
            Success Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.error("Something went wrong", {
                description: "That action could not be completed.",
              })
            }
          >
            Error Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning("Heads up", {
                description: "This action may have unintended effects.",
              })
            }
          >
            Warning Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Update available", {
                description: "A new version has been published.",
                action: {
                  label: "View",
                  onClick: () => {},
                },
              })
            }
          >
            With Action
          </Button>
        </div>
      </Preview>
    </>
  );
}
