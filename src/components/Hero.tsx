import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import ChartMotif from "./ChartMotif";
import { heroPortrait } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <ChartMotif
        variant="hero"
        className="pointer-events-none absolute -right-24 -top-24 h-[560px] w-[560px] opacity-90 md:-right-10 md:-top-32"
      />
      <div className="container-pad relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <span className="section-eyebrow text-gold-400">
            <Star size={13} className="fill-gold-400 text-gold-400" />
            Vastu &amp; Astrology Consultancy
          </span>
          <h1 className="mt-5 text-4xl font-display font-medium leading-[1.08] text-cream sm:text-5xl md:text-[3.4rem]">
            Align your space and your stars with{" "}
            <span className="text-gold-400">Pournima</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            VastuSakhhi brings together Vastu Shastra and Vedic Astrology
            under one roof — trained in Astro Vastu, Numero Vastu and
            Advanced Vastu under Acharya Pankit Goyal, Pournima helps you
            make grounded decisions about your home, career and
            relationships.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              Book a Consultation
            </Link>
            <Link href="/certifications" className="btn-outline border-cream/25 text-cream hover:border-gold-400 hover:text-gold-300">
              View Certifications
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream/10 pt-8">
            <div>
              <dt className="text-2xl font-display text-gold-400">9+</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-cream/50">
                Services Offered
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-display text-gold-400">3</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-cream/50">
                Specialised Courses
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-display text-gold-400">1:1</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-cream/50">
                Personalised Sessions
              </dd>
            </div>
          </dl>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-sm border border-gold-500/30" aria-hidden="true" />
            <div className="relative h-[420px] w-[300px] overflow-hidden rounded-sm shadow-premium sm:h-[480px] sm:w-[340px]">
              <Image
                src={heroPortrait.image}
                alt={heroPortrait.alt}
                fill
                priority
                sizes="(max-width: 768px) 300px, 340px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-sm bg-cream px-5 py-4 shadow-card hidden sm:block">
              <p className="font-display text-lg text-ink-900 leading-none">Pournima</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-500">
                Vastu &amp; Astrology Consultant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
