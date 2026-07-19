"use client";

import { useEffect, useRef } from "react";

/**
 * Contact — closing section + footer.
 * Follows the same visual language as every other section: left-aligned,
 * eyebrow → heading → content, amber as accent only. The email renders as
 * the same bordered mono pill used in the hero, so the page ends the way
 * it began.
 */

const EMAIL = "bilalbisharat@gmail.com";

const SOCIALS = [
  { label: "GitHub", href: "https://www.github.com/Bilal-Basharat" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bilal-basharat" },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal-item");
    if (!items?.length) return;

    items.forEach((item) => item.classList.add("will-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full px-6 pt-24 md:px-14 md:pt-32 lg:px-20"
    >
      <div className="reveal-item max-w-2xl">
        {/* Section heading — same pattern as every section */}
        <p className="font-mono text-xs tracking-[0.3em] text-teal uppercase">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Open to <span className="text-amber">opportunities</span>
        </h2>

        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          
          Open to full-stack Engineering roles, contract work, and
          collaborations on projects worth building. Based in Pakistan,
          available worldwide.
        </p>

        {/* Email — same bordered mono pill as the hero */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2.5 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            {EMAIL}
          </a>

          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted transition-colors duration-200 hover:text-amber"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-line py-8 md:mt-32">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Bilal Basharat Alvi
          </p>
          <p className="font-mono text-xs text-muted">
            Designed &amp; built with Next.js
          </p>
        </div>
      </footer>
    </section>
  );
}
