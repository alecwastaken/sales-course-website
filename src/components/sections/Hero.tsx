import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="surface overflow-hidden rounded-[2rem] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Image
          src="/crest.png"
          alt="Sales University crest"
          width={560}
          height={560}
          priority
          className="mb-8 h-auto w-[70vw] max-w-[360px] object-contain sm:w-[35vw] sm:max-w-[560px]"
        />
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Sales University
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          Welcome to Sales University
        </h1>
        <p className="mt-6 text-lg text-zinc-300 sm:text-xl">
          Ran by winners for winners
        </p>
        <p className="mt-2 text-base text-zinc-500 sm:text-lg">
          Join the community today
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
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
    </section>
  );
}
