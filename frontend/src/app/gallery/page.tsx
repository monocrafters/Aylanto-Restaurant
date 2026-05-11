"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=80",
    alt: "Elegant table setup for evening service",
  },
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=2400&q=80",
    alt: "Premium plated steak close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=2400&q=80",
    alt: "Chef finishing a signature plate",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2400&q=80",
    alt: "Luxury restaurant interior ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80",
    alt: "Wide dining hall with warm lights",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=80",
    alt: "Fine dining tasting course with garnish",
  },
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=2400&q=80",
    alt: "Premium brunch and table styling",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2400&q=80",
    alt: "Soft-lit modern luxury restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2400&q=80",
    alt: "Chef table with plated tasting lineup",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=80",
    alt: "Night dining space with rich ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2400&q=80",
    alt: "Premium plated appetizers and desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2400&q=80",
    alt: "Cocktail and signature pairing service",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=2400&q=80",
    alt: "Warm dining hall with curated lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=2400&q=80",
    alt: "Luxury dessert presentation close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2400&q=80",
    alt: "Front-of-house premium evening service",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-[100svh] bg-[#07070A] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10 pt-24 pb-9 md:pt-28 md:pb-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=80"
            alt="Gallery hero background"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,7,10,0.58),rgba(7,7,10,0.86)_58%,rgba(7,7,10,0.96))]" />
        <div className="absolute inset-0 bg-[radial-gradient(52rem_52rem_at_20%_20%,rgba(255,190,82,0.16),transparent_55%),radial-gradient(40rem_40rem_at_80%_40%,rgba(130,120,255,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-xs tracking-[0.28em] text-white/55"
          >
            FULL GALLERY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Aylanto Visual Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base"
          >
            Interiors, plating, and service moments - curated for a premium visual journey.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.03 }}
              className={idx % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[22px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 92vw, 45vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,10,0.64),transparent_56%)] opacity-75 transition duration-500 group-hover:opacity-55" />
                  <p className="absolute right-3 bottom-3 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs text-white/85 backdrop-blur">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

