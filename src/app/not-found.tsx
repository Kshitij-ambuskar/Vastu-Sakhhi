import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-pad flex min-h-[60vh] flex-col items-center justify-center text-center py-24">
      <span className="section-eyebrow">404</span>
      <h1 className="section-heading mt-4">This page has wandered off course</h1>
      <p className="mt-4 max-w-md text-ink-600">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s guide you back
        home.
      </p>
      <Link href="/" className="btn-gold mt-8">
        Back to Home
      </Link>
    </section>
  );
}
