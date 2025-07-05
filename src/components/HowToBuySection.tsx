const HowToBuySection = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Wallet",
      description:
        "Connect your MetaMask, Trust Wallet, or any compatible Web3 wallet to get started.",
      icon: "💳",
    },
    {
      step: "02",
      title: "Choose Amount",
      description:
        "Select how much ETH, BNB, or USDT you want to contribute to the presale.",
      icon: "⚖️",
    },
    {
      step: "03",
      title: "Confirm Purchase",
      description:
        "Review your transaction details and confirm your purchase with a single click.",
      icon: "✅",
    },
    {
      step: "04",
      title: "Claim Tokens",
      description:
        "After presale ends, claim your tokens directly to your wallet and start trading.",
      icon: "🎁",
    },
  ];

  return (
    <section
      id="how-to-buy"
      className="py-20 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How to <span className="text-gradient">Buy Tokens</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to participate in our presale and secure
            your tokens before they hit the public market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="lg:pl-8">
            <div className="card-hero text-center space-y-6">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gradient">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground">
                Join thousands of investors who have already secured their
                position in the future of decentralized finance.
              </p>

              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">
                    Current Price
                  </div>
                  <div className="text-2xl font-bold text-gradient">
                    1 ETH = 5,000 Tokens
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                  <div className="text-sm text-accent mb-1">Presale Bonus</div>
                  <div className="text-xl font-bold text-accent">
                    +200% Extra Tokens!
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button className="btn-hero text-lg py-4">
                  Start Buying Now
                </button>
                <button className="btn-ghost">Watch Tutorial Video</button>
              </div>

              <div className="text-xs text-muted-foreground">
                Minimum purchase: 0.1 ETH • Maximum purchase: 10 ETH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
