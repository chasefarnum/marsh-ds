"use client";

import { useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";

type TokenRow = {
  token: string;
  css: string;
  value: string;
  swatchClass?: string;
};

export function TokenTable({
  rows,
  showSwatch = false,
}: {
  rows: TokenRow[];
  showSwatch?: boolean;
}) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div className="overflow-hidden rounded-sm border border-border">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-muted">
            {showSwatch && (
              <th className="w-10 px-4 py-3" />
            )}
            <th className="px-4 py-3 font-mono text-xs font-semibold text-muted-foreground">
              Token
            </th>
            <th className="px-4 py-3 font-mono text-xs font-semibold text-muted-foreground">
              CSS Variable
            </th>
            <th className="px-4 py-3 font-mono text-xs font-semibold text-muted-foreground">
              Value
            </th>
            <th className="w-12 px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.token}
              className="border-b border-border/50 last:border-b-0 transition-colors hover:bg-muted/50"
            >
              {showSwatch && (
                <td className="px-4 py-3">
                  <div
                    className={`size-5 rounded-sm border border-border ${row.swatchClass ?? ""}`}
                    style={row.swatchClass ? undefined : { backgroundColor: row.value }}
                  />
                </td>
              )}
              <td className="px-4 py-3 font-mono text-sm text-foreground">
                {row.token}
              </td>
              <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                {row.css}
              </td>
              <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                {row.value}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => handleCopy(row.value, idx)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copiedIdx === idx ? (
                    <BiCheck size={14} className="text-success" />
                  ) : (
                    <BiCopy size={14} />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
