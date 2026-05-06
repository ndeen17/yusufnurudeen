import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { to: '/cases', label: 'Cases' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 px-4">
      <nav
        className={cn(
          'mx-auto flex w-full max-w-container items-center justify-between gap-3 rounded-pill border border-hairline bg-white/85 px-2 py-2 backdrop-blur transition-shadow',
          scrolled && 'shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]'
        )}
      >
        <Link to="/" className="flex items-center gap-2 rounded-pill px-1 py-0.5 transition hover:bg-chip" aria-label="Home">
          <img src="/avatar.png" alt="" className="h-9 w-9 rounded-full bg-chip object-cover" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-ink">Nurudeen Y.</span>
            <span className="hidden text-xs text-muted sm:block">Software Engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'rounded-pill px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-chip hover:text-ink',
                  isActive && 'bg-chip text-ink'
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/#contact" className="btn-dark hidden sm:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="btn-ghost h-10 w-10 p-0 sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-container rounded-2xl border border-hairline bg-white/95 p-3 backdrop-blur sm:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-chip hover:text-ink',
                    isActive && 'bg-chip text-ink'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="btn-dark mt-2 justify-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
