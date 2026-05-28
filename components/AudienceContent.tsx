"use client";

import Image from "next/image";
import type { Audience } from "@/lib/analytics";

type Props = {
  selectedAudience: Audience;
};

export function AudienceContent({ selectedAudience }: Props) {
  const isEngineering = selectedAudience === "engineering";

  return (
    <section id="audience-content" className="section-pad bg-slate-900">
      <div className="section-shell">
        <div key={selectedAudience} className="animate-[fadeIn_0.2s_ease-out]">
          <p className="section-label">
            {isEngineering
              ? "—— 02 · The GILD Engineering Leaders Forum"
              : "—— 02 · The GILD Founder Community"}
          </p>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="font-serif text-4xl leading-tight text-white">
                {isEngineering
                  ? "For senior engineering leaders building, scaling, and shipping AI."
                  : "For B2B tech founders running real businesses."}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-100">
                {isEngineering
                  ? "Industry-agnostic. What matters is the role and the seniority. CTOs, VPs of Engineering, Heads of AI, Heads of Engineering."
                  : "Founders and CEOs of B2B tech companies — alongside a curated minority of high-end AI consultants and operator-advisors who bring real implementation experience."}
              </p>
            </div>
            <div className="relative aspect-[1.35] overflow-hidden rounded-card bg-slate-800">
              <Image
                src="/images/6a0323120aee05ab9a168c6b_DSCF3328.jpeg"
                alt=""
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {(isEngineering
              ? ["CTOs", "VP Engineering", "Heads of AI", "Heads of Engineering"]
              : ["B2B Founders", "CEOs", "$1M+ Revenue", "AI Advisors"]
            ).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-100"
              >
                {tag}
              </span>
            ))}
          </div>
          {isEngineering ? (
            <p className="mt-10 max-w-3xl border-l-2 border-teal-500 pl-6 text-base leading-7 text-slate-100">
              Companies that sell to engineering leaders — starting with Tecla — sponsor the
              Forum because putting the right buyers in the right room is valuable. You attend
              because the room is worth your time.
            </p>
          ) : (
            <div className="mt-10">
              <p className="font-serif text-[32px] text-white">$5,000 per year</p>
              <p className="mt-2 text-sm text-slate-300">
                Annual membership. Reviewed for fit before any commitment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
