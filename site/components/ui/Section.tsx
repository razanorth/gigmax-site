import { ReactNode } from 'react';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  alt?: boolean;
};

export function Section({ id, eyebrow, title, intro, children, alt }: Props) {
  return (
    <section
      id={id}
      className={`${alt ? 'bg-card' : 'bg-bg'} border-b border-line`}
    >
      <div className="wrap py-20 md:py-28">
        {(eyebrow || title || intro) && (
          <header className="mb-10 md:mb-14 max-w-2xl">
            {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
            {title && (
              <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight">
                {title}
              </h2>
            )}
            {intro && <p className="mt-5 text-ink-dim text-base md:text-lg max-w-xl">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
