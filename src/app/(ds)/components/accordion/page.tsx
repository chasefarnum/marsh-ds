import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function AccordionPage() {
  return (
    <>
      <PageHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that reveal associated content."
      />

      <SectionTitle>Categories</SectionTitle>
      <Preview>
        <Accordion>
          <AccordionItem value="section-a">
            <AccordionTrigger>Section A</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Item A1 — short description of this entry</li>
                <li>Item A2 — short description of this entry</li>
                <li>Item A3 — short description of this entry</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="section-b">
            <AccordionTrigger>Section B</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Item B1 — short description of this entry</li>
                <li>Item B2 — short description of this entry</li>
                <li>Item B3 — short description of this entry</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="section-c">
            <AccordionTrigger>Section C</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Item C1 — short description of this entry</li>
                <li>Item C2 — short description of this entry</li>
                <li>Item C3 — short description of this entry</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Preview>
    </>
  );
}
