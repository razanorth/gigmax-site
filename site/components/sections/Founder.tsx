import { founder } from '@/lib/content';
import { Section } from '../ui/Section';

export function Founder() {
  return (
    <Section id="founder" alt eyebrow={founder.eyebrow} title={`Built by ${founder.name}.`}>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div className="aspect-[4/5] rounded-xl border border-line bg-card-alt flex items-center justify-center text-ink-dim">
          <span className="placeholder">Founder headshot pending</span>
        </div>
        <div>
          <p className="text-ink-dim text-base md:text-lg leading-relaxed">{founder.bio}</p>
          <ul className="mt-6 space-y-2">
            {founder.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-ink-dim italic">{founder.closing}</p>
        </div>
      </div>
    </Section>
  );
}
