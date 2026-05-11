"use client";

import {
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Check,
  ChevronDown,
  Clock3,
  Phone,
  Users,
} from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { cn } from "@/lib/utils";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_E164,
} from "@/lib/site-contact";

const inputClass =
  "w-full rounded-none border-0 border-b border-white/15 bg-transparent py-3 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-[#ffbe52] focus:ring-0 transition-colors md:text-base";

const labelClass = "text-[11px] tracking-[0.2em] text-white/45";

type GuestMode = "preset" | "nineplus" | "custom";

const PRESET_COUNTS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

function guestSummary(
  mode: GuestMode,
  preset: number,
  custom: string,
): string {
  if (mode === "nineplus") return "9+ (private dining)";
  if (mode === "custom") {
    const n = parseInt(custom, 10);
    if (!Number.isFinite(n) || n < 1) return "—";
    return `${n} guest${n === 1 ? "" : "s"}`;
  }
  return `${preset} guest${preset === 1 ? "" : "s"}`;
}

export default function ReservationsPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [guestOpen, setGuestOpen] = useState(false);
  const [guestMode, setGuestMode] = useState<GuestMode>("preset");
  const [presetGuests, setPresetGuests] = useState(2);
  const [customGuests, setCustomGuests] = useState("");

  const guestDropdownRef = useRef<HTMLDivElement>(null);
  const customGuestsInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!guestDropdownRef.current?.contains(e.target as Node)) {
        setGuestOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const guestsLine = useMemo(
    () => guestSummary(guestMode, presetGuests, customGuests),
    [guestMode, presetGuests, customGuests],
  );

  const waMessage = useMemo(() => {
    const lines = [
      "*Café Aylanto — reservation request*",
      "",
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Date: ${date || "—"}`,
      `Time: ${time || "—"}`,
      `Guests: ${guestsLine}`,
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  }, [name, phone, date, time, guestsLine, notes]);

  const waHref = useMemo(() => {
    const q = encodeURIComponent(waMessage);
    return `https://wa.me/${SITE_WHATSAPP_E164}?text=${q}`;
  }, [waMessage]);

  const triggerLabel = useMemo(() => {
    if (guestMode === "nineplus") return "9+ · private dining";
    if (guestMode === "custom") {
      const n = parseInt(customGuests, 10);
      if (Number.isFinite(n) && n >= 1) return `Custom · ${n} guests`;
      return "Custom number…";
    }
    return `${presetGuests} ${presetGuests === 1 ? "guest" : "guests"}`;
  }, [guestMode, presetGuests, customGuests]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (guestMode === "custom") {
      const el = customGuestsInputRef.current;
      const n = parseInt(customGuests, 10);
      if (!Number.isFinite(n) || n < 1 || n > 99) {
        if (el) {
          el.setCustomValidity("Enter a whole number from 1 to 99.");
          el.reportValidity();
          el.setCustomValidity("");
        }
        return;
      }
    }
    window.open(waHref, "_blank", "noopener,noreferrer");
  }

  function selectPreset(n: number) {
    setGuestMode("preset");
    setPresetGuests(n);
    setGuestOpen(false);
  }

  function selectNinePlus() {
    setGuestMode("nineplus");
    setCustomGuests("");
    setGuestOpen(false);
  }

  function selectCustomOption() {
    setGuestMode("custom");
    setGuestOpen(false);
  }

  return (
    <main className="min-h-[100svh] bg-[#07070A] text-white">
      <Header />

      <div className="border-b border-white/10 pt-[4.5rem] md:pt-24">
        <div className="mx-auto max-w-2xl px-4 pb-8 pt-6 md:px-6 md:pb-12 md:pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 transition hover:text-white/80"
          >
            <ArrowLeft className="size-3.5" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <p className={labelClass}>RESERVATIONS</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight leading-tight md:text-4xl">
              Book a table
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 md:text-[15px]">
              Send your request on WhatsApp — we’ll confirm by message or call. Tap the number below
              to phone us directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className="mt-8 border-t border-white/10 pt-8"
          >
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white/90 transition hover:bg-white/10 sm:inline-flex sm:w-auto"
            >
              <Phone className="size-4 text-[#ffbe52]" />
              {SITE_PHONE_DISPLAY}
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            onSubmit={onSubmit}
            className="mt-10 space-y-8 md:space-y-9"
          >
            <div className="space-y-1.5">
              <label htmlFor="res-name" className={labelClass}>
                NAME
              </label>
              <input
                id="res-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="res-phone" className={labelClass}>
                PHONE
              </label>
              <input
                id="res-phone"
                name="phone"
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Your contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={cn(inputClass, "tabular-nums")}
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-1.5">
                <label htmlFor="res-date" className={cn(labelClass, "inline-flex items-center gap-1.5")}>
                  <Calendar className="size-3 text-[#ffbe52]/80" aria-hidden /> DATE
                </label>
                <input
                  id="res-date"
                  name="date"
                  required
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={cn(inputClass, "scheme-dark")}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="res-time" className={cn(labelClass, "inline-flex items-center gap-1.5")}>
                  <Clock3 className="size-3 text-[#ffbe52]/80" aria-hidden /> TIME
                </label>
                <input
                  id="res-time"
                  name="time"
                  required
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={cn(inputClass, "scheme-dark")}
                />
              </div>
            </div>

            <div ref={guestDropdownRef} className="relative space-y-2">
              <span className={cn(labelClass, "inline-flex items-center gap-1.5")}>
                <Users className="size-3 text-[#ffbe52]/80" aria-hidden /> GUESTS
              </span>

              <button
                type="button"
                id="guests-trigger"
                aria-haspopup="listbox"
                aria-expanded={guestOpen}
                onClick={() => setGuestOpen((o) => !o)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-3.5 py-2.5 text-left text-[15px] text-white/90 outline-none transition",
                  "hover:border-white/18 hover:bg-white/[0.06] focus-visible:border-[#ffbe52]/50 focus-visible:ring-2 focus-visible:ring-[#ffbe52]/25",
                  guestOpen && "border-[#ffbe52]/35 bg-white/[0.07]",
                )}
              >
                <span className="min-w-0 truncate">{triggerLabel}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-white/45 transition-transform duration-200",
                    guestOpen && "rotate-180 text-[#ffbe52]",
                  )}
                />
              </button>

              {guestOpen ? (
                <ul
                  role="listbox"
                  aria-labelledby="guests-trigger"
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="absolute left-0 right-0 top-full z-[60] mt-1 max-h-[min(14rem,42vh)] overflow-y-auto overscroll-contain touch-pan-y rounded-xl border border-white/12 bg-[#0a0a0f] py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04]"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {PRESET_COUNTS.map((n) => (
                    <li key={n} role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={guestMode === "preset" && presetGuests === n}
                        onClick={() => selectPreset(n)}
                        className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-sm text-white/88 transition hover:bg-white/[0.06]"
                      >
                        <span>
                          {n} {n === 1 ? "guest" : "guests"}
                        </span>
                        {guestMode === "preset" && presetGuests === n ? (
                          <Check className="size-4 text-[#ffbe52]" />
                        ) : null}
                      </button>
                    </li>
                  ))}
                  <li role="presentation" className="my-1 h-px bg-white/8" />
                  <li role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={guestMode === "nineplus"}
                      onClick={selectNinePlus}
                      className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-sm text-white/88 transition hover:bg-white/[0.06]"
                    >
                      <span>9+ · private dining</span>
                      {guestMode === "nineplus" ? (
                        <Check className="size-4 text-[#ffbe52]" />
                      ) : null}
                    </button>
                  </li>
                  <li role="presentation" className="my-1 h-px bg-white/8" />
                  <li role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={guestMode === "custom"}
                      onClick={selectCustomOption}
                      className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-sm text-[#ffecd0]/90 transition hover:bg-white/[0.06]"
                    >
                      <span>Custom number…</span>
                      {guestMode === "custom" ? (
                        <Check className="size-4 text-[#ffbe52]" />
                      ) : null}
                    </button>
                  </li>
                </ul>
              ) : null}

              {guestMode === "custom" ? (
                <div className="pt-1">
                  <label htmlFor="res-custom-guests" className="sr-only">
                    Custom guest count
                  </label>
                  <input
                    ref={customGuestsInputRef}
                    id="res-custom-guests"
                    name="customGuests"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={99}
                    required={guestMode === "custom"}
                    placeholder="Enter number of guests (1–99)"
                    value={customGuests}
                    onChange={(e) => setCustomGuests(e.target.value)}
                    className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-3 py-2.5 text-[15px] text-white outline-none transition placeholder:text-white/35 focus:border-[#ffbe52]/50 focus:ring-2 focus:ring-[#ffbe52]/20 tabular-nums md:text-base"
                  />
                  <p className="mt-1.5 text-xs text-white/40">
                    Whole party size — include children if seated.
                  </p>
                </div>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="res-notes" className={labelClass}>
                NOTES <span className="text-white/30">(optional)</span>
              </label>
              <textarea
                id="res-notes"
                name="notes"
                rows={3}
                placeholder="Allergies, occasion, seating preference..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={cn(inputClass, "resize-none border-white/15 focus:border-[#ffbe52]")}
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="h-12 rounded-full bg-white px-8 text-sm font-medium text-black transition hover:bg-white/90 md:h-11"
              >
                Send on WhatsApp
              </button>
              <span className="text-center text-xs text-white/40 sm:text-left">
                Opens WhatsApp with your details prefilled — adjust and send.
              </span>
            </div>
          </motion.form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
