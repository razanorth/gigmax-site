import { problems } from '@/lib/content';
import { Section } from '../ui/Section';

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Why teams fail"
      title="Organic UGC is a real channel. The execution is where it breaks."
      intro="Most teams know it matters. The hard part is building a system reliable enough to run every week."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {problems.map((p) => (
          <article key={p.title} className="rounded-xl bg-card border border-line p-7">
            <h3 className="font-display text-xl mb-2">{p.title}</h3>
            <p className="text-ink-dim leading-relaxed">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
