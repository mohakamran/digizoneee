"use client";

import { motion } from "framer-motion";

interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBadge = ({ children, className = "" }: AnimatedBadgeProps) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm ${className}`}
  >
    <motion.span
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
    />
    {children}
  </motion.div>
);
