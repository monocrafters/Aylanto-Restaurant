"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#07070A] px-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(52rem_52rem_at_20%_20%,rgba(255,190,82,0.16),transparent_55%),radial-gradient(40rem_40rem_at_80%_40%,rgba(130,120,255,0.12),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-12"
      >
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs tracking-[0.28em] text-white/55"
        >
          PAGE NOT FOUND
        </motion.p>
        <h1 className="mt-3 text-6xl font-semibold tracking-tight md:text-8xl">404</h1>
        <p className="mt-4 text-base text-white/70 md:text-lg">
          This page doesn&apos;t exist. Let&apos;s get you back to the main experience.
        </p>
        <div className="mt-7">
          <Link
            href="/"
            className={cn(
              buttonVariants(),
              "h-11 rounded-xl bg-white px-5 text-black hover:bg-white/90"
            )}
          >
            <ArrowLeft className="mr-1 size-4" /> Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

