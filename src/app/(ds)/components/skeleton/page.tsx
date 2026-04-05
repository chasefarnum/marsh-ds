import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
  return (
    <>
      <PageHeader
        title="Skeleton"
        description="Placeholder loading states that mimic the shape of content before it loads."
      />

      <SectionTitle>Card Skeleton</SectionTitle>
      <Preview>
        <div className="space-y-3">
          <Skeleton className="h-48 w-full rounded" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Profile Skeleton</SectionTitle>
      <Preview>
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>List Skeleton</SectionTitle>
      <Preview className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <Skeleton className="h-4 w-12" />
          </div>
        ))}
      </Preview>
    </>
  );
}
