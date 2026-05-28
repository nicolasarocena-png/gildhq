"use client";

// ─────────────────────────────────────────────────────────────────────────────
// MemberAccessForm — static UI only.
// TODO: Connect to an authentication provider (e.g. NextAuth, Supabase, Clerk)
//       before enabling in production. The onSubmit handler below is a
//       placeholder that does NOT authenticate anyone.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const inputClass =
  "w-full border border-[rgba(255,248,235,0.10)] bg-[#0c0a08] px-4 py-3.5 text-[13px] text-white/80 placeholder:text-white/28 focus:border-[#5a9a9b] focus:outline-none transition-colors duration-200";

const labelClass =
  "block text-[10px] font-medium uppercase tracking-[0.26em] text-white/38";

export function MemberAccessForm() {
  const [account, setAccount]   = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    // TODO: replace this block with real authentication logic.
    // Example: await signIn("credentials", { account, password })
    setError("Authentication is not yet configured.");
  };

  return (
    <div className="mx-auto w-full max-w-[480px] px-4">

      {/* Panel */}
      <div className="border border-[rgba(255,248,235,0.07)] bg-[#0f0d0b] px-8 py-10 md:px-10 md:py-12">

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-7 w-[88px]">
            <Image
              src="/images/logo%20gild.png"
              alt="GILD"
              fill
              sizes="88px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-[rgba(255,248,235,0.07)]" />

        {/* Copy */}
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#5a9a9b]">
          GILD Members
        </p>
        <h1 className="mt-3 font-serif text-[28px] font-normal leading-[1.12] tracking-[-0.012em] text-white md:text-[32px]">
          Member Access
        </h1>
        <p className="mt-3 text-[13px] leading-[1.8] text-white/40">
          Private access for approved GILD members.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block space-y-2">
            <span className={labelClass}>Account</span>
            <input
              type="text"
              autoComplete="username"
              placeholder="Enter account"
              required
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block space-y-2">
            <span className={labelClass}>Password</span>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </label>

          {error && (
            <p className="text-[12px] text-[#5a9a9b]/80">{error}</p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#5a9a9b] py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#4d8889]"
            >
              Enter
            </button>
          </div>
        </form>

        {/* Microcopy */}
        <p className="mt-6 text-center text-[11px] text-white/22">
          For approved GILD members only.
        </p>
      </div>

      {/* Back link */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/28 transition-colors duration-200 hover:text-white/55"
        >
          ← Back to GILD
        </Link>
      </div>

    </div>
  );
}
