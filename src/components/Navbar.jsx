"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 24);
      setHidden(y > lastY && y > 80);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="flex h-16 w-full items-center justify-between px-6 md:px-14 lg:px-20">
        {/* Logo */}
        <a
          href="/#top"
          className="font-mono text-sm tracking-widest text-text"
          aria-label="Back to top"
        >
          <span className="text-amber">&lt;</span>
          Bilal B.
          <span className="text-amber">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/bilal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-amber/40 px-4 py-2 font-mono text-xs text-amber transition-colors duration-200 hover:bg-amber-soft"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-text md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M4 4l14 14M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            ) : (
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-line bg-ink/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
