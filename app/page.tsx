import { ApplicationForm } from "@/components/ApplicationForm";
import { Differentiator } from "@/components/Differentiator";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PastForums } from "@/components/PastForums";
import { SocialProof } from "@/components/SocialProof";
import { UpcomingForums } from "@/components/UpcomingForums";
import { WhatYouGet } from "@/components/WhatYouGet";
import { WhyGildExists } from "@/components/WhyGildExists";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <UpcomingForums />
        <PastForums />
        <WhyGildExists />
        <WhatYouGet />
        <Differentiator />
        <ApplicationForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
