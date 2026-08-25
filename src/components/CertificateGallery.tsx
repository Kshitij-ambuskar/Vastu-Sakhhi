"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";
import type { Certificate } from "@/lib/constants";

export default function CertificateGallery({
  certificates,
}: {
  certificates: Certificate[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + certificates.length) % certificates.length
      ),
    [certificates.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % certificates.length)),
    [certificates.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? certificates[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {certificates.map((cert, index) => (
          <button
            key={cert.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group text-left rounded-sm border border-ink-900/10 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40"
            aria-label={`Enlarge certificate: ${cert.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ink-50">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Award size={18} className="mt-0.5 shrink-0 text-gold-600" />
              <div>
                <h3 className="font-display text-lg text-ink-900">{cert.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-500">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close enlarged certificate"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:right-8 sm:top-8"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous certificate"
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-cream">
              <h3 className="font-display text-xl">{active.title}</h3>
              <p className="mt-1 text-sm text-cream/60">
                {active.issuer} · {active.date}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next certificate"
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:flex"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
