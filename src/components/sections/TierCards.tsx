"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { tiers } from "./homepage-data";

const ORDER = ["black", "platinum", "gold"] as const;

const OFFSET: Record<(typeof ORDER)[number], string> = {
  black: "md:self-center",
  platinum: "md:self-start md:-translate-x-24",
  gold: "md:self-end md:translate-x-24",
};

export function TierCards() {
  const reduceMotion = useReducedMotion();
  const ordered = [...tiers].sort(
    (a, b) => ORDER.indexOf(a.slug as (typeof ORDER)[number]) - ORDER.indexOf(b.slug as (typeof ORDER)[number]),
  );

  return (
    <section id="memberships" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Membership Tiers
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Three tiers. One path upward.
        </h2>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-y-28">
        {ordered.map((tier, index) => (
          <motion.article
            key={tier.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 9 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.44 + index * 0.08 }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 1.24,
                    delay: index * 0.18,
                    ease: [0.16, 0.84, 0.3, 1],
                  }
            }
            className={[
              "motion-card w-full max-w-[620px]",
              "justify-self-center text-center md:text-left",
              tier.slug === "black" ? "md:col-start-2 md:row-start-1" : "",
              tier.slug === "platinum" ? "md:col-start-1 md:row-start-2" : "",
              tier.slug === "gold" ? "md:col-start-2 md:row-start-3 md:translate-x-70 md:-mt-48" : "",
            ].join(" ")}
          >
            <Image
              src={tier.imageSrc}
              alt={`${tier.name} card`}
              width={680}
              height={968}
              priority={tier.slug === "black"}
              className="mb-3 h-auto w-full object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {tier.name}
            </p>
            <p className="mt-3 text-lg leading-8 text-zinc-200 sm:text-xl">
              {tier.teaser}
            </p>

            <Link
              href={`#tier-${tier.slug}`}
              className="mt-5 inline-flex text-sm font-medium text-zinc-100 underline decoration-white/20 underline-offset-4 transition-colors hover:text-zinc-300"
            >
              See details
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
