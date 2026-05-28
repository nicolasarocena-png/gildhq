"use client";

import { useState } from "react";
import type { Audience } from "@/lib/analytics";
import { ApplicationForm } from "@/components/ApplicationForm";
import { AudienceContent } from "@/components/AudienceContent";
import { Differentiator } from "@/components/Differentiator";
import { FAQ } from "@/components/FAQ";
import { FitNotFit } from "@/components/FitNotFit";
import { Footer } from "@/components/Footer";
import { GildPromise } from "@/components/GildPromise";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { NetworkCards } from "@/components/NetworkCards";
import { SocialProof } from "@/components/SocialProof";
import { UpcomingForums } from "@/components/UpcomingForums";
import { WhatYouGet } from "@/components/WhatYouGet";
import { WhyGildExists } from "@/components/WhyGildExists";

export default function Home() {
  const [selectedAudience] = useState<Audience>("engineering");

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <NetworkCards />
        <WhyGildExists />
        <AudienceContent selectedAudience={selectedAudience} />
        <Differentiator />
        <FitNotFit />
        <WhatYouGet />
        <HowItWorks />
        <UpcomingForums />
        <GildPromise />
        <ApplicationForm selectedAudience={selectedAudience} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
