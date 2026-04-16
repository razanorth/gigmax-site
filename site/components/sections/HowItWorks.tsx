import { howItWorks } from '@/lib/content';
import { Section } from '../ui/Section';

export function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="Five steps. Fourteen days. One system you own at the end."
    >
      <ol className="divide-y divide-line border-y border-line">
        {howItWorks.map((step, i) => (
          <li key={step.title} className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_220px_1fr] gap-6 md:gap-10 py-7">
            <div className="font-display text-2xl text-gold tabular-nums">0{i + 1}</div>
            <h3 className="font-display text-xl md:text-2xl">{step.title}</h3>
            <p className="text-ink-dim leading-relaxed col-span-2 md:col-span-1">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
