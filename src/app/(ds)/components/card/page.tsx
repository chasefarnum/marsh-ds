import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardPage() {
  return (
    <>
      <PageHeader
        title="Card"
        description="A container for grouping related content and actions."
      />

      <SectionTitle>Content Cards</SectionTitle>
      <Preview>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Plan A</CardTitle>
              <CardDescription>
                A comprehensive option with full access to all features and
                priority support included.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-light">$49 <span className="text-sm text-muted-foreground">/ month</span></p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add-on B</CardTitle>
              <CardDescription>
                Extend your plan with additional capacity and advanced
                configuration options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-light">$19 <span className="text-sm text-muted-foreground">add-on</span></p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Add to Plan</Button>
            </CardFooter>
          </Card>
        </div>
      </Preview>
    </>
  );
}
