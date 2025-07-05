import React from "react";

const AboutSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Process transactions in milliseconds with our advanced blockchain technology.",
    },
    {
      icon: "🔒",
      title: "Ultra Secure",
      description:
        "Military-grade encryption ensures your assets are always protected.",
    },
    {
      icon: "🌍",
      title: "Global Access",
      description:
        "Trade anywhere, anytime with our decentralized global network.",
    },
    {
      icon: "💰",
      title: "Low Fees",
      description:
        "Enjoy minimal transaction costs compared to traditional networks.",
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description: "Governed by the community, for the community's benefit.",
    },
    {
      icon: "📈",
      title: "High Yield",
      description:
        "Earn passive income through our innovative staking mechanisms.",
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
            Why Choose <span className="text-gradient">CryptoPresale</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the next generation of blockchain technology that
            combines speed, security, and scalability in one revolutionary
            platform.
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
            To create a decentralized financial ecosystem that empowers
            individuals worldwide with fast, secure, and affordable blockchain
            solutions. We believe in a future where everyone has access to
            cutting-edge financial technology, regardless of their location or
            background.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">Join Our Mission</button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
