"use client";
import React, { useEffect, useRef, useState } from "react";

export default function WorkGallery({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;
    const updateIndex = () => {
      const children = Array.from(container.children) as HTMLElement[];
      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setIndex(closest);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateIndex);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    updateIndex();
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [images]);

  const scrollTo = (i: number) => {
    const container = containerRef.current;
    if (!container) return;
    const child = container.children[i] as HTMLElement | undefined;
    if (!child) return;
    child.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-7 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 rounded-lg bg-center bg-cover h-[320px] min-w-[80%] md:min-w-[45%] lg:min-w-[30%] transition-transform duration-300 hover:scale-[1.02] shadow-lg"
              style={{ backgroundImage: `url(${src})` }}
              role="img"
              aria-label={`Gallery image ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next buttons */}
        {images.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={() => scrollTo(Math.max(0, index - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollTo(Math.min(images.length - 1, index + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-transform ${
                i === index ? "bg-primary scale-110" : "bg-gray-400/60"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
