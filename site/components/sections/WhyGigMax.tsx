import { deliverables } from '@/lib/content';
import { Section } from '../ui/Section';

export function WhyGigMax() {
  return (
    <Section
      id="why"
      alt
      eyebrow="What you get"
      title="A complete organic UGC operating system — yours to keep."
      intro="Every GigMax buildout ships the creators, creative, and infrastructure your team needs to run the program without us."
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {deliverables.map((d) => (
          <li
            key={d}
            className="flex items-start gap-3 rounded-lg border border-line bg-bg px-5 py-4"
          >
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
            <span className="text-ink">{d}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
