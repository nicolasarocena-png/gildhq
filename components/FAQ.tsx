import { faqs } from "@/lib/faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-[#090706]">
      <div className="section-shell">
        <p className="section-label">FAQ</p>
        <div className="border-t border-[#5a9a9b]/30">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-[#5a9a9b]/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-lg leading-[1.4] text-white/80 transition-all duration-300 group-open:text-white">
                <span>{faq.question}</span>
                <span className="shrink-0 text-[#5a9a9b] transition-transform duration-300 group-open:rotate-90">
                  ›
                </span>
              </summary>
              <p className="max-w-3xl pb-7 text-[14px] leading-[1.9] text-white/45">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
