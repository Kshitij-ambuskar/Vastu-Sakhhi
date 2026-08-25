import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import { trainingPhoto } from "@/lib/constants";

export default function TrainingSection() {
  return (
    <section className="container-pad py-20 md:py-28">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 rounded-sm border border-gold-500/25 hidden sm:block" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-sm shadow-premium">
            <Image
              src={trainingPhoto.image}
              alt={trainingPhoto.caption}
              width={728}
              height={1078}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="section-eyebrow">
            <Award size={13} />
            Certified &amp; Recognised
          </span>
          <h2 className="section-heading mt-4">
            Trained Under Acharya Pankit Goyal
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Pournima&apos;s Vastu practice is built on formal, verifiable
            training — not self-taught guesswork. She has completed the
            Astro Vastu Course, the Vastu Foundation Course, and the
            Advanced Vastu Course, each conducted by Acharya Pankit Goyal,
            with certification received in person in Mumbai.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            This structured training means every recommendation she gives
            is grounded in a consistent, recognised methodology — combining
            classical Vastu Shastra with the Astro Vastu and Numero Vastu
            frameworks taught in the course.
          </p>
          <Link href="/certifications" className="btn-primary mt-8">
            View All Certifications
          </Link>
        </div>
      </div>
    </section>
  );
}
