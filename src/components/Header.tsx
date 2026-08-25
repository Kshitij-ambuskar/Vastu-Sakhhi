"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact Us" },
];

function scrollToTestimonials() {
  const el = document.getElementById("testimonials");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function handleReviewsClick() {
    setOpen(false);
    if (pathname === "/") {
      scrollToTestimonials();
    } else {
      router.push("/");
      // Wait for navigation then scroll
      setTimeout(() => scrollToTestimonials(), 400);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-cream/90 backdrop-blur-md">
      <div className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold-500/60 bg-cream">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              fill
              priority
              sizes="44px"
              className="object-cover object-top"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-medium text-ink-900 tracking-wide">
              VastuSakhhi
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-500">
              Vastu &amp; Astrology
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold-700" : "text-ink-700 hover:text-gold-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={handleReviewsClick}
            className="text-sm font-medium tracking-wide transition-colors text-ink-700 hover:text-gold-700"
          >
            Reviews
          </button>
          <Link href="/contact" className="btn-gold">
            Book a Consultation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink-900/15 text-ink-900"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="md:hidden border-t border-ink-900/10 bg-cream px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-ink-800"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleReviewsClick}
            className="text-left text-base font-medium text-ink-800"
          >
            Reviews
          </button>
          <Link href="/contact" className="btn-gold w-full">
            Book a Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
