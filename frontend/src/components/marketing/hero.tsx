"use client";

import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Crown, MapPin, Sparkles, UtensilsCrossed } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2400&q=80";

const signatureScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400", "500", "600"],
});

function RotatingLine({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % items.length);
    }, 2200);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={items[idx]}
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {items[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const spotRef = useRef<HTMLDivElement | null>(null);
  const rotateItems = useMemo(
    () => [
      "Seasonal tasting.",
      "Chef’s table.",
      "Signature live-fire.",
      "Quiet luxury.",
    ],
    []
  );

  useLayoutEffect(() => {
    if (!wrapRef.current) return;

    const ease = "power2.out";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease } });
      tl.fromTo(
        "[data-hero='badge']",
        { y: 10, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75 },
        0
      )
        .fromTo(
          "[data-hero='title']",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.05 },
          "-=0.42"
        )
        .fromTo(
          "[data-hero='line']",
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.72 },
          "-=0.55"
        )
        .fromTo(
          "[data-hero='cta']",
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.72 },
          "-=0.48"
        );

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.04 },
          {
            scale: 1,
            duration: 1.45,
            ease: "power2.out",
          }
        );
      }

      if (spotRef.current) {
        gsap.fromTo(
          spotRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.9, ease: "power2.out" }
        );
        gsap.to(spotRef.current, {
          keyframes: [
            { opacity: 0.7, duration: 2.8, ease: "sine.inOut" },
            { opacity: 0.4, duration: 2.8, ease: "sine.inOut" },
          ],
          repeat: -1,
          yoyo: true,
        });
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury dining ambience"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center brightness-[1.18] contrast-[1.05] saturate-[1.05]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(70rem_55rem_at_50%_10%,rgba(255,190,82,0.18),transparent_60%),radial-gradient(55rem_55rem_at_18%_15%,rgba(130,120,255,0.10),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,7,10,0.55),rgba(7,7,10,0.86)_55%,rgba(7,7,10,0.97))]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(to_top,rgba(7,7,10,0.98),rgba(7,7,10,0))]" />
        <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div
          ref={spotRef}
          className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,190,82,0.18),transparent_62%)] blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-5 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="w-full max-w-3xl text-center">
          <div className="mx-auto max-w-full">
            <div className="inline-flex max-w-full rounded-full bg-gradient-to-r from-[#ffbe52]/30 via-white/12 to-[#d4af37]/20 p-px shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div
                data-hero="badge"
                className="flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/[0.07] bg-black/50 px-2.5 py-1.5 backdrop-blur-xl sm:gap-2 sm:px-3.5 sm:py-2"
              >
                <span
                  className="grid size-6 shrink-0 place-items-center rounded-full border border-[#ffbe52]/22 bg-[linear-gradient(145deg,rgba(255,190,82,0.14),rgba(0,0,0,0.38))] text-[#ffecd0] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:size-7"
                  aria-hidden
                >
                  <Crown className="size-[11px] text-[#ffbe52] sm:size-3" strokeWidth={1.65} />
                </span>
                <span className="text-[8px] font-semibold tracking-[0.28em] text-[#ffecd0]/95 sm:text-[9px] md:text-[10px] md:tracking-[0.3em]">
                  SIGNATURE
                </span>
                <span
                  className="hidden h-3.5 w-px shrink-0 bg-gradient-to-b from-transparent via-white/22 to-transparent sm:block"
                  aria-hidden
                />
                <span className="flex shrink-0 items-center gap-1 text-[8px] font-medium tracking-[0.2em] text-white/78 sm:text-[9px] md:text-[10px] md:tracking-[0.22em]">
                  <UtensilsCrossed className="size-2.5 text-[#ffbe52] sm:size-3" strokeWidth={1.65} />
                  FINE DINING
                </span>
                <Sparkles
                  className="size-2.5 shrink-0 text-[#ffbe52]/70 sm:size-3"
                  strokeWidth={1.65}
                  aria-hidden
                />
              </div>
            </div>
          </div>

          <h1
            data-hero="title"
            className="mt-7 text-balance font-semibold tracking-[-0.03em] [font-family:var(--font-display)]"
          >
            <span className="sr-only">Café Aylanto</span>
            <span
              aria-hidden="true"
              className={cn(
                "relative block leading-[0.82] uppercase",
                "text-[clamp(4.6rem,17vw,8.4rem)] md:text-[clamp(6.2rem,10vw,10.2rem)]",
                "text-image-fill",
                "drop-shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
              )}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(7,7,10,0.06), rgba(7,7,10,0.48)), url(${heroImage})`,
                WebkitTextStroke: "1px rgba(255,255,255,0.14)",
              }}
            >
              <span className="pointer-events-none absolute inset-0 select-none text-black/35 blur-[0.2px]">
                AYLANTO
              </span>
              <span className="pointer-events-none absolute inset-0 select-none text-white/25 [text-shadow:0_0_32px_rgba(255,255,255,0.18)]">
                AYLANTO
              </span>
              AYLANTO
            </span>

            <span
              className={cn("relative mt-3 block text-[25px] leading-[1.05] text-white/92 md:text-4xl", signatureScript.variable)}
            >
              <span className="sr-only">Luxury, engineered for calm.</span>
              <motion.span
                animate={{ opacity: [0.72, 1, 0.72], y: [0, -1, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative block bg-gradient-to-r from-white/90 via-white to-white/85 bg-clip-text [font-family:var(--font-signature)] tracking-[0.01em] text-transparent"
              >
                Luxury, engineered for calm.
              </motion.span>
            </span>
          </h1>

          <div
            data-hero="line"
            className="mt-6 text-[16px] text-white/75 md:text-[15px]"
          >
            <RotatingLine
              items={rotateItems}
              className="text-white"
            />{" "}
            <span className="text-white/60">— reservations tonight.</span>
          </div>

          <div
            data-hero="cta"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <Link
              href="/reservations"
              className={cn(
                buttonVariants({ variant: "default" }),
                "group inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-lg text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90 active:translate-y-0 md:h-11 md:rounded-xl md:px-5 md:text-base"
              )}
            >
              Reserve{" "}
              <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/menu"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "group inline-flex h-12 items-center justify-center rounded-2xl border-white/18 bg-white/0 px-6 text-lg text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/5 active:translate-y-0 md:h-11 md:rounded-xl md:px-5 md:text-base"
              )}
            >
              View menu
            </Link>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-white/70 md:mt-6 md:text-xs">
            <MapPin className="size-4 text-[#ffbe52]" />
            Lahore • Valet • Chef’s table
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}

