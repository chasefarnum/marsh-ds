import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LabelPage() {
  return (
    <>
      <PageHeader
        title="Label"
        description="An accessible label element that pairs with form controls for clear identification."
      />

      <SectionTitle>Basic Label</SectionTitle>
      <Preview className="space-y-2">
        <Label htmlFor="item-name">Item Name</Label>
        <Input id="item-name" placeholder="e.g. My Item" />
      </Preview>

      <SectionBreak />

      <SectionTitle>Form with Labels</SectionTitle>
      <Preview>
        <div className="grid gap-5">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter a title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="count">Count</Label>
            <Input id="count" type="number" placeholder="1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="text" placeholder="$0.00" />
          </div>
        </div>
      </Preview>
    </>
  );
}
