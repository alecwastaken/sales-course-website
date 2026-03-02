import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { TierCards } from "@/components/sections/TierCards";
import { TierDetails } from "@/components/sections/TierDetails";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-8 sm:gap-28">
      <Hero />
      <TierCards />
      <TierDetails />
      <FinalCTA />
    </main>
  );
}
