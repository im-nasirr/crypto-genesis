import React, { useState, useEffect } from "react";

const TokenomicsSection = () => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const tokenomicsData = [
    {
      label: "ICO Sale",
      percentage: 50,
      color: "#FF8A50", // Orange
      amount: "50M",
      description: "Funds raised during the Initial Coin Offering phase",
    },
    {
      label: "Team and Advisors",
      percentage: 15,
      color: "#FFD700", // Yellow
      amount: "15M",
      description: "Reserved for core team and strategic advisors",
    },
    {
      label: "Marketing and Development",
      percentage: 20,
      color: "#FF69B4", // Pink
      amount: "20M",
      description: "Marketing campaigns and platform development",
    },
    {
      label: "Reserve Fund",
      percentage: 15,
      color: "#FF4444", // Red
      amount: "15M",
      description: "Emergency reserves and future opportunities",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // SVG Pie Chart Component
  const PieChart = ({ data, size = 340 }) => {
    const center = size / 2;
    const radius = size * 0.32;
    const innerRadius = size * 0.18;

    let cumulativePercentage = 0;

    const createArcPath = (
      startAngle: number,
      endAngle: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      const start = polarToCartesian(center, center, outerRadius, endAngle);
      const end = polarToCartesian(center, center, outerRadius, startAngle);
      const innerStart = polarToCartesian(
        center,
        center,
        innerRadius,
        endAngle
      );
      const innerEnd = polarToCartesian(
        center,
        center,
        innerRadius,
        startAngle
      );

      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      return [
        "M",
        start.x,
        start.y,
        "A",
        outerRadius,
        outerRadius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y,
        "L",
        innerEnd.x,
        innerEnd.y,
        "A",
        innerRadius,
        innerRadius,
        0,
        largeArcFlag,
        1,
        innerStart.x,
        innerStart.y,
        "Z",
      ].join(" ");
    };

    const polarToCartesian = (
      centerX: number,
      centerY: number,
      radius: number,
      angleInDegrees: number
    ) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    };

    const getLabelPosition = (startAngle: number, endAngle: number) => {
      const midAngle = (startAngle + endAngle) / 2;
      const labelRadius = radius + 40;
      return polarToCartesian(center, center, labelRadius, midAngle);
    };

    return (
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="overflow-visible"
          style={{
            filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.3))",
          }}
        >
          {/* Enhanced Glow Effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="subtle-glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {data.map((item, index) => {
            const startAngle = cumulativePercentage * 3.6;
            const endAngle = (cumulativePercentage + item.percentage) * 3.6;
            const pathData = createArcPath(
              startAngle,
              endAngle,
              radius,
              innerRadius
            );
            const labelPos = getLabelPosition(startAngle, endAngle);

            const isHovered = hoveredSegment === index;

            cumulativePercentage += item.percentage;

            return (
              <g key={index} className="cursor-pointer">
                <path
                  d={
                    isVisible
                      ? pathData
                      : createArcPath(0, 0, radius, innerRadius)
                  }
                  fill={item.color}
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  className="transition-all duration-300 ease-out"
                  style={{
                    opacity: hoveredSegment !== null && !isHovered ? 0.7 : 1,
                    filter: isHovered
                      ? "url(#glow) brightness(1.1)"
                      : "url(#subtle-glow)",
                  }}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`fill-white font-bold transition-all duration-300 pointer-events-none select-none ${
                    isVisible ? "opacity-100" : "opacity-0"
                  } ${isHovered ? "text-base" : "text-sm"}`}
                  style={{
                    textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
                    fontSize: isHovered ? "16px" : "14px",
                  }}
                >
                  {item.percentage}%
                </text>
              </g>
            );
          })}

          {/* Center circle with gradient */}
          <defs>
            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>
          </defs>

          <circle
            cx={center}
            cy={center}
            r={innerRadius}
            fill="url(#centerGradient)"
            stroke="#444"
            strokeWidth="1"
            style={{
              filter: "drop-shadow(inset 0 0 10px rgba(0,0,0,0.5))",
            }}
          />

          {/* Subtle animated ring */}
          <circle
            cx={center}
            cy={center}
            r={innerRadius + 6}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            className="animate-pulse"
            style={{
              opacity: hoveredSegment !== null ? 0.6 : 0.2,
              transition: "opacity 0.3s ease",
            }}
          />
        </svg>

        {/* Fixed Center content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              200M
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
              Total Supply
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="tokenomics"
      className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Token Economics
            </span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/tiplifecoin-logo.png"
              alt="TLC Logo"
              className="w-16 h-16 opacity-80"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Tokenomics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparent and fair token distribution designed to ensure long-term
            project sustainability and community growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Chart Visualization */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-10 text-white text-center flex items-center justify-center gap-3">
                Token Distribution
              </h3>

              {/* Fixed container for pie chart */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <PieChart data={tokenomicsData} size={340} />
                </div>
              </div>

              {/* Enhanced Legend */}
              <div className="space-y-3 max-w-lg mx-auto">
                {tokenomicsData.map((item, index) => (
                  <div
                    key={index}
                    className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredSegment === index
                        ? "bg-white/10 border-white/30 shadow-lg"
                        : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                    }`}
                    onMouseEnter={() => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-5 h-5 rounded-lg flex-shrink-0 transition-all duration-300 ${
                          hoveredSegment === index ? "shadow-lg" : ""
                        }`}
                        style={{
                          backgroundColor: item.color,
                          boxShadow:
                            hoveredSegment === index
                              ? `0 0 20px ${item.color}40`
                              : "none",
                        }}
                      ></div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.amount} TLC
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">
                        {item.percentage}%
                      </div>
                      <div
                        className={`w-12 h-1 rounded-full transition-all duration-300 ${
                          hoveredSegment === index ? "shadow-md" : ""
                        }`}
                        style={{
                          backgroundColor: item.color,
                          boxShadow:
                            hoveredSegment === index
                              ? `0 0 10px ${item.color}60`
                              : "none",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold mb-8 text-foreground flex items-center">
                Token Details
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Token Name", value: "Tip Life Coin", icon: "🪙" },
                  { label: "Symbol", value: "TLC", icon: "🔤" },
                  { label: "Total Supply", value: "200M TLC", icon: "📊" },
                  { label: "Blockchain", value: "Solana", icon: "⚡" },
                  {
                    label: "Token Address",
                    value: "52Lmwo8ujYNqSuzxq2SGMYJZQDHVkN6UWX6GYWDJ33a9",
                    icon: "🔗",
                  },
                ].map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 group border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{detail.icon}</span>
                      <span className="text-muted-foreground">
                        {detail.label}
                      </span>
                    </div>
                    <span className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TLC Presale */}
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl">
              <h4 className="text-xl font-semibold text-foreground flex items-center mb-8">
                TLC Presale
              </h4>

              {/* Presale Details - Row Cards */}
              <div className="space-y-4">
                {/* ICO Presale Target */}
                <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <span className="text-muted-foreground">
                    ICO Presale Target
                  </span>
                  <span className="font-semibold text-primary">$20M</span>
                </div>

                {/* Total TLC Coins */}
                <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <span className="text-muted-foreground">Total TLC Coins</span>
                  <span className="font-semibold text-primary">100M</span>
                </div>

                {/* Price Per Coin */}
                <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <span className="text-muted-foreground">Price Per Coin</span>
                  <span className="font-semibold text-primary">$0.20</span>
                </div>

                {/* Presale Duration */}
                <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <span className="text-muted-foreground">
                    Presale Duration
                  </span>
                  <span className="font-semibold text-primary">20 Days</span>
                </div>

                {/* Visit Website */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
