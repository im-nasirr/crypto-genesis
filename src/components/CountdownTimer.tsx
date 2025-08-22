import React, { useState, useEffect, useMemo } from "react";
import {
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const presaleEndDate = useMemo(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);
    endDate.setHours(23, 59, 59, 999);
    return endDate;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = presaleEndDate.getTime() - now;

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
        setTimeLeft(newTimeLeft);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }

      if (!isLoaded) {
        setIsLoaded(true);
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Set up interval
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [presaleEndDate, isLoaded]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="card-hero" id="hero">
      <div className="text-center mb-6">
        <p className="opacity-80 font-semibold mb-2">
          Don't miss out on this limited opportunity!
        </p>
        <h3 className="text-2xl font-bold text-gradient mb-2">
          Presale Starts in
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="text-center p-4 bg-secondary/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
              {isLoaded ? unit.value.toString().padStart(2, "0") : "--"}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="btn-hero flex-1">Join Presale Now</button>
        <a
          href="/src/assets/tlc-whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost flex-1"
        >
          Read Whitepaper
        </a>
      </div>
      <p className="text-center text-muted-foreground mt-5">
        Join our community
      </p>

      {/* Join our community */}
      <div className="flex justify-center mt-2 flex-wrap gap-4">
        <a 
          href="https://x.com/tiplifecoin?s=21"
          className="btn-ghost text-2xl border-none"
        >
          <FaSquareXTwitter />
        </a>
        <a 
          href="https://t.me/+f7R_K3d5vF8yNjVh"
          className="btn-ghost text-2xl border-none"
        >
          <FaTelegram />
        </a>
        <a 
          href="https://discord.com/channels/@tiplifecoin"
          className="btn-ghost text-2xl border-none"
        >
          <FaDiscord />
        </a>
        <a 
          href="https://www.instagram.com/tiplifecoin/"
          className="btn-ghost text-2xl border-none"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.youtube.com/@TipLifeCoin"
          className="btn-ghost text-2xl border-none"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default CountdownTimer;
