import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaPage() {
  return (
    <>
      <PageHeader
        title="Textarea"
        description="A multi-line text input for longer-form content like notes and descriptions."
      />

      <SectionTitle>Default</SectionTitle>
      <Preview className="space-y-2">
        <Textarea placeholder="Add notes or additional details..." />
      </Preview>

      <SectionBreak />

      <SectionTitle>With Label</SectionTitle>
      <Preview className="space-y-2">
        <Label htmlFor="item-desc">Description</Label>
        <Textarea
          id="item-desc"
          placeholder="Describe this item, its purpose, and any relevant details..."
          rows={4}
        />
      </Preview>

      <SectionBreak />

      <SectionTitle>Disabled</SectionTitle>
      <Preview className="space-y-2">
        <Label htmlFor="user-notes">Notes</Label>
        <Textarea
          id="user-notes"
          disabled
          defaultValue="This field is disabled. In read-only mode, the content is displayed but cannot be edited by the user."
        />
      </Preview>
    </>
  );
}
