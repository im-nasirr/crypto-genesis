import React, { useEffect, useRef, useState } from "react";

import {
  Lightbulb,
  Rocket,
  TrendingUp,
  Settings,
  Globe,
  Zap,
} from "lucide-react";

const RoadmapSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          },
          {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px",
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const roadmapPhases = [
    {
      phase: "Phase 1",
      period: "Q2 2025",
      title: "Foundation & Awareness",
      description: [
        "Idea, Research and Whitepaper Release",
        "Initial Marketing Campaign & Community Building",
        "Smart Contract Development & Audit",
        "Legal & Regulatory Framework Establishment",
      ],
      icon: Lightbulb,
      status: "upcoming",
    },
    {
      phase: "Phase 2",
      period: "Q3 2025",
      title: "Presale & Platform Blueprint",
      description: [
        "ICO Launch (Presale Phases)",
        "Strategic Partnerships with ICO Platforms",
        "Influencer Marketing",
        "Core Team Expansion",
      ],
      icon: Rocket,
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      period: "Q4 2025",
      title: "Official Launch",
      description: [
        "Listing of TLC on Major Decentralized Exchanges",
        "Initial Rollout of Tipping Features",
        "User Acquisition Campaigns",
        "Listing on CoinMarketCap, Coin Gecko and other Similar Forums",
      ],
      icon: TrendingUp,
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      period: "Q1 2026",
      title: "Platform Development",
      description: [
        "Development of MyTipLife Alpha Version",
        "Integration of TLC Token into Platform",
        "User Wallet Development",
        "Early User Testing & Feedback Collection",
        "Launch of MyTipLife Platform with TLC Integration",
      ],
      icon: Settings,
      status: "upcoming",
    },
    {
      phase: "Phase 5",
      period: "Q2 2026",
      title: "Expansion & Growth",
      description: [
        "Expansion of Partnerships with Service Providers",
        "Development of Advanced MyTipLife Features",
        "Launch of Sports Tipping Specific Features",
        "Further CEX Listings and Own Exchange development",
        "Community Governance Framework Exploration",
      ],
      icon: Globe,
      status: "upcoming",
    },
    {
      phase: "Phase 6",
      period: "Q3 2026 & Beyond",
      title: "Innovation & Global Adoption",
      description: [
        "Integration of Additional Blockchain Features",
        "Global Market Expansion & Localization Efforts",
        "Development of API for Third-Party Integrations",
        "Continuous Platform Enhancements",
        "Exploration of new use cases for TLC",
      ],
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
          <h2 className="text-4xl md:text-5xl font-bold pb-8 text-gradient">
            Project Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl  mx-auto">
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
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } transition-all duration-700 ease-out transform ${
                  visibleCards.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: visibleCards.has(index)
                    ? `${(index % 3) * 100}ms`
                    : "0ms",
                }}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-gradient-to-r from-primary to-accent flex items-center justify-center transition-all duration-500 ${
                    visibleCards.has(index)
                      ? "animate-glow-pulse scale-100"
                      : "scale-75 opacity-50"
                  }`}
                  style={{
                    transitionDelay: visibleCards.has(index)
                      ? `${(index % 3) * 100 + 200}ms`
                      : "0ms",
                  }}
                >
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
                  <div
                    className={`card-hero hover:border-primary/40 transition-all duration-500 group transform ${
                      visibleCards.has(index)
                        ? "hover:scale-105 hover:-translate-y-1"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl border-2 ${getStatusColor(
                          phase.status
                        )} transition-all duration-500 ${
                          visibleCards.has(index)
                            ? "group-hover:scale-110 group-hover:rotate-3"
                            : ""
                        }`}
                        style={{
                          transitionDelay: visibleCards.has(index)
                            ? `${(index % 3) * 100 + 300}ms`
                            : "0ms",
                        }}
                      >
                        <phase.icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <div
                          className={`flex items-center gap-2 mb-2 transition-all duration-500 transform ${
                            visibleCards.has(index)
                              ? "translate-x-0"
                              : "translate-x-4"
                          }`}
                          style={{
                            transitionDelay: visibleCards.has(index)
                              ? `${(index % 3) * 100 + 400}ms`
                              : "0ms",
                          }}
                        >
                          <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            {phase.phase}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {phase.period}
                          </span>
                        </div>

                        <h3
                          className={`text-xl font-bold text-gradient mb-2 transition-all duration-500 transform ${
                            visibleCards.has(index)
                              ? "translate-x-0"
                              : "translate-x-4"
                          }`}
                          style={{
                            transitionDelay: visibleCards.has(index)
                              ? `${(index % 3) * 100 + 500}ms`
                              : "0ms",
                          }}
                        >
                          {phase.title}
                        </h3>

                        <div
                          className={`text-muted-foreground leading-relaxed transition-all duration-500 transform ${
                            visibleCards.has(index)
                              ? "translate-x-0"
                              : "translate-x-4"
                          }`}
                          style={{
                            transitionDelay: visibleCards.has(index)
                              ? `${(index % 3) * 100 + 600}ms`
                              : "0ms",
                          }}
                        >
                          <ul className="list-disc list-outside space-y-1">
                            {phase.description.map((item, descIndex) => (
                              <li key={descIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Connector */}
                <div
                  className={`md:hidden absolute left-4 top-8 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transition-all duration-500 ${
                    visibleCards.has(index) ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{
                    transformOrigin: "left",
                    transitionDelay: visibleCards.has(index)
                      ? `${(index % 3) * 100 + 700}ms`
                      : "0ms",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-hero max-w-4xl mx-auto">
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
