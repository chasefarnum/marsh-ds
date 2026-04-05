import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import { ScrollArea } from "@/components/ui/scroll-area";

const items = [
  { name: "Item Alpha", category: "Category A", value: "$420" },
  { name: "Item Beta", category: "Category B", value: "$380" },
  { name: "Item Gamma", category: "Category A", value: "$290" },
  { name: "Item Delta", category: "Category C", value: "$350" },
  { name: "Item Epsilon", category: "Category B", value: "$250" },
  { name: "Item Zeta", category: "Category A", value: "$3,200" },
  { name: "Item Eta", category: "Category C", value: "$45" },
  { name: "Item Theta", category: "Category B", value: "$680" },
  { name: "Item Iota", category: "Category A", value: "$450" },
  { name: "Item Kappa", category: "Category C", value: "$280" },
  { name: "Item Lambda", category: "Category B", value: "$190" },
  { name: "Item Mu", category: "Category A", value: "$130" },
];

export default function ScrollAreaPage() {
  return (
    <>
      <PageHeader
        title="Scroll Area"
        description="A scrollable container with custom styled scrollbar for overflowing content."
      />

      <SectionTitle>Item Collection</SectionTitle>
      <Preview>
        <ScrollArea className="h-72 rounded border border-border p-4">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">All Items</h4>
          {items.map((item) => (
            <div key={item.name} className="border-b border-border py-3 last:border-0">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.value}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.category}</span>
            </div>
          ))}
        </ScrollArea>
      </Preview>
    </>
  );
}
