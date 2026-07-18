import Image from "next/image";

/**
 * CaseStudy — the expandable detail body of a project card.
 *
 * Renders: Solution & Approach → Outcomes → Screens → Challenges & Learnings.
 * Pure presentational component: receives a `project` object (same shape as
 * the PROJECTS array in Projects.jsx) and renders it. No state of its own —
 * the parent decides when it's shown, which keeps this component reusable
 * in any context (inline expansion, modal, or a dedicated route later).
 */

function CaseBlock({ label, children }) {
  return (
    <div className="mt-7">
      <h4 className="font-mono text-[11px] tracking-[0.25em] text-teal uppercase">
        {label}
      </h4>
      <div className="mt-3 text-sm leading-relaxed text-muted md:text-base">
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-[9px] h-1 w-3 shrink-0 rounded-full bg-teal/50"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Screenshots({ shots }) {
  if (!shots?.length) return null;
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {shots.map((shot) => (
        <figure
          key={shot.src}
          className="overflow-hidden rounded-lg border border-line bg-surface"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="h-auto w-full"
          />
          <figcaption className="px-3 py-2 font-mono text-[11px] text-muted">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function CaseStudy({ project, id }) {
  return (
    <div id={id} className="mt-2 border-t border-line pt-2">
      <CaseBlock label="Solution & Approach">
        <BulletList items={project.solution} />
      </CaseBlock>

      <CaseBlock label="Outcomes">
        <BulletList items={project.outcomes} />
      </CaseBlock>

      <CaseBlock label="Screens">
        <Screenshots shots={project.screenshots} />
      </CaseBlock>

      {project.challenges && (
        <CaseBlock label="Challenges & Learnings">
          <p className="max-w-3xl">{project.challenges}</p>
        </CaseBlock>
      )}
    </div>
  );
}
