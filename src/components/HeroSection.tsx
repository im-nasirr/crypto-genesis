import React from "react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 lg:pt-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/8 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src="/images/tiplifecoin-logo.png"
                alt="TLC Logo"
                className="w-20 h-20 lg:w-24 lg:h-24 animate-float"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-[4em] font-bold leading-tight">
                {/*  Global Digital Movement */}
                Tip Life Coin - <span className="text-gradient">TLC </span>{" "}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                Currency of Gratitude
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Tip Life Coin (TLC) is an innovative cryptocurrency poised to
                transform the global tipping economy
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-hero text-lg px-10 py-3 animate-glow-pulse">
                🚀 Buy TLC
              </button>
              <button className="btn-ghost text-lg px-10 py-3">
                <a href="https://www.cyberscope.io/audits/8c-tlc">
                  📄 View Tokenomics
                </a>
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  $2.4M+
                </div>
                <div className="text-sm text-muted-foreground">Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  12K+
                </div>
                <div className="text-sm text-muted-foreground">Investors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  200%
                </div>
                <div className="text-sm text-muted-foreground">Bonus</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Countdown Timer */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
