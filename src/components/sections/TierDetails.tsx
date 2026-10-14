import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
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
        <div className="relative mt-5">
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950/60 px-6 text-center">
            <p className="max-w-sm text-sm font-medium text-zinc-100">
              Additional benefits are locked until this tier is unlocked.
            </p>
          </div>
          <ul className="space-y-3 py-3 text-sm leading-7 text-zinc-500 blur-[4px] opacity-40 sm:text-base">
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
    <section className="space-y-20 sm:space-y-24">
      <Reveal
        className="mx-auto mb-16 max-w-4xl text-center"
        distance={6}
        duration={1.16}
        amount={0.42}
        ease={[0.16, 0.84, 0.3, 1]}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Membership Breakdown
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Understand how each tier works
        </h2>
      </Reveal>
      {tiers.map((tier, index) => (
        <article
          key={tier.slug}
          id={`tier-${tier.slug}`}
          className="scroll-mt-28 mx-auto w-full max-w-[680px] px-4 py-2 sm:px-6"
        >
          <Reveal
            className="mx-auto flex flex-col items-center text-center"
            delay={index * 0.18}
            
            duration={1.22}
            amount={0.46}
            ease={[0.16, 0.84, 0.3, 1]}
          >
            <Image
              src={tier.imageSrc}
              alt={`${tier.name} membership card`}
              width={520}
              height={740}
              priority={tier.slug === "gold"}
              className="h-auto w-full max-w-[520px] object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)]"
            />
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {tier.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                {tier.name} Membership
              </h2>
            </div>
            <div className="mt-10 w-full max-w-[560px]">
              <div className="space-y-7 text-left text-sm leading-7 text-zinc-300 sm:text-base">
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
              <div className="mt-10 flex flex-col items-center gap-3">
                <Link
                  href="/contact"
                  className="motion-button inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold !text-black transition-colors hover:bg-zinc-200"
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
          </Reveal>
        </article>
      ))}
    </section>
  );
}
