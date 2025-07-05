import React from "react";

const ScrollingBanner = () => {
  const scrollingTexts = [
    "🚀 LIMITED PRESALE – JOIN NOW",
    "⚡ FASTEST GROWING CRYPTO PROJECT",
    "💎 EARLY INVESTORS GET 200% BONUS",
    "🔥 PRESALE ENDING SOON",
    "🌟 NEXT 100X GEM INCOMING",
    "💰 EXCLUSIVE WHITELIST ACCESS",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary-glow py-2">
      <div className="animate-scroll text-white font-semibold text-lg">
        {scrollingTexts.map((text, index) => (
          <span key={index} className="mx-8 whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
