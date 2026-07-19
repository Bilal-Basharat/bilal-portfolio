"use client";

import { useEffect, useState } from "react";

/**
 * BackToTop — floating button that appears after scrolling past the
 * first viewport and smooth-scrolls back to the top. Site-wide.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber md:right-8 md:bottom-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
    </button>
  );
}