import Link from "next/link";
import { tiers } from "./homepage-data";

function TierBulletList({
  bullets,
  locked,
}: {
  bullets: string[];
  locked: boolean;
}) {
  const visibleBullets = locked ? bullets.slice(0, 2) : bullets;
  const lockedBullets = locked ? bullets.slice(2) : [];

  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Membership includes
      </h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-200 sm:text-base">
        {visibleBullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-200" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {lockedBullets.length > 0 ? (
        <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-zinc-950/55 px-6 text-center">
            <p className="max-w-sm text-sm font-medium text-zinc-100">
              Additional benefits are locked until this tier is unlocked.
            </p>
          </div>
          <ul className="space-y-3 px-5 py-5 text-sm leading-7 text-zinc-400 blur-[6px] opacity-45 sm:text-base">
            {lockedBullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function TierDetails() {
  return (
    <section className="space-y-8">
      {tiers.map((tier) => (
        <article
          key={tier.slug}
          id={`tier-${tier.slug}`}
          className="surface scroll-mt-28 rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {tier.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                {tier.name} Membership
              </h2>
            </div>
            <div>
              <div className="space-y-5 text-sm leading-7 text-zinc-300 sm:text-base">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    This is for you if
                  </h3>
                  <p className="mt-2">{tier.audience}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    This is not for you if
                  </h3>
                  <p className="mt-2">{tier.notFor}</p>
                </div>
              </div>
              <TierBulletList bullets={tier.bullets} locked={tier.locked} />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Book a call
                </Link>
                {tier.locked ? (
                  <p className="text-sm text-zinc-500">
                    More details remain locked in this phase.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
