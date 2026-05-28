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
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-black">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.42)_48%,rgba(0,0,0,0.62)_100%)]" />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-64px)] items-center py-24">
        <div className="max-w-4xl text-left">
          <h1 className="text-[36px] font-semibold leading-[1.08] text-white md:text-[48px] lg:text-[56px]">
            Invite-only Networking &amp; Community for AI Leaders
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white md:text-xl">
            GILD is a curated network of senior AI and engineering leaders, strategists,
            and technical operators. Join the network to be in our next AI Forum.
          </p>
          <button
            type="button"
            onClick={apply}
            className="mt-9 rounded bg-white px-8 py-4 text-sm font-medium text-black transition-colors duration-200 hover:bg-slate-100"
          >
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
}
