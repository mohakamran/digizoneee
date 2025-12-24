"use client";

import { motion } from "framer-motion";

export const ShimmerEffect = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`}
    animate={{
      translateX: ["0%", "200%"],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);
