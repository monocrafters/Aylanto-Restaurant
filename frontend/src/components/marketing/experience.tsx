"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Leaf, Martini } from "lucide-react";

import { Card } from "@/components/ui/card";

const items = [
  {
    icon: Flame,
    title: "Live fire kitchen",
    desc: "Smoke, silk, precision.",
  },
  {
    icon: Leaf,
    title: "Seasonal tasting",
    desc: "Menu evolves with the market.",
  },
  {
    icon: Martini,
    title: "Cinema lounge",
    desc: "Rare spirits, velvet lighting.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-16 md:py-20"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs tracking-[0.28em] text-white/55">EXPERIENCE</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
            Effortless, premium, calm.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
          Refined materials, soft light, precise service.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
          >
            <Card className="h-full rounded-3xl border-white/10 bg-white/5 p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.40)] backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                  <it.icon className="size-5 text-[#ffbe52]" />
                </div>
                <div>
                  <p className="text-base font-semibold">{it.title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    {it.desc}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div
        id="menu"
        className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 p-6 md:p-8"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2200&q=80"
            alt="Tasting menu visual"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,7,10,0.86),rgba(7,7,10,0.58)_55%,rgba(7,7,10,0.72))]" />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative">
            <p className="text-xs tracking-[0.28em] text-white/55">
              TASTING MENU
            </p>
            <p className="mt-2 text-lg font-semibold md:text-2xl">
              Chef’s 12-course experience
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
              Crisp, warm, bright, rich - finished with smoke and saffron.
            </p>
          </div>
          <div className="relative grid grid-cols-2 gap-3 md:grid-cols-1">
            {[
              ["Amuse", "Citrus pearl • sea salt"],
              ["Signature", "Live-fire ribeye • black garlic"],
              ["Finale", "Dark chocolate • gold flake"],
              ["Pairings", "Reserve cellar flights"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
              >
                <p className="text-sm font-medium">{a}</p>
                <p className="mt-0.5 text-xs text-white/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

