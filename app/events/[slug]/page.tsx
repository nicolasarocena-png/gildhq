import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { forumEvents } from "@/lib/events";
import { EventDetailCTA } from "@/components/EventDetailCTA";

// ─── Static params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return forumEvents.map((e) => ({ slug: e.slug }));
}

// ─── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const event = forumEvents.find((e) => e.slug === params.slug);
  if (!event) return { title: "Event Not Found | GILD" };

  return {
    title: `${event.title} — ${event.date}, 2026 · ${event.locationFull} | GILD`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [{ url: event.coverUrl, width: 800, height: 800 }],
      type: "website",
    },
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = forumEvents.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const paragraphs = event.fullDescription.split("\n\n");

  return (
    <>
      <Navbar />

      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-black" style={{ minHeight: "520px" }}>
          {/* Cover image */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: event.cardColor }}>
            <Image
              src={event.coverUrl}
              alt={event.title}
              fill
              priority
              sizes="100vw"
              className="object-contain p-8 opacity-60 md:p-20"
              unoptimized
            />
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-[#07090c]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090c]/90 via-[#07090c]/50 to-transparent" />

          {/* Content */}
          <div className="section-shell relative z-10 flex min-h-[520px] flex-col justify-end pb-16 pt-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/35">
              <Link href="/events" className="transition-colors hover:text-white/65">Events</Link>
              <span aria-hidden>/</span>
              <span className="text-white/55">{event.city}</span>
            </nav>

            {/* Badges */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {event.isNextUp && (
                <span className="bg-[#5a9a9b]/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5a9a9b]">
                  Next Up
                </span>
              )}
              <span className="border border-[rgba(255,248,235,0.15)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                {event.status} · Approval Required
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-3xl font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.015em] text-white md:text-[38px] lg:text-[46px] 3xl:text-[56px]">
              {event.title}
            </h1>

            {/* Meta row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-white/55">
              <span className="flex items-center gap-2">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" aria-hidden>
                  <rect x="1" y="2.5" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M4.5 1v3M8.5 1v3M1 6.5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                {event.date}, 2026 · {event.meta}
              </span>
              <span className="flex items-center gap-2">
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" aria-hidden>
                  <path d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 8.5 4.5 8.5s4.5-5.125 4.5-8.5C10 2.015 7.985 0 5.5 0zm0 6.125A1.625 1.625 0 1 1 5.5 2.875a1.625 1.625 0 0 1 0 3.25z" fill="currentColor" />
                </svg>
                {event.locationFull} · Venue shared upon approval
              </span>
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────── */}
        <section className="bg-[#07090c]">
          <div className="section-shell py-16 md:py-20 lg:py-24">
            <div className="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-20 xl:grid-cols-[1fr_360px]">

              {/* Left: main content */}
              <div>
                {/* About */}
                <div className="mb-12">
                  <h2 className="mb-6 font-serif text-[24px] font-normal leading-[1.2] text-white md:text-[28px]">
                    About This Forum
                  </h2>
                  <div className="space-y-5">
                    {paragraphs.map((p, i) => (
                      <p key={i} className="text-[15px] leading-[1.85] text-white/65 md:text-[16px]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-[rgba(255,248,235,0.07)]" />

                {/* Topics */}
                <div className="my-12">
                  <h2 className="mb-6 font-serif text-[24px] font-normal leading-[1.2] text-white md:text-[28px]">
                    Topics on the Table
                  </h2>
                  <ul className="space-y-3">
                    {event.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-baseline gap-4 text-[15px] leading-[1.72] text-white/65 md:text-[16px]"
                      >
                        <span className="mt-[9px] h-px w-4 shrink-0 bg-[#5a9a9b]/50" aria-hidden />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-[rgba(255,248,235,0.07)]" />

                {/* Agenda */}
                <div className="my-12">
                  <h2 className="mb-8 font-serif text-[24px] font-normal leading-[1.2] text-white md:text-[28px]">
                    Agenda
                  </h2>
                  <ol className="relative space-y-0 border-l border-[rgba(255,248,235,0.08)] pl-6">
                    {event.agenda.map((item, i) => (
                      <li key={i} className="relative pb-8 last:pb-0">
                        {/* Timeline dot */}
                        <span className="absolute -left-[5px] top-[6px] h-[9px] w-[9px] rounded-full border-2 border-[#5a9a9b]/60 bg-[#07090c]" aria-hidden />
                        <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#5a9a9b]/80">
                          {item.time}
                        </p>
                        <p className="text-[15px] text-white/70">{item.label}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="h-px bg-[rgba(255,248,235,0.07)]" />

                {/* Format */}
                <div className="mt-12">
                  <h2 className="mb-6 font-serif text-[24px] font-normal leading-[1.2] text-white md:text-[28px]">
                    Format
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-3">
                    {[
                      { label: "Attendees", value: "20–25 max" },
                      { label: "Rules", value: "Chatham House" },
                      { label: "Style", value: "No panels · No pitches" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="rounded-card border border-[rgba(255,248,235,0.07)] bg-[#0d1822] p-5"
                      >
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5a9a9b]/70">
                          {label}
                        </p>
                        <p className="mt-2 text-[15px] text-white/80">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: sticky CTA card */}
              <div>
                <div className="sticky top-[92px] rounded-card border border-[rgba(255,248,235,0.08)] bg-[#0d1822] p-7 shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
                  {/* Cover thumb */}
                  <div
                    className="relative mb-6 h-[120px] w-full overflow-hidden rounded-[4px]"
                    style={{ backgroundColor: event.cardColor }}
                  >
                    <Image
                      src={event.coverUrl}
                      alt=""
                      fill
                      sizes="320px"
                      className="object-contain p-2"
                      unoptimized
                    />
                  </div>

                  <p className="mb-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#5a9a9b]">
                    {event.date}, 2026
                  </p>
                  <p className="mb-1 text-[13px] text-white/55">{event.meta}</p>
                  <p className="mb-6 text-[13px] text-white/45">{event.locationFull}</p>

                  <div className="mb-4 rounded border border-[rgba(255,248,235,0.1)] bg-white/[0.04] px-4 py-3">
                    <p className="text-[12px] text-white/45">
                      Attendance is invite-only and subject to approval. Venue details shared upon confirmation.
                    </p>
                  </div>

                  {/* Primary CTA — opens RequestInviteModal */}
                  <EventDetailCTA />

                  {/* Secondary — direct Luma link */}
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 border border-[rgba(255,248,235,0.12)] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/50 transition-all duration-300 hover:border-[rgba(255,248,235,0.3)] hover:text-white/80"
                  >
                    View on Luma
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden>
                      <path d="M1 8L8 1M8 1H3M8 1V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  <p className="mt-5 text-center text-[11px] text-white/25">
                    Partner: Tecla · AI &amp; Engineering Recruiting
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <section className="border-t border-[rgba(255,248,235,0.07)] bg-[#07090c] py-16">
          <div className="section-shell text-center">
            <h2 className="font-serif text-[28px] font-normal text-white md:text-[34px]">
              See All Upcoming GILD Events
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.85] text-white/45">
              Forums are planned in Austin, Dallas, and Miami throughout 2026.
            </p>
            <Link
              href="/events"
              className="mt-8 inline-block bg-[#5a9a9b] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#4d8889]"
            >
              View All Events
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
