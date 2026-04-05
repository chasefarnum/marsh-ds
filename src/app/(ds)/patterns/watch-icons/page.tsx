import { PageHeader, Preview } from "@/components/ds/page-header"

export default function WatchIconsPage() {
  return (
    <>
      <PageHeader
        title="Watch Icons"
        description="Platform link icons pattern. Replace this page with your brand's watch icons pattern."
      />

      <Preview>
        <div className="flex h-16 items-center justify-center">
          <p className="font-sans text-sm text-muted-foreground">
            Watch icons placeholder — add your component to /components/brand/watch-icons.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
