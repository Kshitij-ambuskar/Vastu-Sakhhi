import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import CertificateGallery from "@/components/CertificateGallery";
import CtaBanner from "@/components/CtaBanner";
import ChartMotif from "@/components/ChartMotif";
import { certificates, trainingPhoto } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Certifications | Vastu & Astrology Training",
  description:
    "View Pournima's certifications in Astro Vastu, Vastu Foundation and Advanced Vastu courses, completed under Acharya Pankit Goyal. Verified professional training in Vastu Shastra and Astrology.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications | VastuSakhhi",
    description:
      "Pournima's verified certifications in Astro Vastu, Vastu Foundation and Advanced Vastu, completed under Acharya Pankit Goyal.",
    url: "/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 py-16 md:py-20">
        <ChartMotif
          variant="hero"
          className="pointer-events-none absolute -left-32 -bottom-32 h-[480px] w-[480px] opacity-70"
        />
        <div className="container-pad relative text-center">
          <span className="section-eyebrow text-gold-400 justify-center">
            <Award size={13} />
            Verified Training
          </span>
          <h1 className="section-heading mt-4 text-cream">
            Certifications &amp; Recognition
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/70">
            Every certificate below was awarded on successful completion of a
            structured course conducted by Acharya Pankit Goyal — proof of
            formal, ongoing training behind every VastuSakhhi consultation.
          </p>
        </div>
      </section>

      <section className="container-pad py-20 md:py-24">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Certificate Gallery</span>
          <h2 className="section-heading mt-4">Click any certificate to enlarge</h2>
        </div>
        <div className="mt-10">
          <CertificateGallery certificates={certificates} />
        </div>
      </section>

      <section className="bg-ink-50/50 py-20 md:py-24">
        <div className="container-pad grid items-center gap-14 md:grid-cols-2">
          <div>
            <span className="section-eyebrow">Training &amp; Recognition</span>
            <h2 className="section-heading mt-4">
              Certified in Person by Acharya Pankit Goyal
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              This photograph captures the moment Pournima received her
              certification directly from Acharya Pankit Goyal at the Astro
              Vastu Course held in Mumbai — a milestone in her continuing
              professional education in Vastu Shastra and Astrology.
            </p>
            <ul className="mt-6 space-y-3">
              {certificates.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3 text-sm text-ink-700">
                  <Award size={16} className="mt-0.5 shrink-0 text-gold-600" />
                  <span>
                    <strong className="text-ink-900">{cert.title}</strong> — {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
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
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
