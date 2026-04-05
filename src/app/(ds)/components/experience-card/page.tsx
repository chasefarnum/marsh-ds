import { PageHeader, Preview } from "@/components/ds/page-header"

export default function ExperienceCardPage() {
  return (
    <>
      <PageHeader
        title="Experience Card"
        description="A branded card component for showcasing featured content. Replace this page with your brand's experience card component."
      />
      <Preview>
        <div className="flex h-32 items-center justify-center">
          <p className="font-sans text-sm text-muted-foreground">
            Experience card placeholder — add your component to /components/brand/experience-card.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
