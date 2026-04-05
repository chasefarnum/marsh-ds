import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioPage() {
  return (
    <>
      <PageHeader
        title="Aspect Ratio"
        description="Displays content within a fixed aspect ratio container."
      />

      <SectionTitle>1:1 — Square</SectionTitle>
      <Preview>
        <AspectRatio ratio={1}>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="Sample image 1:1"
            className="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </Preview>

      <SectionBreak />

      <SectionTitle>4:3 — Gallery</SectionTitle>
      <Preview>
        <AspectRatio ratio={4 / 3}>
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
            alt="Sample image 4:3"
            className="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </Preview>

      <SectionBreak />

      <SectionTitle>16:9 — Hero Image</SectionTitle>
      <Preview>
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80"
            alt="Sample image 16:9"
            className="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </Preview>

      <SectionBreak />

      <SectionTitle>21:9 — Cinematic</SectionTitle>
      <Preview>
        <AspectRatio ratio={21 / 9}>
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1400&q=80"
            alt="Sample image 21:9"
            className="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </Preview>
    </>
  );
}
