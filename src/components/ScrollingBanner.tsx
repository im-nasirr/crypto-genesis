import React from "react";

const ScrollingBanner = () => {
  const scrollingTexts = [
    "🚀 TLC PRESALE – CURRENCY OF GRATITUDE",
    "⚡ REVOLUTIONIZING GLOBAL TIPPING ECONOMY",
    "💎 EARLY SUPPORTERS GET 200% BONUS TLC",
    "🔥 TIP LIFE COIN PRESALE ENDING SOON",
    "🌟 SOLANA-POWERED TIPPING REVOLUTION",
    "💰 JOIN THE MYTIPLIFE COMMUNITY TODAY",
    "🎯 UNIVERSAL TIPPING CURRENCY FOR ALL",
    "🌐 EMPOWERING TIPPED WORKERS WORLDWIDE",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary-glow py-2">
      <div className="animate-scroll text-white font-semibold text-sm flex">
        {/* First set of scrolling text */}
        {scrollingTexts.map((text, index) => (
          <span key={index} className="mx-8 whitespace-nowrap">
            {text}
          </span>
        ))}
        {/* Duplicate set for seamless scrolling */}
        {scrollingTexts.map((text, index) => (
          <span key={`duplicate-${index}`} className="mx-8 whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
