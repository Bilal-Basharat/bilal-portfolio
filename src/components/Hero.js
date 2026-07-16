"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Hero — professional portfolio layout.
 *
 * Left column:  "Hi, I'm" → "Full Stack Engineer — Pakistan" → name →
 *               terminal typewriter → summary → GitHub / LinkedIn / email
 * Right column: small round profile photo (public/profile.jpg)
 *
 * Unique touch: a live terminal prompt that types what Bilal builds,
 * with a blinking cursor. Disabled for prefers-reduced-motion users.
 */

const TYPED_PHRASES = [
  "React.js & Next.js frontends",
  "Laravel & Node.js backends",
  "SaaS platforms in production",
  "REST APIs & integrations",
  "secure auth & payment flows",
];

function useTypewriter(phrases, typingSpeed = 55, pause = 1800) {
  const [text, setText] = useState(phrases[0]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return; // keep the first phrase, statically
    setEnabled(true);

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const current = phrases[phraseIndex];

      if (deleting) {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        timer = setTimeout(tick, typingSpeed / 2);
      } else {
        const next = phrases[phraseIndex];
        charIndex += 1;
        setText(next.slice(0, charIndex));
        if (charIndex === next.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, typingSpeed);
      }
    };

    timer = setTimeout(tick, pause);
    return () => clearTimeout(timer);
  }, [phrases, typingSpeed, pause]);

  return { text, enabled };
}

export default function Hero() {
  const spotlightRef = useRef(null);
  const frame = useRef(0);
  const { text: typedText, enabled: typingEnabled } =
    useTypewriter(TYPED_PHRASES);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isTouch) return;

    const onMove = (e) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,180,84,0.07), transparent 70%)`;
        }
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section
      id="top"
      className="bg-noise relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="orb orb-amber -top-32 -left-24" aria-hidden="true" />
      <div className="orb orb-teal right-[-6rem] bottom-[-8rem]" aria-hidden="true" />
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-10"
        aria-hidden="true"
      />

      {/* Content — full width */}
      <div className="relative z-20 w-full px-6 pt-28 pb-20 md:px-14 md:pt-24 lg:px-20">
        <div className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center md:gap-8">
          {/* ---------- Left: intro ---------- */}
          <div className="max-w-3xl">

            <div className="flex flex-wrap items-baseline gap-8">

            <p className="reveal reveal-delay-1 font-mono font-display text-lg text-text/90 md:text-xl">
              Hi! I&apos;m
            </p>

            <p className="reveal reveal-delay-1 mt-4 font-mono text-xs tracking-[0.3em] text-teal uppercase">
              Full Stack Engineer — Pakistan
            </p>
            </div>

            <h1 className="reveal reveal-delay-2 mt-4 font-display text-5xl leading-[1.04] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Bilal Basharat <span className="text-amber">Alvi</span>
            </h1>

            {/* Unique touch — live terminal prompt */}
            <div className="reveal reveal-delay-3 mt-7 inline-flex max-w-full items-center gap-3 rounded-lg border border-line bg-surface/70 px-4 py-3 backdrop-blur-sm">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </span>
              <p className="truncate font-mono text-sm text-muted">
                <span className="text-teal">~$</span>{" "}
                <span className="text-text/80">building</span>{" "}
                <span className="text-amber">{typedText}</span>
                {typingEnabled && (
                  <span className="ml-0.5 inline-block w-2 animate-pulse bg-amber/80 text-transparent select-none">
                    |
                  </span>
                )}
              </p>
            </div>

            {/* Summary — full stack breadth */}
            <p className="reveal reveal-delay-3 mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg md:text-justify">
  I take products from idea to production — building responsive
  interfaces, scalable backends, and reliable data layers. I&apos;ve
  shipped a SaaS platform running live across 15 restaurants, designed
  APIs and third-party integrations, and handled everything between
  authentication, payments, and deployment. I value continuous
  learning, clean and maintainable work, and the professionalism that
  turns good code into dependable products.
</p>

            {/* Socials + full email */}
            <div className="reveal reveal-delay-4 mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://www.github.com/Bilal-Basharat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/bilal-basharat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>

              {/* Full email address, clickable */}
              <a
                href="mailto:bilalbisharat@gmail.com"
                className="group flex items-center gap-2.5 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                bilalbisharat@gmail.com
              </a>
            </div>
          </div>

          {/* ---------- Right: round profile photo ---------- */}
          <div className="reveal reveal-delay-2 md:shrink-0">
            <div className="relative">
              {/* Soft glow behind the photo */}
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber/25 to-teal/20 blur-xl"
                aria-hidden="true"
              />
              <div className="relative h-96 w-96 overflow-hidden rounded-full border-2 border-amber/60 md:h-48 md:w-48 lg:h-64 lg:w-64">
                <Image
                  src="/bilal_profile_pic.jpg"
                  alt="Bilal Basharat Alvi, Full Stack Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 112px, 176px"
                  className="object-cover"
                />
              </div>
              {/* Availability dot */}
              <span
                className="absolute right-2 bottom-2 h-4 w-4 rounded-full border-2 border-ink bg-teal md:h-5 md:w-5"
                title="Open to opportunities"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#experience"
          aria-label="Scroll to experience section"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-amber md:flex"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <span className="block h-8 w-px overflow-hidden bg-line">
            <span className="block h-3 w-px animate-bounce bg-amber" />
          </span>
        </a>
      </div>
    </section>
  );
}
