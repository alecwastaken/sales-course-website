"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const BASE = { duration: 0.9, ease: EASE };

function fadeRise(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { ...BASE, delay },
  };
}

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

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-80px" });

  const listItems = [
    "A short qualification conversation",
    "A review of your current level and goals",
    "Clear next steps if there is a fit",
  ];

  return (
    <main className="mx-auto flex min-h-[72vh] w-full max-w-4xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
      <section ref={heroRef} className="text-center">
        <motion.h1
          className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl"
          {...fadeRise(0)}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Apply for Access
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-zinc-200 sm:text-2xl"
          {...fadeRise(0.12)}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Ready to step up your game?
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
          {...fadeRise(0.24)}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          This call is the first step in determining whether Sales University is
          the right fit for you. Access is selective, and membership is only
          offered to applicants who are accepted after the interview.
        </motion.p>
        <motion.div
          className="mt-10"
          {...fadeRise(0.36)}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <button
            type="button"
            onClick={openCalendly}
            className="inline-flex rounded-full bg-zinc-50 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Apply for Access
          </button>
        </motion.div>
      </section>

      <section ref={listRef} className="mx-auto mt-16 w-full max-w-2xl">
        <motion.h2
          className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500"
          {...fadeRise(0)}
          animate={listInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          What to expect
        </motion.h2>
        <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-300">
          {listItems.map((item, i) => (
            <motion.li
              key={item}
              className="flex items-start gap-3"
              {...fadeRise(0.12 + i * 0.12)}
              animate={listInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  );
}
