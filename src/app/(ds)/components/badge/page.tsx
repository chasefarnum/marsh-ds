import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <>
      <PageHeader
        title="Badge"
        description="Displays a small label or status indicator."
      />

      <SectionTitle>All Variants</SectionTitle>
      <Preview>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">New</Badge>
          <Badge variant="secondary">Seasonal</Badge>
          <Badge variant="outline">Featured</Badge>
          <Badge variant="destructive">Unavailable</Badge>
          <Badge variant="ghost">Draft</Badge>
          <Badge variant="link">View All</Badge>
        </div>
      </Preview>
    </>
  );
}
