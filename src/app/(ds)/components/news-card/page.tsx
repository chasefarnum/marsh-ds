import { PageHeader, Preview } from "@/components/ds/page-header"

export default function NewsCardPage() {
  return (
    <>
      <PageHeader
        title="News Card"
        description="A branded card for displaying news articles and blog posts. Replace this page with your brand's news card component."
      />
      <Preview>
        <div className="flex h-32 items-center justify-center">
          <p className="font-sans text-sm text-muted-foreground">
            News card placeholder — add your component to /components/brand/news-card.tsx
          </p>
        </div>
      </Preview>
    </>
  )
}
