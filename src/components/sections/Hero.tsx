import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center px-10 py-12">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center" distance={40} duration={1.6} ease={[0.16, 1, 0.3, 1]} amount={0.1}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <div className="relative mx-auto w-[600px] h-[500px]">
          <Image
            src="/crest.png"
            alt="Sales University crest"
            fill
            className="object-contain"
            priority
          />
</div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Sales University
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          Welcome to Sales University
        </h1>
        <p className="text-lg text-zinc-300 sm:text-xl">
          Ran by winners for winners
        </p>
        <p className="text-base text-zinc-500 sm:text-lg">
          Join the community today
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold !text-black hover:bg-zinc-200 transition-colors"
          >
            Book a call
          </Link>
          <Link
            href="#memberships"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            See memberships
          </Link>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
