import { useEffect, useRef, useState } from "react";

const bookVideos = [
  { src: "/assets/video.mp4", label: "Faqja 1" },
  { src: "/assets/video2.mp4", label: "Faqja 2" },
  { src: "/assets/video3.mp4", label: "Faqja 3" },
];

export default function VideoBook() {
  const [page, setPage] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = bookVideos.length;

  const go = (index: number) => {
    if (index < 0 || index >= total) return;
    const videos = stageRef.current?.querySelectorAll("video");
    videos?.forEach((v) => v.pause());
    setPage(index);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(page - 1);
      if (e.key === "ArrowRight") go(page + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page]);

  return (
    <div className="video-book">
      <div className="video-book__stage" ref={stageRef}>
        {bookVideos.map((v, i) => (
          <div
            key={v.src}
            className={"video-book__page" + (i === page ? " is-active" : "")}
            aria-hidden={i !== page}
          >
            <span className="video-book__label">{v.label}</span>
            <video src={v.src} controls playsInline preload="metadata" />
          </div>
        ))}
      </div>

      <div className="video-book__nav">
        <button
          type="button"
          className="video-book__btn"
          onClick={() => go(page - 1)}
          disabled={page === 0}
          aria-label="Faqja e mëparshme"
        >
          ‹
        </button>
        <div className="video-book__dots">
          {bookVideos.map((v, i) => (
            <button
              type="button"
              key={v.src}
              className={"video-book__dot" + (i === page ? " is-on" : "")}
              onClick={() => go(i)}
              aria-label={"Shko te " + v.label}
            />
          ))}
        </div>
        <button
          type="button"
          className="video-book__btn"
          onClick={() => go(page + 1)}
          disabled={page === total - 1}
          aria-label="Faqja tjetër"
        >
          ›
        </button>
      </div>
      <p className="video-book__counter">
        {page + 1} / {total}
      </p>
    </div>
  );
}
