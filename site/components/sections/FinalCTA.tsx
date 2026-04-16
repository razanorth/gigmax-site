import { finalCta } from '@/lib/content';
import { CTAButton } from '../ui/CTAButton';

export function FinalCTA() {
  return (
    <section id="book-a-call" className="bg-ink text-bg">
      <div className="wrap py-24 md:py-32 text-center">
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
          {finalCta.headline}
        </h2>
        <p className="mt-5 text-bg/70">{finalCta.support}</p>
        <div className="mt-10 flex justify-center">
          <a
            href={finalCta.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-bg text-ink px-7 py-3 text-sm font-medium hover:bg-white transition"
          >
            {finalCta.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
