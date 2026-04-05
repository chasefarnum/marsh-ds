"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    alt: "Sample image 1",
    label: "Slide One",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    alt: "Sample image 2",
    label: "Slide Two",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    alt: "Sample image 3",
    label: "Slide Three",
  },
  {
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
    alt: "Sample image 4",
    label: "Slide Four",
  },
];

export default function CarouselPage() {
  return (
    <>
      <PageHeader
        title="Carousel"
        description="A slideshow component for cycling through content."
      />

      <SectionTitle>Featured Items</SectionTitle>
      <Preview className="px-12">
        <Carousel className="w-full max-w-2xl">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.alt}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <p className="mt-2 text-center text-sm text-foreground">
                    {slide.label}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Preview>
    </>
  );
}
