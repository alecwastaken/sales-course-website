"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { tiers } from "./homepage-data";

type TierSlug = "gold" | "platinum" | "black";

const TIER_ORDER: TierSlug[] = ["gold", "platinum", "black"];
const DRAW_DUR = 4200;
const W = 780;
const H = 560;
const PERIM = 2 * (W + H);

const tierAccent: Record<TierSlug, string> = {
  gold: "#c9a84c",
  platinum: "#b8c0cc",
  black: "#e0e0e0",
};

export function TierCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTier, setActiveTier] = useState<TierSlug>("gold");
  const [fadingCard, setFadingCard] = useState(false);
  const triggered = useRef(false);
  const rectRef = useRef<SVGRectElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const trigger = useCallback(() => {
    if (triggered.current) return;
    triggered.current = true;

    const rect = rectRef.current;
    const svg = svgRef.current;

    if (!rect || !svg) {
      setIsOpen(true);
      return;
    }

    rect.style.strokeDasharray = String(PERIM);
    rect.style.strokeDashoffset = String(PERIM);
    void rect.getBoundingClientRect();
    rect.style.transition = `stroke-dashoffset ${DRAW_DUR}ms cubic-bezier(0.4,0,0.55,1)`;
    rect.style.strokeDashoffset = "0";

    setTimeout(() => {
      rect.style.transition =
        "stroke-dashoffset 0.55s ease-in, opacity 0.45s ease 0.1s";
      rect.style.strokeDashoffset = String(-PERIM);
      rect.style.opacity = "0";
      setIsOpen(true);
    }, DRAW_DUR + 80);
  }, []);

  const handleTierClick = useCallback(
    (slug: TierSlug) => {
      if (slug === activeTier) return;
      setFadingCard(true);
      setTimeout(() => {
        setActiveTier(slug);
        setFadingCard(false);
      }, 200);
    },
    [activeTier],
  );

  const activeTierData = tiers.find((t) => t.slug === activeTier)!;

  return (
    <section id="memberships" className="scroll-mt-28 py-24 pb-[420px]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Membership Tiers
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Three tiers. One path upward.
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-4">
        <div className="relative" onMouseEnter={trigger}>

          <svg
            ref={svgRef}
            className="pointer-events-none absolute left-0 top-0 z-10 w-full"
            style={{ height: `${H}px` }}
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
          >
            <rect
              ref={rectRef}
              x="0.5"
              y="0.5"
              width="779"
              height={H - 1}
              fill="none"
              stroke="white"
              strokeWidth="1"
              style={{ strokeDasharray: PERIM, strokeDashoffset: PERIM }}
            />
          </svg>

          <div
            className="flex h-[52px] cursor-pointer items-center md:cursor-default"
            onClick={trigger}
          >
            <span className="text-[11px] uppercase tracking-[0.13em] text-zinc-600">
              Membership
            </span>
          </div>

          <div
            className="overflow-hidden bg-zinc-900/70"
            style={{
              maxHeight: isOpen ? "600px" : "0",
              opacity: isOpen ? 1 : 0,
              transition:
                "max-height 0.7s cubic-bezier(0.77,0,0.18,1), opacity 0.4s ease 0.15s",
            }}
          >
            <div className="grid grid-cols-[240px_1fr]">
              <div className="flex flex-col justify-center gap-1 border-r border-white/10 p-10">
                {TIER_ORDER.map((slug) => {
                  const tier = tiers.find((t) => t.slug === slug)!;
                  return (
                    <div
                      key={slug}
                      onClick={() => handleTierClick(slug)}
                      className="cursor-pointer py-2 text-2xl font-semibold transition-colors duration-200"
                      style={{
                        color:
                          activeTier === slug ? tierAccent[slug] : "#4a4a4a",
                      }}
                    >
                      {tier.name}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col items-center gap-6 p-10">
                <div
                  className="relative w-full max-w-[440px] overflow-hidden rounded-xl"
                  style={{
                    aspectRatio: "1.586",
                    opacity: fadingCard ? 0 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  <Image
                    src={`/tiers/${activeTier}-h.png`}
                    alt={`${activeTier} membership card`}
                    fill
                    className="object-cover"
                    priority={activeTier === "gold"}
                  />
                </div>

                <p className="max-w-[440px] text-center text-base leading-7 text-zinc-400">
                  {activeTierData.teaser}
                </p>

                <Link
                  href={`#tier-${activeTier}`}
                  className="text-sm font-medium text-zinc-500 underline decoration-white/20 underline-offset-4 transition-colors hover:text-zinc-200"
                >
                  See details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}