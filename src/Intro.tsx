import { type ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function Intro({ children }: Props) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => setEntered(true), 600);
  };

  if (entered) {
    return children;
  }

  return (
    <button
      type="button"
      onClick={handleEnter}
      aria-label="Hyr në faqe"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background cursor-pointer transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute w-[60vmin] h-[60vmin] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <img
        src="/assets/logo.png"
        alt="ChilliFestë"
        style={{ width: "220px", height: "220px" }}
        className="relative rounded-full object-cover ring-2 ring-accent/40 animate-spin-slow shadow-2xl"
      />
    </button>
  );
}
