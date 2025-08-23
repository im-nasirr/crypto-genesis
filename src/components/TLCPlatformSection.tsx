import React from "react";
import {
  Heart,
  Users,
  Globe,
  Star,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";

const TLCPlatformSection = () => {
  return (
    <section
      id="tlc-platform"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient pb-8">
            Tipping Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering tipped workers through innovative technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 rounded-lg bg-card border">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Empowerment</h3>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Community</h3>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Global Access</h3>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border">
                <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Recognition</h3>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                More than just a tipping platform
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">
                  <a href="https://www.mytiptown.com/ ">MyTipTown.com</a>
                </span>{" "}
                is a revolutionary social network that empowers tipped workers
                to take control of their careers, build meaningful
                relationships, and thrive in a supportive community.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Join us in creating a vibrant, gratitude-driven culture where
                tipped workers can shine and be recognized for their hard work.
                <br />
                <b>Read the white paper to uncover our core features</b>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a
                    href="/src/assets/tlc-whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Read White Paper
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://www.mytiptown.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit www.mytiptown.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TLCPlatformSection;
