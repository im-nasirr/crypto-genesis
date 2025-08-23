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
      "MyTipTown.com creates an inclusive community where tipped workers connect, share experiences, and celebrate their economic contributions globally.",
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
      "MyTipTown.com builds vibrant online community for tipped workers, fans, and customers, fostering personalized ongoing tipping relationships.",
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
      <div className="card-hero max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                TLC Coin aims to become the universal currency for tipping,
                transcending geographical boundaries. It is designed to be used
                by anyone, anywhere, as a token of gratitude for good service or
                support for local artists.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our vision is to create a global community where appreciation is
                the norm, connecting service providers with grateful customers
                worldwide through seamless digital transactions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/src/assets/tlc-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero text-lg px-8 py-4"
              >
                📄 Read Whitepaper
              </a>
            </div>
          </div>

          {/* Animation Showcase */}
          <div className="flex justify-center">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm max-w-md w-full">
              <div className="text-center mb-6">
                TLC Coin Serves as a universal tipping currency
                
              </div>

              <div className="relative aspect-square mx-auto rounded-2xl overflow-hidden bg-background/50 shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/animations/Uber Taxi_500x500_V1.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default AboutSection;
