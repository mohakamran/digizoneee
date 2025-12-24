import Link from "next/link";
import { navLinks } from "@/lib/data";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-emerald-600/20 bg-gradient-to-br from-emerald-50 via-emerald-100 to-green-50 text-sm text-emerald-900 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-500/25">
              DZ
            </div>
            <div>
              <p className="text-lg font-semibold text-neutral-900">
                Digizone
              </p>
              <p className="text-neutral-500">
                E-commerce services across the UK & Australia.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-neutral-600">
            <span className="inline-flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4" />
              hello@digizone.co
            </span>
            <span className="inline-flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" />
              +44 20 7946 0123
            </span>
          </div>
          <p className="text-neutral-600">
            We manage Amazon, Walmart, Etsy, Shopify, and omnichannel stacks with
            measurable outcomes.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-neutral-900">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-emerald-600 shadow-sm transition hover:bg-emerald-600 hover:text-white hover:shadow-md"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-emerald-600 shadow-sm transition hover:bg-emerald-600 hover:text-white hover:shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-emerald-600 shadow-sm transition hover:bg-emerald-600 hover:text-white hover:shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-emerald-600 shadow-sm transition hover:bg-emerald-600 hover:text-white hover:shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-neutral-900">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-600 transition hover:text-emerald-600"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/quote"
                className="text-neutral-600 transition hover:text-emerald-600 font-semibold"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-neutral-900">
              Offices
            </p>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                London, UK
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                Sydney, AU
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-neutral-900">
            Newsletter
          </p>
          <p className="text-neutral-600">
            Get ecommerce playbooks, marketplace insights, and launch-ready checklists.
          </p>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30"
              />
            </div>
            <button
              type="submit"
              className="group relative overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition duration-500 group-hover:scale-110" />
              <span className="relative flex items-center justify-center gap-2">
                Subscribe
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-emerald-600/20 bg-emerald-100/80 py-4 text-center text-xs text-emerald-700">
        © {new Date().getFullYear()} Digizone. All rights reserved. Privacy & Legal.
      </div>
    </footer>
  );
};

