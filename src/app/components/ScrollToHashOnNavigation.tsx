"use client";

import { useEffect } from "react";
import type { Locale } from "../i18n/config";

/** Scroll to `#hash` after client navigation / refresh (Next `<Link>` does not always scroll to `#`). */
export function ScrollToHashOnNavigation({ locale }: { locale: Locale }) {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
  }, [locale]);

  return null;
}
