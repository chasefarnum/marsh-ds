import { PageHeader } from "@/components/ds/page-header";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function WhatsNewPage() {
  return (
    <>
      <PageHeader
        title="What's New"
        description="Latest updates, additions, and changes to the design system."
      />
      <Table className="table-fixed w-full">
        <colgroup>
          <col className="hidden sm:table-column w-[15%]" />
          <col className="w-[50%] sm:w-[20%]" />
          <col className="hidden sm:table-column w-[15%]" />
          <col className="w-[50%]" />
        </colgroup>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell">Date</TableHead>
            <TableHead>Item</TableHead>
            <TableHead className="hidden sm:table-cell">Version</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody />
      </Table>
    </>
  );
}
