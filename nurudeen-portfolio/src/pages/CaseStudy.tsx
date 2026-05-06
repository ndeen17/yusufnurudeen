import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Slideshow from '../components/Slideshow';
import { getProject, projects } from '../data/projects';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/cases" replace />;

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="container-x pt-10 sm:pt-14">
      <Link to="/cases" className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-ink">
        <ArrowLeft size={14} /> All cases
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-muted">
          <span>{project.company}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">{project.tag}</p>
      </header>

      <div className="mt-10">
        <Slideshow images={project.images} alt={project.company} fit={project.imageFit ?? 'contain'} />
      </div>

      <section className="mt-14 max-w-[640px]">
        <h2 className="text-xl font-semibold tracking-tight text-ink">Overview</h2>
        <p className="mt-3 text-lg leading-[1.6] text-muted">{project.summary}</p>
      </section>

      <blockquote className="mt-10 max-w-[640px] border-l-2 border-ink pl-5 text-lg italic leading-[1.5] text-ink">
        {project.coreIdea}
      </blockquote>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-ink">Key features</h2>
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f.label} className="rounded-2xl border border-hairline bg-white p-5">
              <p className="font-medium text-ink">{f.label}</p>
              {f.body && <p className="mt-1.5 text-sm text-muted">{f.body}</p>}
            </li>
          ))}
        </ul>
      </section>

      {project.extras?.technicalOverview && (
        <section className="mt-14 max-w-[680px]">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Technical overview</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {project.extras.technicalOverview.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.extras?.metrics && (
        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-ink">What it does</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-hairline">
            <table className="w-full text-left text-sm">
              <thead className="bg-chip text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Feature</th>
                  <th className="px-4 py-3 font-medium">Functionality</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline bg-white">
                {project.extras.metrics.map((m) => (
                  <tr key={m.feature}>
                    <td className="px-4 py-3 font-medium text-ink">{m.feature}</td>
                    <td className="px-4 py-3 text-muted">{m.functionality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {project.extras?.impact && (
        <section className="mt-14 max-w-[680px]">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Impact</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {project.extras.impact.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-ink">What it demonstrates</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.demonstrates.map((d) => (
            <span key={d} className="rounded-pill border border-hairline bg-white px-3 py-1 text-sm text-ink">
              {d}
            </span>
          ))}
        </div>
      </section>

      {project.links && project.links.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-ghost">
                {l.label} <ArrowUpRight size={14} className="ml-1" />
              </a>
            ))}
          </div>
        </section>
      )}

      <nav className="mt-20 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          to={`/cases/${prev.slug}`}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-hairline bg-white p-5 transition hover:bg-chip"
        >
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">Previous</p>
            <p className="mt-1 font-medium text-ink">{prev.company}</p>
          </div>
          <ArrowLeft size={18} className="text-muted transition group-hover:-translate-x-0.5 group-hover:text-ink" />
        </Link>
        <Link
          to={`/cases/${next.slug}`}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-hairline bg-white p-5 transition hover:bg-chip"
        >
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">Next</p>
            <p className="mt-1 font-medium text-ink">{next.company}</p>
          </div>
          <ArrowRight size={18} className="text-muted transition group-hover:translate-x-0.5 group-hover:text-ink" />
        </Link>
      </nav>
    </article>
  );
}
