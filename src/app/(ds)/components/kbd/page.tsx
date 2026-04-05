import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdPage() {
  return (
    <>
      <PageHeader
        title="Kbd"
        description="Displays keyboard keys and shortcuts in a styled inline element."
      />

      <SectionTitle>Single Keys</SectionTitle>
      <Preview>
        <div className="flex flex-wrap items-center gap-4">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
          <Kbd>Delete</Kbd>
          <Kbd>&#8593;</Kbd>
          <Kbd>&#8595;</Kbd>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Key Combinations</SectionTitle>
      <Preview>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Search</span>
            <KbdGroup>
              <Kbd>&#8984;</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">New item</span>
            <KbdGroup>
              <Kbd>&#8984;</Kbd>
              <Kbd>N</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Save changes</span>
            <KbdGroup>
              <Kbd>&#8984;</Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Undo last action</span>
            <KbdGroup>
              <Kbd>&#8984;</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Toggle sidebar</span>
            <KbdGroup>
              <Kbd>&#8984;</Kbd>
              <Kbd>&#8679;</Kbd>
              <Kbd>L</Kbd>
            </KbdGroup>
          </div>
        </div>
      </Preview>
    </>
  );
}
