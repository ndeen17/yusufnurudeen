import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '../lib/utils';

type Props = {
  images: string[];
  alt: string;
  autoplayMs?: number;
  aspect?: string;
  fit?: 'contain' | 'cover';
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Slideshow({
  images,
  alt,
  autoplayMs = 5000,
  aspect = '16 / 10',
  fit = 'contain',
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || paused || lightbox !== null || prefersReducedMotion() || images.length <= 1) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), autoplayMs);
    return () => window.clearInterval(id);
  }, [emblaApi, paused, autoplayMs, images.length, lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === 'Escape') setLightbox(null);
        if (e.key === 'ArrowLeft')
          setLightbox((v) => (v === null ? v : (v - 1 + images.length) % images.length));
        if (e.key === 'ArrowRight') setLightbox((v) => (v === null ? v : (v + 1) % images.length));
        return;
      }
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [scrollPrev, scrollNext, lightbox, images.length]);

  useEffect(() => {
    if (lightbox !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [lightbox]);

  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <>
      <section
        role="region"
        aria-roledescription="carousel"
        aria-label={`${alt} screenshots`}
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl border border-hairline bg-chip" ref={emblaRef}>
          <div className="flex">
            {images.map((src, i) => (
              <div
                key={src}
                className="relative min-w-0 flex-[0_0_100%]"
                style={{ aspectRatio: aspect }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${images.length}`}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group absolute inset-0 flex h-full w-full items-center justify-center p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:p-6"
                  aria-label={`Open screenshot ${i + 1} in lightbox`}
                >
                  <img
                    src={src}
                    alt={`${alt} — screenshot ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className={cn('max-h-full max-w-full', fitClass)}
                  />
                  <span className="pointer-events-none absolute right-3 top-3 hidden rounded-full bg-white/90 p-1.5 text-ink opacity-0 shadow-card transition group-hover:opacity-100 sm:block">
                    <ZoomIn size={14} />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-hairline bg-white/95 p-2 text-ink shadow-card transition hover:bg-white sm:left-3"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-hairline bg-white/95 p-2 text-ink shadow-card transition hover:bg-white sm:right-3"
            >
              <ChevronRight size={18} />
            </button>

            <div className="mt-4 flex items-center justify-center gap-2" role="tablist">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === selected}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    i === selected ? 'w-6 bg-ink' : 'w-1.5 bg-hairline hover:bg-muted'
                  )}
                />
              ))}
            </div>

            <div className="sr-only" aria-live="polite">
              Slide {selected + 1} of {images.length}
            </div>
          </>
        )}
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — full screenshot`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X size={18} />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((v) =>
                    v === null ? v : (v - 1 + images.length) % images.length
                  );
                }}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-4"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((v) => (v === null ? v : (v + 1) % images.length));
                }}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-4"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
          <img
            src={images[lightbox]}
            alt={`${alt} — screenshot ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
