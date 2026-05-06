import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="container-x mt-24 pb-10 pt-12">
      <div className="hairline pt-8" />
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-ink">Nurudeen Yusuf</p>
          <p className="text-sm text-muted">Software engineer & AI workflow architect — Abuja, NG</p>
        </div>
        <div className="flex items-center gap-3 text-muted">
          <a href="mailto:nurudeeny17@gmail.com" aria-label="Email" className="rounded-full border border-hairline bg-white p-2 transition hover:text-ink">
            <Mail size={16} />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter" className="rounded-full border border-hairline bg-white p-2 transition hover:text-ink">
            <Twitter size={16} />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="rounded-full border border-hairline bg-white p-2 transition hover:text-ink">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/" aria-label="GitHub" className="rounded-full border border-hairline bg-white p-2 transition hover:text-ink">
            <Github size={16} />
          </a>
        </div>
      </div>
      <p className="mt-6 text-xs text-muted">© {new Date().getFullYear()} Nurudeen Yusuf. All rights reserved.</p>
    </footer>
  );
}
