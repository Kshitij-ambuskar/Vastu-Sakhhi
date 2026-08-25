import { GraduationCap } from "lucide-react";

const highlights = [
  "Astro Vastu Course",
  "Vastu Foundation Course",
  "Advanced Vastu Course",
  "Trained under Acharya Pankit Goyal",
];

export default function AboutSection() {
  return (
    <section id="about" className="container-pad py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="section-eyebrow">About the Consultant</span>
          <h2 className="section-heading mt-4">
            Meet Pournima
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg leading-relaxed text-ink-700">
            Pournima is a dedicated Vastu and Astrology consultant who
            approaches every space and every chart with the same question:
            what will actually help this person move forward? Her practice
            blends traditional Vastu Shastra and Vedic Astrology with a
            modern, practical outlook — no unnecessary demolition, no vague
            predictions, just clear guidance rooted in study and experience.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            She is professionally trained in <strong className="text-ink-900">Astro Vastu</strong>,{" "}
            <strong className="text-ink-900">Numero Vastu</strong>, and{" "}
            <strong className="text-ink-900">Advanced Vastu</strong> under{" "}
            <strong className="text-ink-900">Acharya Pankit Goyal</strong>, and
            continues to formally upgrade her skills through his structured
            courses — each one completed and certified.
          </p>

          <div className="mt-10 rounded-sm border border-ink-900/10 bg-ink-50/60 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-display text-xl text-ink-900">
              <GraduationCap size={20} className="text-gold-600" />
              Professional Training
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
