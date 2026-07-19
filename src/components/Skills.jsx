"use client";

import { useEffect, useRef } from "react";

/**
 * Skills — grouped categories + certifications.
 *
 * Data-driven: edit SKILL_GROUPS / CERTIFICATIONS and the UI follows.
 * Data lives in this file (not src/data/) deliberately — it has exactly
 * one consumer; extracting it would be structure without benefit. If a
 * second consumer ever appears, lift it to src/data/skills.js then.
 *
 * No proficiency bars/percentages by design: they're unmeasurable and
 * read as filler to senior reviewers. Grouped, scannable tags mirror
 * the resume's Skills section instead.
 */

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["C#", "Python", "JavaScript", "PHP", "Dart", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Laravel",
      "React.js",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Express.js",
      "Django",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Core CS",
    skills: [
      "OOP",
      "Data Structures & Algorithms",
      "Secure Coding (JWT, RBAC)",
      "MVC Architecture",
      "RESTful API Design",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Apache",
      "Nginx",
      "Postman",
      "Agile / Scrum",
      "VPS Deployment",
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    href: "https://www.linkedin.com/learning/certificates/b287edca4c8772f234f2ed13d6be07c40b4f2e3265a37e353e63cb8a6753eb25",
  },
  {
    name: "Aspire Leaders Program",
    issuer: "Aspire Institute",
    href: "https://drive.google.com/file/d/1W1OQIF0AOkJn_UQ78N0pQ0QIIlN-2uHX/view",
  },
];

/* ---------- Reusable pieces ---------- */

function SkillGroup({ group }) {
  return (
    <div className="reveal-item rounded-xl border border-line bg-surface/50 p-6">
      <h3 className="font-mono text-[11px] tracking-[0.25em] text-teal uppercase">
        {group.title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted transition-colors duration-200 hover:border-amber/40 hover:text-text"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertificationCard({ cert }) {
  const isLinked = cert.href && cert.href !== "#";
  const Wrapper = isLinked ? "a" : "div";

  return (
    <Wrapper
      {...(isLinked
        ? { href: cert.href, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`reveal-item flex items-center justify-between gap-4 rounded-xl border border-line bg-surface/50 p-5 transition-colors duration-300 ${
        isLinked ? "hover:border-amber/40" : ""
      }`}
    >
      <div>
        <p className="font-display text-sm font-medium text-text md:text-base">
          {cert.name}
        </p>
        <p className="mt-1 font-mono text-xs text-muted">{cert.issuer}</p>
      </div>
      {isLinked && (
        <span className="shrink-0 font-mono text-[11px] text-amber">
          View credential ↗
        </span>
      )}
    </Wrapper>
  );
}

/* ---------- Section ---------- */

export default function Skills() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full px-6 py-24 md:px-14 md:py-32 lg:px-20"
    >
      {/* Section heading */}
      <div className="mb-14 md:mb-20">
        <p className="font-mono text-xs tracking-[0.3em] text-teal uppercase">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          What I <span className="text-amber">work with</span>
        </h2>
      </div>

      {/* Skill groups */}
      <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16 max-w-5xl">
        <h3 className="font-display text-xl font-semibold text-text md:text-2xl">
          Certifications
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
