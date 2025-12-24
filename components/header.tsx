"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { TypingWriter } from "@/components/ui/typing-writer";

const Logo = () => (
  <Link href="/" className="flex items-center gap-3 group">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald-500/40">
      <span className="text-lg font-bold">DZ</span>
    </div>
    <div>
      <span className="text-xl font-bold text-neutral-900">Digizone</span>
      <div className="text-xs text-emerald-600 font-medium">Ecommerce Excellence</div>
    </div>
  </Link>
);

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const linkClasses = (href: string) =>
    [
      "relative px-4 py-2.5 text-sm font-medium transition-all duration-300",
      pathname === href
        ? "text-emerald-600"
        : "text-neutral-700 hover:text-neutral-900",
    ].join(" ");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Logo />

        <div className="hidden lg:flex flex-1 items-center justify-center">
          <TypingWriter 
            text="Start Your Ecommerce Growth Journey Today"
            className="text-sm font-medium text-emerald-600"
            speed={30}
            delay={1000}
          />
        </div>
        
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <div className="relative dropdown-container">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition duration-500 group-hover:scale-110" />
              <span className="relative flex items-center gap-2">
                Menu
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-white/20 bg-white/90 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl"
                >
                  <div className="p-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 ${
                          pathname === link.href ? "bg-emerald-50 text-emerald-600" : "text-neutral-700"
                        }`}
                      >
                        {link.label}
                        {pathname === link.href && (
                          <span className="h-2 w-2 rounded-full bg-emerald-600" />
                        )}
                      </Link>
                    ))}
                    <div className="border-t border-emerald-100 my-2" />
                    <Link
                      href="/quote"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:scale-105"
                    >
                      View Pricing
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative dropdown-container">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition duration-500 group-hover:scale-110" />
              <span className="relative flex items-center gap-2">
                Menu
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-white/20 bg-white/90 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl"
                >
                  <div className="p-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 ${
                          pathname === link.href ? "bg-emerald-50 text-emerald-600" : "text-neutral-700"
                        }`}
                      >
                        {link.label}
                        {pathname === link.href && (
                          <span className="h-2 w-2 rounded-full bg-emerald-600" />
                        )}
                      </Link>
                    ))}
                    <div className="border-t border-emerald-100 my-2" />
                    <Link
                      href="/quote"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:scale-105"
                    >
                      View Pricing
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/20 bg-white/70 p-2 text-neutral-700 shadow-sm transition hover:shadow-lg"
            aria-label="Toggle navigation"
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mb-3 rounded-2xl border border-white/20 bg-white/90 p-3 shadow-xl shadow-emerald-500/10 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {link.label}
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-3 py-3 text-sm font-semibold text-emerald-600"
              >
                Contact Us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

