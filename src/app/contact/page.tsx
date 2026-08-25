import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ChartMotif from "@/components/ChartMotif";
import { contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Book a Vastu or Astrology Consultation",
  description:
    "Get in touch with Pournima at VastuSakhhi for a Vastu or Astrology consultation. Call, WhatsApp or email — or send a message directly through the contact form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact VastuSakhhi | Book a Consultation with Pournima",
    description:
      "Call, WhatsApp or email Pournima at VastuSakhhi to book your Vastu or Astrology consultation.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Namaste Pournima, I would like to book a Vastu/Astrology consultation."
  );

  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 py-16 md:py-20">
        <ChartMotif
          variant="hero"
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] opacity-70"
        />
        <div className="container-pad relative text-center">
          <span className="section-eyebrow justify-center text-gold-400">
            Get in Touch
          </span>
          <h1 className="section-heading mt-4 text-cream">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/70">
            Have a question about your home, chart, or a specific concern?
            Reach out directly — Pournima personally responds to every
            enquiry.
          </p>
        </div>
      </section>

      <section className="container-pad py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-sm border border-ink-900/10 bg-white p-7 shadow-card">
              <h2 className="font-display text-2xl text-ink-900">
                Contact Information
              </h2>

              <ul className="mt-6 space-y-5">
                {contactInfo.phones.map((phone, idx) => (
                  <li key={phone} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-gold-400">
                      <Phone size={17} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-500">
                        {idx === 0 ? "Primary Phone" : "Alternate Phone"}
                      </p>
                      <a
                        href={`tel:+91${phone}`}
                        className="text-base font-medium text-ink-900 hover:text-gold-700"
                      >
                        +91 {phone}
                      </a>
                    </div>
                  </li>
                ))}

                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-gold-400">
                    <Mail size={17} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-500">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base font-medium text-ink-900 hover:text-gold-700 break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-gold-400">
                    <Clock size={17} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-500">
                      Consultation Hours
                    </p>
                    <p className="text-base font-medium text-ink-900">
                      Mon – Sat, 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:+91${contactInfo.primaryPhone}`}
                  className="btn-primary"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#1fbd5a]"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-sm border border-gold-500/30 bg-gold-50 p-6 text-sm text-ink-700">
              For time-sensitive Prashna Kundli queries, calling or
              messaging on WhatsApp directly will get you the fastest
              response.
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-sm border border-ink-900/10 bg-white p-7 shadow-card sm:p-9">
              <h2 className="font-display text-2xl text-ink-900">Send a Message</h2>
              <p className="mt-2 text-sm text-ink-600">
                Fill in the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
