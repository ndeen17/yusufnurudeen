import { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

const EMAIL = 'nurudeeny17@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="container-x mt-20 sm:mt-28">
      <div className="rounded-3xl border border-hairline bg-white p-6 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Get in touch</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let's build something useful.
        </h2>
        <p className="mt-3 max-w-[520px] text-muted">
          Have a system worth automating, a product worth shipping, or a hiring problem worth solving?
          I'd love to hear about it.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={`mailto:${EMAIL}`} className="btn-dark">
            Email me
            <ArrowUpRight size={16} className="ml-1" />
          </a>
          <button type="button" onClick={copy} className="btn-ghost max-w-full break-all">
            {copied ? (
              <>
                <Check size={16} className="mr-1" /> Copied
              </>
            ) : (
              <>
                <Copy size={16} className="mr-1 flex-none" />
                <span className="truncate">{EMAIL}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
