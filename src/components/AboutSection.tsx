import React from "react";

const AboutSection = () => {
const features = [
  {
    icon: "💰",
    title: "Direct Tipping",
    description:
      "Users tip service workers across hospitality, entertainment, and sports industries directly through MyTipLife, eliminating cash needs completely.",
  },
  {
    icon: "🏠",
    title: "The Home of Tipped Workers",
    description:
      "MyTipLife.com creates an inclusive community where tipped workers connect, share experiences, and celebrate their economic contributions globally.",
  },
  {
    icon: "🪙",
    title: "Global Currency for Tipping",
    description:
      "TLC Coin serves as universal tipping currency, enabling seamless appreciation for bartenders, musicians, athletes anywhere, anytime worldwide.",
  },
  {
    icon: "🌐",
    title: "Innovative Digital Social Network",
    description:
      "MyTipLife.com builds vibrant online community for tipped workers, fans, and customers, fostering personalized ongoing tipping relationships.",
  },
  {
    icon: "🎯",
    title: "Goal-Oriented Engagement",
    description:
      "Tipped workers post personal and professional goals, inviting continuous support and financial backing from their dedicated community.",
  },
  {
    icon: "🎁",
    title: "Exclusive Rewards",
    description:
      "Holders receive discounts, early features, community governance access, and special sports tipping promotions, strengthening community bonds effectively.",
  },
];

return (
  <section
    id="about"
    className="py-20 bg-gradient-to-b from-background to-secondary/10"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Utility of the<span className="text-gradient">TLC</span>?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the benefits of TLC—fast, fair, global tipping powered by
          blockchain, built for sports and services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card-feature hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Project Vision */}
      <div className="card-hero max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gradient mb-6">Our Vision</h3>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Our vision is to revolutionize global tipping through blockchain
          technology, making gratitude instant, fair, and borderless. We aim to
          empower fans and service workers with transparent, real-time rewards
          in a decentralized economy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-hero">Read Whitepaper</button>
        </div>
      </div>
    </div>
  </section>
);
};

export default AboutSection;
