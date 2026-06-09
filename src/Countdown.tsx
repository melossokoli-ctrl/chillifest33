import { useEffect, useState } from "react";
import { FESTIVAL_START } from "./data";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, FESTIVAL_START.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const labels = ["Ditë", "Orë", "Min", "Sek"] as const;

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeLeft()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <div
      className="flex gap-2 sm:gap-3"
      role="timer"
      aria-live="polite"
      aria-label="Kohë deri në ChilliFestë 2026"
    >
      {values.map((value, i) => (
        <div
          key={labels[i]}
          className="flex flex-col items-center rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3 min-w-[4.5rem] sm:min-w-20"
        >
          <span
            className="font-display text-4xl text-accent tabular-nums"
            aria-label={`${value} ${labels[i]}`}
          >
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
