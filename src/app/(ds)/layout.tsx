import { DSLayout } from "@/components/ds/ds-layout";

export default function DSRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DSLayout>{children}</DSLayout>;
}
