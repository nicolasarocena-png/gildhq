"use client";

import { useEffect, useState } from "react";
import { trackApplyClick } from "@/lib/analytics";

const insightsItems = [
  { label: "Newsletter", href: "/#benefits" },
  { label: "Podcast", href: "/podcast" },
  { label: "Report", href: "/#benefits" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const apply = () => {
    trackApplyClick("navbar");
    setIsOpen(false);
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = "/#apply";
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-700/30 transition-colors duration-300 ${
        isScrolled ? "bg-[#e7eef2]/95 backdrop-blur-md" : "bg-[#e7eef2]"
      }`}
    >
      <nav className="section-shell flex h-[70px] items-center justify-between">
        <a href="/" className="font-serif text-3xl text-slate-900" aria-label="GILD home">
          GILD
        </a>
        <div className="hidden items-center gap-9 md:flex">
          <a
            href="/#events"
            className="text-xs font-medium tracking-[0.18em] text-slate-900 transition-colors duration-200 hover:text-teal-500"
          >
            Events
          </a>
          <a
            href="/#fit"
            className="text-xs font-medium tracking-[0.18em] text-slate-900 transition-colors duration-200 hover:text-teal-500"
          >
            Network
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsInsightsOpen(true)}
            onMouseLeave={() => setIsInsightsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsInsightsOpen((open) => !open)}
              className="text-xs font-medium tracking-[0.18em] text-slate-900 transition-colors duration-200 hover:text-teal-500"
              aria-expanded={isInsightsOpen}
            >
              Insights⌄
            </button>
            {isInsightsOpen ? (
              <div className="absolute left-1/2 top-8 w-36 -translate-x-1/2 bg-white py-3 shadow-xl">
                {insightsItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-2 text-xs tracking-[0.12em] text-slate-900 transition-colors hover:text-teal-500"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <button
            type="button"
            onClick={apply}
            className="bg-teal-500 px-7 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-teal-400"
          >
            Request Access
          </button>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-slate-900 md:hidden"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      {isOpen ? (
        <div className="fixed inset-0 top-[70px] z-40 bg-[#e7eef2] px-6 py-10 md:hidden">
          <div className="flex flex-col gap-7">
            <a href="/#events" onClick={() => setIsOpen(false)} className="font-serif text-3xl text-slate-900">
              Events
            </a>
            <a href="/#fit" onClick={() => setIsOpen(false)} className="font-serif text-3xl text-slate-900">
              Network
            </a>
            {insightsItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-3xl text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={apply}
              className="mt-4 w-fit bg-teal-500 px-6 py-3 text-sm font-medium text-white"
            >
              Request Access
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
