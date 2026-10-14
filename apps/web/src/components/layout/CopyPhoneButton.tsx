"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyPhoneButton() {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("081234567890");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopyPhone}
      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      title="Copy Phone Number"
    >
      {copiedPhone ? (
        <>
          <Check aria-hidden="true" className="size-3 text-emerald-500" />
          <span className="text-emerald-500 font-medium">Copied</span>
        </>
      ) : (
        <>
          <Copy aria-hidden="true" className="size-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
