"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  ease?: [number, number, number, number];
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 10,
  duration = 1.1,
  amount = 0.36,
  once = true,
  ease = [0.16, 0.84, 0.3, 1],
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
