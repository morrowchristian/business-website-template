import React, { useState } from "react";

export default function CopyButton({ targetId }: { targetId: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const el = document.getElementById(targetId);

    if (!el) {
      requestAnimationFrame(handleCopy);
      return;
    }

    navigator.clipboard.writeText(el.innerText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-slate-800 text-white hover:bg-slate-700 transition"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
