import { PageHeader, Preview } from "@/components/ds/page-header"

export default function GlobalNavPage() {
  return (
    <>
      <PageHeader
        title="Global Nav"
        description="Primary site navigation. Replace this page with your brand's global nav pattern."
      />

      <Preview className="p-0 overflow-hidden">
        <div className="flex h-16 items-center justify-center bg-muted px-6">
          <p className="font-sans text-sm text-muted-foreground">
            Global nav placeholder — add your component to /components/brand/global-nav.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
