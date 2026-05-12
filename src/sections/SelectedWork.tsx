import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export default function SelectedWork() {
  return (
    <section className="container-x mt-20 sm:mt-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Selected Work</h2>
        <Link
          to="/cases"
          className="text-sm font-medium text-muted underline decoration-hairline underline-offset-4 transition hover:text-ink hover:decoration-ink"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
        {projects.map((p, i) => {
          const fit = p.imageFit ?? 'cover';
          const liveHref = p.links?.[0]?.href;
          return (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <Link to={`/cases/${p.slug}`} className="block" aria-label={`Open ${p.company} case study`}>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-hairline bg-chip">
                  <div className="flex h-full w-full items-center justify-center p-3 sm:p-5">
                    <img
                      src={p.cover}
                      alt={`${p.company} preview`}
                      loading="lazy"
                      className={cn(
                        'h-full w-full transition duration-500 group-hover:scale-[1.02]',
                        fit === 'contain' ? 'object-contain' : 'rounded-xl object-cover'
                      )}
                    />
                  </div>
                </div>
              </Link>

              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-wide text-muted">
                <span>{p.company}</span>
                <span aria-hidden="true">·</span>
                <span>{p.tag}</span>
              </div>

              <Link to={`/cases/${p.slug}`} className="mt-1 block">
                <h3 className="text-xl font-medium leading-snug text-ink transition group-hover:underline group-hover:decoration-ink group-hover:underline-offset-4 sm:text-[22px]">
                  {p.title}
                </h3>
              </Link>

              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.tagline}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  to={`/cases/${p.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition hover:decoration-ink"
                >
                  Learn more
                  <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                </Link>
                {liveHref && (
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted transition hover:text-ink"
                    aria-label={`Open ${p.company} live site in new tab`}
                  >
                    Visit live
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
