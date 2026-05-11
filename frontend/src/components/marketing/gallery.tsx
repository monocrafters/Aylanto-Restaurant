"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { Card } from "@/components/ui/card";

const images = [
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=2400&q=80",
    alt: "Luxury plated dish in warm light",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=80",
    alt: "Elegant dining table setting",
  },
  {
    src: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=2400&q=80",
    alt: "Chef plating a fine dining course",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2400&q=80",
    alt: "Moody restaurant interior with warm glow",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_20%_20%,rgba(255,190,82,0.10),transparent_55%),radial-gradient(40rem_40rem_at_80%_70%,rgba(130,120,255,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.28em] text-white/55">
              AMBIENCE & PLATING
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Premium visuals. Real atmosphere.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
            Every angle is intentional—materials, lighting, and plating designed
            to feel expensive without trying too hard.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-white/12"
        >
          <div className="relative aspect-[21/8]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=80"
              alt="Luxury dining interior panorama"
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,7,10,0.74),rgba(7,7,10,0.15)_60%,rgba(7,7,10,0.6))]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <p className="text-xs tracking-[0.28em] text-white/65">SIGNATURE SPACE</p>
              <p className="mt-2 max-w-xl text-xl font-semibold md:text-3xl">
                A curated room for private, premium evenings.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
          {images.map((img, idx) => {
            const colSpan =
              idx === 0 ? "md:col-span-7" : idx === 3 ? "md:col-span-7" : "md:col-span-5";
            const aspect =
              idx === 0 || idx === 3 ? "aspect-[16/10]" : "aspect-[16/11]";

            return (
              <motion.div
                key={img.alt}
                className={colSpan}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  scale={1.01}
                  glareEnable
                  glareMaxOpacity={0.22}
                  glareColor="#ffffff"
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden rounded-3xl border-white/10 bg-black/25 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur">
                    <div className={`relative w-full overflow-hidden rounded-[22px] ${aspect}`}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 92vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,10,0.65),transparent_55%)]" />
                    </div>
                  </Card>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

