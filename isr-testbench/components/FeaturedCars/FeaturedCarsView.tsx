"use client";

import { Car } from "./components";
import { useEffect, useState } from "react";
import { getFeaturedCars, FeaturedCarsResponse } from "@/api/getFeaturedCars";

export const FeaturedCarsView = () => {
  const [featuredCars, setFeaturedCars] = useState<FeaturedCarsResponse>([]);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const cars = await getFeaturedCars();
        setFeaturedCars(cars);
      } catch (error) {
        console.error("Error fetching featured cars:", error);
      }
    };

    void fetchFeaturedCars();
  }, []);

  const renderTitle = () => (
    <div className="flex flex-col w-full pt-14 pl-20">
      <h2 className="text-7xl font-bold text-[#80978F]">Featured Cars</h2>
      <h3 className="text-2xl font-medium text-[#91BFA3] pl-0.5 mt-[-0.5rem]">
        By user searches
      </h3>
    </div>
  );

  const renderCars = () => (
    <div className="flex w-full justify-around px-20 mt-12 mb-20">
      {featuredCars.map((car) => (
        <Car
          key={car.id}
          imageUrl={car.imageUrl}
          shadowColor={car.shadowColor}
          name={car.name}
          team={car.team}
          engine={car.engine}
        />
      ))}
    </div>
  );

  return (
    <div
      className="flex flex-col items-center w-full bg-[#1D0609] mt-38"
      id="featured-cars"
    >
      {renderTitle()}
      {renderCars()}
    </div>
  );
};
