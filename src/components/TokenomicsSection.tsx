import React from "react";

const TokenomicsSection = () => {
  const tokenomicsData = [
    {
      label: "Presale",
      percentage: 40,
      color: "hsl(var(--primary))",
      amount: "40M",
    },
    {
      label: "Liquidity",
      percentage: 25,
      color: "hsl(var(--accent))",
      amount: "25M",
    },
    {
      label: "Team & Development",
      percentage: 15,
      color: "hsl(var(--secondary))",
      amount: "15M",
    },
    {
      label: "Marketing",
      percentage: 10,
      color: "hsl(var(--success))",
      amount: "10M",
    },
    {
      label: "Ecosystem Fund",
      percentage: 10,
      color: "hsl(var(--muted))",
      amount: "10M",
    },
  ];

  const totalSupply = "100,000,000";

  return (
    <section
      id="tokenomics"
      className="py-20 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tokenomics</span> Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent and fair token distribution designed to ensure long-term
            project sustainability and community growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visualization */}
          <div className="relative">
            <div className="card-hero text-center">
              <h3 className="text-2xl font-bold mb-8">Token Distribution</h3>

              {/* Pie Chart Representation */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary-glow p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">
                        100M
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Supply
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated rings around the chart */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-glow-pulse"></div>
                <div
                  className="absolute inset-4 rounded-full border border-accent/20 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {tokenomicsData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary/30 rounded-lg p-3 border border-border/50"
                  >
                    <div
                      className="text-2xl font-bold"
                      style={{ color: item.color }}
                    >
                      {item.percentage}%
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-6">
            <div className="card-feature">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Token Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Token Name:</span>
                  <span className="font-semibold">CryptoPresale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Symbol:</span>
                  <span className="font-semibold">CPS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Supply:</span>
                  <span className="font-semibold">{totalSupply} CPS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blockchain:</span>
                  <span className="font-semibold">Ethereum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Standard:</span>
                  <span className="font-semibold">ERC-20</span>
                </div>
              </div>
            </div>

            {/* Distribution Breakdown */}
            <div className="space-y-4">
              {tokenomicsData.map((item, index) => (
                <div key={index} className="card-feature">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {item.percentage}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.amount} CPS
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-hero">
              <h4 className="text-lg font-semibold mb-3 text-gradient">
                Vesting Schedule
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Presale Tokens:</span>
                  <span>Unlocked at TGE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Tokens:</span>
                  <span>6-month lock, then 24-month vesting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ecosystem Fund:</span>
                  <span>12-month linear vesting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
