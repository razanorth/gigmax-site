import { caseStudies } from '@/lib/content';
import { Section } from '../ui/Section';

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case studies"
      title="Real programs. Real numbers."
      intro="Every metric below comes from work already shipped — no composites, no projections."
    >
      <div className="grid grid-cols-1 gap-6">
        {caseStudies.map((cs) => (
          <article key={cs.client} className="rounded-xl border border-line bg-card p-7 md:p-10">
            <div className="flex items-baseline justify-between flex-wrap gap-3">
              <h3 className="font-display text-2xl md:text-3xl">{cs.client}</h3>
              <span className="eyebrow">Case study</span>
            </div>
            <p className="mt-3 text-lg text-ink/85">{cs.headline}</p>
            <p className="mt-2 text-ink-dim">{cs.summary}</p>
            <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {cs.proof.map((p) => (
                <li
                  key={p}
                  className="rounded-md bg-bg border border-line px-4 py-3 text-sm md:text-base text-ink"
                >
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
