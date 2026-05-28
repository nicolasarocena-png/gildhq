import Image from "next/image";

const fitItems = [
  "Enterprise engineering leader",
  "B2B founder or operator",
  "Prefer substance over networking theater"
];

const notFitItems = [
  "Looking for vendor exposure",
  "Want another Slack community",
  "Early consumer founder or junior engineer"
];

export function Differentiator() {
  return (
    <section id="fit" className="section-pad bg-slate-900">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 lg:px-16">
        <div className="relative aspect-[2.45] min-h-[260px] overflow-hidden rounded-card bg-[#05080c] md:min-h-[380px]">
          <Image
            src="/images/6a0334588976e5ff1daa64e4_GILD-37.1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />
        </div>

        <div className="pt-12 md:pt-16">
          <div className="max-w-[760px]">
            <h2 className="text-4xl leading-tight text-white md:text-5xl">
              GILD is built for depth &mdash; the right people, the right room, the
              right conversation.
            </h2>
            <p className="mt-5 max-w-[700px] text-base leading-7 text-slate-100 md:text-lg">
              Most communities optimize for scale. GILD optimizes for trust,
              relevance, and conversations that compound.
            </p>
          </div>

          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-teal-400">
                You&apos;re a fit if
              </p>
              <ul className="mt-7 space-y-4">
                {fitItems.map((item) => (
                  <li key={item} className="flex gap-4 text-lg leading-7 text-white">
                    <span className="mt-3 h-px w-6 shrink-0 bg-teal-400/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-teal-400">
                GILD isn&apos;t for you if
              </p>
              <ul className="mt-7 space-y-4">
                {notFitItems.map((item) => (
                  <li key={item} className="flex gap-4 text-lg leading-7 text-slate-100">
                    <span className="mt-3 h-px w-6 shrink-0 bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
