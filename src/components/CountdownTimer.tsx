import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set presale end date to 30 days from now
  const presaleEndDate = new Date();
  presaleEndDate.setDate(presaleEndDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = presaleEndDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [presaleEndDate]);

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
          Presale Ends In
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
              {unit.value.toString().padStart(2, "0")}
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
    </div>
  );
};

export default CountdownTimer;
