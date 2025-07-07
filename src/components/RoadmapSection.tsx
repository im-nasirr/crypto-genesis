import React from "react";

import {
  Lightbulb,
  Rocket,
  TrendingUp,
  Settings,
  Globe,
  Zap,
} from "lucide-react";

const RoadmapSection = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      period: "Q2 2025",
      title: "Foundation & Awareness",
      description:
        "Idea, Research and Whitepaper Release • Initial Marketing Campaign & Community Building • Smart Contract Development & Audit • Legal & Regulatory Framework Establishment",
      icon: Lightbulb,
      status: "upcoming",
    },
    {
      phase: "Phase 2",
      period: "Q3 2025",
      title: "Presale & Platform Blueprint",
      description:
        "ICO Launch (Presale Phases) • Strategic Partnerships with ICO Platforms • Influencer Marketing • Core Team Expansion",
      icon: Rocket,
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      period: "Q4 2025",
      title: "Official Launch",
      description:
        "Listing of TLC on Major Decentralized Exchanges • Initial Rollout of Tipping Features • User Acquisition Campaigns • Listing on CoinMarketCap, Coin Gecko and other Similar Forums",
      icon: TrendingUp,
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      period: "Q1 2026",
      title: "Platform Development",
      description:
        "Development of MyTipLife Alpha Version • Integration of TLC Token into Platform • User Wallet Development • Early User Testing & Feedback Collection • Launch of MyTipLife Platform with TLC Integration",
      icon: Settings,
      status: "upcoming",
    },
    {
      phase: "Phase 5",
      period: "Q2 2026",
      title: "Expansion & Growth",
      description:
        "Expansion of Partnerships with Service Providers • Development of Advanced MyTipLife Features • Launch of Sports Tipping Specific Features • Further CEX Listings and Own Exchange development • Community Governance Framework Exploration",
      icon: Globe,
      status: "upcoming",
    },
    {
      phase: "Phase 6",
      period: "Q3 2026 & Beyond",
      title: "Innovation & Global Adoption",
      description:
        "Integration of Additional Blockchain Features • Global Market Expansion & Localization Efforts • Development of API for Third-Party Integrations • Continuous Platform Enhancements • Exploration of new use cases for TLC",
      icon: Zap,
      status: "upcoming",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-success border-success/50 bg-success/10";
      case "active":
        return "text-primary border-primary/50 bg-primary/10";
      default:
        return "text-muted-foreground border-muted/50 bg-muted/10";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Project Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our strategic plan to revolutionize the crypto space with innovative
            solutions and sustainable growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow"></div>

          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-glow-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="card-hero hover:border-primary/40 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl border-2 ${getStatusColor(
                          phase.status
                        )} transition-all duration-300 group-hover:scale-110`}
                      >
                        <phase.icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            {phase.phase}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {phase.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gradient mb-2">
                          {phase.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Connector */}
                <div className="md:hidden absolute left-4 top-8 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-hero max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ready to Join Our Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of the future of cryptocurrency. Join our presale now and
              secure your position in this revolutionary project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">Join Presale Now</button>
              <button className="btn-ghost">Download Whitepaper</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
