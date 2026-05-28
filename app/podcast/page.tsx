import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { spotifyShow, youtubeEpisodes } from "@/lib/podcast";

export const metadata: Metadata = {
  title: "GILD Podcast — AI Leadership & Operator Intelligence",
  description:
    "Watch and listen to the GILD Podcast: candid conversations with senior operators about AI, leadership, and building real companies."
};

export default function PodcastPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="section-bridge relative overflow-hidden bg-[#050403] pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(90,154,155,0.06)_0%,transparent_55%)]" />
          <div className="section-shell relative z-10">
            <p className="section-label">Podcast</p>
            <div className="max-w-3xl">
              <h1 className="font-serif text-[34px] font-normal leading-[1.12] tracking-[-0.015em] text-white md:text-[50px] lg:text-[60px]">
                High-signal conversations with operators building through AI.
              </h1>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-white/55">
                The GILD Podcast is a broadcast window into the caliber of thinking inside
                GILD: founder journeys, AI operating models, technical leadership, and the
                decisions senior teams are navigating right now.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@GILDhq"
                target="_blank"
                rel="noreferrer"
                className="bg-[#5a9a9b] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#4d8889]"
              >
                Watch on YouTube
              </a>
              <a
                href={spotifyShow.url}
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(255,248,235,0.18)] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 transition-colors duration-300 hover:border-[rgba(255,248,235,0.4)] hover:text-white/80"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
        </section>

        {/* YouTube episodes */}
        <section className="section-pad bg-[#0a0806]">
          <div className="section-shell">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <p className="section-label mb-0">YouTube</p>
              <a
                href="https://www.youtube.com/@GILDhq"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#5a9a9b] transition-colors duration-300 hover:text-white/80"
              >
                Open channel →
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {youtubeEpisodes.map((episode) => (
                <article
                  key={episode.videoId}
                  className="overflow-hidden rounded-card border border-[rgba(255,248,235,0.07)] bg-[#0f0d0b]"
                >
                  <div className="aspect-video bg-[#080604]">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${episode.videoId}`}
                      title={episode.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
                      {episode.published}
                    </p>
                    <h3 className="mt-3 font-serif text-[18px] leading-[1.35] text-white/90">
                      {episode.title}
                    </h3>
                    <a
                      href={episode.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex text-[11px] font-medium uppercase tracking-[0.2em] text-[#5a9a9b] transition-colors duration-300 hover:text-white/80"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Spotify */}
        <section className="section-pad bg-[#0d0b09]">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="section-label mb-5">Spotify</p>
                <h2 className="font-serif text-[30px] leading-[1.2] tracking-[-0.015em] text-white md:text-[38px]">
                  Listen on Spotify.
                </h2>
                <p className="mt-6 text-[14px] leading-[1.9] text-white/50">
                  {spotifyShow.description}
                </p>
                <a
                  href={spotifyShow.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex bg-[#5a9a9b] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#4d8889]"
                >
                  Open Spotify
                </a>
              </div>
              <div className="overflow-hidden rounded-card border border-[rgba(255,248,235,0.07)] bg-[#0f0d0b]">
                <iframe
                  className="block h-[352px] w-full"
                  src={spotifyShow.embedUrl}
                  title={spotifyShow.title}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
