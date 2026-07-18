"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects-data";

/**
 * Projects — grid of case-study cards.
 * Each card shows category, title, context, problem summary, stack, and
 * links; "View case study" navigates to the dedicated /projects/[id] route.
 * Data lives in src/data/projects.js — adding a project there adds both
 * its card and its detail page.
 */

function StackTags({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="reveal-item rounded-xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-amber/30 md:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-teal uppercase">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-text md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1.5 font-mono text-xs text-muted">
            {project.context}
          </p>
        </div>

        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        )}
      </div>

      {/* Problem summary — the hook */}
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
        {project.problem}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <StackTags items={project.stack} />
        <Link
          href={`/projects/${project.id}`}
          className="rounded-md border border-line px-5 py-2.5 font-display text-sm text-text transition-colors duration-200 hover:border-amber/50 hover:text-amber"
        >
          View case study
        </Link>
      </div>
    </article>
  );
}

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="relative w-full px-6 py-24 md:px-14 md:py-32 lg:px-20"
    >
      <div className="mb-14 md:mb-20">
        <p className="font-mono text-xs tracking-[0.3em] text-teal uppercase">
          Projects
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Things I&apos;ve <span className="text-amber">built</span>
        </h2>
      </div>

      <div className="max-w-5xl space-y-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
