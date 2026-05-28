import Image from "next/image";

export function Differentiator() {
  return (
    <section className="section-pad bg-slate-900">
      <div className="section-shell">
        <div className="relative mb-8 aspect-[2.6] overflow-hidden rounded-card bg-slate-800">
          <Image
            src="/images/6a0334588976e5ff1daa64e4_GILD-37.1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-card border border-slate-700 bg-slate-800 p-8 md:p-10">
            <p className="font-serif text-2xl leading-9 text-slate-100">
              Most communities are built for scale - more members, more content, more
              platforms.
            </p>
          </div>
          <div className="rounded-card border border-teal-500/30 bg-teal-500/10 p-8 shadow-[0_0_40px_rgba(74,155,155,0.08)] md:p-10">
            <p className="font-serif text-2xl leading-9 text-white">
              GILD is built for depth - the right people, the right room, the right
              conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
