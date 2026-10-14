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
  distance = 20,
  duration = 0.9,
  amount = 0.2,
  once = true,
  ease = [0.16, 1, 0.3, 1],
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
      viewport={{ once, amount, margin: "-80px" }}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
