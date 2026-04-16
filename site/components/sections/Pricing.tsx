import { pricing, BOOKING_URL } from '@/lib/content';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing & fit"
      title="One flat fee. One system. Yours at the end."
    >
      <div className="rounded-xl border border-line bg-card p-7 md:p-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-display text-3xl md:text-4xl">{pricing.name}</h3>
          <div className="text-right">
            <div className="font-display text-2xl md:text-3xl">{pricing.price}</div>
            <div className="text-sm text-ink-dim">{pricing.cadence}</div>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="eyebrow mb-3">{"What\u2019s included"}</div>
            <ul className="space-y-1.5 text-ink-dim">
              {pricing.included.map((x) => <li key={x}>— {x}</li>)}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Best for</div>
            <ul className="space-y-1.5 text-ink-dim">
              {pricing.bestFor.map((x) => <li key={x}>— {x}</li>)}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Not for</div>
            <ul className="space-y-1.5 text-ink-dim">
              {pricing.notFor.map((x) => <li key={x}>— {x}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <CTAButton href={BOOKING_URL}>Book a call</CTAButton>
        </div>
      </div>
    </Section>
  );
}
