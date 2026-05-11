import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/marketing/hero";
import { Experience } from "@/components/marketing/experience";
import { Gallery } from "@/components/marketing/gallery";
import { ReservationCTA } from "@/components/marketing/reservation-cta";

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-[#07070A] text-white">
      <Header />
      <div>
      <Hero />
      <Experience />
      <Gallery />
      <ReservationCTA />
      </div>
      <Footer />
    </main>
  );
}
