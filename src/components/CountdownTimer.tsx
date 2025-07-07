import React, { useState, useEffect, useMemo } from "react";
import { FaTelegram, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Calculate presale end date once using useMemo to prevent recalculation on every render
  const presaleEndDate = useMemo(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 15);
    endDate.setHours(23, 59, 59, 999); // Set to end of day
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
    <div className="card-hero">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gradient mb-2">
          Presale Starts in
        </h3>
        <p className="text-muted-foreground">
          Don't miss out on this limited opportunity!
        </p>
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
        <button className="btn-ghost flex-1">Read Whitepaper</button>
      </div>
      <p className="text-center text-muted-foreground mt-5">
        Join our community
      </p>

      {/* Join our community */}
      <div className="flex justify-center mt-2 flex-wrap gap-4">
        <button className="btn-ghost text-2xl border-none">
          <a href="https://x.com/MyTipLife">
            <FaSquareXTwitter />
          </a>
        </button>
        <button className="btn-ghost text-2xl border-none">
          <a href="https://t.me/MyTipLifeOfficial">
            <FaTelegram />
          </a>
        </button>
        <button className="btn-ghost text-2xl border-none">
          <a href="https://discord.com/mytiplife">
            <FaDiscord />
          </a>
        </button>
        <button className="btn-ghost text-2xl border-none">
          <a href="https://www.instagram.com/mytiplife">
            <FaInstagram />
          </a>
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
