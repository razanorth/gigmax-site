export function Footer() {
  return (
    <footer className="bg-bg">
      <div className="wrap py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-ink-dim">
        <div className="font-display text-base text-ink">GigMax</div>
        <div>© {new Date().getFullYear()} GigMax. All rights reserved.</div>
      </div>
    </footer>
  );
}
