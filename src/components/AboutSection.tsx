import React from "react";

const AboutSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Built on Solana",
      description:
        "Enjoy blazing-fast transactions with ultra-low fees, thanks to Solana’s powerful blockchain.",
    },
    {
      icon: "💬",
      title: "Instant & Transparent Tipping",
      description:
        "Send and receive tips in real-time with full transparency and traceability.",
    },
    {
      icon: "💰",
      title: "Fair & Direct Payments",
      description:
        "Eliminate middlemen—TLC ensures more of every tip reaches its intended recipient.",
    },
    {
      icon: "🌍",
      title: "Global Accessibility",
      description:
        "Seamlessly tip anyone, anywhere, with cross-border capability and no banking friction.",
    },
    {
      icon: "🎁",
      title: "Exclusive Rewards & Utility",
      description:
        "Unlock perks like discounts, governance rights, and ecosystem benefits as a token holder.",
    },
    {
      icon: "👥",
      title: "Community-Powered",
      description: "Governed by the community, for the community's benefit.",
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
            Why Choose <span className="text-gradient">TLC</span>?
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
            technology, making gratitude instant, fair, and borderless. We aim
            to empower fans and service workers with transparent, real-time
            rewards in a decentralized economy.
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
