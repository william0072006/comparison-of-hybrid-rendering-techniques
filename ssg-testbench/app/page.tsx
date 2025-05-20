import { Navbar } from "@/components/Navbar";
import { HeroView } from "@/components/Hero";
import { FeaturedCarsView } from "@/components/FeaturedCars";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6 font-['Geist'] tracking-tighter">
      <Navbar />
      <HeroView />
      <FeaturedCarsView />
    </div>
  );
}
