"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChatBubbleLeftRightIcon, 
  PhoneIcon, 
  XMarkIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const actions = [
    {
      icon: ChatBubbleLeftRightIcon,
      label: "Live Chat",
      href: "#",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: PhoneIcon,
      label: "Call Us",
      href: "tel:+442079460123",
      color: "from-green-500 to-green-600"
    },
    {
      icon: SparklesIcon,
      label: "Get Quote",
      href: "/quote",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="relative">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute bottom-16 right-0 space-y-3"
                >
                  {actions.map((action, index) => (
                    <motion.a
                      key={action.label}
                      href={action.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`flex items-center gap-3 rounded-full bg-gradient-to-r ${action.color} px-4 py-3 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      <action.icon className="h-5 w-5" />
                      <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${isOpen ? 'from-red-500 to-red-600' : 'from-emerald-500 to-emerald-600'} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              )}
              
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-30 animate-ping" />
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
