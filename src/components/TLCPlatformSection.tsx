import React from "react";
import { Heart, Users, Globe, Star } from "lucide-react";
const TLCPlatformSection = () => {
  return (
    <section
      id="tlc-platform"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient  pb-8">
            TLC Tipping Platform
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm">Empowerment</h3>
                </div>
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm">Community</h3>
                </div>
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm">Global Access</h3>
                </div>
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm">
                  <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm">Recognition</h3>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="text-primary font-semibold">
                  MyTipLife.com
                </span>{" "}
                is more than just a tipping platform; it is a revolutionary
                social network that empowers tipped workers to take control of
                their careers, build meaningful relationships, and thrive in a
                supportive community.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                By integrating innovative features and providing global
                accessibility, we are transforming the tipping economy into a
                more appreciative and equitable experience for everyone
                involved.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Join us in creating a vibrant, gratitude-driven culture where
                tipped workers can shine and be recognized for their hard work
                and dedication.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TLCPlatformSection;
