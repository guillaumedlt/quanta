"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileWhitePaperToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show after 3 seconds of scrolling
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 animate-fade-up">
      <div className="bg-dark rounded-2xl shadow-2xl shadow-black/30 border border-white/[0.08] p-4 flex items-center gap-3">
        <Link
          href="/white-paper"
          className="flex-1 flex items-center gap-2.5"
          onClick={() => setDismissed(true)}
        >
          <span className="text-[8px] font-bold uppercase tracking-wider text-dark bg-accent px-1.5 py-0.5 rounded shrink-0">
            New
          </span>
          <span className="text-[12px] text-white/70 leading-tight">
            White paper : L&apos;IA à Monaco
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent shrink-0">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
