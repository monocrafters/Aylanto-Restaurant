"use client";

import Link from "next/link";
import { MapPin, Phone, Camera } from "lucide-react";

import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg font-semibold tracking-tight text-white">
            Café Aylanto <span className="text-white/60">Restaurant</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
            Premium dining designed like a private premiere: warm lighting,
            precise plating, and calm service.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.28em] text-white/55">HOURS</p>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <div className="flex items-center justify-between">
              <span>Tue–Thu</span>
              <span className="text-white/60">6pm — 12am</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Fri–Sun</span>
              <span className="text-white/60">6pm — 1am</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Mon</span>
              <span className="text-white/60">Closed</span>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 text-sm text-white/70">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/menu" className="transition hover:text-white">
              Menu
            </Link>
            <Link href="/gallery" className="transition hover:text-white">
              Gallery
            </Link>
            <Link href="/reservations" className="transition hover:text-white">
              Reservations
            </Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.28em] text-white/55">CONTACT</p>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:bg-white/7"
            >
              <Phone className="size-4 text-[#ffbe52]" />
              <span className="text-white/85">{SITE_PHONE_DISPLAY}</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:bg-white/7"
            >
              <MapPin className="size-4 text-[#ffbe52]" />
              <span className="text-white/85">City Center • Valet available</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:bg-white/7"
            >
              <Camera className="size-4 text-[#ffbe52]" />
              <span className="text-white/85">@cafeaylanto</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Café Aylanto</p>
          <p>Fine dining • Live fire • Seasonal tasting</p>
        </div>
      </div>
    </footer>
  );
}

