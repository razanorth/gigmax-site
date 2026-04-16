import { hero } from '@/lib/content';
import { CTAButton } from '../ui/CTAButton';

export function Hero() {
  return (
    <section className="border-b border-line bg-bg">
      <div className="wrap pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="eyebrow mb-6">{hero.eyebrow}</div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
          {hero.headline}
        </h1>
        <p className="mt-6 font-display text-2xl md:text-3xl text-ink/80 italic">{hero.sub}</p>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-ink-dim">{hero.description}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton href={hero.primary.href}>{hero.primary.label}</CTAButton>
          <CTAButton href={hero.secondary.href} variant="ghost">
            {hero.secondary.label}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
