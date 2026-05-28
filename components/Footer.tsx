"use client";

import { trackApplyClick } from "@/lib/analytics";

export function Footer() {
  const requestInvite = () => {
    trackApplyClick("footer");
    const applySection = document.getElementById("apply");

    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = "/#apply";
  };

  return (
    <footer className="border-t border-slate-700 bg-slate-900 py-10 md:py-12">
      <div className="section-shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="/" className="font-serif text-2xl text-white" aria-label="GILD home">
              GILD
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white">
              An exclusive space where senior leaders come together to connect.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/joingild/about/"
                target="_blank"
                rel="noreferrer"
                aria-label="GILD on LinkedIn"
                className="text-xl font-semibold text-white transition-colors hover:text-teal-400"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/gild.hq/"
                target="_blank"
                rel="noreferrer"
                aria-label="GILD on Instagram"
                className="text-lg text-white transition-colors hover:text-teal-400"
              >
                ◎
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-white">
              <a href="#" className="transition-colors hover:text-teal-400">
                Privacy
              </a>
              <span className="text-slate-300">|</span>
              <a href="#" className="transition-colors hover:text-teal-400">
                Code of Conduct
              </a>
              <span className="text-slate-300">|</span>
              <a href="#" className="transition-colors hover:text-teal-400">
                Contact
              </a>
            </nav>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={requestInvite}
                className="border border-white/70 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-teal-400 hover:text-teal-400"
              >
                Request Invite
              </button>
              <a
                href="/#apply"
                className="border border-white/70 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:border-teal-400 hover:text-teal-400"
              >
                Explore Partnerships
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-6">
          <p className="text-xs text-white">© 2026 Gild</p>
        </div>
      </div>
    </footer>
  );
}
