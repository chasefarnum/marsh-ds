"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ds/page-header";

const illustrations: { name: string; darkVariant?: boolean }[] = [
  { name: "Amplify", darkVariant: false },
  { name: "Books" },
  { name: "Clouds" },
  { name: "Collaboration" },
  { name: "Conversation" },
  { name: "Cyber" },
  { name: "Desk Light" },
  { name: "Dialogue" },
  { name: "Diversity" },
  { name: "Doorway" },
  { name: "Goal Conversation" },
  { name: "Growth" },
  { name: "Hands" },
  { name: "Ideas" },
  { name: "Insight" },
  { name: "Pencils" },
  { name: "Perspectives" },
  { name: "Protection" },
  { name: "Target" },
  { name: "Technology" },
  { name: "Thinking" },
  { name: "Wellbeing" },
];

function useIsDark() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

function IllustrationCard({
  name,
  darkVariant = true,
}: {
  name: string;
  darkVariant?: boolean;
}) {
  const isDark = useIsDark();
  const [copied, setCopied] = useState(false);

  const useLight = !isDark || !darkVariant;
  const src = `/illustrations/Illustration ${name} ${useLight ? "Light" : "Dark"}.svg`;

  async function handleCopy() {
    try {
      const res = await fetch(src);
      const text = await res.text();
      // Inject the illustration name as the SVG id so Figma uses it as the frame name
      const named = text.replace(/^(<svg\b)/, `$1 id="${name}"`);
      await navigator.clipboard.writeText(named);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Failed to copy SVG", e);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="group cursor-pointer rounded border border-transparent p-4 transition-colors hover:border-border/40 hover:bg-muted/50"
      title={`Click to copy ${name} SVG`}
    >
      <div className="flex flex-col items-center gap-3">
        <Image
          src={src}
          alt={name}
          width={120}
          height={120}
          className="size-28 object-contain"
        />
        <p className={`text-center text-xs font-medium transition-colors text-muted-foreground group-hover:text-foreground ${copied ? "text-foreground" : ""}`}>
          {copied ? "Copied!" : name}
        </p>
      </div>
    </button>
  );
}

export default function IllustrationsPage() {
  return (
    <>
      <PageHeader
        title="Illustrations"
        description="Brand illustration assets for use across Marsh digital products and communications. Click any illustration to copy the SVG."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {illustrations.map(({ name, darkVariant }) => (
          <IllustrationCard key={name} name={name} darkVariant={darkVariant} />
        ))}
      </div>
    </>
  );
}
