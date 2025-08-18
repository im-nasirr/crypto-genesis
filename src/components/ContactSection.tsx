import React from "react";
import { useState } from "react";
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegram className="text-xl" />,
      url: "https://t.me/+f7R_K3d5vF8yNjVh",
      label: "Join our Telegram",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-xl" />,
      url: "https://x.com/tiplifecoin?s=21",
      label: "@tiplifecoin",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="text-xl" />,
      url: "https://discord.com/channels/@tiplifecoin",
      label: "@tiplifecoin",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-xl" />,
      url: "https://www.instagram.com/tiplifecoin/",
      label: "@tiplifecoin",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-xl" />,
      url: "https://www.youtube.com/@TipLifeCoin",
      label: "@TipLifeCoin",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about the presale? Want to partner with us? We'd love
            to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-hero">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="btn-hero w-full text-lg py-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-feature">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Connect With Us
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {link.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {link.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
