import { PageHeader, Preview } from "@/components/ds/page-header"

export default function MediaFeaturePage() {
  return (
    <>
      <PageHeader
        title="Media Feature"
        description="Full-width feature block pairing media with text. Replace this page with your brand's media feature pattern."
      />

      <Preview className="p-0 overflow-hidden">
        <div className="flex h-48 items-center justify-center bg-muted">
          <p className="font-sans text-sm text-muted-foreground">
            Media feature placeholder — add your component to /components/brand/media-feature.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
