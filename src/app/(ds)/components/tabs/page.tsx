"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

export default function TabsPage() {
  return (
    <>
      <PageHeader
        title="Tabs"
        description="Tabbed navigation for organizing content into distinct, switchable panels."
      />

      <SectionTitle>Content Tabs</SectionTitle>
      <Preview>
        <Tabs defaultValue="tab-a">
          <TabsList>
            <TabsTrigger value="tab-a">Tab A</TabsTrigger>
            <TabsTrigger value="tab-b">Tab B</TabsTrigger>
            <TabsTrigger value="tab-c">Tab C</TabsTrigger>
          </TabsList>
          <TabsContent value="tab-a" className="space-y-3 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item A1</span>
              <span className="text-muted-foreground">$24</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item A2</span>
              <span className="text-muted-foreground">$28</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item A3</span>
              <span className="text-muted-foreground">$22</span>
            </div>
          </TabsContent>
          <TabsContent value="tab-b" className="space-y-3 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item B1</span>
              <span className="text-muted-foreground">$46</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item B2</span>
              <span className="text-muted-foreground">$42</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item B3</span>
              <span className="text-muted-foreground">$68</span>
            </div>
          </TabsContent>
          <TabsContent value="tab-c" className="space-y-3 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item C1</span>
              <span className="text-muted-foreground">$18</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item C2</span>
              <span className="text-muted-foreground">$16</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Item C3</span>
              <span className="text-muted-foreground">$17</span>
            </div>
          </TabsContent>
        </Tabs>
      </Preview>
    </>
  );
}
