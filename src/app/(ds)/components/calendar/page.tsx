"use client";

import { useState } from "react";
import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <PageHeader
        title="Calendar"
        description="A date picker calendar for selecting dates."
      />

      <SectionTitle>Pick a Date</SectionTitle>
      <Preview className="flex flex-col items-start gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
        <p className="text-sm text-muted-foreground">
          {date ? `Selected: ${date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}` : "No date selected"}
        </p>
      </Preview>
    </>
  );
}
