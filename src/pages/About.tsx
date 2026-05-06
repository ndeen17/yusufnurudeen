import { ArrowUpRight, Download } from 'lucide-react';

export default function About() {
  return (
    <section className="container-x pt-12 sm:pt-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">About</p>
      <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
        Software engineer & AI workflow architect.
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-[1.6] text-muted">
        <p>
          I'm Nurudeen Yusuf — based in Abuja, Nigeria. I build scalable backend systems and
          AI-powered products that turn complex processes into simple, high-impact solutions.
        </p>
        <p>
          My focus is on systems that combine automation, intelligence, and speed: hiring
          platforms, property-operations backbones, AI-native consumer tools, and intake
          automations that actually move the metric they're built for.
        </p>
        <p>
          Right now I'm building <span className="text-ink">Artemis Hiring</span>. Previously I've
          worked with teams at <span className="text-ink">Reeka</span>, and shipped products like{' '}
          <span className="text-ink">Orukọ-mi</span> and an AI-driven deception detection &amp;
          intake automation system on Taskade AI.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a href="/nurudeen-yusuf-resume.pdf" download className="btn-dark">
          <Download size={16} className="mr-1" /> Download résumé
        </a>
        <a href="mailto:nurudeeny17@gmail.com" className="btn-ghost">
          Email me <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Currently</h2>
        <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
          <li className="flex items-baseline justify-between gap-6 py-4">
            <div>
              <p className="font-medium text-ink">Founding engineer — Artemis Hiring</p>
              <p className="text-sm text-muted">Modern hiring platform · SaaS</p>
            </div>
            <span className="font-mono text-xs text-muted">2026 — Present</span>
          </li>
          <li className="flex items-baseline justify-between gap-6 py-4">
            <div>
              <p className="font-medium text-ink">Software engineer — Reeka</p>
              <p className="text-sm text-muted">PropTech · multi-role enterprise platform</p>
            </div>
            <span className="font-mono text-xs text-muted">2025</span>
          </li>
          <li className="flex items-baseline justify-between gap-6 py-4">
            <div>
              <p className="font-medium text-ink">AI workflow architect — Taskade AI</p>
              <p className="text-sm text-muted">Deception detection & intake automation</p>
            </div>
            <span className="font-mono text-xs text-muted">2025</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
