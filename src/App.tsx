import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Facebook,
  Flame,
  Instagram,
  MapPin,
} from "lucide-react";
import Countdown from "./Countdown";
import Lineup2026 from "./Lineup2026";
import Signature from "./Signature";
import VideoBook from "./VideoBook";
import {
  FACEBOOK_URL,
  FESTIVAL_YEAR,
  galleryByYear,
  galleryFooter,
  historyItems,
  INSTAGRAM_URL,
  type GalleryYear,
} from "./data";

const marqueeText =
  "CHILLIFESTË · HOT EDITION · 7·8·9 GUSHT · KRUSHË E MADHE · ";

export default function App() {
  const [galleryYear, setGalleryYear] = useState<GalleryYear>("2025");
  const items = galleryByYear[galleryYear];

  return (
    <main className="min-h-screen">
      <a href="#top" className="skip-link">
        Kalo te përmbajtja
      </a>

      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 shrink-0 nav-link">
            <img
              src="/assets/logo-CXH1cZxZ.jpg"
              alt="ChilliFestë"
              className="w-11 h-11 rounded-full animate-spin-slow object-cover ring-2 ring-accent/40"
            />
            <div className="leading-none">
              <div className="font-display text-xl text-accent">chillifestë</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                ditë e gzueme
              </div>
            </div>
          </a>
          <nav
            className="flex gap-4 sm:gap-6 md:gap-8 text-[10px] sm:text-sm uppercase tracking-widest text-muted-foreground"
            aria-label="Navigimi kryesor"
          >
            <a href="#lineup" className="nav-link">
              Lineup
            </a>
            <a href="#history" className="nav-link">
              Historiku
            </a>
            <a href="#video" className="nav-link">
              Video
            </a>
            <a href="#sponsors" className="nav-link">
              Sponsorët
            </a>
            <a href="#info" className="nav-link">
              Info
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] text-foreground">
              chilli<span className="text-primary">festë</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl">
              Festivali më unik në{" "}
              <span className="text-accent">Krusha e Madhe-Kosovë</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={18} className="text-primary" aria-hidden />
                <span className="font-semibold">7, 8, 9 Gusht 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={18} className="text-primary" aria-hidden />
                <span className="font-semibold">Krushë e Madhe, Rahovec</span>
              </div>
            </div>
            <div className="mt-8">
              <Countdown />
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="#lineup"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:scale-105 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Shih lineup-in <ArrowRight size={18} aria-hidden />
              </a>
              <a
                href="#history"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:bg-card transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Historiku
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/30 blur-3xl rounded-full" />
            <img
              src="/assets/banner.png"
              alt="ChilliFestë Hot Edition — poster zyrtar 2026"
              width={800}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </section>

      <div className="relative border-y border-border bg-primary/10 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee font-display text-3xl text-accent">
          <span className="px-4">{marqueeText.repeat(8)}</span>
          <span className="px-4">{marqueeText.repeat(8)}</span>
        </div>
      </div>

      <Lineup2026 />

      <section
        id="gallery"
        className="py-24 px-5 bg-card/30 border-y border-border"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-5 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-accent font-bold mb-1">
                Arkiva
              </p>
              <h2 className="font-display text-5xl sm:text-7xl uppercase italic tracking-tight">
                Edicionet
              </h2>
              <p className="text-muted-foreground mt-3 max-w-md">
                Shfleto edicionet e kaluara — secili vit, një histori e re.
              </p>
            </div>
            <div className="flex w-full max-w-md overflow-hidden border border-border rounded-xl">
              {(["2025", "2024"] as const).map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setGalleryYear(year)}
                  aria-pressed={galleryYear === year}
                  className={`flex-1 py-3 text-xs font-black uppercase tracking-widest border-r border-border transition-colors last:border-r-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-ring ${
                    galleryYear === year
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="animate-fade-in" key={galleryYear}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {items.map((item) => (
                <figure
                  key={`${galleryYear}-${item.name}`}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card aspect-[3/4]"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} — ${item.festival}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div className="text-[9px] uppercase tracking-widest text-primary font-bold">
                      {item.festival}
                    </div>
                    <div className="font-display text-xl sm:text-2xl mt-0.5 italic">
                      {item.name}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1">
              <div
                className={`h-1 rounded-full transition-all ${
                  galleryYear === "2025" ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
              <div
                className={`h-1 rounded-full transition-all ${
                  galleryYear === "2024" ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground italic">
              {galleryFooter[galleryYear]}
            </span>
          </div>
        </div>
      </section>

      <section
        id="history"
        className="py-24 px-5 bg-card/40 border-y border-border"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-accent text-sm uppercase tracking-[0.3em]">
              Nga AgroFesta → ChilliFestë
            </div>
            <h2 className="font-display text-5xl sm:text-7xl mt-2">Historiku</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Kjo është udhëtimi ynë.
            </p>
          </div>
          <ol className="relative border-l-2 border-primary/40 ml-3 space-y-10">
            {historyItems.map((item) => (
              <li key={item.year} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background" />
                <div className="font-display text-2xl text-accent">{item.year}</div>
                <h3 className="font-display text-2xl mt-1">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="video" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-5xl sm:text-7xl mt-2">VIDEO</h2>
          </div>
          <VideoBook />
        </div>
      </section>

      <section id="sponsors" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="font-display text-5xl sm:text-7xl mt-2">Sponsorët</h2>
          </div>
        </div>
      </section>

      <section id="info" className="py-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
            <Calendar size={24} className="text-primary" aria-hidden />
            <h3 className="font-display text-2xl mt-4">Datat</h3>
            <p className="text-muted-foreground mt-2">
              7, 8 dhe 9 Gusht 2026 — tre netë.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
            <MapPin size={24} className="text-primary" aria-hidden />
            <h3 className="font-display text-2xl mt-4">Lokacioni</h3>
            <p className="text-muted-foreground mt-2">
              Krushë e Madhe, Rahovec, Kosovë.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
            <Flame size={24} className="text-primary" aria-hidden />
            <h3 className="font-display text-2xl mt-4">Edicioni</h3>
            <p className="text-muted-foreground mt-2">
              Hot Edition — më i nxehti deri më sot.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-CXH1cZxZ.jpg"
              alt="ChilliFestë"
              width={36}
              height={36}
              loading="lazy"
              className="w-9 h-9 rounded-full animate-spin-slow object-cover"
            />
            <span className="font-display text-xl text-accent">chillifestë</span>
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {FESTIVAL_YEAR} ChilliFestë · Krushë e Madhe, Kosovë
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-accent transition nav-link"
            >
              <Instagram size={16} aria-hidden /> @chillifeste
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-accent transition nav-link"
            >
              <Facebook size={16} aria-hidden /> chillifeste
            </a>
          </div>
        </div>
      </footer>

      <Signature />
    </main>
  );
}
