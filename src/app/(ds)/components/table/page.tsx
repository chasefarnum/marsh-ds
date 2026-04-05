import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = [
  { id: "REF-001", name: "Alice Johnson", date: "Mar 28", time: "9:00 AM", qty: 4, status: "Confirmed" },
  { id: "REF-002", name: "Bob Chen", date: "Mar 28", time: "10:30 AM", qty: 2, status: "Confirmed" },
  { id: "REF-003", name: "Carol Morris", date: "Mar 28", time: "1:00 PM", qty: 6, status: "Pending" },
  { id: "REF-004", name: "David Webb", date: "Mar 28", time: "2:30 PM", qty: 2, status: "Confirmed" },
  { id: "REF-005", name: "Eva Vasquez", date: "Mar 29", time: "9:00 AM", qty: 8, status: "Waitlist" },
  { id: "REF-006", name: "Frank Kim", date: "Mar 29", time: "11:00 AM", qty: 3, status: "Confirmed" },
];

export default function TablePage() {
  return (
    <>
      <PageHeader
        title="Table"
        description="A structured data display for presenting tabular information with headers, rows, and cells."
      />

      <SectionTitle>Upcoming Entries</SectionTitle>
      <Preview>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-center">Qty</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-mono text-xs">{r.id}</TableCell>
                <TableCell className="font-medium">{r.name}</TableCell>
                <TableCell>{r.date}</TableCell>
                <TableCell>{r.time}</TableCell>
                <TableCell className="text-center">{r.qty}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={
                      r.status === "Confirmed"
                        ? "text-green-400"
                        : r.status === "Pending"
                          ? "text-yellow-400"
                          : "text-muted-foreground"
                    }
                  >
                    {r.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Preview>
    </>
  );
}
