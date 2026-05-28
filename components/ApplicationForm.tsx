"use client";

import { FormEvent, useState } from "react";
import type { Audience } from "@/lib/analytics";
import { trackFormSubmit } from "@/lib/analytics";

type Props = {
  selectedAudience: Audience;
};

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-300 focus:border-teal-400 focus:outline focus:outline-2 focus:outline-teal-400/30";

export function ApplicationForm({ selectedAudience }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const community =
    selectedAudience === "engineering" ? "Engineering Leaders Forum" : "Founder Community";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setIsSubmitting(false);

    if (response.ok) {
      trackFormSubmit(selectedAudience);
      setIsSubmitted(true);
    }
  }

  return (
    <section id="apply" className="section-pad bg-slate-900">
      <div className="section-shell">
        <p className="section-label">Apply</p>
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl text-white">Request access to the network.</h2>
          <p className="mt-4 text-base leading-7 text-slate-100">
            We review every application personally. You&apos;ll hear back within two weeks.
          </p>
        </div>
        {isSubmitted ? (
          <div className="mt-12 rounded-card border border-teal-500/30 bg-teal-500/10 p-8">
            <p className="font-serif text-2xl text-white">
              Thanks. We&apos;ll be in touch within two weeks.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <label className="text-sm font-medium text-white">
              First Name
              <input className={inputClass} name="firstName" type="text" required />
            </label>
            <label className="text-sm font-medium text-white">
              Last Name
              <input className={inputClass} name="lastName" type="text" required />
            </label>
            <label className="text-sm font-medium text-white">
              Job Title
              <input className={inputClass} name="jobTitle" type="text" required />
            </label>
            <label className="text-sm font-medium text-white">
              Work Email
              <input className={inputClass} name="workEmail" type="email" required />
            </label>
            <label className="text-sm font-medium text-white">
              Company
              <input className={inputClass} name="company" type="text" required />
            </label>
            <label className="text-sm font-medium text-white">
              LinkedIn URL
              <input className={inputClass} name="linkedinUrl" type="url" required />
            </label>
            <label className="text-sm font-medium text-white md:col-span-2">
              Which community?
              <select
                className={inputClass}
                name="community"
                value={community}
                onChange={() => undefined}
                required
              >
                <option>Engineering Leaders Forum</option>
                <option>Founder Community</option>
              </select>
            </label>
            <label className="text-sm font-medium text-white md:col-span-2">
              What&apos;s your biggest leadership challenge right now?
              <textarea className={inputClass} name="leadershipChallenge" rows={4} required />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-teal-500 px-7 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-teal-400 disabled:cursor-wait disabled:opacity-70 md:w-fit"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
