import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputPage() {
  return (
    <>
      <PageHeader
        title="Input"
        description="A text input field for capturing user data in forms and search interfaces."
      />

      <SectionTitle>Default</SectionTitle>
      <Preview>
        <Input placeholder="Search..." />
      </Preview>

      <SectionBreak />

      <SectionTitle>With Label</SectionTitle>
      <Preview className="space-y-2">
        <Label htmlFor="full-name">Full Name</Label>
        <Input id="full-name" placeholder="Enter your full name" />
      </Preview>

      <SectionBreak />

      <SectionTitle>Disabled</SectionTitle>
      <Preview className="space-y-2">
        <Label htmlFor="confirmation">Confirmation Number</Label>
        <Input id="confirmation" disabled value="REF-2024-0847" />
      </Preview>

      <SectionBreak />

      <SectionTitle>Contact Form</SectionTitle>
      <Preview>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first">First Name</Label>
              <Input id="first" placeholder="Alice" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last">Last Name</Label>
              <Input id="last" placeholder="Smith" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="alice@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" placeholder="1" min={1} max={99} />
          </div>
        </div>
      </Preview>
    </>
  );
}
