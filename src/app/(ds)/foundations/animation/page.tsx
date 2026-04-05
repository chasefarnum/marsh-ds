"use client";

import { useState } from "react";
import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";

const durations = [
  { name: "fast", ms: 150 },
  { name: "normal", ms: 300 },
  { name: "slow", ms: 500 },
  { name: "editorial", ms: 800 },
];

const easings = [
  { name: "ease-default", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  { name: "ease-editorial", value: "cubic-bezier(0.16, 1, 0.3, 1)" },
];

function AnimBox({
  duration,
  easing,
  label,
  sublabel,
}: {
  duration: number;
  easing: string;
  label: string;
  sublabel: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 64,
          height: 64,
          borderRadius: 2,
          backgroundColor: "var(--foreground)",
          transform: hovered ? "scale(1.3)" : "scale(1)",
          transitionProperty: "transform",
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: easing,
        }}
      />
      <p className="font-mono text-xs text-foreground">{label}</p>
      <p className="font-mono text-xs text-muted-foreground">{sublabel}</p>
    </div>
  );
}

export default function AnimationPage() {
  return (
    <>
      <PageHeader
        title="Animation"
        description="Duration and easing tokens for consistent motion across the system."
      />

      <SectionTitle>Duration Tokens</SectionTitle>
      <Preview>
        <p className="mb-6 text-sm text-muted-foreground">Hover each box to see the transition speed.</p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {durations.map((d) => (
            <AnimBox
              key={d.name}
              duration={d.ms}
              easing="cubic-bezier(0.4, 0, 0.2, 1)"
              label={d.name}
              sublabel={`${d.ms}ms`}
            />
          ))}
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Easing Curves</SectionTitle>
      <Preview>
        <p className="mb-6 text-sm text-muted-foreground">Hover each box to compare easing curves at the same duration (500ms).</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {easings.map((e) => (
            <AnimBox
              key={e.name}
              duration={500}
              easing={e.value}
              label={e.name}
              sublabel={e.value}
            />
          ))}
        </div>
      </Preview>
    </>
  );
}
