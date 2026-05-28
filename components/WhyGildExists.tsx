import { NetworkCards } from "@/components/NetworkCards";

export function WhyGildExists() {
  return (
    <section id="why" className="section-pad bg-[#0d0b09]">
      <div className="section-shell">
        <p className="section-label">Why GILD Exists</p>
        <div className="max-w-4xl">
          <p className="font-serif text-[26px] leading-[1.7] text-white/90 md:text-[34px] lg:text-[38px]">
            Most professional communities are built by extroverts for extroverts. They
            reward the people who work the room, post in the Slack, send the cold DMs,
            and show up loudest. The rest of us - the quieter operators - show up anyway
            because networking matters, and we leave exhausted.
          </p>
          <p className="mt-10 text-lg leading-[1.85] text-white/50">
            GILD exists because we believe there&apos;s a better way.
          </p>
        </div>
        <div className="mt-20">
          <NetworkCards />
        </div>
      </div>
    </section>
  );
}
