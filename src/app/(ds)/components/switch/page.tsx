"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchPage() {
  return (
    <>
      <PageHeader
        title="Switch"
        description="A toggle control for switching between two states, like on/off settings."
      />

      <SectionTitle>Notification Preferences</SectionTitle>
      <Preview className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-alerts" className="flex flex-col items-start gap-1">
            <span>Email Alerts</span>
            <span className="text-xs font-normal text-muted-foreground">
              Get notified about important account activity
            </span>
          </Label>
          <Switch id="email-alerts" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="product-updates" className="flex flex-col items-start gap-1">
            <span>Product Updates</span>
            <span className="text-xs font-normal text-muted-foreground">
              Receive updates when new features are released
            </span>
          </Label>
          <Switch id="product-updates" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="marketing" className="flex flex-col items-start gap-1">
            <span>Marketing Emails</span>
            <span className="text-xs font-normal text-muted-foreground">
              Promotional offers and event invitations
            </span>
          </Label>
          <Switch id="marketing" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="sms" className="flex flex-col items-start gap-1">
            <span>SMS Reminders</span>
            <span className="text-xs font-normal text-muted-foreground">
              Text message reminders before scheduled events
            </span>
          </Label>
          <Switch id="sms" defaultChecked />
        </div>
      </Preview>
    </>
  );
}
