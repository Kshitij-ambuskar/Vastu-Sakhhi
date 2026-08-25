import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo, siteConfig } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-cream/90">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gold-500/60 bg-cream">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </span>
            <span className="font-display text-lg tracking-wide">VastuSakhhi</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60 max-w-xs">
            Professional Vastu &amp; Astrology consultancy by {siteConfig.consultant} —
            Astro Vastu, Numero Vastu and Advanced Vastu, trained under Acharya
            Pankit Goyal.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <Link href="/" className="hover:text-gold-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/certifications" className="hover:text-gold-300 transition-colors">
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-300 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {contactInfo.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a href={`tel:+91${phone}`} className="hover:text-gold-300 transition-colors">
                  +91 {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold-400 shrink-0" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-gold-300 transition-colors break-all"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-gold-400 shrink-0" />
              <span>Consultations Available Online &amp; In-Person</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-pad flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-cream/50">
          <p>© {year} VastuSakhhi. All rights reserved.</p>
          <p>Vastu &amp; Astrology Consultancy by {siteConfig.consultant}</p>
        </div>
      </div>
    </footer>
  );
}
