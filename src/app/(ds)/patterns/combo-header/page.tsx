import { PageHeader, Preview } from "@/components/ds/page-header"

export default function ComboHeaderPage() {
  return (
    <>
      <PageHeader
        title="Combo Header"
        description="Paired typographic heading pattern. Replace this page with your brand's combo header pattern."
      />

      <Preview>
        <div className="flex h-24 items-center justify-center">
          <p className="font-sans text-sm text-muted-foreground">
            Combo header placeholder — add your component to /components/brand/combo-header.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
