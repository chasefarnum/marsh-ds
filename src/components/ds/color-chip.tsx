"use client";

import { useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";

export function ColorChip({
  name,
  value,
  className,
}: {
  name: string;
  value?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = value ?? name;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-border text-left transition-all hover:border-border/80"
    >
      {/* Swatch */}
      <div
        className={`relative h-20 w-full ${className ?? ""}`}
        style={value ? { backgroundColor: value } : undefined}
      >
        {/* Copy indicator */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
          {copied ? (
            <BiCheck size={16} className="text-green-400" />
          ) : (
            <BiCopy size={16} className="text-white" />
          )}
        </div>
      </div>

      {/* Label */}
      <div className="w-full border-t border-border bg-muted px-3 py-2.5">
        <p className="font-mono text-xs text-foreground">{name}</p>
        {value && (
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
            {value}
          </p>
        )}
      </div>
    </button>
  );
}
