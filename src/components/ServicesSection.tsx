import { services } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-ink-50/50 py-20 md:py-28">
      <div className="container-pad">
        <div className="max-w-2xl">
          <span className="section-eyebrow">What Pournima Offers</span>
          <h2 className="section-heading mt-4">Services at VastuSakhhi</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Every consultation is personalised — grounded in your specific
            chart, space and question, not a one-size-fits-all reading.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
