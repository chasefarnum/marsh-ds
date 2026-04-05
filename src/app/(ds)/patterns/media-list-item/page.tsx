import { PageHeader, Preview } from "@/components/ds/page-header"

export default function MediaListItemPage() {
  return (
    <>
      <PageHeader
        title="Media List Item"
        description="List item component for media content. Replace this page with your brand's media list item pattern."
      />

      <Preview className="p-0 overflow-hidden">
        <div className="flex h-24 items-center justify-center bg-muted">
          <p className="font-sans text-sm text-muted-foreground">
            Media list item placeholder — add your component to /components/brand/media-list-item.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
