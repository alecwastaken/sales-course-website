"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
    document.head.removeChild(link);
  };
}, []);

const openCalendly = () => {
    const calendly = (
      window as Window & {
        Calendly?: { initPopupWidget: (options: { url: string }) => void };
      }
    ).Calendly;

    console.log("Calendly object:", calendly);
    if (calendly?.initPopupWidget) {
      calendly.initPopupWidget({
        url: "https://calendly.com/lorenzomandetta/1-on-1-discovery-call",
      });
      return;
    }

    window.open(
      "https://calendly.com/lorenzomandetta/1-on-1-discovery-call",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="mx-auto flex min-h-[72vh] w-full max-w-4xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Apply for Access
        </h1>
        <p className="mt-4 text-xl text-zinc-200 sm:text-2xl">
          Ready to step up your game?
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
          This call is the first step in determining whether Sales University is
          the right fit for you. Access is selective, and membership is only
          offered to applicants who are accepted after the interview.
        </p>
        <div className="mt-10">
          <button
            type="button"
            onClick={openCalendly}
            className="inline-flex rounded-full bg-zinc-50 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Apply for Access
          </button>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-2xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          What to expect
        </h2>
        <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-300">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300" />
            <span>A short qualification conversation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300" />
            <span>A review of your current level and goals</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300" />
            <span>Clear next steps if there is a fit</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
