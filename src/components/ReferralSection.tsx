import React from "react";

const ReferralSection = () => {
  const steps = [
    {
      step: "1",
      title: "Share Your Link",
      description: "Share your unique referral link with friends, family and your community.",
      icon: "🔗"
    },
    {
      step: "2",
      title: "They Participate",
      description: "When they participate in TLC's presale, you'll instantly earn a 2% stablecoin reward.",
      icon: "💰"
    },
    {
      step: "3",
      title: "Earn Unlimited Rewards",
      description: "There's no limit to how many referrals you can make, and you can earn rewards on each one.",
      icon: "🚀"
    }
  ];

  return (
    <section
      id="referral"
      className="py-20 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Refer <span className="text-gradient">TLC</span>, Earn Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Refer friends, family and your community to TLC and earn 2% stablecoin rewards instantly on every referral. 
            Share your unique referral link with others and grow your rewards while helping to build our community.
          </p>
        </div>

        {/* Reward Highlight */}
        <div className="card-hero max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl mr-4 mt-[-35px]">🎁</div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-gradient">
                  2% Stablecoin
                </h3>
                <p className="text-xl text-muted-foreground">
                  Instant Rewards Per Referral
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  Instant
                </div>
                <div className="text-sm text-muted-foreground">Payouts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  Unlimited
                </div>
                <div className="text-sm text-muted-foreground">Referrals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  2%
                </div>
                <div className="text-sm text-muted-foreground">Commission</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="text-gradient">Works</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card-feature text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-6">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ReferralSection;
