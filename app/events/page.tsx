"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { forumEvents } from "@/lib/events";
import type { ForumEvent } from "@/lib/events";

type City = "All" | "Austin" | "Dallas" | "Miami";
const CITIES: City[] = ["All", "Austin", "Dallas", "Miami"];

function PinIcon() {
  return (
    <svg width="10" height="13" viewBox="0 0 11 13" fill="none" aria-hidden>
      <path
        d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 8.5 4.5 8.5s4.5-5.125 4.5-8.5C10 2.015 7.985 0 5.5 0zm0 6.125A1.625 1.625 0 1 1 5.5 2.875a1.625 1.625 0 0 1 0 3.25z"
        fill="currentColor"
      />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="11" height="12" viewBox="0 0 12 13" fill="none" aria-hidden>
      <rect x="1" y="2.5" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 1v3M8 1v3M1 6h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function EventCard({ event }: { event: ForumEvent }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[5px] border border-[#364a5a] transition-all duration-300 hover:border-[#4a6580] hover:shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
      style={{ backgroundColor: event.cardColor }}
    >
      {/* Cover image — full width top */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
        <Image
          src={event.coverUrl}
          alt={event.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badges — top right */}
        <div className="absolute right-3 top-3 flex items-center gap-2">
          {event.isNextUp && (
            <span className="bg-[#5a9a9b]/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5a9a9b] backdrop-blur-sm">
              Next Up
            </span>
          )}
          <span className="border border-[#364a5a] bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5a9a9b]/80 backdrop-blur-sm">
            {event.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Date + time */}
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5 text-[13px] text-white/55">
            <CalIcon />
            {event.date}, 2026 · {event.meta}
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-white/45">
            <PinIcon />
            {event.locationFull}
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-3 font-serif text-[18px] font-normal leading-[1.3] text-white transition-colors duration-200 group-hover:text-white/90 md:text-[20px]">
          {event.title}
        </h2>

        {/* Description */}
        <p className="mb-6 line-clamp-2 flex-1 text-[14px] leading-[1.7] text-white/55">
          {event.description}
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-between">
          <span className="inline-block border border-[#364a5a] bg-white/[0.07] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 group-hover:bg-white/[0.13] group-hover:border-[#4a6580]">
            View Details
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="translate-x-0 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#5a9a9b]"
            aria-hidden
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function EventsPage() {
  const [activeCity, setActiveCity] = useState<City>("All");

  const filtered = activeCity === "All"
    ? forumEvents
    : forumEvents.filter((e) => e.city === activeCity);

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-[#07090c]">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="border-b border-[rgba(255,248,235,0.07)] bg-[#07090c] pb-14 pt-14 md:pb-18 md:pt-18">
          <div className="section-shell">
            <p className="section-label mb-4">Upcoming Events</p>
            <h1 className="font-serif text-[36px] font-normal leading-[1.08] tracking-[-0.018em] text-white md:text-[48px] lg:text-[56px] 3xl:text-[68px]">
              GILD AI Forums
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-white/50 md:text-[16px]">
              Invite-only dinners for senior AI and engineering leaders.
              Curated rooms, off-the-record, intentionally small.
            </p>

            {/* City filter */}
            <div className="mt-8 flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  className={`rounded border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-200 ${
                    activeCity === city
                      ? "border-[#5a9a9b]/50 bg-[#5a9a9b]/12 text-[#5a9a9b]"
                      : "border-[rgba(255,248,235,0.12)] text-white/40 hover:border-[rgba(255,248,235,0.25)] hover:text-white/70"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Events grid ─────────────────────────────────────── */}
        <div className="section-shell py-12 md:py-16 lg:py-20">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-[15px] text-white/40">
              No upcoming events in {activeCity}.
            </p>
          ) : (
            <>
              <p className="mb-6 text-[12px] uppercase tracking-[0.14em] text-white/25">
                {filtered.length} upcoming {filtered.length === 1 ? "event" : "events"}
                {activeCity !== "All" ? ` · ${activeCity}` : ""}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {filtered.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </>
          )}
        </div>

      </main>

      <Footer />
    </>
  );
}
