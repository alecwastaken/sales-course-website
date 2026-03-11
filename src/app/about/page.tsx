export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          About Us
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Built by Operators Who Live Sales
        </h1>
      </section>

      <section className="mx-auto mt-16 w-full max-w-3xl space-y-24 sm:mt-20 sm:space-y-28">
        <article className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Meet Lucas
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/rJkty6z0qgg"
              title="Lucas introduction"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            Lucas brings high-performance sales systems and a direct coaching
            style focused on consistency, accountability, and execution at a
            winning standard.
          </p>
        </article>

        <article className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Meet Lorenzo
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/rJkty6z0qgg"
              title="Lorenzo introduction"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            Lorenzo focuses on leadership, mindset, and strategic growth,
            helping members turn disciplined habits into repeatable top-tier
            performance.
          </p>
        </article>
      </section>
    </main>
  );
}
