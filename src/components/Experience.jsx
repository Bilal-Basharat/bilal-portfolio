"use client";

import { useEffect, useRef } from "react";

/**
 * Experience — vertical timeline.
 * Pattern per entry: company → role → duration → deliverables → stack tags.
 * Entries fade-and-rise into view on scroll via IntersectionObserver
 * (adds .in-view). Users with prefers-reduced-motion see everything
 * immediately — handled in globals.css.
 */

const EXPERIENCE = [
  {
    company: "EatsTek Limited",
    role: "Full Stack Developer",
    duration: "Oct 2024 — May 2026",
    location: "Lahore, PK",
    deliverables: [
      "Built and shipped a SaaS restaurant kiosk platform now running live across 15 restaurants.",
      "Delivered an admin dashboard covering catalog, inventory, order analytics, employee permissions, and till management for sales and transaction tracking.",
      "Implemented secure JWT authentication with role-based access control across all system users.",
      "Integrated third-party delivery platforms to synchronize menus and incoming orders in real time.",
      "Developed the company e-commerce platform with integrated checkout and subscription payments.",
      "Collaborated in an Agile team with structured code reviews, and deployed and maintained the application on a production VPS.",
    ],
    stack: [
      "Laravel",
      "React.js",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
      "Airwallex",
      "Git",
      "GitHub",
    ],
  },
  {
    company: "Tiers Limited",
    role: "Web Development Intern",
    duration: "June 2023 — Aug 2023",
    location: "Lahore, PK",
    deliverables: [
      "Contributed to a hotel management application handling bookings, room availability, and billing.",
      "Practiced professional engineering workflows — version control, collaboration, and code quality improvements.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Git", "GitHub"],
  },
  {
    company: "UET ACM Chapter",
    role: "Fellowship — Mobile App Development",
    duration: "July 2023 — Sep 2023", // TODO: replace with the actual months, e.g. "Mar 2023 — Jun 2023"
    location: "Lahore, PK",
    deliverables: [
      "Completed the ACM fellowship program focused on cross-platform mobile app development with Flutter.",
      "Built QuizHub, a quiz application with real-time data and user progress backed by Firebase.",
      "Developed supporting REST services for quiz content and results handling.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Node.js",
      "Express.js",
      "Git",
      "GitHub",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full px-6 py-24 md:px-14 md:py-32 lg:px-20"
    >
      {/* Section heading */}
      <div className="mb-14 md:mb-20">
        <p className="font-mono text-xs tracking-[0.3em] text-teal uppercase">
          Experience
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Where I&apos;ve <span className="text-amber">worked</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl">
        {/* Vertical line */}
        <div
          className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[9px]"
          aria-hidden="true"
        />

        <ol className="space-y-14 md:space-y-16">
          {EXPERIENCE.map((job) => (
            <li
              key={job.company}
              className="timeline-item relative pl-10 md:pl-14"
            >
              {/* Timeline dot */}
              <span
                className="absolute top-2 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-amber/60 bg-ink md:h-[19px] md:w-[19px]"
                aria-hidden="true"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-amber md:h-[7px] md:w-[7px]" />
              </span>

              {/* Company / role / duration */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div>
                  <h3 className="font-display text-xl font-semibold text-text md:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-amber md:text-base">
                    {job.role}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted md:text-sm">
                  {job.duration} · {job.location}
                </p>
              </div>

              {/* Deliverables */}
              <ul className="mt-5 space-y-2.5">
                {job.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                  >
                    <span
                      className="mt-[9px] h-1 w-3 shrink-0 rounded-full bg-teal/50"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
