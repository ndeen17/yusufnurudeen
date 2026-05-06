import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export default function Cases() {
  return (
    <section className="container-x pt-12 sm:pt-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Case studies</p>
      <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
        Selected work.
      </h1>
      <p className="mt-4 max-w-[640px] text-muted">
        A few of the systems and products I've built recently.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
        {projects.map((p) => {
          const fit = p.imageFit ?? 'cover';
          return (
            <Link key={p.slug} to={`/cases/${p.slug}`} className="group block">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-hairline bg-chip">
                <div className="flex h-full w-full items-center justify-center p-3 sm:p-5">
                  <img
                    src={p.cover}
                    alt={`${p.company} cover`}
                    loading="lazy"
                    className={cn(
                      'h-full w-full transition duration-500 group-hover:scale-[1.02]',
                      fit === 'contain' ? 'object-contain' : 'rounded-xl object-cover'
                    )}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-wide text-muted">
                <span>{p.company}</span>
                <span aria-hidden="true">·</span>
                <span>{p.year}</span>
              </div>
              <h2 className="mt-1 text-xl font-medium text-ink sm:text-[22px]">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.tagline}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
