import Link from 'next/link';

const links = [
  { href: '#why', label: 'What you get' },
  { href: '#how', label: 'How it works' },
  { href: '#case-studies', label: 'Case studies' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="wrap flex h-14 items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight">
          GigMax
        </Link>
        <ul className="hidden md:flex items-center gap-7 text-sm text-ink-dim">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-ink transition">{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link
          href="#book-a-call"
          className="rounded-full bg-ink text-bg text-sm px-4 py-2 hover:bg-[#1a160f] transition"
        >
          Book a call
        </Link>
      </div>
    </nav>
  );
}
