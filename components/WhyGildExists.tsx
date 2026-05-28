import Image from "next/image";

const pillars = [
  {
    title: "Curated rooms, not crowded events",
    body: "20-25 senior leaders. Off-the-record. Real conversation, not working the room."
  },
  {
    title: "High-signal by design",
    body: "No selling. No demos. Just real peer-to-peer exchange between people building the future of AI."
  },
  {
    title: "We protect the room",
    body: "Every invitation affects everyone already inside. We err on the side of saying no."
  }
];

export function WhyGildExists() {
  return (
    <section id="why" className="section-pad bg-slate-900">
      <div className="section-shell">
        <p className="section-label">—— 01 · Why GILD Exists</p>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-serif text-2xl leading-10 text-white md:text-[28px]">
              Most professional communities are built by extroverts for extroverts. They
              reward the people who work the room, post in the Slack, send the cold DMs,
              and show up loudest. The rest of us — the quieter operators — show up anyway
              because networking matters, and we leave exhausted.
            </p>
            <p className="mt-8 text-xl leading-8 text-slate-100">
              GILD exists because we believe there&apos;s a better way.
            </p>
          </div>
          <div className="relative aspect-[1.25] overflow-hidden rounded-card bg-slate-800">
            <Image
              src="/images/698cced7420e375a392ba5d6_c4c5bd652e1e2b349cfa53ada74f9585_IMG_7293%201.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <h2 className="font-serif text-2xl text-white">{pillar.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-100">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
