"use client";

import Image from "next/image";
import { trackApplyClick } from "@/lib/analytics";
import { openRequestInviteModal } from "@/components/RequestInviteModal";

const heroImage = "/images/6a075d85473e1e56a5c8df65_DSC09920.jpg";

export function Hero() {
  const apply = () => {
    trackApplyClick("hero");
    openRequestInviteModal();
  };

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#050403]">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50 [filter:saturate(0.8)_contrast(1.08)]"
        style={{ objectPosition: "center 28%" }}
      />
      {/* Base cinematic darkening */}
      <div className="absolute inset-0 bg-black/45" />
      {/* Left-weighted directional vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(5,4,3,0.92)_0%,rgba(5,4,3,0.52)_42%,rgba(5,4,3,0.35)_100%)]" />
      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0d0b09] to-transparent" />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-72px)] items-center py-28">
        <div className="hero-drift max-w-[860px] text-left">
          <h1 className="text-[44px] font-normal leading-[1.04] tracking-[-0.025em] text-white md:text-[62px] lg:text-[80px]">
            Invite-only Networking &amp; Community for AI Leaders
          </h1>
          <p className="mt-8 max-w-[480px] text-[15px] leading-[1.85] text-white/55 md:text-base">
            GILD is a curated network of senior AI and engineering leaders, strategists,
            and technical operators. Join the network to be in our next AI Forum.
          </p>
          <button
            type="button"
            onClick={apply}
            className="mt-12 border border-white/25 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition-all duration-500 hover:border-white/55 hover:text-white"
          >
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
}
