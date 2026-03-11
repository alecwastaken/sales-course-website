import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export function FinalCTA() {
  return (
    <Reveal>
      <section className="surface rounded-[2rem] px-6 py-12 text-center sm:px-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Next Step
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Ready to find the membership tier that fits your level?
        </h2>
        <div className="mt-8">
          <Link
            href="/contact"
            className="motion-button rounded-full bg-white px-6 py-3 text-sm font-semibold !text-black transition-colors hover:bg-zinc-200"
          >
            Book a call
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
