import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "fill-gold-500 text-gold-500"
              : "fill-transparent text-gold-300"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-cream-200 py-20 md:py-28">
      <div className="container-pad">
        {/* Section header */}
        <div className="max-w-2xl">
          <span className="section-eyebrow">Client Testimonials</span>
          <h2 className="section-heading mt-4">What Our Clients Say</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            Real experiences from people who have consulted Pournima for Vastu,
            Astrology and related guidance.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col gap-4 rounded-sm border border-ink-900/10 bg-white p-7 shadow-card"
            >
              {/* Quote icon + stars */}
              <div className="flex items-start justify-between">
                <Quote
                  size={28}
                  className="shrink-0 text-gold-400 opacity-70"
                  aria-hidden
                />
                <StarRating rating={t.rating} />
              </div>

              {/* Review text */}
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Reviewer info */}
              <footer className="border-t border-ink-900/8 pt-4">
                <p className="font-display text-base font-medium text-ink-900">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-ink-500">
                  {t.location} &middot; {t.service}
                </p>
              </footer>
            </article>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
      <p className="text-sm text-ink-600">
      Experienced a consultation with Pournima? We&apos;d love to hear from you.
      </p>

      <a
      href="https://forms.gle/dJvT1ZTsEnhLXs9S8"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold">
    <Star size={16} />
    Share Your Experience
  </a>
</div>
      </div>
    </section>
  );
}
