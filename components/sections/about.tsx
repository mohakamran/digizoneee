"use client";

import Image from "next/image";
import { stats, team, growthLottie, teamLottie, successLottie } from "@/lib/data";
import { AcademicCapIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [growthAnimation, setGrowthAnimation] = useState<any>(null);
  const [teamAnimation, setTeamAnimation] = useState<any>(null);
  const [successAnimation, setSuccessAnimation] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      fetch(growthLottie).then(res => res.json()),
      fetch(teamLottie).then(res => res.json()),
      fetch(successLottie).then(res => res.json())
    ]).then(([growth, team, success]) => {
      setGrowthAnimation(growth);
      setTeamAnimation(team);
      setSuccessAnimation(success);
    }).catch(() => {
      // Handle errors silently
    });
  }, []);

  return (
    <section id="about" className="py-16 relative">
      <Particles />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              About Digizone
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Your strategic ecommerce partner across UK & Australia
            </h2>
            <p className="text-neutral-600">
              Founded in 2015, Digizone brings together marketplace specialists, performance marketers, creative strategists, and data engineers under one roof. We've helped 240+ brands scale their ecommerce operations across Amazon, Walmart, Etsy, and Shopify with measurable outcomes and transparent reporting.
            </p>
            <p className="text-neutral-600">
              Our cross-continental teams work in your time zone, embedding with your brand to deliver full-funnel ecommerce solutions. From retail media optimization to conversion rate testing, we combine deep platform expertise with data-driven decision making.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-md shadow-emerald-500/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-500/20">
                    <GlobeAmericasIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      UK + AU Coverage
                    </p>
                    <p className="text-xs text-neutral-600">
                      Teams aligned to local retail calendars.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-md shadow-emerald-500/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-orange-400/20">
                    <AcademicCapIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      Senior talent only
                    </p>
                    <p className="text-xs text-neutral-600">
                      Strategists paired with execution specialists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/20 bg-white/70 p-4 text-center shadow-md shadow-emerald-500/10"
                >
                  <p className="text-2xl font-semibold text-neutral-900">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-neutral-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1224] via-emerald-700 to-emerald-600 p-6 text-white shadow-2xl shadow-emerald-500/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,emerald-50020,transparent_40%),radial-gradient(circle_at_80%_0%,#ffffff15,transparent_35%)]" />
            <div className="relative space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                Mission & Values
              </p>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-lg leading-relaxed text-emerald-50">
                    Our mission is to transform ecommerce operations from cost centers to growth engines.
                  </p>
                  <p className="text-emerald-100 text-sm mt-3">
                    Every client gets dedicated scorecards, weekly reviews, and direct leadership access.
                  </p>
                </div>
                <div className="hidden h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-1 shadow-lg shadow-emerald-500/20 backdrop-blur lg:block">
                  {successAnimation ? (
                    <Lottie animationData={successAnimation} loop className="h-full w-full" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-emerald-400/10 to-emerald-500/10" />
                  )}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Impact over activity",
                  "Experimentation culture", 
                  "Crystal-clear reporting",
                  "Design + data together",
                  "Client-first mindset",
                  "Long-term partnerships",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 p-3 text-sm font-semibold text-white backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="hidden h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-1 shadow-lg shadow-emerald-500/20 backdrop-blur md:block">
                {teamAnimation ? (
                  <Lottie animationData={teamAnimation} loop className="h-full w-full" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-emerald-400/10 to-emerald-500/10" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Leadership Team
                </h3>
                <p className="text-sm text-neutral-600">
                  50+ years combined ecommerce experience
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/70 shadow-lg shadow-emerald-500/10"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 p-4">
                  <p className="text-sm font-semibold text-neutral-900">
                    {member.name}
                  </p>
                  <p className="text-xs text-neutral-600">{member.role}</p>
                  <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600">
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                      X/Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

