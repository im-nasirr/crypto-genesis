import React from "react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "1. What is Tip Life Coin (TLC)?",
      answer:
        "Tip Life Coin (TLC) is a Solana-based cryptocurrency designed to revolutionize the global tipping economy. It enables fast, low-cost, and secure peer-to-peer tipping, especially in sports and service industries.",
    },

    {
      question: "2. How to track Progress?",
      answer:
        "Follow us on the links provided on this TLC website to see what is happening and what progress has been made. We will provide continuous updates on the TLC website and all available forms of social media",
    },
    {
      question: "3. How is TLC different from other cryptocurrencies?",
      answer:
        "Unlike general-purpose tokens, TLC is purpose-built for tipping. It addresses inefficiencies in traditional tipping systems by offering instant, transparent, and affordable transactions through the MyTipTown platform.",
    },
    {
      question: "4. Why was Solana chosen as the blockchain for TLC?",
      answer:
        "Solana offers extremely fast transaction speeds (up to 65,000 TPS), sub-second finality, low fees, and energy efficiency—making it ideal for high-volume, micro-transaction environments like tipping.",
    },
    {
      question: "5. What are the use cases for TLC tokens?",
      answer:
        "TLC tokens can be used for tipping, redeemed for products or services in the MyTipTown ecosystem, used for governance voting, and in the future may support staking and liquidity rewards.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQs</h2>
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
              <a
                href="https://t.me/+f7R_K3d5vF8yNjVh"
                target="_blank"
                className="btn-hero  px-10 py-3 "
              >
                Join Telegram Community
              </a>
              <a href="#contact" className="btn-ghost  px-10 py-3 ">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
