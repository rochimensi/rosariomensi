"use client";

import { useEffect, useState } from "react";

export function BackToTopButton({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className={`fixed right-4 bottom-4 z-30 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-[#f7f4ee]/95 text-lg text-black/75 shadow-sm backdrop-blur-sm transition-all duration-300 sm:right-6 sm:bottom-6 ${
        visible
          ? "translate-y-0 opacity-100 hover:border-black/40 hover:text-black"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
