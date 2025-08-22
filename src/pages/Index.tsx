import React from "react";
import ScrollingBanner from "../components/ScrollingBanner";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AuditSection from "../components/AuditSection";
import HowToBuySection from "../components/HowToBuySection";
import TokenomicsSection from "../components/TokenomicsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import RoadmapSection from "../components/RoadmapSection";
import TLCPlatformSection from "../components/TLCPlatformSection";
import ReferralSection from "../components/ReferralSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollingBanner />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AuditSection />
        <HowToBuySection />
        <TokenomicsSection />
        <ReferralSection />
        <RoadmapSection />
        <TLCPlatformSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
