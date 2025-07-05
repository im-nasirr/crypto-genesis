import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is CryptoPresale and what problem does it solve?",
      answer:
        "CryptoPresale is a revolutionary blockchain platform that addresses scalability, security, and cost issues in current DeFi ecosystems. Our advanced consensus mechanism enables lightning-fast transactions with minimal fees while maintaining the highest security standards.",
    },
    {
      question: "How do I participate in the presale?",
      answer:
        "Simply connect your Web3 wallet (MetaMask, Trust Wallet, etc.), choose your contribution amount in ETH, BNB, or USDT, and confirm your transaction. You'll receive your tokens immediately after the presale ends.",
    },
    {
      question: "What are the presale bonus tiers?",
      answer:
        "Early investors receive up to 200% bonus tokens: First 24 hours: +200%, First week: +150%, First two weeks: +100%, Remaining presale period: +50% bonus tokens.",
    },
    {
      question: "When will tokens be available for trading?",
      answer:
        "Tokens will be available for trading immediately after the presale ends. We'll list on major DEXs like Uniswap and PancakeSwap first, followed by centralized exchanges within 30 days.",
    },
    {
      question: "What is the minimum and maximum purchase amount?",
      answer:
        "Minimum purchase is 0.1 ETH (or equivalent in other accepted currencies). Maximum purchase is 10 ETH to ensure fair distribution among all participants.",
    },
    {
      question: "Is the smart contract audited?",
      answer:
        "Yes, our smart contracts have been thoroughly audited by leading security firms including CertiK and Audit Request. All audit reports are publicly available on our website.",
    },
    {
      question: "What utilities will the token have?",
      answer:
        "CPS tokens provide governance rights, staking rewards up to 200% APY, fee discounts on our platform, access to exclusive features, and participation in ecosystem decisions.",
    },
    {
      question: "How is the team committed to the project?",
      answer:
        "Team tokens are locked for 6 months post-launch with a 24-month linear vesting schedule. Our team has extensive experience in blockchain development and has previously launched successful projects.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our presale,
            tokenomics, and project roadmap.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-feature overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between p-6 hover:bg-muted/20 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="card-hero text-center mt-12">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you 24/7. Reach out through any of our
              channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">Join Telegram Community</button>
              <button className="btn-ghost">Contact Support</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
