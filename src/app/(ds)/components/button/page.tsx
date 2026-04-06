import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";

export default function ButtonPage() {
  return (
    <>
      <PageHeader
        title="Button"
        description="Triggers an action or event, such as submitting a form or opening a dialog."
      />

      <SectionTitle>Variants</SectionTitle>
      <Preview className="p-0">
        <div className="grid grid-cols-2 md:grid-cols-3 [&>*]:border-border/40">
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-r md:border-r-0">
            <Button variant="default">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">default</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 md:border-l md:border-r">
            <Button variant="outline">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">outline</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t border-r md:border-t-0 md:border-r-0">
            <Button variant="secondary">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">secondary</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t">
            <Button variant="ghost">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">ghost</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t border-r md:border-r md:border-l">
            <Button variant="link">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">link</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t border-r md:border-r-0">
            <Button variant="destructive">Delete</Button>
            <span className="text-xs text-muted-foreground font-mono">destructive</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t">
            <Button variant="gold">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">gold</span>
          </div>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Sizes</SectionTitle>
      <Preview className="p-0">
        <div className="grid grid-cols-2 md:grid-cols-3 [&>*]:border-border/40">
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-r md:border-r-0">
            <Button size="xs">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">xs</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 md:border-l md:border-r">
            <Button size="sm">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">sm</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t border-r md:border-t-0 md:border-r-0">
            <Button size="default">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">default</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t">
            <Button size="lg">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">lg</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t border-r md:border-r md:border-l">
            <Button size="xl">Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">xl</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t">
            <Button size="icon">
              <BiPlus className="size-6" />
            </Button>
            <span className="text-xs text-muted-foreground font-mono">icon</span>
          </div>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Disabled</SectionTitle>
      <Preview className="p-0">
        <div className="grid grid-cols-2 md:grid-cols-3 [&>*]:border-border/40">
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-r md:border-r-0">
            <Button disabled>Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">default</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 md:border-l md:border-r">
            <Button variant="outline" disabled>Submit</Button>
            <span className="text-xs text-muted-foreground font-mono">outline</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8 border-t md:border-t-0">
            <Button variant="destructive" disabled>Delete</Button>
            <span className="text-xs text-muted-foreground font-mono">destructive</span>
          </div>
        </div>
      </Preview>
    </>
  );
}
