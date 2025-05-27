import { Navbar } from "./components/Navbar";
import { HeroView } from "./components/Hero";
import { FeaturedCarsView } from "./components/FeaturedCars";
import { GarageView } from "./components/Garage";
import { RaceScheduleView } from "./components/RaceSchedule";

export const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6 font-['Geist'] tracking-tighter antialiased">
      <Navbar />
      <HeroView />
      <FeaturedCarsView />
      <GarageView />
      <RaceScheduleView />
    </div>
  );
};
