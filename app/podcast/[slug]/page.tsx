import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { youtubeEpisodes } from "@/lib/podcast";

// ─── Static params ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return youtubeEpisodes.map((ep) => ({ slug: ep.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const episode = youtubeEpisodes.find((ep) => ep.slug === params.slug);
  if (!episode) return { title: "Episode Not Found | GILD Podcast" };

  return {
    title: `${episode.title} — ${episode.guest} | GILD Podcast`,
    description: episode.description,
    openGraph: {
      title: `${episode.title} | GILD Podcast`,
      description: episode.description,
      images: [
        {
          url: `https://img.youtube.com/vi/${episode.videoId}/maxresdefault.jpg`,
          width: 1280,
          height: 720,
        },
      ],
    },
  };
}

// ─── SVG icons ─────────────────────────────────────────────────────────────

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.28c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-.96-.12-1.08-.6-.12-.48.12-.96.6-1.08 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.18 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10 3L5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function EpisodePage({ params }: { params: { slug: string } }) {
  const episode = youtubeEpisodes.find((ep) => ep.slug === params.slug);
  if (!episode) notFound();

  const episodeIndex = youtubeEpisodes.indexOf(episode);
  const episodeNumber = youtubeEpisodes.length - episodeIndex;

  return (
    <>
      <Navbar />

      <main className="bg-[#07090c]">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#07090c]">
          {/* Blurred thumbnail background */}
          <div className="absolute inset-0 scale-110">
            <Image
              src={`https://img.youtube.com/vi/${episode.videoId}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20 [filter:blur(24px)_saturate(0.5)]"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07090c]/60 via-[#07090c]/40 to-[#07090c]" />
          </div>

          <div className="section-shell relative z-10 pb-16 pt-10 md:pb-20 md:pt-14">

            {/* Back link */}
            <Link
              href="/podcast"
              className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors duration-200 hover:text-white/75"
            >
              <ArrowLeftIcon />
              All Episodes
            </Link>

            {/* Episode number + tags */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#5a9a9b]">
                GILD #{episodeNumber}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                {episode.published}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                {episode.duration}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.018em] text-white sm:text-[36px] md:text-[44px] lg:text-[52px] xl:max-w-[860px]">
              {episode.title}
            </h1>

            {/* Guest */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(255,248,235,0.12)] bg-[#111e2c] text-[14px] font-semibold text-[#5a9a9b]">
                {episode.guest
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white/90">{episode.guest}</p>
                {episode.guestTitle && (
                  <p className="text-[12px] text-white/45">{episode.guestTitle}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Player + Info ──────────────────────────────────────── */}
        <div className="section-shell pb-20 pt-0 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] xl:gap-16 2xl:grid-cols-[1fr_400px]">

            {/* Left: embed + description */}
            <div>
              {/* YouTube embed */}
              <div
                className="overflow-hidden rounded-card bg-black shadow-[0_8px_48px_rgba(0,0,0,0.6)]"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${episode.videoId}?rel=0&modestbranding=1`}
                  title={episode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <div className="mt-10 border-t border-[rgba(255,248,235,0.07)] pt-8">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                  About this episode
                </p>
                <p className="text-[16px] leading-[1.9] text-white/65">
                  {episode.description}
                </p>
              </div>

              {/* Tags */}
              {episode.tags.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {episode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#111e2c] px-3.5 py-1.5 text-[11px] font-medium text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: sidebar */}
            <aside className="flex flex-col gap-6">

              {/* CTA card */}
              <div className="rounded-card border border-[rgba(255,248,235,0.07)] bg-[#0d1822] p-6">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
                  Listen on your platform
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={episode.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#5a9a9b] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#4d8889]"
                  >
                    <YouTubeIcon className="h-4 w-4" />
                    Watch on YouTube
                  </a>
                  <a
                    href={episode.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 border border-[rgba(255,248,235,0.14)] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 transition-all duration-300 hover:border-[rgba(255,248,235,0.3)] hover:text-white/90"
                  >
                    <SpotifyIcon className="h-4 w-4" />
                    Listen on Spotify
                  </a>
                </div>
              </div>

              {/* Guest card */}
              <div className="rounded-card border border-[rgba(255,248,235,0.07)] bg-[#0d1822] p-6">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
                  Guest
                </p>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111e2c] text-[14px] font-semibold text-[#5a9a9b]">
                    {episode.guest
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white/90">{episode.guest}</p>
                    {episode.guestTitle && (
                      <p className="mt-0.5 text-[13px] leading-[1.5] text-white/45">
                        {episode.guestTitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* More episodes link */}
              <Link
                href="/podcast"
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/35 transition-colors duration-200 hover:text-white/65"
              >
                <ArrowLeftIcon />
                Back to all episodes
              </Link>
            </aside>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
