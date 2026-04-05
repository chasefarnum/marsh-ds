"use client";

import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export default function InputOTPPage() {
  return (
    <>
      <PageHeader
        title="Input OTP"
        description="A one-time password input for verification codes and PIN entry."
      />

      <SectionTitle>Verification Code</SectionTitle>
      <Preview className="flex justify-center">
        <div className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>4-Digit PIN</SectionTitle>
      <Preview className="flex justify-center">
        <div className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            Enter your 4-digit PIN to continue
          </p>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </Preview>
    </>
  );
}
