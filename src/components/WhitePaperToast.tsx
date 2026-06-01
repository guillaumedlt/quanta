"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const DISMISS_KEY = "quanta-whitepaper-toast-dismissed-at";
const DISMISS_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const SHOW_AFTER_MS = 4000;

export default function WhitePaperToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DISMISS_KEY);
      if (raw && Date.now() - parseInt(raw, 10) < DISMISS_TTL_MS) {
        setDismissed(true);
        return;
      }
    } catch {
      // localStorage unavailable — proceed to show
    }
    const t = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // ignore
    }
    setDismissed(true);
  }

  if (dismissed || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Téléchargement white paper IA Monaco"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[340px] z-50 animate-fade-up"
    >
      <div className="relative bg-dark rounded-2xl shadow-2xl shadow-black/40 border border-white/[0.08] p-4 pr-10">
        <button
          onClick={dismiss}
          aria-label="Fermer"
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.1] transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <Link href="/white-paper" onClick={dismiss} className="block">
          <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-dark bg-accent px-1.5 py-0.5 rounded mb-2">
            Nouveau
          </span>
          <h3 className="text-[13px] font-semibold text-white leading-snug mb-1.5">
            White paper : L&apos;IA dans la Principauté de Monaco
          </h3>
          <p className="text-[11px] text-white/50 leading-relaxed mb-3">
            Le guide de référence sur l&apos;intégration de l&apos;intelligence artificielle pour les entreprises monégasques.
          </p>
          <span className="text-[12px] font-medium text-accent inline-flex items-center gap-1 group">
            Lire le white paper
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
