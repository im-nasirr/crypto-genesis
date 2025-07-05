import React from "react";

import { Rocket, Target, TrendingUp, Globe, Zap, Shield } from "lucide-react";

const RoadmapSection = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      period: "Q4 2024",
      title: "Project Foundation",
      description:
        "Token development, smart contract creation, and initial community building",
      icon: Rocket,
      status: "completed",
    },
    {
      phase: "Phase 2",
      period: "Q1 2025",
      title: "Presale Launch",
      description:
        "Public presale begins with exclusive bonuses for early investors",
      icon: Target,
      status: "active",
    },
    {
      phase: "Phase 3",
      period: "Q2 2025",
      title: "Token Launch",
      description:
        "Official token launch and initial DEX listings on major platforms",
      icon: TrendingUp,
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      period: "Q3 2025",
      title: "Marketing & Partnerships",
      description:
        "Strategic partnerships, influencer collaborations, and global marketing campaigns",
      icon: Globe,
      status: "upcoming",
    },
    {
      phase: "Phase 5",
      period: "Q4 2025",
      title: "CEX Listings",
      description:
        "Major centralized exchange listings and expanded trading pairs",
      icon: Zap,
      status: "upcoming",
    },
    {
      phase: "Phase 6",
      period: "2026",
      title: "Ecosystem Expansion",
      description:
        "DeFi integrations, staking rewards, and ecosystem development",
      icon: Shield,
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
