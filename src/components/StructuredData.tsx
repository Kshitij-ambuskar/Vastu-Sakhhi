import { siteConfig, contactInfo, services } from "@/lib/constants";

export default function StructuredData() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: "VastuSakhhi Vastu & Astrology Consultancy",
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: `+91${contactInfo.primaryPhone}`,
    email: contactInfo.email,
    priceRange: "$$",
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Pournima",
      jobTitle: "Vastu & Astrology Consultant",
      alumniOf: {
        "@type": "Organization",
        name: "Acharya Pankit Goyal — Astro Vastu, Vastu Foundation & Advanced Vastu Courses",
      },
    },
    contactPoint: contactInfo.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: `+91${phone}`,
      contactType: "customer service",
      email: contactInfo.email,
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vastu & Astrology Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pournima",
    jobTitle: "Vastu & Astrology Consultant",
    description:
      "Vastu and Astrology consultant trained in Astro Vastu, Numero Vastu and Advanced Vastu under Acharya Pankit Goyal.",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    email: contactInfo.email,
    telephone: `+91${contactInfo.primaryPhone}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
