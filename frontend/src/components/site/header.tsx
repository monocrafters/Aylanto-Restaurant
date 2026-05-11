"use client";

import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Clock3, MapPin, Menu, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
];

const sidebarScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-sidebar-script",
  weight: ["400", "500", "600", "700"],
});

function SocialIcon({
  type,
  className,
}: {
  type: "instagram" | "facebook" | "youtube";
  className?: string;
}) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M13.5 20V13H16L16.5 10.2H13.5V8.6c0-.9.4-1.6 1.7-1.6H16.7V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10.2H8V13h2.3v7h3.2Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="6" width="17" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.6L15.3 12 10 14.4V9.6Z" fill="currentColor" />
    </svg>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M24 5.5c8.6 0 15.6 7 15.6 15.6 0 8.6-7 15.6-15.6 15.6S8.4 29.7 8.4 21.1C8.4 12.5 15.4 5.5 24 5.5Z"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path
        d="M12.8 24.3c3.2-5.9 8.6-9.3 15.8-9.3 6 0 10.8 2.3 14.6 6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.5 28.1c4.2 2.7 8.7 4.1 13.6 4.1 4.8 0 9.2-1.3 13.2-3.8"
        stroke="currentColor"
        strokeOpacity="0.8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M21.5 18.8c1.5-2 3.5-3 6-3"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const barTransition = { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const };

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="w-full overflow-x-clip"
        initial={false}
        animate={{
          paddingTop: scrolled ? 12 : 0,
          paddingLeft: scrolled ? 12 : 0,
          paddingRight: scrolled ? 12 : 0,
        }}
        transition={barTransition}
      >
        <motion.div
          className={cn(
            "relative flex w-full items-center justify-between overflow-hidden border border-white/12 px-3 py-2.5 backdrop-blur-xl",
            "shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
          )}
          initial={false}
          animate={{
            maxWidth: scrolled ? "72rem" : "100%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: scrolled ? 18 : 0,
            backgroundColor: scrolled ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.18)",
          }}
          transition={barTransition}
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_14rem_at_50%_-30%,rgba(255,190,82,0.12),transparent_60%)]",
              scrolled ? "rounded-[18px]" : "rounded-none"
            )}
          />

          <Link
            href="/"
            className="relative inline-flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-semibold tracking-tight text-white"
          >
            <span className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#ffbe52]">
              <LogoMark className="size-[18px]" />
            </span>
            <span className="leading-none uppercase tracking-[0.22em]">
              AYLANTO
            </span>
          </Link>

          <nav className="relative hidden items-center gap-1.5 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-xl px-3 py-2 text-sm text-white/70 transition duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="relative hidden items-center gap-2 md:flex">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "group h-9 rounded-xl border-white/12 bg-white/0 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:bg-white/5"
              )}
            >
              <Phone className="mr-1 size-4 transition-transform duration-300 group-hover:scale-110" />{" "}
              <span className="hidden lg:inline">{SITE_PHONE_DISPLAY}</span>
              <span className="lg:hidden">Call</span>
            </a>
            <Link
              href="/reservations"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "group h-9 rounded-xl bg-white px-3 text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              )}
            >
              Reserve
            </Link>
          </div>

          <div className="relative md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    className="h-9 rounded-xl border-white/12 bg-white/0 px-3 text-white hover:bg-white/5"
                  >
                    <Menu className="size-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                }
              />
              <SheetContent
                side="right"
                className={cn(
                  "text-white shadow-[0_40px_120px_rgba(0,0,0,0.75)] supports-backdrop-filter:backdrop-blur-2xl",
                  "data-[side=right]:right-0 data-[side=right]:top-0 data-[side=right]:bottom-0 data-[side=right]:h-auto",
                  "data-[side=right]:w-[86vw] data-[side=right]:max-w-[390px]",
                  "data-[side=right]:rounded-none data-[side=right]:border-l data-[side=right]:border-y-0 data-[side=right]:border-r-0 data-[side=right]:border-white/15",
                  "data-[side=right]:bg-white/[0.04]"
                )}
              >
                <div className="flex h-full min-h-0 flex-col bg-[linear-gradient(to_bottom,rgba(7,7,10,0.66),rgba(7,7,10,0.84))] px-6 py-5 overflow-y-auto">
                  <SheetHeader className="px-0 pt-3 pb-4">
                    <SheetTitle
                      className={cn(
                        "text-[2rem] leading-none text-white/95 [font-family:var(--font-sidebar-script)]",
                        sidebarScript.variable
                      )}
                    >
                      Cafe Aylanto
                    </SheetTitle>
                  </SheetHeader>
                  <motion.div
                    initial="closed"
                    animate={open ? "open" : "closed"}
                    variants={{
                      open: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
                      closed: {},
                    }}
                    className="grid gap-3"
                  >
                    {nav.map((n) => (
                      <motion.a
                        key={n.href}
                        href={n.href}
                        variants={{
                          open: { opacity: 1, x: 0, filter: "blur(0px)" },
                          closed: { opacity: 0, x: 18, filter: "blur(6px)" },
                        }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-[1.08rem] text-white/90"
                        onClick={() => setOpen(false)}
                      >
                        {n.label}
                      </motion.a>
                    ))}
                  </motion.div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${SITE_PHONE_TEL}`}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "h-12 rounded-2xl border-white/12 bg-white/0 text-white hover:bg-white/6"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      Call
                    </a>
                    <Link
                      href="/reservations"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "h-12 rounded-2xl bg-white text-black hover:bg-white/90"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      Reserve
                    </Link>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={open ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="mt-auto space-y-4 pt-8"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                      <div className="flex items-start gap-2 text-sm text-white/80">
                        <MapPin className="mt-0.5 size-4 text-[#ffbe52]" />
                        <span>Lahore, Gulberg • Valet parking</span>
                      </div>
                      <div className="mt-2 flex items-start gap-2 text-sm text-white/70">
                        <Clock3 className="mt-0.5 size-4 text-[#ffbe52]" />
                        <span>Tue–Sun • 6:00 PM — 1:00 AM</span>
                      </div>
                      <a
                        href={`tel:${SITE_PHONE_TEL}`}
                        className="mt-3 flex items-center gap-2 text-sm text-[#ffbe52]"
                      >
                        <Phone className="size-4" />
                        {SITE_PHONE_DISPLAY}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="#"
                        className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/85 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                        aria-label="Instagram"
                      >
                        <SocialIcon type="instagram" className="size-4.5" />
                      </a>
                      <a
                        href="#"
                        className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/85 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                        aria-label="Facebook"
                      >
                        <SocialIcon type="facebook" className="size-4.5" />
                      </a>
                      <a
                        href="#"
                        className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/85 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                        aria-label="YouTube"
                      >
                        <SocialIcon type="youtube" className="size-4.5" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
