import { comparison } from '@/lib/content';
import { Section } from '../ui/Section';

export function Comparison() {
  return (
    <Section
      id="compare"
      alt
      eyebrow="Compare"
      title="GigMax vs. the usual options."
      intro="A fair read of the tradeoffs — so the decision is easier either way."
    >
      <div className="overflow-x-auto rounded-xl border border-line bg-bg">
        <table className="w-full text-left text-sm md:text-base">
          <thead>
            <tr className="border-b border-line">
              <th className="px-5 py-4 font-medium text-ink-dim w-40"> </th>
              {comparison.columns.map((c, i) => (
                <th
                  key={c}
                  className={`px-5 py-4 font-display text-lg ${i === 0 ? 'text-ink' : 'text-ink-dim'}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-b-0 align-top">
                <th className="px-5 py-5 font-medium text-ink-dim">{row.label}</th>
                {row.values.map((v, i) => (
                  <td key={i} className={`px-5 py-5 ${i === 0 ? 'text-ink font-medium' : 'text-ink-dim'}`}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
