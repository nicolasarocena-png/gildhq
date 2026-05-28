import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MemberAccessForm } from "@/components/MemberAccessForm";

export const metadata: Metadata = {
  title: "Member Access — GILD",
  description: "Private access for approved GILD members.",
  robots: { index: false, follow: false }
};

export default function MemberAccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-[#080604] py-16 md:py-24">
        <MemberAccessForm />
      </main>
      <Footer />
    </>
  );
}
