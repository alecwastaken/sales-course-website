import Link from "next/link";
import { tiers } from "./homepage-data";

export function TierCards() {
  return (
    <section id="memberships" className="scroll-mt-28">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Membership Tiers
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Choose the room that matches your ambition
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.slug}
            className="surface rounded-[1.75rem] p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {tier.name}
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              {tier.teaser}
            </p>
            <Link
              href={`#tier-${tier.slug}`}
              className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/5"
            >
              See details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
