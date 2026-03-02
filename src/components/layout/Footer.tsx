import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-4 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">© {year} Sales Course Website</p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-zinc-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
