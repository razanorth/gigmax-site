import { faqs } from '@/lib/content';
import { Section } from '../ui/Section';

export function FAQ() {
  return (
    <Section id="faq" alt eyebrow="FAQ" title="Questions we hear often.">
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
              <span className="font-display text-lg md:text-xl text-ink">{f.q}</span>
              <span className="text-ink-dim transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-ink-dim leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
