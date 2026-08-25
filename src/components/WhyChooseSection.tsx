import { ShieldCheck, HeartHandshake, Sparkles, MessageSquareText } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Training",
    description:
      "Formally trained in Astro Vastu, Numero Vastu and Advanced Vastu under Acharya Pankit Goyal — not informal or self-taught.",
  },
  {
    icon: Sparkles,
    title: "Practical Corrections",
    description:
      "Guidance that respects your home and budget — remedies and adjustments that are realistic to actually implement.",
  },
  {
    icon: MessageSquareText,
    title: "Honest, Clear Answers",
    description:
      "No vague forecasts — every reading and recommendation is explained in plain language you can act on.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description:
      "Every consultation is one-to-one and tailored to your specific chart, space or question — never generic.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-ink-900 py-20 md:py-28">
      <div className="container-pad">
        <div className="max-w-2xl">
          <span className="section-eyebrow text-gold-400">Why VastuSakhhi</span>
          <h2 className="section-heading mt-4 text-cream">
            Why Choose VastuSakhhi
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="border-t border-gold-500/30 pt-6">
              <Icon size={24} className="text-gold-400" />
              <h3 className="mt-4 font-display text-lg text-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
