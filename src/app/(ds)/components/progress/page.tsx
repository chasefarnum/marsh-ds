"use client";

import { useEffect, useState } from "react";
import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Progress } from "@/components/ui/progress";

export default function ProgressPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setValue(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageHeader
        title="Progress"
        description="A visual indicator showing completion status of a task or process."
      />

      <SectionTitle>Animated Progress</SectionTitle>
      <Preview className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Task in progress</span>
          <span className="text-muted-foreground">{value}%</span>
        </div>
        <Progress value={value} />
      </Preview>

      <SectionBreak />

      <SectionTitle>Various States</SectionTitle>
      <Preview className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Step 1 complete</span>
            <span className="text-muted-foreground">25%</span>
          </div>
          <Progress value={25} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Halfway done</span>
            <span className="text-muted-foreground">60%</span>
          </div>
          <Progress value={60} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Nearly complete</span>
            <span className="text-muted-foreground">92%</span>
          </div>
          <Progress value={92} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Finished</span>
            <span className="text-muted-foreground">100%</span>
          </div>
          <Progress value={100} />
        </div>
      </Preview>
    </>
  );
}
