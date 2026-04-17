"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PageCopy } from "../i18n";

export function ReviewsSection({ t }: { t: PageCopy }) {
  const items = t.reviews.items;
  const count = items.length;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const updateIndexFromScroll = useCallback(() => {
    const root = scrollerRef.current;
    if (!root || count === 0) return;
    const children = [...root.children] as HTMLElement[];
    const mid = root.scrollLeft + root.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((el, i) => {
      const center = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(center - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIndex(best);
  }, [count]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    updateIndexFromScroll();
    root.addEventListener("scroll", updateIndexFromScroll, { passive: true });
    return () => root.removeEventListener("scroll", updateIndexFromScroll);
  }, [updateIndexFromScroll]);

  const scrollToIndex = (i: number) => {
    const root = scrollerRef.current;
    if (!root || !root.children[i]) return;
    const target = root.children[i] as HTMLElement;
    const first = root.firstElementChild as HTMLElement | null;
    const base = first?.offsetLeft ?? 0;
    root.scrollTo({ left: target.offsetLeft - base, behavior: "smooth" });
  };

  const goPrev = () => scrollToIndex(Math.max(0, index - 1));
  const goNext = () => scrollToIndex(Math.min(count - 1, index + 1));

  const controlBtnClass =
    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 bg-[#f7f4ee]/95 text-lg text-black/75 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-black/40 hover:text-black disabled:pointer-events-none disabled:opacity-40";

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    dragRef.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const el = scrollerRef.current;
    if (!el) return;
    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.scrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const el = scrollerRef.current;
    if (el?.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    dragRef.current.active = false;
    setIsDragging(false);
  };

  /** No translate — horizontal scroll containers clip overflow, so lifting the card looked cut off. */
  const cardHoverClass =
    "transition-[box-shadow,border-color,background-color] duration-300 ease-out hover:border-black/20 hover:bg-white/65 hover:shadow-[0_12px_44px_rgba(0,0,0,0.08)]";

  return (
    <section id="reviews" className="w-full border-b border-black/10 py-20 md:py-28 lg:py-32">
      <div className="w-full max-w-none">
        <div className="mb-6 md:mb-8">
          <p className="relative z-10 mb-3 font-sans text-xs tracking-[0.26rem] text-black/55 uppercase md:before:absolute md:before:top-1/2 md:before:right-full md:before:mr-6 md:before:block md:before:h-px md:before:w-[200px] md:before:-translate-y-1/2 md:before:bg-black/25 md:before:content-['']">
            {t.reviews.eyebrow}
          </p>
          <div className="flex items-end justify-between gap-3">
            <h2 className="min-w-0 flex-1 font-display text-4xl italic tracking-[-0.06rem] text-[rgb(38,38,38)] sm:text-5xl">
              {t.reviews.title}
            </h2>
            <div className="flex shrink-0 items-center gap-2 pb-0.5 md:hidden">
              <button type="button" className={controlBtnClass} aria-label={t.reviews.carouselPrev} onClick={goPrev} disabled={index <= 0}>
                <span aria-hidden="true">‹</span>
              </button>
              <span className="min-w-12 text-center font-sans text-[11px] tabular-nums tracking-[0.12rem] text-black/45">
                {index + 1} / {count}
              </span>
              <button type="button" className={controlBtnClass} aria-label={t.reviews.carouselNext} onClick={goNext} disabled={index >= count - 1}>
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative mt-10 md:mt-12"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.reviews.title}
        >
          <div
            ref={scrollerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className={`flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "select-none md:cursor-grabbing" : "md:cursor-grab"
            }`}
          >
            {items.map((item, slideIndex) => (
              <article
                key={item.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIndex + 1} of ${count}`}
                className={`flex h-auto w-[min(36rem,calc(100dvw-2.5rem))] shrink-0 snap-center flex-col flex-wrap self-start rounded-2xl border border-black/10 bg-white/45 p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:w-[min(38rem,calc(100dvw-3.5rem))] md:w-[min(40rem,calc(100dvw-5rem))] md:flex-row md:items-start md:gap-x-10 md:gap-y-0 md:p-10 lg:w-[min(32rem,calc(100dvw-6rem))] ${cardHoverClass}`}
              >
                <div className="flex shrink-0 justify-center md:block md:w-20">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={80}
                    height={80}
                    draggable={false}
                    className="pointer-events-none h-16 w-16 rounded-full object-cover ring-1 ring-black/10 md:h-20 md:w-20"
                  />
                </div>
                <div className="mt-8 min-w-0 md:mt-0 md:flex-1 md:basis-0">
                  <h3 className="text-center font-display text-2xl italic tracking-tight text-[rgb(38,38,38)] sm:text-3xl md:text-left">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-center text-sm leading-relaxed text-black/70 sm:text-base md:text-left">{item.role}</p>
                  <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.14rem] text-black/45 md:text-left">
                    {item.relationship}
                  </p>
                </div>
                <div className="mt-8 w-full self-start space-y-4 border-t border-black/10 pt-8 font-sans text-xs leading-6 text-black/70 sm:text-sm sm:leading-7 md:basis-full">
                  {item.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center md:hidden">
            <div className="flex justify-center gap-2" role="tablist" aria-label={t.reviews.carouselDots}>
              {items.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${t.reviews.carouselGoTo}: ${item.name}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-black/50" : "w-2 bg-black/15 hover:bg-black/30"
                  }`}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
