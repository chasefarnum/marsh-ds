import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";

const overlays = [
  { name: "overlay-light", opacity: "0.3", className: "bg-overlay-light" },
  { name: "overlay-medium", opacity: "0.5", className: "bg-overlay-medium" },
  { name: "overlay-heavy", opacity: "0.73", className: "bg-overlay-heavy" },
];

const bgImage =
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80";

export default function OverlaysPage() {
  return (
    <>
      <PageHeader
        title="Overlays"
        description="Semi-transparent overlays for layering content over imagery."
      />

      <SectionTitle>Overlay Intensities</SectionTitle>
      <Preview>
        <div className="grid gap-6 md:grid-cols-3">
          {overlays.map((overlay) => (
            <div key={overlay.name} className="space-y-3">
              <div className="relative h-48 overflow-hidden rounded">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bgImage}
                  alt="Sample landscape"
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 ${overlay.className}`} />
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="font-sans text-sm font-medium text-white">
                    Sample overlay text
                  </p>
                </div>
              </div>
              <p className="font-mono text-xs text-foreground">
                {overlay.name}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {overlay.className} &middot; opacity {overlay.opacity}
              </p>
            </div>
          ))}
        </div>
      </Preview>
    </>
  );
}
