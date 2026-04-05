import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Separator } from "@/components/ui/separator";

export default function SeparatorPage() {
  return (
    <>
      <PageHeader
        title="Separator"
        description="A visual divider between content sections, available in horizontal and vertical orientations."
      />

      <SectionTitle>Horizontal</SectionTitle>
      <Preview>
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-foreground">[Brand] Overview</h4>
          <p className="text-sm text-muted-foreground">
            A brief description of this section and its purpose.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Detail A</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Detail B</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Detail C</span>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Vertical in Flex Layout</SectionTitle>
      <Preview>
        <div className="flex h-12 items-center gap-4">
          <div className="text-sm text-foreground">Section A</div>
          <Separator orientation="vertical" />
          <div className="text-sm text-foreground">Section B</div>
          <Separator orientation="vertical" />
          <div className="text-sm text-foreground">Section C</div>
          <Separator orientation="vertical" />
          <div className="text-sm text-foreground">Section D</div>
        </div>
      </Preview>
    </>
  );
}
