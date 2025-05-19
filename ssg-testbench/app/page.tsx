import { Navbar } from "@/components/Navbar/Navbar";
import { HeroView } from "@/components/Hero/HeroView";
import { FeaturedCarsView } from "@/components/FeaturedCars/FeaturedCarsView";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6 font-['Geist'] tracking-tighter overflow-hidden">
      <Navbar />
      <HeroView />
      <FeaturedCarsView />
    </div>
  );
}
