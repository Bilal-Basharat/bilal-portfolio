const stats = [
  { label: "Years of hands-on work", value: "5+" },
  { label: "Core stack", value: "React / Next.js" },
  { label: "Focus", value: "Clean product UI" },
];

const highlights = [
  {
    title: "Frontend Craft",
    description:
      "Modern interfaces with strong hierarchy, responsive behavior, and polished motion.",
  },
  {
    title: "Full-Stack Thinking",
    description:
      "Structure that can grow from a portfolio into a real product without a redesign.",
  },
  {
    title: "Visual Precision",
    description:
      "A premium dark aesthetic with layered gradients, glass surfaces, and subtle depth.",
  },
];

const featuredCards = [
  {
    title: "Portfolio Hero",
    text: "A strong first impression with a personal statement, clear CTA, and focused positioning.",
  },
  {
    title: "Project Showcase",
    text: "Large visual cards that let your best work lead the page instead of hiding it.",
  },
  {
    title: "Skill Snapshot",
    text: "Compact chips and stat blocks that communicate capability fast.",
  },
];

const skillTags = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MySQL",
  "Tailwind CSS",
  "REST APIs",
  "Git",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-sm font-semibold tracking-[0.3em] text-white/90">
            BILAL.B
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            Let’s talk
          </a>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
              Available for freelance and full-time roles
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Designing and building modern web experiences that feel premium.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              I create fast, clean, and visually sharp interfaces with React.js,
              Next.js, and Tailwind CSS. The goal is simple: make the first impression
              strong, make the experience smooth, and make the work easy to trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                Contact me
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
                >
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/55">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.18),transparent_38%)] blur-2xl" />

            <div className="relative rounded-[2.25rem] border border-white/10 bg-white/6 p-6 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/55">Step 1 foundation</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    A premium portfolio shell
                  </h2>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-200">
                  Ready to expand
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {featuredCards.map((card, index) => (
                  <div
                    key={card.title}
                    className="group rounded-3xl border border-white/10 bg-[#0B1120]/80 p-5 transition hover:border-cyan-400/25 hover:bg-[#0E1629]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                          0{index + 1}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">{card.title}</h3>
                      </div>
                      <div className="h-12 w-12 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_35%),linear-gradient(135deg,rgba(34,211,238,0.35),rgba(168,85,247,0.25))]" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/65">{card.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Primary stack</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8"
      >
        <div className="rounded-[2rem] border border-white/10 bg-[#08111f]/80 p-6 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
            Experience snapshot
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Built for clarity, motion, and trust.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                This first step establishes the visual language: dark premium canvas,
                strong typography, glass surfaces, and structured content blocks.
                Next steps can add About, Skills, Projects, and Contact sections on top
                of this foundation.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Responsive layout",
                "Glassmorphism cards",
                "Gradient depth",
                "Clean section flow",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-200/70">
            Project direction
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Featured SaaS case studies",
              "Selected freelance work",
              "Open-source and experiments",
            ].map((label) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-[#0B1120]/80 p-5"
              >
                <div className="h-40 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),linear-gradient(135deg,rgba(34,211,238,0.16),rgba(168,85,247,0.18),rgba(16,185,129,0.1))]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{label}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  Placeholder for the next step. This area will become the project grid.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-8 text-center backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/55">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Ready to turn this into a full portfolio.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65">
            The next step can add the detailed About section, real project data,
            resume timeline, certifications, and a working contact form.
          </p>
        </div>
      </section>
    </main>
  );
}