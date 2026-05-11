"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact";
import { Card } from "@/components/ui/card";

export function ReservationCTA() {
  return (
    <section
      id="reservations"
      className="mx-auto max-w-6xl px-5 py-16 md:py-20"
    >
      <Card className="relative overflow-hidden rounded-[32px] border-white/10 bg-white/5 p-6 text-white shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-[#ffbe52]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-[#8278ff]/15 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs tracking-[0.28em] text-white/55">
              RESERVATIONS
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Make tonight feel expensive.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
              Reserve your table for the tasting menu or request the lounge.
              We’ll tailor pacing and pairings to your evening.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reservations"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "inline-flex h-11 items-center justify-center rounded-xl bg-white px-4 text-black hover:bg-white/90"
                )}
              >
                <CalendarDays className="mr-1 size-4" /> Book now
              </Link>
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "inline-flex h-11 items-center justify-center rounded-xl border-white/15 bg-white/0 text-white hover:bg-white/5"
                )}
              >
                Private dining
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid gap-3"
          >
            {(
              [
                {
                  icon: MapPin,
                  title: "Location",
                  value: "City Center • Valet available",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: SITE_PHONE_DISPLAY,
                  href: `tel:${SITE_PHONE_TEL}`,
                },
                {
                  icon: CalendarDays,
                  title: "Hours",
                  value: "Tue–Sun • 6pm—1am",
                },
              ] as const
            ).map((row) => (
              <div
                key={row.title}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-2">
                    <row.icon className="size-4 text-[#ffbe52]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/55">{row.title}</p>
                    {"href" in row ? (
                      <a
                        href={row.href}
                        className="block truncate text-sm font-medium text-white transition hover:text-[#ffbe52]"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium text-white">{row.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Card>
    </section>
  );
}

