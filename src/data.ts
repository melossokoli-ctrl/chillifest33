export type GalleryYear = "2025" | "2024";

export type GalleryItem = {
  image: string;
  alt: string;
  festival: string;
  name: string;
};

export const galleryByYear: Record<GalleryYear, GalleryItem[]> = {
  "2025": [
    { image: "/assets/buta-DgG--UY6.jpg", alt: "Buta", festival: "AgroFesta 2025", name: "Buta" },
    { image: "/assets/kida-DgHpFWPN.jpg", alt: "Kida", festival: "AgroFesta 2025", name: "Kida" },
    { image: "/assets/kresha-BgUKN23R.jpg", alt: "Kresha", festival: "AgroFesta 2025", name: "Kresha" },
    { image: "/assets/lumi-Bb0ypC5A.jpg", alt: "Lumi B", festival: "AgroFesta 2025", name: "Lumi B" },
    { image: "/assets/melinda-DoTORd45.jpg", alt: "Melinda", festival: "AgroFesta 2025", name: "Melinda" },
    { image: "/assets/singi-Cvjuiyc8.jpg", alt: "Singi", festival: "AgroFesta 2025", name: "Singi" },
  ],
  "2024": [
    { image: "/assets/artist1-B2KtxU_Y.jpeg", alt: "YaNina", festival: "AgroFesta 2024", name: "YaNina" },
    {
      image: "/assets/artist2-Oskg08CE.jpeg",
      alt: "Bletapërtace",
      festival: "AgroFesta 2024",
      name: "Bletapërtace",
    },
    {
      image: "/assets/artist3-1z4ZZExm.jpeg",
      alt: "Luiz Ejlli",
      festival: "AgroFesta 2024",
      name: "Luiz Ejlli",
    },
  ],
};

export const galleryFooter: Record<GalleryYear, string> = {
  "2025": "Edicioni i fundit AgroFesta",
  "2024": "Momentet 2024",
};

export const historyItems = [
  {
    year: "2009",
    title: "Edicioni i parë i AgroFestës",
    description:
      "Nis gjithçka — edicioni i parë i AgroFestës në Krushë e Madhe.",
  },
  {
    year: "2023",
    title: "Edicion rekord",
    description:
      "Tre netë të mbushura me energji; festivali bëhet pikë referimi e verës.",
  },
  {
    year: "2024",
    title: "Skena rritet",
    description: "Lineup më i fortë se kurrë, prodhim dhe skenë në nivel të ri.",
  },
  {
    year: "2025",
    title: "AgroFesta, edicioni i fundit",
    description: "Mbyllja simbolike e një kapitulli, fillimi i një identiteti të ri.",
  },
  {
    year: "2026",
    title: "ChilliFestë — Hot Edition",
    description: "Këtë vit ndërrohet emri. Festival i njëjtë, më i nxehtë se kurrë.",
  },
] as const;

/** Fillimi i festivalit — ora lokale (Kosovë) */
export const FESTIVAL_START = new Date("2026-08-07T00:00:00+02:00");

export const INSTAGRAM_URL =
  import.meta.env.VITE_INSTAGRAM_URL ?? "https://www.instagram.com/chillifeste/";

export const FACEBOOK_URL =
  import.meta.env.VITE_FACEBOOK_URL ?? "https://www.facebook.com/ChilliFeste";

/** URL e plotë e faqes (p.sh. https://www.chillifeste.com) — për Open Graph / Facebook */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

export const FESTIVAL_YEAR = 2026;
