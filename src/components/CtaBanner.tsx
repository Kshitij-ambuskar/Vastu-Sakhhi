import Link from "next/link";
import { contactInfo } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="container-pad py-20 md:py-24">
      <div className="relative overflow-hidden rounded-sm bg-gold-500 px-8 py-14 text-center sm:px-16 sm:py-20">
        <h2 className="font-display text-3xl font-medium text-ink-900 sm:text-4xl">
          Ready to bring clarity to your space and your path?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-800/80">
          Reach out to Pournima directly for a Vastu or Astrology
          consultation tailored to you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Book a Consultation
          </Link>
          <a href={`tel:+91${contactInfo.primaryPhone}`} className="btn-outline border-ink-900/30 bg-transparent">
            Call +91 {contactInfo.primaryPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
