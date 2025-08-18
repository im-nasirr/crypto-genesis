import React from "react";
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    project: [
      { label: "About", href: "#about" },
      { label: "Whitepaper", href: "/src/assets/tlc-whitepaper.pdf" },
      { label: "Roadmap", href: "#" },
    ],
    presale: [
      { label: "How to Buy", href: "#how-to-buy" },
      { label: "Tokenomics", href: "#tokenomics" },
    ],
    support: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    community: [
      { label: "Telegram", href: "https://t.me/+f7R_K3d5vF8yNjVh" },
      { label: "Twitter", href: "https://x.com/tiplifecoin?s=21" },
      { label: "Discord", href: "https://discord.com/channels/@tiplifecoin" },
      { label: "Instagram", href: "https://www.instagram.com/tiplifecoin/" },
      { label: "YouTube", href: "https://www.youtube.com/@TipLifeCoin" },
    ],
  };

  const socialIcons = [
    {
      name: "Telegram",
      icon: FaTelegram,
      href: "https://t.me/+f7R_K3d5vF8yNjVh",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://x.com/tiplifecoin?s=21",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      href: "https://discord.com/channels/@tiplifecoin",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/tiplifecoin/",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@TipLifeCoin",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 lg:gap-12 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/tlc-footer.png"
                alt="TLC Logo"
                className="w-auto h-14"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tip Life Coin (TLC) is an innovative cryptocurrency poised to
              transform the global tipping economy
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 border border-border/50 hover:border-primary/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:ml-6">
            <h4 className="font-semibold text-foreground mb-4">Project</h4>
            <ul className="space-y-2">
              {footerLinks.project.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    {...(link.label === "Whitepaper" && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Presale</h4>
            <ul className="space-y-2">
              {footerLinks.presale.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="card-hero text-center mb-12">
          <h3 className="text-xl font-semibold text-gradient mb-3">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest updates, exclusive
            offers, and market insights.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
            />
            <button className="btn-hero px-8 py-3">Subscribe</button>
          </div>
        </div> */}

        {/* Bottom Section */}
        {/* <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 CryptoPresale. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Risk Disclosure
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div> */}

        {/* Security Disclaimer */}
        {/* <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/50">
          <div className="text-center text-xs text-muted-foreground">
            <p className="mb-2">
              ⚠️ <strong>Important:</strong> Cryptocurrency investments are
              subject to market risks. Please read all documents carefully and
              invest only what you can afford to lose.
            </p>
            <p>
              This website and its contents are not intended for residents of
              certain jurisdictions. Please ensure compliance with your local
              regulations before participating.
            </p>
          </div>
        </div> */}

        {/* Copyright Section */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © TCL 2025. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
