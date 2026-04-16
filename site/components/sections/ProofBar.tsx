import { trustBrands } from '@/lib/content';

export function ProofBar() {
  return (
    <section className="border-b border-line bg-card">
      <div className="wrap py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <span className="eyebrow shrink-0">Trusted by teams at</span>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustBrands.map((b) => (
              <li key={b} className="font-display text-lg md:text-xl text-ink/75">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-wider text-ink-dim/70">
          <span className="placeholder">Logo files pending</span> — wordmarks shown from approved materials
        </p>
      </div>
    </section>
  );
}
