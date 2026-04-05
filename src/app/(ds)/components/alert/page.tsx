import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertPage() {
  return (
    <>
      <PageHeader
        title="Alert"
        description="Displays a callout for important information, feedback, or warnings."
      />

      <SectionTitle>Default</SectionTitle>
      <Preview>
        <Alert>
          <AlertTitle>Action Complete</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully. A confirmation email has been sent.
          </AlertDescription>
        </Alert>
      </Preview>

      <SectionBreak />

      <SectionTitle>Success</SectionTitle>
      <Preview>
        <Alert variant="success">
          <AlertTitle>Payment Complete</AlertTitle>
          <AlertDescription>
            Your payment has been processed successfully. Your order is confirmed.
          </AlertDescription>
        </Alert>
      </Preview>

      <SectionBreak />

      <SectionTitle>Warning</SectionTitle>
      <Preview>
        <Alert variant="warning">
          <AlertTitle>Limited Availability</AlertTitle>
          <AlertDescription>
            Only a few spots remain. Complete your selection soon to guarantee
            your place.
          </AlertDescription>
        </Alert>
      </Preview>

      <SectionBreak />

      <SectionTitle>Info</SectionTitle>
      <Preview>
        <Alert variant="info">
          <AlertTitle>Heads Up</AlertTitle>
          <AlertDescription>
            This feature is currently in beta. Some options may change before
            the final release.
          </AlertDescription>
        </Alert>
      </Preview>

      <SectionBreak />

      <SectionTitle>Destructive</SectionTitle>
      <Preview>
        <Alert variant="destructive">
          <AlertTitle>Request Cancelled</AlertTitle>
          <AlertDescription>
            Your request has been cancelled due to a conflict. Please try again
            or contact support.
          </AlertDescription>
        </Alert>
      </Preview>
    </>
  );
}
