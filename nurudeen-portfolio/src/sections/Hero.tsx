import { motion } from 'framer-motion';

const InlineLogo = ({ src, alt, label, href }: { src: string; alt: string; label: string; href?: string }) => (
  <a
    href={href ?? '#'}
    target={href ? '_blank' : undefined}
    rel={href ? 'noreferrer' : undefined}
    className="chip mx-0.5 underline decoration-hairline decoration-2 underline-offset-4 transition hover:decoration-ink"
  >
    <img src={src} alt={alt} className="h-4 w-4 rounded-sm object-cover" />
    <span className="text-ink">{label}</span>
  </a>
);

export default function Hero() {
  return (
    <section className="container-x pt-12 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-[34px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[56px]">
          Hi there, I'm Nurudeen!
          <br />
          You can call me{' '}
          <span className="font-mono text-[0.78em] font-normal text-muted">[yu-suf]</span> Yusuf.
        </h1>

        <p className="mt-6 max-w-[640px] text-lg leading-[1.55] text-muted sm:text-xl">
          I'm a software engineer and AI workflow architect based in Abuja{' '}
          <span aria-hidden="true">🇳🇬</span>, building scalable backend systems and AI-powered products
          that turn complex processes into simple, high-impact solutions.
        </p>
        <p className="mt-4 max-w-[640px] text-lg leading-[1.55] text-muted sm:text-xl">
          I focus on designing systems that combine automation, intelligence, and speed to help
          businesses move faster and operate smarter.
        </p>
        <p className="mt-4 max-w-[640px] text-lg leading-[1.55] text-muted sm:text-xl">
          I'm currently building{' '}
          <InlineLogo src="/icons/logo-1.png" alt="" label="Artemis Hiring" href="#artemis" />.
          Previously, I've worked with teams at{' '}
          <InlineLogo src="/icons/logo-2.png" alt="" label="Reeka" href="#reeka" />.
        </p>
      </motion.div>
    </section>
  );
}
