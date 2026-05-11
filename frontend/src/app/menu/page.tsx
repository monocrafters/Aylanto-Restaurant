"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Menu JPEG/PNG sheets in `/public/menu-N.png`, ordered 1→4 */
const MENU_PAGE_SRCS = Array.from(
  { length: 4 },
  (_, i) => `/menu-${i + 1}.png`,
);

function buildSpreads(pages: readonly string[]) {
  const spreads: { left: string; right?: string }[] = [];
  for (let i = 0; i < pages.length; i += 2) {
    spreads.push({ left: pages[i]!, right: pages[i + 1] });
  }
  return spreads;
}

const MENU_SPREADS = buildSpreads(MENU_PAGE_SRCS);

function MenuPageFigure({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px) 92vw, 48vw"
        className="object-contain"
        priority={priority}
      />
    </figure>
  );
}

export default function MenuPage() {
  const [mobilePage, setMobilePage] = useState(0);
  const [desktopSpread, setDesktopSpread] = useState(0);
  const maxMobilePage = MENU_PAGE_SRCS.length - 1;
  const maxDesktopSpread = MENU_SPREADS.length - 1;

  return (
    <main className="min-h-[100svh] bg-[#07070A] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10 pt-20 pb-7 md:pt-28 md:pb-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2400&q=80"
            alt="Menu hero background"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,7,10,0.58),rgba(7,7,10,0.86)_58%,rgba(7,7,10,0.96))]" />
        <div className="absolute inset-0 bg-[radial-gradient(52rem_52rem_at_20%_20%,rgba(255,190,82,0.14),transparent_55%),radial-gradient(40rem_40rem_at_80%_40%,rgba(130,120,255,0.12),transparent_55%)]" />
        <div className="relative w-full px-5 md:px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-xs tracking-[0.28em] text-white/55"
          >
            CURATED MENU
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight leading-[1.2] pb-1 md:text-6xl md:leading-[1.15]"
          >
            Aylanto Signature Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base"
          >
            Clean, refined, and premium - a focused selection built for elegant dining.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="text-xs tracking-[0.28em] text-white/55">MENU BOOK</p>
          <p className="mt-2 text-lg font-semibold md:text-xl">Flip through signature pages</p>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            Scroll horizontally — on larger screens each step opens two facing pages side by side.
          </p>
        </motion.div>

        {/* Mobile: one page with arrow controls */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobilePage * 100}%)` }}
            >
              {MENU_PAGE_SRCS.map((src, idx) => (
                <div key={src} className="w-full shrink-0">
                  <MenuPageFigure
                    src={src}
                    alt={`Menu page ${idx + 1}`}
                    priority={idx < 2}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Button
              type="button"
              size="icon"
              onClick={() => setMobilePage((p) => Math.max(p - 1, 0))}
              disabled={mobilePage === 0}
              className="h-10 w-10 rounded-full border border-white/20 bg-black/35 text-white hover:bg-white/10 disabled:opacity-40"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={() => setMobilePage((p) => Math.min(p + 1, maxMobilePage))}
              disabled={mobilePage === maxMobilePage}
              className="h-10 w-10 rounded-full border border-white/20 bg-black/35 text-white hover:bg-white/10 disabled:opacity-40"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Desktop: spread (two pages) with arrow controls */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${desktopSpread * 100}%)` }}
            >
              {MENU_SPREADS.map((spread, idx) => (
                <div
                  key={`${spread.left}-${spread.right ?? "single"}`}
                  className="w-full shrink-0"
                >
                  <div
                    className={`grid gap-4 ${
                      spread.right ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    <MenuPageFigure
                      src={spread.left}
                      alt={`Menu page ${idx * 2 + 1}`}
                      priority={idx === 0}
                    />
                    {spread.right ? (
                      <MenuPageFigure
                        src={spread.right}
                        alt={`Menu page ${idx * 2 + 2}`}
                        priority={idx === 0}
                      />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Button
              type="button"
              size="icon"
              onClick={() => setDesktopSpread((s) => Math.max(s - 1, 0))}
              disabled={desktopSpread === 0}
              className="h-11 w-11 rounded-full border border-white/20 bg-black/35 text-white hover:bg-white/10 disabled:opacity-40"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={() => setDesktopSpread((s) => Math.min(s + 1, maxDesktopSpread))}
              disabled={desktopSpread === maxDesktopSpread}
              className="h-11 w-11 rounded-full border border-white/20 bg-black/35 text-white hover:bg-white/10 disabled:opacity-40"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/[0.04] to-white/5 p-6 md:p-8"
        >
          <p className="text-xs tracking-[0.28em] text-white/55">RESERVATION</p>
          <p className="mt-2 text-2xl font-semibold">Book your tasting experience</p>
          <p className="mt-2 max-w-2xl text-sm text-white/65">
            Private dining, custom pacing, and pairing options available on request.
          </p>
          <div className="mt-5">
            <Link
              href="/reservations"
              className={cn(
                buttonVariants({ variant: "default" }),
                "inline-flex h-11 items-center justify-center rounded-xl bg-white px-4 text-black hover:bg-white/90"
              )}
            >
              Reserve now
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
