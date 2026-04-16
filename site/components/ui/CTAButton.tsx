import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
};

export function CTAButton({ href, children, variant = 'primary' }: Props) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition';
  const styles =
    variant === 'primary'
      ? 'bg-ink text-bg hover:bg-[#1a160f]'
      : 'border border-ink/20 text-ink hover:border-ink/50';
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
