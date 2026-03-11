import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between py-5">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-100">
          Sales Course
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-zinc-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
