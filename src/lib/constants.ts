// Central site configuration — single source of truth for business data.
// Update contact details, services, and copy here; components read from this file.

export const siteConfig = {
  name: "VastuSakhhi",
  tagline: "Vastu & Astrology Consultancy",
  consultant: "Pournima",
  description:
      "VastuSakhhi is the professional Vastu & Astrology consultancy of Pournima. She has trained in Astrology under Rupa Bhadbhade Ma'am, an experienced astrologer with over 30 years of experience, and in Astro Vastu, Numero Vastu and Advanced Vastu under Acharya Pankit Goyal. Book a consultation for Vastu guidance, astrology, match making, career direction, Prashna Kundli and Dosh Nivaran.",

  url: "https://www.vastusakhhi.com",
  ogImage: "/images/pournima-portrait.jpg",
  logo: "/images/logo.png",
  locale: "en_IN",
  keywords: [
    "Vastu Consultant",
    "Astrology Consultant",
    "Vastu Shastra Expert",
    "Astro Vastu",
    "Numero Vastu",
    "Dosh Nivaran",
    "Kundli Analysis",
    "Prashna Kundli",
    "Match Making Astrologer",
    "Career Astrology Guidance",
    "Pournima Vastu Astrologer",
    "VastuSakhhi",
  ],
};

export const contactInfo = {
  phones: ["7350859951", "8983222740"],
  primaryPhone: "7350859951",
  email: "ambuskarpornima@gmail.com",
  whatsappNumber: "917350859951", 
};

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: string; 
};

export const services: Service[] = [
  {
    title: "Vastu Consultation",
    slug: "vastu-consultation",
    description:
      "On-site or remote Vastu assessment of your home or workplace, with practical, non-structural corrections aligned to Vastu Shastra principles.",
    icon: "compass",
  },
  {
    title: "Astrology Consultation",
    slug: "astrology-consultation",
    description:
      "Personalised readings based on your birth chart to bring clarity on life's important questions — timing, decisions and direction.",
    icon: "star",
  },
  {
    title: "Match Making Guidance",
    slug: "match-making-guidance",
    description:
      "Detailed Kundli matching (Guna Milan) for marriage compatibility, covering temperament, health and long-term harmony — not just the score.",
    icon: "heart",
  },
  {
    title: "Career Guidance",
    slug: "career-guidance",
    description:
      "Astrological analysis of your chart to identify favourable career paths, timing for job changes, business ventures and growth periods.",
    icon: "briefcase",
  },
  {
    title: "Prashna Kundli",
    slug: "prashna-kundli",
    description:
      "Horary astrology for specific, time-bound questions — get focused answers without needing a full birth chart.",
    icon: "help-circle",
  },
  {
    title: "Kundli Analysis",
    slug: "kundli-analysis",
    description:
      "In-depth study of your birth chart — planetary positions, dashas and yogas — explained in plain, actionable language.",
    icon: "chart",
  },
  {
    title: "Dosh Nivaran",
    slug: "dosh-nivaran",
    description:
      "Identification and remedies for chart doshas such as Manglik, Kaal Sarp and Pitra Dosh, with practical, sustainable solutions.",
    icon: "shield",
  },
  {
    title: "Astro Vastu",
    slug: "astro-vastu",
    description:
      "A combined Astro-Vastu approach that reads your birth chart alongside your living space, for corrections tuned to you specifically.",
    icon: "layers",
  },
  {
    title: "Numero Vastu",
    slug: "numero-vastu",
    description:
      "A modern, number-based approach to Vastu that reads the vibration of key numbers — birth date, house number, entrance and plot — to align your space with numerology for better harmony, prosperity and decisions.",
  icon: "calculator",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
};

export const certificates: Certificate[] = [
  {
    title: "Astro Vastu Course — Certificate of Completion",
    issuer: "Acharya Pankit Goyal",
    date: "2026",
    image: "/images/certificate-astro-vastu-course.jpg",
    description:
      "Successfully completed the 2-day Astro Vastu Course conducted in Mumbai under Acharya Pankit Goyal.",
  },
  {
    title: "Certificate of Appreciation — AstroVastu",
    issuer: "Acharya Pankit Goyal",
    date: "2026",
    image: "/images/certificate-astrovastu-appreciation.jpg",
    description:
      "Awarded in recognition of successful completion of the AstroVastu program.",
  },
  {
    title: "Vastu Foundation Course",
    issuer: "Acharya Pankit Goyal",
    date: "13th May 2026",
    image: "/images/certificate-vastu-foundation.jpg",
    description:
      "Certificate of appreciation for completing the Vastu Foundation Course.",
  },
  {
    title: "Online Advance Vastu Course 2026",
    issuer: "Acharya Pankit Goyal",
    date: "6th July 2026",
    image: "/images/certificate-advance-vastu.jpg",
    description:
      "Certificate of appreciation for completing the Online Advance Vastu Course, 2026.",
  },
];

export const trainingPhoto = {
  image: "/images/pournima-with-acharya.jpg",
  caption:
    "Pournima receiving her certification from Acharya Pankit Goyal at the Astro Vastu Course, Mumbai.",
};

export const heroPortrait = {
  image: "/images/pournima-portrait.jpg",
  alt: "Pournima, Vastu and Astrology Consultant at VastuSakhhi",
};

export type Testimonial = {
  name: string;
  rating: number;
  quote: string;
  location: string;
  service: string;
};

export const testimonials = [
  {
    name: "Dhananjay Ashokrao Tale",
    rating: 5,
    quote: "First warm regards to Madam ji . I was problem of stress all the time and on my working place all the I was blaming and several issues related to my work tough i was doing my work perfectly and with full devotion but results were happening against of me so I talked with Vastusakhhi madam ji and I told each and every thing and also send my kundali after some time she told me to read KALBHARAV ASTAK every day also told some activities to do and some protocols to fallow and just within 15 days I found picture started to change all the things now going my way and my side and now my Boss is also listening me and also getting attention of all my opinions Thank you so much madam ji yet now I am continue with my sadhana . Dhananjay Ashokrao Tale 92704 01778 Thank you so much 🙏🙏",
    location: "Thergaon chinchwad pune 33",
    service: "Kundli Analysis",
  },
];
