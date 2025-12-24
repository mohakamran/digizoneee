"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className = "" 
}: {
  value: number | string;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let targetValue: number;
    
    if (typeof value === "string") {
      // Extract numbers from string like "240+", "4.3x", "4.9/5", "98%"
      const cleanValue = value.replace(/[^0-9.]/g, "");
      targetValue = parseFloat(cleanValue) || 0;
    } else {
      targetValue = value || 0;
    }
    
    // Handle special cases
    if (isNaN(targetValue) || targetValue === 0) {
      setCount(0);
      return;
    }
    
    const increment = targetValue / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  const formatNumber = (num: number) => {
    if (typeof value === "string" && value.includes("+")) {
      return `${Math.floor(num)}+`;
    }
    if (typeof value === "string" && value.includes("x")) {
      return `${num.toFixed(1)}x`;
    }
    if (typeof value === "string" && value.includes("/")) {
      return `${num.toFixed(1)}/5`;
    }
    return Math.floor(num).toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      <span className="text-2xl font-bold text-neutral-900">
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </motion.div>
  );
};
