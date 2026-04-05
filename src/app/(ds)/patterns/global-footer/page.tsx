import { PageHeader, Preview } from "@/components/ds/page-header"

export default function GlobalFooterPage() {
  return (
    <>
      <PageHeader
        title="Global Footer"
        description="Site-wide footer. Replace this page with your brand's global footer pattern."
      />

      <Preview className="p-0 overflow-hidden">
        <div className="flex h-16 items-center justify-center bg-muted px-6">
          <p className="font-sans text-sm text-muted-foreground">
            Global footer placeholder — add your component to /components/brand/global-footer.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
