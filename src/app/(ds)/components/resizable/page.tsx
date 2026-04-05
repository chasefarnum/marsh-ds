"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function ResizablePage() {
  return (
    <>
      <PageHeader
        title="Resizable"
        description="Draggable panels that let users customize layout proportions."
      />

      <SectionTitle>Horizontal Layout</SectionTitle>
      <Preview>
        <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] rounded border border-border">
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm text-muted-foreground">Panel Left</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm text-muted-foreground">Panel Right</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Preview>

      <SectionBreak />

      <SectionTitle>Three Panel Layout</SectionTitle>
      <Preview>
        <ResizablePanelGroup orientation="horizontal" className="min-h-[250px] rounded border border-border">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Navigation</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-4">
                  <span className="text-sm text-muted-foreground">Editor</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center p-4">
                  <span className="text-sm text-muted-foreground">Notes</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Preview</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Preview>
    </>
  );
}
