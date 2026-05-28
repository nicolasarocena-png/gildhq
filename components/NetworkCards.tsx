import Image from "next/image";

const cards = [
  {
    title: "Built Around the Best",
    image: "/images/6a075d85473e1e56a5c8df65_DSC09920.jpg",
    body: "A curated network of senior AI and engineering leaders, strategists, and operators serious about what they're building."
  },
  {
    title: "Curated Rooms, Not Crowded Events",
    image: "/images/698cced7534e918894932c2b_DSCS6091%201.avif",
    body: "Intentionally small. Off-the-record. Designed for substantive peer exchange, not transactional networking."
  },
  {
    title: "Where We're Operating",
    image: "/images/698cced7963bb3187808d1dd_DSCF3524%201.avif",
    body: "Austin, Dallas, and Miami. We're starting in these cities and growing from here."
  },
  {
    title: "High-Signal by Design",
    image: "/images/6a0337ce3163565da566ff98_GILD-23.jpg",
    body: "No selling. No demos. Just real peer-to-peer exchange and conversation between people building the future of AI."
  }
];

export function NetworkCards() {
  return (
    <section className="bg-slate-900 py-20 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article key={card.title} className="bg-black">
              <div className="relative aspect-[1.75] overflow-hidden bg-slate-800">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xs font-bold uppercase leading-5 text-white">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
