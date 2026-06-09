import { Facebook, Flame, Instagram } from "lucide-react";
import { FACEBOOK_URL, INSTAGRAM_URL } from "./data";

export default function Lineup2026() {
  return (
    <section id="lineup" className="py-24 px-5 relative">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto relative">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">
            Lineup 2026 · Hot Edition
          </span>
        </div>
        <div className="mt-10 relative group">
          <div className="aspect-[4/5] sm:aspect-[16/10] w-full rounded-3xl bg-card border border-border overflow-hidden relative flex flex-col items-center justify-center text-center p-8 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_65%)]" />
            <div className="relative mb-6 flex items-center justify-center py-10">
              <div className="w-20 h-20 rounded-full border-2 border-primary/50 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary blur-md opacity-60" />
              </div>
            </div>
            <div className="relative bg-primary/15 border border-primary/50 px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
              <Flame size={12} className="text-primary" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Top Secret
              </span>
            </div>
            <h3 className="relative font-display text-3xl sm:text-5xl uppercase tracking-tight italic">
              Së shpejti
            </h3>
            <p className="relative text-muted-foreground text-sm mt-3 max-w-sm">
              Ndiq lajmet e para në Instagram dhe Facebook.
            </p>
            <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Instagram size={16} aria-hidden /> @chillifeste
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Facebook size={16} aria-hidden /> chillifeste
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
