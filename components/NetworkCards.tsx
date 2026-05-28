import Image from "next/image";

const cards = [
  {
    title: "Built Around the Best",
    image: "/images/6a03333a01497bf1624698fe_xccxHP%20GILD-gigapixel-high%20fidelity%20v2-1x.jpeg",
    body: "A curated network of senior AI and engineering leaders, strategists, and operators serious about what they're building."
  },
  {
    title: "Curated Rooms, Not Crowded Events",
    image: "/images/698cced70159f31e5d1a0306_DSCF3589%201.avif",
    body: "Intentionally small. Off-the-record. Designed for substantive peer exchange, not transactional networking."
  },
  {
    title: "Where We're Operating",
    image: "/images/6a0323120aee05ab9a168c6b_DSCF3328.jpeg",
    body: "Austin, Dallas, and Miami. We're starting in these cities and growing from here."
  },
  {
    title: "High-Signal by Design",
    image: "/images/6a0334588976e5ff1daa64e4_GILD-37.1.png",
    body: "No selling. No demos. Just real peer-to-peer exchange and conversation between people building the future of AI."
  }
];

export function NetworkCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article
          key={card.title}
          className="group overflow-hidden rounded-card border border-[rgba(255,248,235,0.06)] bg-[#110f0c] transition-all duration-600 hover:-translate-y-0.5 hover:border-[rgba(255,248,235,0.1)]"
        >
          <div className="relative aspect-[1.42] overflow-hidden bg-[#0d0b09]">
            <Image
              src={card.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-90 [filter:saturate(0.85)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#110f0c]/60 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
              {card.title}
            </h2>
            <p className="mt-4 text-[13px] leading-[1.8] text-white/50">{card.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
