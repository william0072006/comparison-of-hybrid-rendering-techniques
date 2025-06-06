import { Navbar } from "@/components/Navbar";
import { HeroView } from "@/components/Hero";
import { FeaturedCarsView } from "@/components/FeaturedCars";
import { GarageView } from "@/components/Garage";
import { RaceScheduleView } from "@/components/RaceSchedule";
import { FeaturedCarsResponse, getFeaturedCars } from "@/api/getFeaturedCars";
import { getRaceSchedule, RaceScheduleResponse } from "@/api/getRaceSchedule";
import type { GetServerSideProps } from "next";

type Props = {
  featuredCars: FeaturedCarsResponse;
  initialRaces: RaceScheduleResponse;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const [featuredCars, initialRaces] = await Promise.all([
    getFeaturedCars(),
    getRaceSchedule("now"),
  ]);

  return {
    props: {
      featuredCars,
      initialRaces,
    },
  };
};

export default function Home({ featuredCars, initialRaces }: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6 font-['Geist'] tracking-tighter">
      <Navbar />
      <HeroView />
      <FeaturedCarsView featuredCars={featuredCars} />
      <GarageView />
      <RaceScheduleView initialRaces={initialRaces} />
    </div>
  );
}
