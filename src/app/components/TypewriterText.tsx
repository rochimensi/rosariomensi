"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

/** Match ScrollReveal so typing starts as the section enters view. */
const IN_VIEW_OPTS: IntersectionObserverInit = {
  threshold: 0.06,
  rootMargin: "0px 0px -6% 0px",
};

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  msPerChar?: number;
  /** Optional delay before typing starts (e.g. stagger after another typewriter). */
  startDelayMs?: number;
  /** When true, typing waits until this element intersects the viewport (first time only). */
  deferUntilInView?: boolean;
  as?: "h1" | "p";
};

export function TypewriterText({
  text,
  className,
  style,
  msPerChar = 42,
  startDelayMs = 0,
  deferUntilInView = false,
  as: Tag = "p",
}: Props) {
  const tagRef = useRef<HTMLElement | null>(null);
  const [viewportReady, setViewportReady] = useState(() => !deferUntilInView);
  const [visible, setVisible] = useState("");
  const [done, setDone] = useState(false);

  const active = !deferUntilInView || viewportReady;

  useLayoutEffect(() => {
    if (!deferUntilInView) return;
    const el = tagRef.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setViewportReady(true);
          io.disconnect();
        }
      }
    }, IN_VIEW_OPTS);

    io.observe(el);
    return () => io.disconnect();
  }, [deferUntilInView]);

  useEffect(() => {
    setVisible("");
    setDone(false);
    if (!text || !active) return;

    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(text);
      setDone(true);
      return;
    }

    let i = 0;
    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1;
        setVisible(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId !== undefined) window.clearInterval(intervalId);
          setDone(true);
        }
      }, msPerChar);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [text, msPerChar, startDelayMs, active]);

  return (
    <Tag ref={tagRef as never} className={className} style={style} aria-label={text}>
      <span aria-hidden="true">{visible}</span>
      {active && !done && (
        <span
          aria-hidden="true"
          className="ml-px inline-block h-[0.95em] w-px translate-y-px animate-pulse bg-current align-middle"
        />
      )}
    </Tag>
  );
}
