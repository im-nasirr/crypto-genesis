import React from "react";

const AuditSection = () => {
  return (
    <section
      id="audit"
      className="py-20 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">TLC Audit</span> by Cyberscope
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A strong focus on trust and transparency
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tip Life Coin (TLC) has undergone a comprehensive smart contract audit conducted by{" "}
            <span className="text-primary font-semibold">Cyberscope</span>, a leading blockchain security firm
            recognized by top crypto exchanges, listing platforms, and launchpads. This audit reinforces the trust, credibility, and
            strength of the <span className="text-primary font-semibold">TLC Token</span>, ensuring it meets the highest security standards
            for the global tipping economy.
          </p>
          <div className="mt-6">
            <p className="text-muted-foreground">
              View the{" "}
              <span className="text-primary font-semibold">Audit report</span> on{" "}
              <a
                href="https://www.cyberscope.io/audits/8c-tlc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors duration-300 underline"
              >
                cyberscope.io
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Audit Certificate Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <img
                src="/audit-image.jpg"
                alt="Cyberscope Audit Certificate"
                className="max-w-full h-auto rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

 
     
       
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/src/assets/audit-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero  px-10 py-3 "
                >
                  View Audit Report
                </a>
                <a
                  href="https://www.cyberscope.io/audits/8c-tlc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  View on Cyberscope
                </a>
              </div>
           
          
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
