import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/data/projects-data";
import CaseStudy from "@/components/Casestudy";

/**
 * /projects/[id] — dedicated case-study page per project.
 *
 * Server component: statically generated for every project in the data
 * module (generateStaticParams), with per-project SEO metadata.
 * Unknown ids render the 404 page via notFound().
 */

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — Bilal Basharat Alvi`,
    description: project.problem.slice(0, 155),
    openGraph: {
      title: project.title,
      description: project.problem.slice(0, 155),
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <main className="bg-noise relative min-h-screen w-full">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />

      <article className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-28 pb-24 md:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-amber"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
          </svg>
          Back to projects
        </Link>

        {/* Header */}
        <header className="mt-8">
          <p className="font-mono text-[11px] tracking-[0.25em] text-teal uppercase">
            {project.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-muted md:text-sm">
            {project.context}
          </p>

          {/* Stack + links */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors duration-200 hover:border-amber/50 hover:text-amber"
                >
                  View on GitHub
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-amber/40 px-4 py-2 font-mono text-xs text-amber transition-colors duration-200 hover:bg-amber-soft"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Problem statement */}
        <section className="mt-10">
          <h2 className="font-mono text-[11px] tracking-[0.25em] text-teal uppercase">
            Problem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {project.problem}
          </p>
        </section>

        {/* Solution → Outcomes → Screens → Challenges */}
        <CaseStudy project={project} />
      </article>
    </main>
  );
}
